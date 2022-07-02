import React from 'react'
import SvgGithub from '../../../assets/SvgGithub'
import SvgLink from '../../../assets/SvgLink'
import { StyledIcons, StyledImages, StyledInfo, StyledProject, StyledProjectText, StyledSpin } from '../styles'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, A11y, Autoplay, EffectFade } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import styles from './Project.module.css'
import { StyledTextTitle } from '../../About/styles'
import { GlobalContext } from '../../GlobalContext'
import SvgDownload from '../../../assets/SvgDownload'

const Project = ({ name, textPt, textEn, images, repo, site, setImage, visible, icon }) => {
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
                    {(icon && icon === 'download') ?
                        <a title={site ? (english ? 'Download the application' : 'Baixe a aplicação') : (english ? 'Download unavailable' : 'Download indisponível')} href={site || undefined} target='_blank' rel="noreferrer" download>
                            <SvgDownload size={35} color={mode === 'light' ? '#1b1b1b' : mode === 'dark' ? '#c7c7c7' : '#ad94ca'} available={site} />
                        </a>
                        :
                        <a title={site ? (english ? 'Access the project website' : 'Visitar site do projeto') : (english ? 'Site unavailable' : 'Site indisponível')} href={site || undefined} target='_blank' rel="noreferrer">
                            <SvgLink size={35} color={mode === 'light' ? '#1b1b1b' : mode === 'dark' ? '#c7c7c7' : '#ad94ca'} available={site} />
                        </a>}
                </StyledIcons>
            </StyledInfo>
            <Swiper className={styles.swiper} autoplay={{ delay: 5000, disableOnInteraction: true }} modules={[Pagination, Autoplay, A11y, EffectFade]}
                effect='fade'>
                {images.map((image, i) => (
                    <SwiperSlide key={image.description}>
                        <StyledImages onClick={() => setImage(image.url)} mode={mode}>
                            {visible && <img className={loaded[i] ? undefined : 'none'} src={image.url} alt={image.description} draggable={false} onLoad={() => {
                                setLoaded(current => {
                                    current[i] = true
                                    return [...current]
                                })
                            }} />}
                            {!loaded[i] && <StyledSpin mode={mode} />}
                        </StyledImages>
                    </SwiperSlide>
                ))}
            </Swiper>
        </StyledProject>
    )
}

export default Project
