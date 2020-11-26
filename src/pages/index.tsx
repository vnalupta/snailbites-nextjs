/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'

import React, { useEffect } from 'react';
import Head from 'next/head'

// import Layout from '../components/layout'
// import Footer from '../components/footer'

import { GlobalTheme } from 'src/theme/theme';
import Jumbotron from 'src/components/jumbotron';
import Mountains from 'src/components/mountains';
import Button from 'src/components/button';
import Bio from 'src/components/bio';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ThemeProvider theme={GlobalTheme}>
          <header sx={{ overflow: 'hidden' }}>
            <Jumbotron />
            <Mountains />
          </header>
          <Bio />
          <Spacer />
          {/* 
            <Work />            
            */}
          <Spacer />

          {/* <Gradient />     */}
        </ThemeProvider>
      </main>
    </div>
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