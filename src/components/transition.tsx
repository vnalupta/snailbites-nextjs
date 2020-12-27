import React from "react";
// import TransitionLink from 'gatsby-plugin-transition-link'

const duration = 150;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in`,
  opacity: 0,
}

const transitionStyles = {
  entered:  { opacity: 1 },
  exited:  { opacity: 0 },
};

const FadeProvider = props => {
    return (
        <div style={{
            ...defaultStyle,
            ...transitionStyles[props.status]
          }}>{props.children}</div>
    )
}



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

export {    
    FadeProvider
}