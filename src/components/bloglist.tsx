/** @jsx jsx */
import { jsx, Link as A } from 'theme-ui'

import Link from 'next/link'

function BlogList({ blogs, showDots }) {
  if (blogs === 'undefined') return null

  return (
    <div>
      {!blogs && <div>No blogs!</div>}
      <ul sx={{
        listStyleType: `${showDots ? '' : 'none'}`,
        padding: `${showDots ? 'revert' : 0}`
      }}>
        {blogs &&
          blogs.map((blog) => {
            return (
              <li key={blog.slug}>
                <Link href={{ pathname: `/blog/${blog.slug}` }}>
                  <A>{blog.frontmatter.title}</A>
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default BlogList