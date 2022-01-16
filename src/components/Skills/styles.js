import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
    from{
        transform: scale(0.8);
        opacity: 0;
    }to{
        transform: initial;
        opacity: 1;
    }
`

const sizeAnim = keyframes`
    from{
        transform: initial;
    }to{
        transform: scale(0.9);
    }
`

const slideIn = keyframes`
    0%{
        transform: translateX(-100%);
    }80%{
        transform: initial;
    }90%{
        transform: translateX(-30px);
    }100%{
        transform: initial;
    }
`
const slideOut = keyframes`
    to{
        transform: translateX(-110%);
    }
`

export const StyledSkills = styled.section`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: #fff;
    height: 600px;
    background-color: ${({mode}) => {
        if(mode === 'dark') return '#102239'
        if(mode === 'twilight') return '#271e3c'
        return '#1784b1'
    }};
    font-family: Montserrat;
    padding: 15px 50px;
    overflow: hidden;
    @media(max-width: 750px){
        padding: 5px 15px;
    }
    @media(max-width: 650px){
        height: 850px;
    }
    @media(max-width: 350px){
        height: 1100px;
    }
    & div,h1{
        ${({visible}) => !visible && 'display: none;'}
    }
`

export const StyledSkillInfo = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: inherit;
    box-shadow: 8px -1px 5px -3px rgba(255,255,255,0.75);
    animation: ${slideIn} 1.5s forwards linear;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media(max-width: 700px){
        flex-direction: column;
    }
    @media(max-width: 500px){
        animation: ${slideIn} .7s forwards linear;
    }
`

export const StyledSkillCloseAnim = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: inherit;
    box-shadow: 8px -1px 5px -3px rgba(255,255,255,0.75);
    animation: ${slideOut} 1s forwards;
    @media(max-width: 500px){
        animation: ${slideOut} .5s forwards linear;
    }
`

export const StyledSkillImg = styled.img`
    user-select: none;
    height: 200px;
`

export const StyledSkillDiv = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    @media(max-width: 700px){
        width: 100%;
        height: 60%;
        justify-content: flex-start;
    }
    @media(max-width: 700px){
        height: 70%;
    }
`

export const StyledSkillImgContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    @media(max-width: 700px){
        width: 100%;
        height: 40%;
    }
    @media(max-width: 500px){
        height: 30%;
    }
`

export const StyledClose = styled.div`
    position: absolute;
    top: 25px;
    right: 20px;
    cursor: pointer;
`

export const StyledSkillInfoTitle = styled.h1`
    font-size: 30px;
    text-align: center;
`

export const StyledSkillText = styled.p`
    font-size: 18px;
`

export const StyledSkillTitle = styled.h1`
    font-size: 30px;
    margin: 15px 0;
    width: 100%;
    text-align: center;
    animation: ${fadeIn} 2s forwards;
`

export const StyledSkillContainer = styled.div`
    width: 25%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    animation: ${fadeIn} 2s forwards;
    cursor: pointer;
    &:hover{
        background-color: rgba(255, 255, 255, 0.1);
    }
    @media(max-width: 1000px){
        width: 33%;
        height: 25%;
    }
    @media(max-width: 650px){
        width: 50%;
        height: 15%;
    }
    @media(max-width: 350px){
        width: 100%;
        height: 10%;
    }
`

export const StyledIcon = styled.img`
    height: 100px;
    animation: ${sizeAnim} 2s infinite alternate-reverse;
    @media(max-width: 1000px){
        height: 85px;
    }
    @media(max-width: 650px){
        height: 70px;
    }
    @media(max-width: 350px){
        height: 55px;
    }
`

export const StyledSkillName = styled.h1`
    font-size: 20px;
`