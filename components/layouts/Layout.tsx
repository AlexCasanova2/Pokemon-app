import { FC } from 'react'

import Head from 'next/head'
import { Navbar } from '../ui';

interface Props {
    children: React.ReactNode
    title?: string,
}

export const Layout: FC <Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name="author" content="Alex Casanova" />
            <meta name="description" content={`Información sobre el pokemon XXXXX ${title}`} />
            <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        </Head>

        <Navbar/>

        <main style={{
            padding: '0px 20px'
        }}>
            {children}
        </main>
    </>
  )
}
