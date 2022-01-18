import React from 'react'
import { GlobalContext } from '../GlobalContext'
import { StyledAboutBottom, StyledAboutTitle, StyledAboutText, StyledAbout, StyledTextTitle, StyledText, StyledName } from './styles'
import styles from './About.module.css'
import SvgLinkedin from '../../assets/SvgLinkedin'
import SvgGithub from '../../assets/SvgGithub'
import SvgDio from '../../assets/SvgDio'

const index = ({ visible }) => {
    const [show, setShow] = React.useState(0)
    const { mode, english } = React.useContext(GlobalContext)
    React.useEffect(() => {
        if (visible) {
            const interval = setInterval(() => {
                setShow(current => current + 1)
                if (show >= 5) {
                    clearInterval(interval)
                }
            }, 1000)
        }
    }, [visible])
    return (
        <StyledAbout mode={mode} id='about' visible={visible}>
            <StyledAboutTitle mode={mode}>
                <StyledTextTitle className={styles.visible}>{english ? "Hello, i am" : 'Olá, eu sou'}</StyledTextTitle>
                <StyledName className={show < 1 ? styles.opacity : styles.visible}>Gabriel Nunes</StyledName>
                <StyledText className={show < 2 ? styles.opacity : styles.visible}>{english ? 'Junior Front-end Developer' : 'Desenvolvedor Front-end Junior'}</StyledText>
            </StyledAboutTitle>
            <StyledAboutText>
                <StyledTextTitle className={show < 3 ? styles.opacity : styles.visible}>{english ? 'A little about me...' : 'Um pouco sobre mim...'}</StyledTextTitle>
                <StyledText className={show < 4 ? styles.opacity : styles.visible}>
                    {english ? 
                    '' : 
                    'Sou um desenvolvedor web de 23 anos formado em Análise e Desenvolvimento de Sistemas, resido na capital de São Paulo, Brasil. Sou entusiasmado para aprender, aprimorar e me adaptar cada vez mais ao mundo da tecnologia e transformar todo esse conhecimento e prática em resultados práticos que possam ajudar, agradar e conquistar as pessoas que buscam navegar pelos meus projetos. Atualmente costumo praticar e me aprimorar no desenvolvimento de páginas intuitívas, responsivas, objetivas, funcionais e eficientes com tecnologias modernas que possam oferecer uma agradável interface e experiência de usuário.'}
                </StyledText>
            </StyledAboutText>
            <StyledAboutBottom className={show < 5 ? styles.opacity : styles.visible}>
                <a title='Linkedin' href='https://www.linkedin.com/in/gabriel-nunes-51b2bb69' target='_blank'>
                    <SvgLinkedin color={mode === 'light' ? '#1b1b1b' : mode === 'dark' ? '#c7c7c7' : '#945060'} size={35} />
                </a>
                <a title='GitHub' href='https://github.com/GabrielN11' target='_blank'>
                    <SvgGithub color={mode === 'light' ? '#1b1b1b' : mode === 'dark' ? '#c7c7c7' : '#945060'} size={35} />
                </a>
                <a title='dio._' href='https://web.dio.me/users/gabrielnunes11c' target='_blank'>
                    <SvgDio color={mode === 'light' ? '#1b1b1b' : mode === 'dark' ? '#c7c7c7' : '#945060'} size={70} />
                </a>
            </StyledAboutBottom>
        </StyledAbout>
    )
}

export default index
