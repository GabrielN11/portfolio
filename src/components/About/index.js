import React from 'react'
import { GlobalContext } from '../GlobalContext'
import { StyledAboutBottom, StyledAboutTitle, StyledAboutText, StyledAbout, StyledTextTitle, StyledText, StyledName } from './styles'
import styles from './About.module.css'
import SvgLinkedin from '../../assets/SvgLinkedin'
import SvgGithub from '../../assets/SvgGithub'
import SvgDio from '../../assets/SvgDio'
import {useMediaQuery} from 'react-responsive'

const About = () => {
    const [show, setShow] = React.useState(0)
    const [visible, setVisible] = React.useState(false)
    const { mode, english } = React.useContext(GlobalContext)
    const widthMd = useMediaQuery({query: '(max-width: 750px)'})
    const heightXs = useMediaQuery({query: '(max-height: 450px)'}) 
    const widthSm = useMediaQuery({query: '(max-width: 550px)'}) 
    const widthXs = useMediaQuery({query: '(max-width: 350px)'})
    const aboutref = React.useRef(null)
    const observer = React.useRef(null)

    React.useEffect(() => {
        let thresholdValue
        if(widthXs || heightXs){
            thresholdValue = 0.25
        }else if(widthSm){
            thresholdValue = 0.35
        }else if(widthMd){
            thresholdValue = 0.4
        }else{
            thresholdValue = 0.5
        }

        if(observer.current) observer.current.unobserve(aboutref.current)
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && entries[0].intersectionRatio >= thresholdValue) {
              setVisible(true)
            } else if(entries[0].intersectionRatio <= 0.1){
              setVisible(false)
            }
          }, { threshold: [thresholdValue, 0.01] })

          observer.current.observe(aboutref.current)
      
    }, [widthSm, widthXs, widthMd, heightXs])

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
        <StyledAbout mode={mode} id='about' visible={visible} ref={aboutref}>
            <StyledAboutTitle mode={mode}>
                <StyledTextTitle className={styles.visible}>{english ? "Hello, i am" : 'Olá, eu sou'}</StyledTextTitle>
                <StyledName className={show < 1 ? styles.opacity : styles.visible}>Gabriel Nunes</StyledName>
                <StyledText className={show < 2 ? styles.opacity : styles.visible}>{english ? 'Junior Front-end Developer' : 'Desenvolvedor Front-end Junior'}</StyledText>
            </StyledAboutTitle>
            <StyledAboutText>
                <StyledTextTitle className={show < 3 ? styles.opacity : styles.visible}>{english ? 'A little about myself...' : 'Um pouco sobre mim...'}</StyledTextTitle>
                <StyledText className={show < 4 ? styles.opacity : styles.visible}>
                    {english ? 
                    "I'm a 23 years old web developer graduated in Analysis and systems development, i live in São Paulo, SP, Brazil. I'm thirst to learn, improve and adapt myself more and more to the world of technology and transform this knowledge and practice in results that can help, please and conquer everyone who browses my projects. I'm currently practicing and improving myself at developing intuitives, responsive, objective, functional and efficient pages with modern technologies that can offer pleasant interfaces and user experience." : 
                    'Sou um desenvolvedor web de 23 anos formado em Análise e Desenvolvimento de Sistemas, resido na capital de São Paulo, Brasil. Sou entusiasmado para aprender, aprimorar e me adaptar cada vez mais ao mundo da tecnologia e transformar todo esse conhecimento em resultados práticos que possam ajudar, agradar e conquistar as pessoas que buscam navegar pelos meus projetos. Atualmente costumo praticar e me aprimorar no desenvolvimento de páginas intuitívas, responsivas, objetivas, funcionais e eficientes com tecnologias modernas que possam oferecer agradáveis interfaces e experiência de usuário.'}
                </StyledText>
            </StyledAboutText>
            <StyledAboutBottom className={show < 5 ? styles.opacity : styles.visible}>
                <a title='Linkedin' href='https://www.linkedin.com/in/gabriel-nunes-51b2bb69' target='_blank' rel="noreferrer">
                    <SvgLinkedin color={mode === 'light' ? '#1b1b1b' : mode === 'dark' ? '#c7c7c7' : '#945060'} size={35} />
                </a>
                <a title='GitHub' href='https://github.com/GabrielN11' target='_blank' rel="noreferrer">
                    <SvgGithub color={mode === 'light' ? '#1b1b1b' : mode === 'dark' ? '#c7c7c7' : '#945060'} size={35} />
                </a>
                <a title='dio._' href='https://web.dio.me/users/gabrielnunes11c' target='_blank' rel="noreferrer">
                    <SvgDio color={mode === 'light' ? '#1b1b1b' : mode === 'dark' ? '#c7c7c7' : '#945060'} size={70} />
                </a>
            </StyledAboutBottom>
        </StyledAbout>
    )
}

export default About
