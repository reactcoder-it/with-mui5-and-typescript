import type { GetStaticProps } from "next"
import Link from "next/link"
import Layout from "../../components/Layout"
import List from "../../components/List"
import { User } from "../../interfaces"
import { sampleUserData } from "../../utils/sample-data"

type Props = {
  items: User[]
}

const UsersPage = ({ items }: Props) => (
  <Layout title="Users List | Next.js + TypeSccript">
    <h1>Список пользователей</h1>
    <p>Пример загрузки данных с помощью <code>getStaticProps()</code></p>
    <p>Ты сейчас на странице: /users</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>На главную</a>
      </Link>
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const items: User[] = sampleUserData
  return { props: { items } }
}

export default UsersPage