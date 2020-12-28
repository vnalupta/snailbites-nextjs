/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'

import React, { ReactChild, useEffect, useState } from "react";
import Head from 'next/head';
import { useRouter } from 'next/router';
import Transition from '@components/transition'
import { BlogTheme, GlobalTheme } from '@theme/theme';


interface ILayoutProps {
    children: ReactChild | ReactChild[];
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Transition location={router.pathname}>
                {children}
            </Transition>
        </div>
    )
}

export default Layout;