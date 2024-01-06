import { Color } from '@theme/theme';
import Jumbotron from '@components/jumbotron';
import Mountains from '@components/mountains';
import Bio from '@components/bio';
import Gradient from '@components/gradient';
import Work from '@components/work';
import Footer from '@components/footer';
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
        <Footer blogs={blogs} location="/" />
      </Main>
    </>
  )
}

/**
 * Wrapper for Main
 * @param children 
 */
function Main({ children }) {
  return (
    <main role="main" style={{
      backgroundColor: `${Color.ocean}`
    }}>{children}</main>
  )
}

/**
 * Wrapper for header
 * @param children
 */
function Header({ children, style }:{ children?: React.ReactNode, style: any }) {
  return (
    <header style={{ overflow: 'hidden' }}>{children}</header>
  )
}

function Spacer() {
  return (
    <div style={{
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
      const value = values[index];
      // @ts-expect-error
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
