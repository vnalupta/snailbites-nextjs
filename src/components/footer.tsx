// @jsx jsx
import { jsx } from 'theme-ui'

import React from "react"
// import FlexContainer from "./flexContainer"
// import Social from "../components/social"
// import BlogFeed from "./blogFeed"

// import styled from "styled-components"
// import { Colors } from "../theme/global"

export const Footer: React.FC = () => {
    return (
        <footer>
            {/* <FlexContainer flex spread css={`justify-content: space-between;`}> */}
                {/* Fixes zindex bug with mountain SVG above it */}
                <section 
                    sx={{
                        zIndex: 10,
                        position: 'relative'
                    }}
                >
                    {/* {location === '/' && <BlogFeed />} */}
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
                    <p className="small" sx={{ transform: 'translateY(-1em)'}}>
                        snailbit.es &bull; © {new Date().getFullYear()} all rights reserved
                    </p>
                </section>
                {/* {location === '/' && <Social location={location} />}
            {/* </FlexContainer> */}
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
