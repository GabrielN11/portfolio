import React from 'react'
import styled from 'styled-components'

const StyledDownload = styled.svg`
    opacity: ${({available}) => available ? 1 : 0.5};
    cursor: ${({available}) => available ? 'pointer' : 'normal'};
    transition: opacity 0.3s linear;
    &:hover{
        opacity: 0.5;
    }
`

export default function SvgDownload({size = 16, color = '#000', available = true, ...props}) {
    return (
        <StyledDownload xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 16 16" available={available} {...props}>
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
        </StyledDownload>
    )
}