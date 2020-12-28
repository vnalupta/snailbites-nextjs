/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'

import React, { ReactChild } from 'react';

import { Colors, GlobalTheme } from '@theme/theme';
import Jumbotron from '@components/jumbotron';
import Mountains from '@components/mountains';
import Bio from '@components/bio';
import Gradient from '@components/gradient';
import Work from '@components/work';
import Footer from '@components/footer';
import Link from 'next/link';
import matter from 'gray-matter';

const Home = ({blogs, ...props}) => {
  return (
  <>
      <Header style={{overflow: `hidden`}}>
        <Jumbotron />
        <Mountains />
      </Header>
      <Main>
        <Bio />
        <Spacer />          
        <Work />                       
        <Spacer />
        <Gradient />    
        <Footer blogs={blogs} />
      </Main>
    </>
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
function Header({style, children}:{style: any, children: ReactChild|ReactChild[]}) {
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


export async function getStaticProps() {
  const configData = await import(`../../siteconfig.json`)

  const blogs = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data.reverse()
  })(require.context('../../blogs', true, /\.md$/))

  return {
    props: {
      blogs,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
