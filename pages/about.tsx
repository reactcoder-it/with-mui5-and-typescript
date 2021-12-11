import { Link, Typography } from '@mui/material'
import { NextPage } from 'next'
import NextLink from 'next/link'
import Layout from '../components/Layout'

const AboutPage: NextPage = () => {
  return (
    <Layout title="О нас | Next.js + TypeScript Example">
      <Typography variant='h1'>О нас</Typography>
      <Typography>
        <NextLink href="/" passHref>
          <Link>На главную</Link>
        </NextLink>
      </Typography>
    </Layout>
  )
}

export default AboutPage
