import styled, { keyframes } from "styled-components";

const zoomImage = (translate) => keyframes`
    from{
        transform: scale(0.3) ${translate && 'translate(1000px)'};
    }
    to{
        transform: initial;
    }
`

const loading = keyframes`
    to{
        transform: rotate(360deg);
    }
`


export const StyledProjectSection = styled.section`
    max-width: 100vw;
    height: 600px;
    @media(max-width: 800px){
        height: 850px;
    }
    @media(max-width: 700px){
        height: 950px;
    }
    @media(max-width: 550px){
        height: 1050px;
    }
`

export const StyledProject = styled.div`
    width: 100%;
    height: 600px;
    padding: 60px;
    color: ${({ mode }) => {
        if (mode === 'light') return '#1b1b1b'
        if (mode === 'twilight') return '#ad94ca'
        return '#c7c7c7'
    }};
    background-color: ${({ mode }) => {
        if (mode !== 'light') return '#0e1011'
        return '#f8f9fa'
    }};
    font-family: Montserrat;
    overflow: hidden;
    display: flex;
    @media(max-width: 800px){
        padding: 5px 15px;
        flex-direction: column;
        height: 850px;
    }
    @media(max-width: 700px){
        height: 950px;
    }
    @media(max-width: 550px){
        height: 1050px;
    }
`

export const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    @media(max-width: 800px){
        width: 100%;
    }
`

export const StyledIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: 10px 0px;
    & svg{
        margin: 0 20px;
    }
`
export const StyledImages = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ mode }) => {
        if (mode !== 'light') return '#0e1011'
        return '#f8f9fa'
    }};
    & img{
        max-width: 100%;
        max-height: 500px;
        border-radius: 5px;
    }
    @media(max-width: 800px){
        width: 100%;
    }
`

export const StyledProjectText = styled.p`
    color: ${({ mode }) => {
        if (mode === 'light') return '#555'
        if (mode === 'twilight') return '#ad94ca'
        return '#c7c7c7'
    }};
`

export const StyledImageZoom = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${({ mode }) => mode === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'};
    width: 100vw;
    height: 100vh;
    z-index: 30;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledImageZoomImage = styled.img`
    max-height: 90%;
    max-width: 90%;
    animation: ${zoomImage(true)} 0.5s forwards;
    @media(max-width: 800px){
        animation: ${zoomImage(false)} 0.5s forwards};
    }
`

export const StyledClose = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`

export const StyledSpin = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 5px solid ${({ mode }) => mode !== 'twilight' ? '#0071DC' : '#ad94ca'};
    border-right-color: transparent;
    animation: ${loading} 1s infinite;   
`