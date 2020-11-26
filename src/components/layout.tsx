/** @jsx jsx */
import { jsx } from 'theme-ui'

import React, { ReactChild } from "react";
import Navbar from "./navbar"
import Footer from "./footer"

interface ILayoutProps {
    isFlex?: boolean;
    isSpread?: boolean;
    width?: number;
    children: ReactChild;
}

const Layout: React.FC = ({isFlex, isSpread, width, children}: ILayoutProps) => {
    return (
        <section sx={{
            varint: 'styles.layout'
        }}>            
            {children}            
        </section>
    )
}

export default Layout;

/*
    ${props => props.props.flex && `display: flex;`}    
    justify-content: ${props => props.props.spread ? `space-between` : `center`};
    ${props =>
        props.props.width &&
        `max-width: ${props.props.width};`}
    margin: 0 auto;
    padding: 0 73px;

    @media (max-width: 540px) {
        padding: 0 25px;
    }
*/