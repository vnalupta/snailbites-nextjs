import React from "react"
import { Color } from '@theme/theme';
import Social from '@components/social';
import BlogList from '@components/bloglist';
// import FlexContainer from "./flexContainer"
// import Social from "../components/social"
// import BlogFeed from "./blogFeed"

// import styled from "styled-components"
// import { Color } from "../theme/global"

export const Footer: React.FC<{
    blogs: any,
    backgroundColor?: string
}> = ({ blogs, backgroundColor = `${Color.plum}` }) => {
    return (
        <footer>
        {/* // <footer style={{
        //     overflow: 'hidden',
        //     padding: '1em 0',
        //     color: `${Color.eggshell}`,
        //     backgroundColor: `${backgroundColor}`,
        //     '& a': {
        //         color: `${Color.neon}`,
        //         textDecoration: 'none'
        //     }
        // }}> */}
        {/* variant: 'styles.layout', */}
            <div style={{                
                justifyContent: 'space-between'
            }}>
                {/* Fixes zindex bug with mountain SVG above it */}
                <section
                    style={{
                        zIndex: 10,
                        position: 'relative',
                    }}
                >
                    <BlogList blogs={blogs} />
                    {/* style={{ variant: 'styles.small' } */}
                    <p>This site was made with {" "}
                        <a
                            href="https://nextjs.org/learn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Next.js
                        </a>
                        ,{" "}
                        <a
                            href="https://www.sketch.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Sketch
                        </a>
                        {" "}and ❤️
                    </p>
                    <p
                        
                        // fix variant variant: 'styles.small', 
                        style={{ transform: 'translateY(-1em)' }}>
                        snailbit.es &bull; © {new Date().getFullYear()} all rights reserved
                    </p>
                </section>
                <Social useLightTheme={false} />
            </div>
        </footer>
    )
}

export default Footer
