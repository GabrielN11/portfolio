import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.svg`
    opacity: ${({available}) => available ? 1 : 0.5};
    cursor: ${({available}) => available ? 'pointer' : 'normal'};
    transition: opacity 0.3s linear;
    &:hover{
        opacity: 0.5;
    }
`

const SvgLink = ({size = 16, color = '#000', available = true, ...props}) => {
    return (
        <StyledLink xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 16 16" available={available} {...props}>
            <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
            <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
        </StyledLink>
    )
}

export default SvgLink
