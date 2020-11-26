/** @jsx jsx */
import { jsx } from 'theme-ui'

import React, { ReactChild } from "react"
import { Colors } from 'src/theme/theme'

const Button = ({ children }: { children?: ReactChild }) => (
    <button type="button" sx={{
        display: 'block',
        border: 'none',
        boxSizing: 'border-box',
        textDecoration: 'none',
        padding: '10px 25px',
        cursor: 'pointer',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        borderRadius: '6px',
        transition: '100ms ease-in opacity',
        background: `${Colors.neon}`,
        color: `${Colors.sesame}`,
        '&:hover': {
            opacity: 0.85
        }
    }}>
        {children}
    </button>
)

// const ButtonWrapper = styled.button`
//     display: 'block',
//     border: 'none',
//     boxSizing: 'border-box',
//     textDecoration: 'none',
//     padding: '10px 25px',
//     cursor: 'pointer',
//     textTransform: 'uppercase',
//     letterSpacing: '1px',
//     borderRadius: '6px',
//     transition: '100ms ease-in opacity',

//     background: ${Colors.neon};
//     color: ${Colors.sesame};

//     &:hover {
//         opacity: 0.85;
//     }
// `

export default Button
