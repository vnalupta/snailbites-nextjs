import { isAbsolute, relative } from "path";
import React, { useEffect, useState } from "react";
import {
    TransitionGroup,
    Transition as ReactTransition,
} from "react-transition-group"
import { ThemeProvider } from "theme-ui";
import { GlobalTheme, BlogTheme } from '@/theme/theme';
import { useRouter } from "next/router";
import { Colors } from "../theme/theme";

const DURATION = 200;

const defaultStyle = {
    transition: `opacity ${DURATION}ms ease-in`,
    opacity: 0,
}

const getTransitionStyles = {
    entering: {
        position: `absolute`,
        opacity: 0,
    },
    entered: {
        transition: `opacity ${DURATION}ms ease-in-out`,
        opacity: 1,
    },
    exiting: {
        transition: `opacity ${DURATION}ms ease-in-out`, 
        opacity: 0,
    }
}

const Transition = ({ children, location }) => {
    const router = useRouter();
    const [theme, setTheme] = useState(GlobalTheme);

    useEffect(() => {
        // The location is one state behind
        // so that's why this is backwards
        const theme = location === '/' ? GlobalTheme : BlogTheme     
        setTheme(theme)     
    }, [])

    return (
        <TransitionGroup style={{ position: `relative` }}>
            <ReactTransition
                key={router.pathname}
                timeout={DURATION}
                onExited={() => {
                    // The location is one state behind
                    // so that's why this is backwards
                    const currTheme = location !== '/' ? GlobalTheme : BlogTheme;
                    setTheme(currTheme);                    
                }}                
            >
                {status => {
                    return (
                        <div
                            style={{
                                ...defaultStyle,
                                ...getTransitionStyles[status],
                            }}
                        >
                            <ThemeProvider theme={theme}>
                                {children}
                            </ThemeProvider>
                        </div>
                    )
                }}
            </ReactTransition>
        </TransitionGroup>
    )
}

export default Transition;

// const FadeProvider = props => {
//     return (
//         <div style={{
//             ...defaultStyle,
//             ...transitionStyles[props.status]
//           }}>{props.children}</div>
//     )
// }

// const FadeLink = props => {
//     const target = props.target || null
//     return (
//         <TransitionLink 
//             exit={{ 
//                 delay: 0.35, 
//                 length: 0.2 
//             }}
//             entry={{   
//                 trigger: () => scrollHandler(target),             
//                 delay: .2,
//                 length: 0.2 
//             }}
//             to={props.to}
//             onClick={props.onClick}
//             state={props.state}
//         >
//             {props.children}
//         </TransitionLink>
//     )
// }
