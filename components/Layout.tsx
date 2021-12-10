import Head from "next/head"
import Link from "next/link"
import { ReactNode } from "react"

type Props = {
  children?: ReactNode,
  title?: string
}

const Layout = ({ children, title = 'Это заголовок по умолчанию' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Главная</a>
        </Link>
        {' '}|{' '}
        <Link href="/about">
          <a>О нас</a>
        </Link>
        {' '}|{' '}
        <Link href="/users">
          <a>Список юзеров</a>
        </Link>
        {' '}|{' '}
        <Link href="/api/users">
          <a>Users API</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>Футер</span>
    </footer>
  </div>
)

export default Layout