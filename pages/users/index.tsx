import { Link, Typography } from "@mui/material"
import { GetStaticProps } from "next"
import NextLink from "next/link"
import Layout from "../../components/Layout"
import List from "../../components/List"
import { User } from "../../interfaces"
import { sampleUserData } from "../../utils/sample-data"

type Props = {
  items: User[]
}

const UsersPage = ({ items }: Props) => (
  <Layout title="Users List | Next.js + TypeScript">
    <Typography variant="h1" component="h1">Список пользователей</Typography>
    <Typography>Пример загрузки данных с помощью <code>getStaticProps()</code></Typography>
    <Typography>Ты сейчас на странице: /users</Typography>
    <List items={items} />
    <Typography>
      <NextLink href="/" passHref>
        <Link>На главную</Link>
      </NextLink>
    </Typography>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const items: User[] = sampleUserData
  return { props: { items } }
}

export default UsersPage
