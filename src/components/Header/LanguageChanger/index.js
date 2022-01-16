import React from 'react'
import { GlobalContext } from '../../GlobalContext'
import { StyledChangerMenu, StyledOption, StyledChangeMode } from '../styles'


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


const index = () => {
    const [subMenu, setSubMenu] = React.useState(false)
    const { english, setEnglish, mode } = React.useContext(GlobalContext)
    const langRef = React.useRef(null)
    useOutsideAlerter(langRef, setSubMenu)

    function changeLanguage(newLanguage) {
        setEnglish(newLanguage)
        localStorage.setItem('language', newLanguage)
    }
    return (
        <StyledChangeMode onMouseEnter={() => setSubMenu(true)} onMouseLeave={() => setSubMenu(false)} ref={langRef}>
            <div onClick={() => setSubMenu(current => !current)}>
                <p className={!english ? 'none' : undefined}>En</p>
                <p className={english ? 'none' : undefined}>Pt</p>
            </div>
            <StyledChangerMenu mode={mode} className={!subMenu ? 'none' : undefined}>
                <StyledOption mode={mode} active={english} onClick={() => changeLanguage(true)}>
                    <p>English</p>
                </StyledOption>
                <StyledOption mode={mode} active={!english} onClick={() => changeLanguage(false)}>
                    <p>Português</p>
                </StyledOption>
            </StyledChangerMenu>

        </StyledChangeMode>
    )
}

export default index
