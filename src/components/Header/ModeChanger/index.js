import React from 'react'
import { GlobalContext } from '../../GlobalContext'
import { StyledChangerMenu, StyledOption, StyledChangeMode } from '../styles'
import SvgMoon from '../../../assets/SvgMoon'
import SvgSun from '../../../assets/SvgSun'
import SvgSunset from '../../../assets/SvgSunset'


function useOutsideAlerter(ref, setSubMenu) {
    React.useEffect(() => {

        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setSubMenu(false)
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref]);
}


const ModeChanger = ({ setTransition }) => {
    const [subMenu, setSubMenu] = React.useState(false)
    const { mode, setMode } = React.useContext(GlobalContext)
    const themeRef = React.useRef(null)
    const color = mode === 'light' ? '#1b1b1b' : '#fff'
    useOutsideAlerter(themeRef, setSubMenu)

    function changeMode(newMode) {
        setMode(newMode)
        localStorage.setItem('themeMode', newMode)
        setTransition(true)
        document.querySelector('body').classList.remove('darkScroll', 'lightScroll', 'twilightScroll')
        document.querySelector('body').classList.add(newMode + 'Scroll')
        document.querySelector('html').classList.remove('darkScroll', 'lightScroll', 'twilightScroll')
        document.querySelector('html').classList.add(newMode + 'Scroll')
        setTimeout(() => {
            setTransition(false)
        }, 1000)
    }
    return (
        <>
            <StyledChangeMode onMouseEnter={() => setSubMenu(true)} onMouseLeave={() => setSubMenu(false)} ref={themeRef}>
                <div onClick={() => setSubMenu(true)}>
                    <SvgMoon className={mode !== 'dark' ? 'none' : undefined} />
                    <SvgSun className={mode !== 'light' ? 'none' : undefined} />
                    <SvgSunset className={mode !== 'twilight' ? 'none' : undefined} />
                </div>
                <StyledChangerMenu mode={mode} className={!subMenu ? 'none' : undefined}>
                    <StyledOption mode={mode} active={mode === 'light'} onClick={() => changeMode('light')}>
                        <SvgSun color={color} />
                    </StyledOption>
                    <StyledOption mode={mode} active={mode === 'twilight'} onClick={() => changeMode('twilight')}>
                        <SvgSunset color={color} />
                    </StyledOption>
                    <StyledOption mode={mode} active={mode === 'dark'} onClick={() => changeMode('dark')}>
                        <SvgMoon color={color} />
                    </StyledOption>
                </StyledChangerMenu>
            </StyledChangeMode>
        </>
    )
}

export default ModeChanger
