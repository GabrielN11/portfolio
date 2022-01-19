import React from 'react'
import { GlobalContext } from '../GlobalContext'
import { StyledSkills, StyledIcon, StyledSkillContainer, StyledSkillName, StyledSkillTitle } from './styles'
import SkillInfo from './SkillInfo'

const Skills = ({ visible }) => {
    const [showInfo, setShowInfo] = React.useState(false)
    const [softSkill, setSoftskill] = React.useState(false)
    const { mode, english } = React.useContext(GlobalContext)
    return (
        <StyledSkills mode={mode} visible={visible} id='skills'>
            <StyledSkillTitle>{english ? 'SKILLS' : 'HABILIDADES'}</StyledSkillTitle>
            <StyledSkillContainer onClick={() => {
                setSoftskill(false)
                setShowInfo(true)
            }}>
                <StyledSkillName>HARD SKILLS</StyledSkillName>
            </StyledSkillContainer>
            <StyledSkillContainer onClick={() => {
                setSoftskill(true)
                setShowInfo(true)
            }}>
                <StyledSkillName>SOFT SKILLS</StyledSkillName>
            </StyledSkillContainer>
            <SkillInfo title={softSkill ? 'SOFT SKILLS' : 'HARD SKILLS'} softSkill={softSkill} showInfo={showInfo}
                setShowInfo={setShowInfo} />
        </StyledSkills>
    )
}

export default Skills
