/** @jsx jsx */
import { jsx, Link as A } from 'theme-ui'

import Link from 'next/link'

export default function BlogList({ blogs }) {
  if (blogs === 'undefined') return null

  return (
    <div>
      {!blogs && <div>No blogs!</div>}
      <ul>
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