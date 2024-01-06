import React from "react"
import { Color } from '@theme/theme';
import Social from '@components/social';
import BlogList from '@components/bloglist';
import styled from "styled-components";
// import FlexContainer from "./flexContainer"
// import Social from "../components/social"
// import BlogFeed from "./blogFeed"

// import styled from "styled-components"
// import { Color } from "../theme/global"

type FooterProps = {
    blogs: any;
    location: string;
  }
function Footer({ 
        blogs, 

        location
    }: FooterProps) {
    return (
        <StyledFooter location={location}>
            <FooterContainer>
                {/* Fixes zindex bug with mountain SVG above it */}
                <section style={{zIndex: 10, position: `relative`}}>
                    {location === '/' && <BlogFeed />}
                    <p className="small">This site was made with {" "}
                        <a
                            style={{color:`${Color.neon}`}}
                            href="https://www.gatsbyjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Gatsby
                        </a>
                        ,{" "}
                        <a
                            style={{ color: `${Color.neon}`}}
                            href="https://www.sketch.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Sketch
                        </a>
                        {" "}and ❤️
                    </p>
                    <p className="small" style={{transform: `translateY(-1em)`}}>
                        snailbit.es &bull; © {new Date().getFullYear()} all rights reserved
                    </p>
                </section>
                {location === '/' && <Social location={location} />}
        </FooterContainer>
    </StyledFooter>
    )
}

const StyledFooter = styled.footer<{
        location: string;
    }>`
    overflow: hidden;
    background-color: ${props => props.location !== "/"
        ? Color.sesame
        : Color.plum};
    padding: 1em 0;
    color: ${Color.eggshell};

    & a {
        color: ${Color.neon};
        text-decoration: none;
    }
`

const FooterContainer = styled.footer`
    display: flex;  
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 73px;

    @media (max-width: 540px) {
        padding: 0 25px;
    }
`

export default Footer
