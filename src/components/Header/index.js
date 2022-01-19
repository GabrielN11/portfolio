import React from 'react'
import { StyledHeader, StyledName, StyledNavbar, StyledNavItem, StyledProfileAvatar, StyledStick, StyledTitle, StyledTitleDescription, StyledToggle } from './styles'
import { GlobalContext } from '../GlobalContext'
import ModeChanger from './ModeChanger'
import LanguageChanger from './LanguageChanger'
import MobileNav from './MobileNav'
import { Link } from 'react-scroll'

const Header = ({ setTransition}) => {
    const { mode, english } = React.useContext(GlobalContext)
    const [mobileNav, setMobileNav] = React.useState(false)

    function animSticks(forwards) {
        const stickOne = document.querySelector('#stick1')
        const stickTwo = document.querySelector('#stick2')
        let rotate = forwards ? 0 : 45
        let translate = forwards ? 0 : 7
        const interval = setInterval(() => {
            stickOne.style.transform = `rotate(${rotate}deg) translateY(${translate}px)`
            stickTwo.style.transform = `rotate(-${rotate}deg) translateY(-${translate}px)`
            rotate = forwards ? rotate + 7 : rotate - 7
            translate = forwards ? translate + 1 : translate - 1
            if ((forwards ? translate >= 7 : translate <= 0) && (forwards ? rotate >= 45 : rotate <= 0)) {
                stickOne.style.transform = forwards ? `rotate(45deg) translateY(7px)` : `rotate(0deg) translateY(0px)`
                stickTwo.style.transform = forwards ? `rotate(-45deg) translateY(-7px)` : `rotate(0deg) translateY(0px)`
                clearInterval(interval)
            }
        }, 25)
    }
    return (
        <StyledHeader mode={mode} id='header'>
            <StyledNavbar className='font-acme'>
                <StyledProfileAvatar />
                <StyledNavItem mode={mode}>
                    <Link smooth duration={500} to='about' offset={-70}>
                        <p>{english ? 'ABOUT ME' : 'SOBRE'}</p>
                    </Link>
                </StyledNavItem>
                <StyledNavItem mode={mode}>
                    <Link smooth duration={700} to='skills' offset={-70}>
                        <p>{english ? 'SKILLS' : 'HABILIDADES'}</p>
                    </Link>
                </StyledNavItem>
                <StyledNavItem mode={mode}>
                    <Link smooth duration={900} to='projects' offset={-70}>
                        <p>{english ? 'PROJECTS' : 'PROJETOS'}</p>
                    </Link>
                </StyledNavItem>
                <StyledNavItem mode={mode}>
                    <Link smooth duration={1100} to='contact'>
                        <p>{english ? 'CONTACT ME' : 'CONTATO'}</p>
                    </Link>
                </StyledNavItem>
                <ModeChanger setTransition={setTransition} />
                <LanguageChanger />
                <StyledToggle onClick={() => {
                    setMobileNav(current => !current)
                    animSticks(!mobileNav)
                }}>
                    <StyledStick id='stick1' />
                    <StyledStick className={mobileNav ? 'none' : undefined} />
                    <StyledStick id='stick2' />
                </StyledToggle>
            </StyledNavbar>
            {mobileNav && <MobileNav />}
        </StyledHeader>
    )
}

export default Header
