import React from 'react'
import SvgGithub from '../../../assets/SvgGithub'
import SvgLink from '../../../assets/SvgLink'
import { StyledIcons, StyledImages, StyledImageZoom, StyledInfo, StyledProject, StyledProjectText, StyledSpin } from '../styles'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, A11y, Autoplay, EffectFlip } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-flip'
import styles from './Project.module.css'
import { StyledTextTitle } from '../../About/styles'
import { GlobalContext } from '../../GlobalContext'

const Project = ({ name, textPt, textEn, images, repo, site, setImage, visible }) => {
    const { english, mode } = React.useContext(GlobalContext)
    const [loaded, setLoaded] = React.useState(new Array(images.length)) // A função desse estado e sua lógica é para optimizar o loading inicial da aplicação, carregando imagens apenas quando a sessão se torna visível
    return (
        <StyledProject mode={mode}>
            <StyledInfo>
                <StyledTextTitle>{name}</StyledTextTitle>
                <StyledProjectText mode={mode}>{english ? textEn : textPt}</StyledProjectText>
                <StyledIcons>
                    <a title={repo ? (english ? 'Access the repository' : 'Visitar o repositório') : (english ? 'Repository unavailable' : 'Repositório indisponível')} href={repo || undefined} target='_blank' rel="noreferrer">
                        <SvgGithub color={mode === 'light' ? '#1b1b1b' : mode === 'dark' ? '#c7c7c7' : '#ad94ca'} size={35} available={repo} />
                    </a>
                    <a title={site ? (english ? 'Access the project website' : 'Visitar site do projeto') : (english ? 'Site unavailable' : 'Site indisponível')} href={site || undefined} target='_blank' rel="noreferrer">
                        <SvgLink size={35} color={mode === 'light' ? '#1b1b1b' : mode === 'dark' ? '#c7c7c7' : '#ad94ca'} available={site} />
                    </a>
                </StyledIcons>
            </StyledInfo>
            <Swiper className={styles.swiper} autoplay={{ delay: 5000, disableOnInteraction: false }} modules={[Pagination, Autoplay, A11y, EffectFlip]}
            effect='flip'>
                {images.map((image, i) => (
                    <SwiperSlide key={image.description}>
                        <StyledImages onClick={() => setImage(image.url)}>
                            {visible && <img className={loaded[i] ? undefined : 'none'} src={image.url} alt={image.description} draggable={false} onLoad={() => {
                                setLoaded(current => {
                                    current[i] = true
                                    return [...current]
                                })
                            }} />}
                            {!loaded[i] && <StyledSpin mode={mode}/>}
                        </StyledImages>
                    </SwiperSlide>
                ))}
            </Swiper>
        </StyledProject>
    )
}

export default Project
