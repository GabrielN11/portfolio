import React from 'react'
import SvgX from '../../../assets/SvgX'
import { StyledImageZoom, StyledClose } from '../styles'

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

const index = ({image, setImage, mode}) => {

    const imgref = React.useRef(null)
    useOutsideAlerter(imgref, setImage)

    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'visible';
        }
    }, [])
    return (
        <StyledImageZoom mode={mode}>
            <img src={image} alt='Imagem aumentada' ref={imgref}/>
            <StyledClose onClick={() => setImage(false)}>
                <SvgX color={mode === 'light' ? '#000' : '#fff'} size={30}/>
            </StyledClose>
        </StyledImageZoom>
    )
}

export default index
