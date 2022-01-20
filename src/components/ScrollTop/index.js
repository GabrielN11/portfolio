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
            <Link smooth duration={1000} to='header'>
                <SvgArrow mode={mode} colors={['#000', '#fff', 'orange']} />
            </Link>
        </StyledScroll>
    )
}

export default index
