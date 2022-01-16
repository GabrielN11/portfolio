import React from 'react'
import SvgGithub from '../../../assets/SvgGithub'
import SvgLink from '../../../assets/SvgLink'
import { StyledIcons, StyledImages, StyledImageZoom, StyledInfo, StyledProject, StyledProjectText } from '../styles'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, A11y, Autoplay, EffectFlip } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-flip'
import styles from './Project.module.css'
import { StyledTextTitle } from '../../About/styles'
import { GlobalContext } from '../../GlobalContext'

const index = ({ name, textPt, textEn, images, repo, site, setImage }) => {
    const { english, mode } = React.useContext(GlobalContext)
    return (
        <StyledProject mode={mode}>
            <StyledInfo>
                <StyledTextTitle>{name}</StyledTextTitle>
                <StyledProjectText mode={mode}>{english ? textEn : textPt}</StyledProjectText>
                <StyledIcons>
                    <a title={repo ? (english ? 'Access the repository' : 'Visitar o repisitório') : (english ? 'Repository unavailable' : 'Repositório indisponível')} href={repo || undefined} target='_blank'>
                        <SvgGithub color={mode === 'light' ? '#1b1b1b' : mode === 'dark' ? '#c7c7c7' : '#ad94ca'} size={35} available={repo} />
                    </a>
                    <a title={site ? (english ? 'Access the project website' : 'Visitar site do projeto') : (english ? 'Site unavailable' : 'Site indisponível')} href={site || undefined} target='_blank'>
                        <SvgLink size={35} color={mode === 'light' ? '#1b1b1b' : mode === 'dark' ? '#c7c7c7' : '#ad94ca'} available={site} />
                    </a>
                </StyledIcons>
            </StyledInfo>
            <Swiper className={styles.swiper} autoplay={{ delay: 5000, disableOnInteraction: false }} modules={[Pagination, Autoplay, A11y, EffectFlip]}
            effect='flip'>
                {images.map(image => (
                    <SwiperSlide key={image.description}>
                        <StyledImages onClick={() => setImage(image.url)}>
                            <img src={image.url} alt={image.description} draggable={false} />
                        </StyledImages>
                    </SwiperSlide>
                ))}
            </Swiper>
        </StyledProject>
    )
}

export default index
