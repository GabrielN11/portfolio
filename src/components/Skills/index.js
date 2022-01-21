import React from 'react'
import { GlobalContext } from '../GlobalContext'
import { StyledSkills, StyledIcon, StyledSkillContainer, StyledSkillName, StyledSkillTitle } from './styles'
import SkillInfo from './SkillInfo'
import { useMediaQuery } from 'react-responsive'

const Skills = () => {
    const [showInfo, setShowInfo] = React.useState(false)
    const [softSkill, setSoftskill] = React.useState(false)
    const [visible, setVisible] = React.useState(false)
    const { mode, english } = React.useContext(GlobalContext)
    const widthMd = useMediaQuery({query: '(max-width: 650px)'}) 
    const heightXs = useMediaQuery({query: '(max-height: 450px)'}) 
    const widthXs = useMediaQuery({query: '(max-width: 350px)'})
    const skillsref = React.useRef(null)
    const observer = React.useRef(null)

    React.useEffect(() => {
        let thresholdValue
        if(widthXs || heightXs){
            thresholdValue = 0.25
        }else if(widthMd){
            thresholdValue = 0.35
        }else{
            thresholdValue = 0.5
        }

        if(observer.current) observer.current.unobserve(skillsref.current)
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && entries[0].intersectionRatio >= thresholdValue) {
              setVisible(true)
            } else if(entries[0].intersectionRatio <= 0.1){
              setVisible(false)
            }
          }, { threshold: [thresholdValue, 0.01] })

          observer.current.observe(skillsref.current)
      
    }, [widthMd, heightXs, widthXs])
    return (
        <StyledSkills mode={mode} visible={visible} id='skills' ref={skillsref}>
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
