import navStyles from './navigation.module.scss'

import Link from "next/link";
import React, { useState } from "react"

import scrollHandler from "../utils/scrollHandler"

const rootPath = `/`
const blogPath = `/blog/`
const cvPath = `/cv/`

const Navigation = (props) => {
    const [open, setOpen] = useState(false);
    const { location } = props;

    // TODO: fix scroll to top with home
    const handleClick = (e: React.MouseEvent, target?: string) => {             
        setOpen(!open);

        if (target) {            
            scrollHandler(target);
        }
    }  

    return (
        <nav className={`${navStyles.container} ${open ? `${navStyles.open}` : ``}`}>
            <div
                onClick={handleClick}
                aria-label="navigation"
                className={`${navStyles.button} ${open ? `${navStyles.open}` : ``}`}
            >                
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`${navStyles.backdrop} ${open ? `${navStyles.open}` : ``}`} />            
            <ul className={`${navStyles.list} ${open ? `${navStyles.open}` : ``}`}>
                {/* <li style={{ variant: 'styles.navlink' }}> */}
                <li>
                    <Link href={rootPath} onClick={e => handleClick(e, 'home')}>
                        Home                        
                    </Link>
                </li>
                {/* <li style={{ variant: 'styles.navlink' }}> */}
                <li>
                    <Link href={rootPath} onClick={e => handleClick(e, 'work')}>
                        Work                        
                    </Link>
                </li>
                {/* <li style={{ variant: 'styles.navlink' }}> */}
                <li>
                    <Link href={blogPath} onClick={handleClick}>
                        Blog                        
                    </Link>
                </li>
            </ul> 
        </nav>
    )
}

export default Navigation
