import React from 'react'
import { GlobalContext } from '../../GlobalContext'
import { StyledMobileNav, StyledMobileNavItem } from './styles'
import {Link} from 'react-scroll'

const MobileNav = () => {
    const {mode, english} = React.useContext(GlobalContext)
    return (
        <StyledMobileNav mode={mode}>
            <StyledMobileNavItem>
                    <Link smooth duration={500} to='about'>
                        {english ? 'ABOUT ME' : 'SOBRE'}
                    </Link>
                </StyledMobileNavItem>
                <StyledMobileNavItem>
                    <Link smooth duration={500} to='skills'>
                        {english ? 'SKILLS' : 'HABILIDADES'}
                    </Link>
                </StyledMobileNavItem>
                <StyledMobileNavItem>
                    <Link smooth duration={500} to='projects'>
                        {english ? 'PROJECTS' : 'PROJETOS'}
                    </Link>
                </StyledMobileNavItem>
                <StyledMobileNavItem>
                    <Link smooth duration={500} to='contact'>
                        {english ? 'CONTACT ME' : 'CONTATO'}
                    </Link>
                </StyledMobileNavItem>
        </StyledMobileNav>
    )
}

export default MobileNav
