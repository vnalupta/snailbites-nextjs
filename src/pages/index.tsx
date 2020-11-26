/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'

import React from 'react';
import Head from 'next/head'

// import Layout from '../components/layout'
// import Footer from '../components/footer'

import {GlobalTheme } from 'src/theme/theme';
import Jumbotron from 'src/components/jumbotron';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ThemeProvider theme={GlobalTheme}>          
            <header sx={{ overflow: 'hidden'}}>
              <Jumbotron /> 
            </header>          
        </ThemeProvider>
      </main>
    </div>
  )
}

export default Home