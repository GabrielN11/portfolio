import React from 'react'
import { Link } from 'react-scroll'
import SvgArrow from '../../assets/SvgArrow'
import styled from 'styled-components'

const StyledScroll = styled.div`
    position: fixed;
    bottom: 15px;
    right: 15px;
    z-index: 150;
`

const index = ({ mode }) => {
    return (
        <StyledScroll>
            <Link smooth duration={500} to='header'>
                <SvgArrow mode={mode} />
            </Link>
        </StyledScroll>
    )
}

export default index
