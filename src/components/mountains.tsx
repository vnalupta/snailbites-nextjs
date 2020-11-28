/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { ReactChild } from "react"

import { Colors } from '../theme/theme'

const Mountains = () => (
    <section sx={{
        width: '100vw',
        height: '22vw',
        position: 'relative',
    }}>
        <Mountain>
            <MountainSVG hex={"#565F74"} isBg />
        </Mountain>
        <Mountain>
            <MountainSVG hex={Colors.ocean} />
        </Mountain>
    </section>
)


/**
 * Wrapper for the mountain SVG
 * @param children: ReactChild 
 */
const Mountain = ({ children }: { children: ReactChild }) =>
    (
        <div sx={{
            width: '100vw',
            height: '22vw',
            position: 'absolute',
            bottom: '-2px',
        }}>
            {children}
        </div>
    )

/**
 * The actual SVG of the mountain
 * @param hex: string
 */
const MountainSVG = ({ hex, isBg }: { hex: string, isBg?: boolean }) => (
    <svg viewBox="0 0 1440 316" xmlns="http://www.w3.org/2000/svg" sx={
        isBg && {
            opacity: .2,
            position: 'absolute',
            width: '110vw',
            top: '3vw',
            left: '-5vw',
            transform: 'translateY(-1.4vw) translateX(10vw) skew(40deg,6deg) scale(1.4)'
        }
    }>
        <path
            d="M534.068 94.144l245.518 160.161L1150.933 0 1440 316H0z"
            fill={hex}
            fillRule="evenodd"
        />
    </svg>
)

export default Mountains
