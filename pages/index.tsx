import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout title="Главная | Next.js + TypeScript Example">
      <h1>Привет, Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>О нас</a>
        </Link>
      </p>
    </Layout>
  )
}

export default Home
