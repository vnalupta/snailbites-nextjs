/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"
import Link from 'next/link'

// import App from "../components/app"
// import SEO from "../components/seo"
// import { FadeLink } from "../components/transition"

const Blog = () => {

    // const { data } = props
    // const siteTitle = 'title'
    // const posts = [];

    return (
        <section sx={{
            variant: 'styles.layout',
            width: `768px`
        }}>

            <Link href="/" shallow>
                <a>Link To Home</a>
            </Link>
            <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique est nulla, ullamcorper imperdiet augue sagittis dapibus. Donec sed elit eros. Suspendisse mattis tincidunt bibendum. Aenean condimentum magna justo, ultrices venenatis dui suscipit sit amet. In id interdum nisl. Pellentesque nisi libero, finibus eu ultricies sed, tincidunt sed tortor. Ut et pellentesque metus, et tincidunt lectus. Aliquam eu laoreet ante. Nulla sed lorem pretium, faucibus ipsum id, eleifend dui. Fusce sollicitudin urna sed dui cursus, eu iaculis urna auctor. Aenean ligula tellus, ornare a libero eu, faucibus imperdiet sapien. Maecenas vestibulum commodo sapien sit amet consectetur.

Quisque porttitor magna libero, non commodo lorem commodo sit amet. Ut auctor placerat lorem, ut placerat libero malesuada at. Etiam ultrices turpis vel pulvinar porta. Vivamus eget finibus nulla. Curabitur at gravida mauris. Vivamus scelerisque lacinia ornare. Suspendisse luctus semper elit, ac pellentesque arcu finibus eget.

Aliquam et nunc at neque sollicitudin ornare et quis tellus. Nulla tempus volutpat elit. Vestibulum ullamcorper eros dui, a mollis nunc dictum dapibus. Pellentesque eu sapien urna. Sed laoreet augue a massa dapibus ultrices. Proin id odio sed eros mattis blandit ut scelerisque lorem. Donec sit amet libero vitae dui suscipit sodales. Integer auctor ligula vitae quam porttitor lacinia. Phasellus vehicula in nibh sed rhoncus. Maecenas ut ullamcorper nunc. Sed efficitur ipsum dolor, in malesuada libero placerat ut. Nullam vitae felis mi. Ut sit amet ultricies orci.

Vivamus scelerisque tortor non ipsum tempus ullamcorper. Suspendisse quis vehicula tellus. Praesent posuere dolor a urna vestibulum, id commodo eros lobortis. Nunc sit amet elit pretium, condimentum nibh sagittis, vehicula nunc. Praesent ut leo ut ligula fringilla molestie ut et tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras lacinia urna dignissim aliquet fringilla. Duis condimentum neque nec interdum volutpat. Nulla facilisi.

Morbi eu suscipit diam. Pellentesque sed gravida arcu. Suspendisse congue metus sit amet tristique ultrices. Suspendisse non libero vestibulum, scelerisque lorem ut, mattis ipsum. Proin urna massa, interdum eget velit a, feugiat lacinia est. Donec nec dui metus. Vestibulum nec porttitor dui, sit amet suscipit sem. Curabitur cursus lobortis facilisis. Donec sapien dui, varius ut dictum eu, hendrerit sit amet velit. Quisque ut justo id eros consequat vehicula.
            {/* this goes above */}
            {/* <App location={props.location} title={siteTitle}>
             <SEO title="Blog" /> */}

            {/*
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
                                        </FadeLink> 
                                    </h1>
                                )}
                                {!isNew && (
                                    <h4 sx={{ mb: '12px'}}>
                                        Subheading
                                         <FadeLink
                                            to={`${blogPath}${node.fields.slug}`}
                                        >
                                            {title}
                                        </FadeLink> 
                                    </h4>
                                )}
                                <article>
                                    <p>
                                        <span sx={{ mb: 0}}>
                                             <span dangerouslySetInnerHTML={{
                                                __html:
                                                    node.frontmatter
                                                        .description ||
                                                    node.excerpt
                                            }} /> 
                                        </span>
                                        {'  '}
                                        Link
                                         <FadeLink
                                            css={`
                                                    text-decoration: none;
                                                `}
                                            to={`${blogPath}${node.fields.slug}`}>
                                            &rarr;
                                            </FadeLink> 
                                    </p>
                                </article>
                            </div>
                        )
                    })}
                </div>
                <div sx={{
                    height: '100px'
                }} />
                */}
        </section>

    )
}

export default Blog
