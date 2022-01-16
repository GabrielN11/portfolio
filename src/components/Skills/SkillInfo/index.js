import React from 'react'
import { GlobalContext } from '../../GlobalContext'
import { StyledClose, StyledSkillCloseAnim, StyledSkillDiv, StyledSkillImg, StyledSkillImgContainer, StyledSkillInfo, StyledSkillInfoTitle, StyledSkillText } from '../styles'
import SvgX from '../../../assets/SvgX'
const index = ({ url, title, textPt, textEn, showInfo, setShowInfo }) => {
    const [closeAnim, setCloseAnim] = React.useState(false)
    const { english } = React.useContext(GlobalContext)

    function close(){
        setShowInfo(false)
        setCloseAnim(true)
        setTimeout(() => {
            setCloseAnim(false)
        }, 1500)
    }

    if(closeAnim) return <StyledSkillCloseAnim/>
    return (
        <StyledSkillInfo className={!showInfo ? 'none' : undefined}>
            <StyledSkillImgContainer>
                <StyledSkillImg src={url} alt={title} />
            </StyledSkillImgContainer>
            <StyledSkillDiv>
                <StyledSkillInfoTitle>{title}</StyledSkillInfoTitle>
                <StyledSkillText>{english ? textEn : textPt}</StyledSkillText>
            </StyledSkillDiv>
            <StyledClose onClick={close}><SvgX size={35} color='#fff' /></StyledClose>
        </StyledSkillInfo>
    )
}

export default index
