/** @jsx jsx */
import { jsx, Link as A } from 'theme-ui'
import Link from "next/link";

import React, { FC } from "react"
import { Colors } from '../theme/theme';

const rootPath = `/`
const blogPath = `/blog/`

const Social: FC<{ useLightTheme?: boolean }> = ({ useLightTheme }) => {
    return (
        <div sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            transform: 'translateY(-1.7em)',
            color: `${Colors.eggshell}`,
            backgroundColor: `${useLightTheme ? Colors.sesame : Colors.plum }`
        }}>
            <p sx={{ mb: '.5em'}}>What's good?</p>
            <List>
                <li><a href="https://twitter.com/snailbites">Twitter</a></li>
                <li><a href="https://www.linkedin.com/in/vnalupta/">LinkedIn</a></li>
            </List>
            <List>
                <li>
                    <Link
                        href={rootPath}>Home</Link>
                </li>
                <li>
                    <Link
                        href={blogPath}>Blog</Link>
                </li>
            </List>
        </div>
    )
}

/**
 * <ul> with styling
 * @param props 
 */
const List: FC<{ children: any }> = ({ children }) => (
    <ul sx={{
        margin: '0 0 .5em 0',
        padding: '0',
        listStyleType: 'none',
        '& li' : {
            display: 'inline',
            ml: '1em'
        }
    }}>
        {children}
    </ul>
)

export default Social
