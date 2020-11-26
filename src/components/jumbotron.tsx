/** @jsx jsx */
import { jsx } from 'theme-ui'

import React, { useRef } from "react"
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Jumbotron = () => {
    const titleRef = useRef(null);
    const [inView] = useIntersectionObserver(titleRef, {
        threshold: 0
    })

    return (
        <div sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '75vh'
        }}>
            <div ref={titleRef} sx={{
                position: 'relative',
                transition: '500ms opacity ease-out, 150ms transform ease-out',
                opacity: `${inView ? 1 : 0}`,
                transform: `${inView
                    ? 'translate(0, 10vh)'
                    : 'translate(10px, 10vh)'}`,
            }}>
                <Crown inView={inView} />
                <Title />
            </div>
        </div>
    )
}

const Crown = ({ inView }: { inView: boolean }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        sx={{
            position: 'absolute',
            right: '-29px',
            top: '-22px',
            height: '50px',
            width: '76px',
            transition: '350ms transform ease-out',
            transitionDelay: '150ms',
            transform: `${inView
                ? 'scale(0.5) rotate(32deg)'
                : 'scale(0.5) rotate(5deg) translate(-16px, -8px)'}`
        }}
    >
        <path
            d="M0 10.165L4.607 43h64.648L74 10.165 55.971 26.582 37 0 18.112 27.748z"
            fill="#D6E307"
            fillRule="evenodd"
        />
    </svg>
)

function Title() {
    return (
        <h1 sx={{
            textAlign: 'center',
            margin: 0,
            fontSize: ['38px', 6],
            lineHeight: ['38px', '3.125rem']
        }}>
            VINCENT NALUPTA
            <br />
            IS A UX ENGINEER
        </h1>
    )
}

export default Jumbotron
