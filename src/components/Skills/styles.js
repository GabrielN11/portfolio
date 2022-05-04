import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
    from{);
        opacity: 0;
    }to{
        opacity: 1;
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
    height: 700px;
    background-color: ${({mode}) => {
        if(mode === 'dark') return '#102239'
        if(mode === 'twilight') return '#271e3c'
        return '#1784b1'
    }};
    font-family: Montserrat;
    padding: 15px 50px;
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
    @media(max-width: 850px){
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

export const StyledSkillDiv = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    @media(max-width: 700px){
        width: 100%;
        height: 60%;
        justify-content: flex-start;
        padding: 20px;
    }
`

export const StyledSkillTitleContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    @media(max-width: 700px){
        width: 100%;
        height: 25%;
    }
`


export const StyledClose = styled.div`
    position: absolute;
    top: 25px;
    right: 20px;
    cursor: pointer;
`

export const StyledSkillText = styled.p`
    font-size: 1rem;
`

export const StyledSkillTitle = styled.h1`
    font-size: 30px;
    margin: 15px 0;
    width: 100%;
    text-align: center;
    animation: ${fadeIn} 2s forwards;
`

export const StyledSkillContainer = styled.div`
    position: relative;
    width: 50%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: ${fadeIn} 2s forwards;
    cursor: pointer;
    border-radius: 10px;
    &:hover{
        background-color: rgba(255, 255, 255, 0.1);
    }
    @media(max-width: 650px){
        width: 100%;
        height: 40%;
    }
`

export const StyledSkillName = styled.h1`
    font-size: 2rem;
    padding: 1rem;
    border: 1px solid #fff;
`

export const StyledHardSkillContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: space-around;
    width: 70%;
    height: 100%;
    padding: 2rem;
    overflow-y: scroll;
    @media(max-width: 850px){
        width: 100%;
        height: 75%;
        padding: 1rem;
    }
`

export const StyledHardSkill = styled.div`
    width: 25%;
    height: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform .3s;
    text-align: center;
    & img{
        height: 75px;
    }
    & h1{
        font-size: 1.5rem;
        margin: 10px 0;
    }
    &:hover{
        transform: scale(1.1);
    }
    @media(max-width: 950px){
        width: 33%;
        & img{
            height: 50px;
        }
        & h1{
            font-size: 0.8rem;
        }
        width: 33%;
        height: 25%;
    }
`