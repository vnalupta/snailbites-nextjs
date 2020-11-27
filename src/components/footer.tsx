// @jsx jsx
import { jsx } from 'theme-ui'

import React from "react"
import { Colors } from '../theme/theme';
// import FlexContainer from "./flexContainer"
// import Social from "../components/social"
// import BlogFeed from "./blogFeed"

// import styled from "styled-components"
// import { Colors } from "../theme/global"

export const Footer: React.FC<{
    showBlog: boolean,
    showSocial: boolean,
    backgroundColor: string
}> = ({ showBlog, showSocial, backgroundColor = `${Colors.plum}` }) => {    
    return (
        <footer sx={{
            overflow: 'hidden',
            padding: '1em 0',
            color: `${Colors.eggshell}`,
            backgroundColor: `${backgroundColor}`
        }}>
            <div sx={{ 
                variant: 'layout',
                justifyContent: 'space-between' 
            }}>
                {/* Fixes zindex bug with mountain SVG above it */}
                <section 
                    sx={{
                        zIndex: 10,
                        position: 'relative',                        
                    }}
                >
                    {/* {showBlog && <BlogFeed />} */}
                    <p sx={{ variant: 'styles.small' }}>This site was made with {" "}
                        <a
                            // css={`
                            //     color: ${Colors.neon};
                            // `}
                            href="https://nextjs.org/learn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Next.js
                        </a>
                        ,{" "}
                        <a
                            // css={`
                            //     color: ${Colors.neon};
                            // `}
                            href="https://www.sketch.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Sketch
                        </a>
                        {" "}and ❤️
                    </p>
                    <p                         
                        sx={{ variant: 'styles.small', transform: 'translateY(-1em)'}}>
                        snailbit.es &bull; © {new Date().getFullYear()} all rights reserved
                    </p>
                </section>
                {/* {showSocial && <Social location={location} />} */}
            </div>
        </footer>
    ) 
}

// const StyledFooter = styled.footer`
//     overflow: hidden;
//     background-color: ${props => props.location !== "/"
//         ? Colors.sesame
//         : Colors.plum};
//     padding: 1em 0;
//     color: ${Colors.eggshell};

//     & a {
//         color: ${Colors.neon};
//         text-decoration: none;
//     }
// `

export default Footer
