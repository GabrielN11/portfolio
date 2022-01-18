import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
    from{
        opacity: 0;
        transform: translateY(-15px)
    }to{
        opacity: 1;
        transform: initial;
    }
`

export const StyledAbout = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    color: ${({mode}) => {
        if(mode === 'dark') return '#c7c7c7'
        if(mode === 'light') return '#1b1b1b'
        return '#945060'
    }};
    height: 600px;
    background-color: ${({mode}) => {
        if(mode === 'light') return '#f8f9fa'
        return '#000'
    }};
    font-family: Montserrat;
    padding: 15px 50px;
    overflow: hidden;
    @media(max-width: 750px){
        padding: 5px 15px;
    }
    @media(max-width: 550px){
        height: 750px;
    }
    @media(max-width: 350px){
        height: 950px;
    }
    @media(max-width: 700px){
        flex-direction: column;
        flex-wrap: nowrap; 
        justify-content: space-between;
    }
    & div{
        ${({visible}) => !visible && 'display: none;'}
    }
`

export const StyledAboutTitle = styled.div`
    width: 50%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    @media(max-width: 750px){
        padding: 5px;
    }
    @media(max-width: 700px){
        width: 100%;
        height: 25%;
    }
`

export const StyledAboutText = styled.div`
    width: 50%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    @media(max-width: 750px){
        padding: 5px;
    }
    @media(max-width: 700px){
        width: 100%;
        height: 60%;
    }
`

export const StyledAboutBottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media(max-width: 900px){
        font-size: 40px;
    }
`

export const StyledTextTitle = styled.h1`
    font-size: 30px;
    margin: 20px 0;
    text-align: center;
    @media(max-width: 900px){
        font-size: 25px;
    }
    @media(max-width: 500px){
        font-size: 25px;
    }
`

export const StyledName = styled.h1`
    font-size: 50px;
    font-weight: bold;
    margin: 0;
    @media(max-width: 900px){
        font-size: 40px;
    }
    @media(max-width: 500px){
        font-size: 30px;
    }
`

export const StyledText = styled.p`
    font-size: 20px;
    margin: 10px 0;
    @media(max-width: 900px){
        font-size: 18px;
    }
    @media(max-width: 500px){
        font-size: 16px;
    }
`