import React from 'react'
import SvgX from '../../../assets/SvgX'
import { StyledImageZoom, StyledClose } from '../styles'

const index = ({image, setImage, mode}) => {

    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'visible';
        }
    }, [])
    return (
        <StyledImageZoom mode={mode}>
            <img src={image} alt='Imagem aumentada'/>
            <StyledClose onClick={() => setImage(false)}>
                <SvgX color={mode === 'light' ? '#000' : '#fff'} size={30}/>
            </StyledClose>
        </StyledImageZoom>
    )
}

export default index
