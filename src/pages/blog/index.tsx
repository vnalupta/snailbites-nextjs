/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"
import Link from 'next/link'

// import App from "../components/app"
// import SEO from "../components/seo"
// import { FadeLink } from "../components/transition"

const Blog = props => {
    
    const { data } = props
    const siteTitle = 'title'
    const posts = [];

    return (
        <section sx={{ 
            variant: 'styles.layout',
            width: `768px`
        }}>

<Link href="/">
                            <a>Link To Home</a>
                        </Link>
                        <Link href="/cv">
                            <a>Link To CV</a>
                        </Link>
            {/* this goes above */}
        {/* <App location={props.location} title={siteTitle}>
             <SEO title="Blog" /> */}


                <div sx={{ pt: '100px'}}>
                    {posts.map(({ node }) => {
                        // const title = node.frontmatter.title || node.fields.slug
                        // const isNew =
                        //     node.frontmatter.meta &&
                        //     node.frontmatter.meta.match(/new/gi)

                        return (
                            <div key={node.fields.slug}>
                                {isNew && (
                                    <h1 sx={{ mb: '12px' }}>
                                        Heading
                                        {/* <FadeLink
                                            to={`${blogPath}${node.fields.slug}`}
                                        >
                                            {title}
                                        </FadeLink> */}
                                    </h1>
                                )}
                                {!isNew && (
                                    <h4 sx={{ mb: '12px'}}>
                                        Subheading
                                        {/* <FadeLink
                                            to={`${blogPath}${node.fields.slug}`}
                                        >
                                            {title}
                                        </FadeLink> */}
                                    </h4>
                                )}
                                <article>
                                    <p>
                                        <span sx={{ mb: 0}}>
                                            {/* <span dangerouslySetInnerHTML={{
                                                __html:
                                                    node.frontmatter
                                                        .description ||
                                                    node.excerpt
                                            }} /> */}
                                        </span>
                                        {'  '}
                                        Link
                                        {/* <FadeLink
                                            css={`
                                                    text-decoration: none;
                                                `}
                                            to={`${blogPath}${node.fields.slug}`}>
                                            &rarr;
                                            </FadeLink> */}
                                    </p>
                                </article>
                            </div>
                        )
                    })}
                </div>
                <div sx={{
                    height: '100px'
                }} />
                 {/* </App>  this goes below */}
            </section>        
    )
}

export default Blog

// export const pageQuery = graphql`
//     query {
//         site {
//             siteMetadata {
//                 title
//             }
//         }
//         allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//             edges {
//                 node {
//                     excerpt
//                     fields {
//                         slug
//                     }
//                     frontmatter {
//                         date(formatString: "MMMM DD, YYYY")
//                         title
//                         description
//                         meta
//                     }
//                 }
//             }
//         }
//     }
// `
