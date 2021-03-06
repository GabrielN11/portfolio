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
        title: 'TypeScript',
        url: '/typescript.png'
    },
    {
        title: 'Python',
        url: '/python.png'
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
        title: 'Angular',
        url: '/angular.svg'
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
        title: 'Bootstrap',
        url: '/bootstrap.png'
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

const SkillInfo = ({ title, softSkill, showInfo, setShowInfo }) => {
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
                "I am a resilient professional, determined to finish all tasks that I propose to carry out and that are proposed to me with the greatest possible efficiency and quality. I'm efficient at searching effective and smart solutions to the various challenges that crosses my path during my tasks. Communication and seeking feedback are also skills I have, I'm clear and rhetorical in the elaboration of doubts and in the formulation of answers among the team. Independence is a skill that I value, independence in carrying out tasks and seeking knowledge, that's how I achieved the level where I stand and that's how I intend to evolve my career more every day, with independence, humility, cooperation, self-knowledge and emotional intelligence.":
                 'Sou um profissional resiliente e determinado a concluir as tarefas que me proponho a realizar e que me s??o propostas com a maior efici??ncia e qualidade poss??vel. Sou efici??nte em buscar solu????es eficazes e elegantes para os diversos desafios que cruzam meu caminho durante minhas tarefas. A comunica????o e busca por feedbacks tamb??m s??o habilidades que possuo, sou claro e ret??rico na elabora????o de d??vidas e na formula????o de respostas entre a equipe. Independ??ncia ?? uma qualidade da qual dou valor, independ??ncia na realiza????o de tarefas e na busca por conhecimento, foi assim que cheguei no n??vel onde estou e assim que pretendo evoluir cada dia mais minha carreira, com independ??ncia, humildade, coopera????o, autoconhecimento e intelig??ncia emocional.'}
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

export default SkillInfo
