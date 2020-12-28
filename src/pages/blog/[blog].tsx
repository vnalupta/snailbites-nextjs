import Layout from "@components/layout";
import matter from "gray-matter";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default function BlogPost({ frontmatter, markdownBody }) {
    if (!frontmatter) return <></>
    return (
    <Layout>
        <Link href="/">
            <a>Back to List</a>
        </Link>
        <article>
            <h1>{frontmatter.title}</h1>
            <p>By {frontmatter.author}</p>
            <div>
                <ReactMarkdown source={markdownBody} />
            </div>
        </article>
    </Layout>
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