import { Link, Typography } from '@mui/material'
import { NextPage } from 'next'
import NextLink from 'next/link'
import Layout from '../components/Layout'

const HomePage: NextPage = () => {
  return (
    <Layout title="Главная | Next.js + TypeScript Example">
      <Typography component="h1" variant='h1'>Привет, Next.js 👋</Typography>
      <Typography>
        <NextLink href="/about" passHref>
          <Link>О нас</Link>
        </NextLink>
      </Typography>
    </Layout>
  )
}

export default HomePage
