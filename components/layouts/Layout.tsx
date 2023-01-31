import Head from 'next/head'
import React, { FC, ReactNode } from 'react'
import { NavBar } from '../ui';

interface Props {
    children: ReactNode
}

export const Layout:FC<Props> = ({children}) => {

    return (
        <>
            <Head>

            </Head>

            <nav>
                <NavBar />
            </nav>

            <main
                style={{
                    padding: '20px 50px'
                }}
            >
                {children}
            </main>
        </>
    )
}