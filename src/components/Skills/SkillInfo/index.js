import React from 'react'
import { GlobalContext } from '../../GlobalContext'
import { StyledClose, StyledHardSkill, StyledHardSkillContainer, StyledSkillCloseAnim, StyledSkillDiv, StyledSkillInfo, StyledSkillName, StyledSkillText, StyledSkillTitleContainer } from '../styles'
import SvgX from '../../../assets/SvgX'

const skills = [
    {
        title: 'JavaScript',
        url: '/javascript.png'
    },
    {
        title: 'HTML',
        url: '/html.png'
    },
    {
        title: 'CSS',
        url: '/css.png'
    },
    {
        title: 'React',
        url: '/react.png'
    },
    {
        title: 'React Native',
        url: '/react-native.png'
    },
    {
        title: 'Next.JS',
        url: '/nextjs.png'
    },
    {
        title: 'jQuery',
        url: '/jquery.png'
    },
    {
        title: 'Styled Components',
        url: '/styled-components.png'
    },
    {
        title: 'Linux/Ubuntu',
        url: '/ubuntu.png'
    },
    {
        title: 'Express',
        url: '/expressjs.png'
    },
]

const index = ({ title, softSkill, showInfo, setShowInfo }) => {
    const [closeAnim, setCloseAnim] = React.useState(false)
    const { english } = React.useContext(GlobalContext)

    function close() {
        setShowInfo(false)
        setCloseAnim(true)
        setTimeout(() => {
            setCloseAnim(false)
        }, 1500)
    }

    if (closeAnim) return <StyledSkillCloseAnim />
    return (
        <StyledSkillInfo className={!showInfo ? 'none' : undefined}>
            <StyledSkillTitleContainer>
                <StyledSkillName>
                    {title}
                </StyledSkillName>
            </StyledSkillTitleContainer>
            {softSkill ? <StyledSkillDiv>
                <StyledSkillText>{english ? 
                "I am a resiliant professional, determined to finish all tasks that I propose to carry out and that are proposed to me with the greatest possible efficiency and quality. I'm efficient at searching effective and smart solutions to the various challenges that crosses my path during my tasks. Communication and seeking feedback are also skills I have, I'm clear and rhetorical in the elaboration of doubts and in the formulation of answers among the team. Independence is a skill that I value, independence in carrying out tasks and seeking knowledge, that's how I achieved the level where I stand and that's how I intend to evolve my career more every day, with independency, humility, cooperation, self knowledge and emotional intelligence.":
                 'Sou um profissional resiliente e determinado a concluir as tarefas que me proponho a realizar e que me são propostas com a maior eficiência e qualidade possível. Sou eficiênte em buscar soluções eficazes e elegantes para os diversos desafios que cruzam meu caminho durante minhas tarefas. A comunicação e busca por feedbacks também são habilidades que possuo, sou claro e retórico na elaboração de dúvidas e na formulação de respostas entre a equipe. Independência é uma qualidade da qual dou valor, independência na realização de tarefas e na busca por conhecimento, foi assim que cheguei no nível onde estou e assim que pretendo evoluir cada dia mais minha carreira, com independência, humildade, cooperação, autoconhecimento e inteligência emocional.'}
                 </StyledSkillText>
            </StyledSkillDiv> : 
            <StyledHardSkillContainer>
                {skills.map(skill => (
                <StyledHardSkill key={skill.title}>
                    <img src={skill.url} alt={skill.title}/>
                    <h1>{skill.title}</h1>
                </StyledHardSkill>)
                )}
            </StyledHardSkillContainer>}
            <StyledClose onClick={close}><SvgX size={35} color='#fff' /></StyledClose>
        </StyledSkillInfo>
    )
}

export default index
