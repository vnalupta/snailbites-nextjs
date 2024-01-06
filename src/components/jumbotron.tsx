import React, { useRef } from "react"
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import styled from "styled-components";

const Jumbotron = () => {
    const titleRef = useRef(null);
    const [inView] = useIntersectionObserver(titleRef, {
        threshold: 0
    })

    return (
        <JumbotronWrapper style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '75vh'
        }}>
            <TitleWrapper 
                show={inView}
                ref={titleRef}>
                <Crown inView={inView} />
                <Title>
                    SNAILBITES<br/>                    
                </Title>
            </TitleWrapper>
        </JumbotronWrapper>
    )
}

const JumbotronWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75vh;
`

const Crown = ({ inView }: { inView: boolean }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
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

const TitleWrapper = styled.div<{
    show: boolean;
        ref: any;
    }>`
    position: relative;
    transition: 500ms opacity ease-out, 150ms transform ease-out;         
    opacity: 0;
    transform: translate(10px, 10vh);
    ${props => props.show && `
        opacity: 1;
        transform: translate(0, 10vh);
    `}    
`
const Title = styled.h1`
    text-align: center;
    margin: 0;

    @media (max-width: 540px) {
        font-size: 38px;
        line-height: 38px;
    }
`


export default Jumbotron
