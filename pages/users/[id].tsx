import { GetStaticPaths, GetStaticProps } from 'next'
import { User } from '../../interfaces'
import Layout from '../../components/Layout'
import ListDetail from '../../components/ListDetail'
import { sampleUserData } from '../../utils/sample-data'
import { Typography } from '@mui/material'

type Props = {
  item?: User
  errors?: string
}

const UserDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <Typography>
          <span style={{ color: 'red' }}>Error: </span> {errors}
        </Typography>
      </Layout>
    )
  }
  return (
    <Layout title={`${item ? item.name : 'User Detail'} | Next.js + TypeScript Example`}>
      {item && <ListDetail item={item} />}
    </Layout>
  )
}

export default UserDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = sampleUserData.map(user => ({
    params: { id: user.id.toString() }
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id
    const item = sampleUserData.find(data => data.id === Number(id))

    return { props: { item } }
  } catch (error) {
    return { props: { errors: (error as Error).message } }
  }
}
