import React from 'react'
import { GlobalContext } from '../../GlobalContext'
import { StyledMobileNav, StyledMobileNavItem } from './styles'

const index = () => {
    const {mode, english} = React.useContext(GlobalContext)
    return (
        <StyledMobileNav mode={mode}>
            <StyledMobileNavItem>{english ? 'ABOUT ME' : 'SOBRE'}</StyledMobileNavItem>
            <StyledMobileNavItem>{english ? 'SKILLS' : 'HABILIDADES'}</StyledMobileNavItem>
            <StyledMobileNavItem>{english ? 'PROJECTS' : 'PROJETOS'}</StyledMobileNavItem>
            <StyledMobileNavItem>{english ? 'CONTACT ME' : 'CONTATO'}</StyledMobileNavItem>
        </StyledMobileNav>
    )
}

export default index
