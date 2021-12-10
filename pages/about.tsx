import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage: NextPage = () => {
  return (
    <Layout title="О нас | Next.js + TypeScript Example">
      <h1>О нас</h1>
      <p>
        <Link href="/">
          <a>На главную</a>
        </Link>
      </p>
    </Layout>
  )
}

export default AboutPage
