/** @jsx jsx */
import { jsx } from 'theme-ui'

import Layout from "@components/layout";
import matter from "gray-matter";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default function BlogPost({ frontmatter, markdownBody }) {
    if (!frontmatter) return (<></>)

    const { title, author, date } = frontmatter;

    return (
            <main role="main" sx={{ width: '768px', variant: 'styles.layout' }}>
                <section sx={{ marginTop: '100px'}}>
                    <h1 sx={{
                        margin: '0 0 25px 0'
                    }}>
                        {title}
                    </h1>

                    <ReactMarkdown source={markdownBody} />

                    <p sx={{ textAlign: 'left' }}>
                        {date}
                    </p>
                    
                </section>
            </main>
    )
}

export async function getStaticProps({ ...ctx }) {
    const { blog } = ctx.params;

    const content = await import(`../../../blogs/${blog}/${blog}.md`);
    const config = await import(`../../../siteconfig.json`);
    const data = matter(content.default);

    console.log(content.default)

    return {
        props: {
            siteTitle: config.title,
            frontmatter: data.data,
            markdownBody: data.content
        }
    }
}

export async function getStaticPaths() {
    const blogSlugs = (context => {
        const keys = context.keys();
        const data = keys.map((key, index) => {
            return key.replace(/^.*[\\\/]/, '').slice(0, -3)
        })

        return data;
    })(require.context('../../../blogs', true, /\.md$/))

    const paths = blogSlugs.map((slug) => `/blog/${slug}`)

    return {
        paths,
        fallback: false,
    }
}