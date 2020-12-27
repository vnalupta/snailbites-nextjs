/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'

import React, { ReactChild, useEffect } from 'react';
import Head from 'next/head'

import { Colors, GlobalTheme } from '@/theme/theme';
import Jumbotron from '@/components/jumbotron';
import Mountains from '@/components//mountains';
import Bio from '@/components//bio';
import Gradient from '@/components//gradient';
import Work from '@/components//work';
import Footer from '@/components//footer';

const Home: React.FC = () => {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Jumbotron />
        <Mountains />
      </Header>
      <Main>
        <Bio />
        <Spacer />          
        <Work />                       
        <Spacer />
        <Gradient />    
        <Footer showBlog showSocial />
      </Main>
    </ThemeProvider>
  )
}

/**
 * Wrapper for Main
 * @param children 
 */
function Main({children}:{children: ReactChild|ReactChild[]}) {
  return (
    <main role="main" sx={{
      backgroundColor: `${Colors.ocean}`
    }}>{children}</main>
  )
}

/**
 * Wrapper for header
 * @param children
 */
function Header({children}:{children: ReactChild|ReactChild[]}) {
  return (
    <header sx={{ overflow: 'hidden' }}>{children}</header>
  )
}

function Spacer() {
  return (
    <div sx={{
      marginBottom: '200px'
    }} />
  )
}

export default Home