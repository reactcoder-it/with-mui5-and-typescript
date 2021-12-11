import Head from "next/head"
import NextLink from "next/link"
import { ReactNode } from "react"
import { Box, Link, Divider, Typography } from '@mui/material'

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
		<Box component="header" sx={{ p: 3 }}>
      <Box component="nav">
        <NextLink href="/" passHref>
          <Link>Главная</Link>
        </NextLink>
        {' '}|{' '}
        <NextLink href="/about" passHref>
          <Link>О нас</Link>
        </NextLink>
        {' '}|{' '}
        <NextLink href="/users" passHref>
          <Link>Список юзеров</Link>
        </NextLink>
        {' '}|{' '}
        <NextLink href="/api/users" passHref>
          <Link>Users API</Link>
        </NextLink>
      </Box>
    </Box>
		<Box sx={{ p: 3 }}>
	    {children}
		</Box>
    <Box component="footer">
      <Divider />
			<Typography sx={{ p: 3 }}>PXSTUDIO</Typography>
    </Box>
  </div>
)

export default Layout
