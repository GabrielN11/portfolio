import styled, { keyframes } from "styled-components";

const animScroll = keyframes`
    from{
        transform: translateY(2px) rotate(-90deg);
    }
    to{
        transform: translateY(-2px) rotate(-90deg);
    }
`

const fadeAnim = keyframes`
    0%{
        opacity: 1;
    }
    50%{
        opacity: 0.5;
    }
    100%{
        opacity: 0;
    }
`

export const StyledHeader = styled.header`
    position: relative;
    padding: 20px;
    max-width: 100vw;
    height: 600px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${({ mode }) => {
        if (mode === 'light') return 'url(/day-background.png)'
        if (mode === 'dark') return 'url(/night-background.png)'
        return 'url(/twilight-background.jpg)'
    }};
`

export const StyledNavbar = styled.nav`
    position: relative;
    margin: 0 30px;
    max-width: 100vw;
    display: flex;
    align-items: center;
    color: #fff;
    z-index: 20;
    @media(max-width: 700px){
        margin: 0 10px;
    }
    @media(max-width: 600px){
        margin: 0 5px;
    }
`

export const StyledProfileAvatar = styled.div`
    height: 130px;
    width: 130px;
    margin-right: auto;
    background-image: url(/profile.jpeg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    opacity: 0.8;
    cursor: pointer;
    transition: all .5s;
    &:hover{
        opacity: 1;
        transform: scale(1.1);
    }
    &:active{
        transform: scale(1.1) translateY(-10px);
    }
    @media(max-width: 800px){
        height: 90px;
        width: 90px;
    }
    @media(max-width: 500px){
        height: 70px;
        width: 70px;
    }
`

export const StyledNavItem = styled.div`
    font-size: 22px;
    margin: 0 10px;
    transition: all .2s;
    user-select: none;
    cursor: pointer;
    & p{
        margin: 0;
        transition: all .2s;
    }
    &:hover{
        color: #ccc;
        & p{
            transform: translateY(-3px);
        }
    }
    @media(max-width: 900px){
        font-size: 18px;
    }
    @media(max-width: 750px){
        font-size: 15px;
    }
    @media(max-width: 600px){
        display: none;
    }
`

export const StyledChangeMode = styled.div`
    position: relative;
    user-select: none;
    margin: 0 10px;
    width: 40px;
    text-align: center;
    border-radius: 50%;
    & > div{
        transition: all .2s;
    }
    & p{
        margin: 5px;
        transition: all .2s;
    }
    &:hover{
        & > div{
            transform: translateY(-5px);
        }
        & p{
            transform: translateY(-5px);
        }
    }
`

export const StyledChangerMenu = styled.div`
    border-top: 50px hidden;
    font-family: Oswald;
    position: absolute;
    left: -25px;
    width: 100px;
    top: 22px;
    border-radius: 10px;
    padding: 30px 0px 10px 0px;
    background-color: ${({ mode }) => mode === 'light' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.5)'};
    display: flex;
    flex-direction: column;
`

export const StyledOption = styled.div`
    background-color: ${({ active, mode }) => active ? mode === 'light' ? '#fff' : '#000' : 'none'};
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ mode }) => mode === 'light' ? '#1b1b1b' : '#fff'};
    cursor: pointer;
    transition: background-color .3s;
    &:hover{
        background-color: ${({ mode }) => mode === 'light' ? '#fff' : '#000'};
    }
`

export const StyledToggle = styled.button`
    border: none;
    background: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 22px;
    @media(min-width: 600px){
        display: none;
    }
`

export const StyledStick = styled.span`
    height: 2px;
    width: 20px;
    background-color: #fff;
`

export const StyledAutoScroll = styled.div`
    position: absolute;
    bottom: 35px;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
    width: 45px;
    height: 45px;
    padding: 5px;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    & svg{
        animation: ${animScroll} 1s infinite alternate;
    }
    @media(min-width: 600px){
        display: none;
    }
    @media(max-height: 570px){
        bottom: 125px;
    }
    @media(max-height: 480px){
        bottom: 200px;
    }
    @media(max-height: 400px){
        bottom: 275px;
    }
    
`

export const StyledFadeInFadeOut = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0;
    animation: ${fadeAnim} 1s forwards ease-in;
`