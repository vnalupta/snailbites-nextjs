/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'

import React, { ReactChild, useEffect, useState } from "react";
import Navbar from "./navbar"
import Footer from "./footer"
import Head from 'next/head';
import { BlogTheme, GlobalTheme } from '../theme/theme';

interface ILayoutProps {
    children: ReactChild | ReactChild[];
    route: string;
}

const Layout: React.FC<ILayoutProps> = ({children, route}) => {
    const [theme, setTheme] = useState(GlobalTheme);

    useEffect(() => {
        const theme = route === '/' ? GlobalTheme : BlogTheme
        setTheme(theme)
    }, [route])
    
    return (
        <>
            <ThemeProvider theme={theme}>
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                {children}
            </ThemeProvider>
        </>
    )
}

export default Layout;