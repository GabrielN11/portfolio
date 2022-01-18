import styled from "styled-components";

export const StyledContact = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    color: #fff;
    height: 700px;
    background-color: ${({mode}) => {
        if(mode === 'dark') return '#141c2f'
        if(mode === 'twilight') return '#4f2543'
        return '#3575a4'
    }};
    font-family: Montserrat;
    padding: 15px 30px 30px 30px;
    overflow: hidden;
    & div{
        ${({visible}) => !visible && 'display: none;'}
    }
    @media(max-width: 850px){
        flex-direction: column;
        justify-content: space-between;
        flex-wrap: nowrap;
        height: 1100px;
    }
    @media(max-width: 400px){
        height: 1300px;
    }
`

export const StyledTitle = styled.div`
    width: 100%;
    padding: 15px;
    text-align: center;
    height: fit-content;
    & h2{
        font-size: 25px;
        margin: 5px 0;
    }
    & h1{
        font-size: 35px;
        margin: 5px 0;
    }
    & p{
        font-size: 18px;
        margin: 10px 0;
    }
`

export const StyledDiv = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & img{
        height: 250px;
    }
    @media(max-width: 850px){
        width: 100%;
        & img{
            height: 200px;
        }
    }
    @media(max-width: 650px){
        & img{
            height: 150px;
        }
    }
`

export const StyledSeparator = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    & h1{
        font-size: 50px;
        margin: 15px 0;
    }
    @media(max-width: 850px){
        width: 100%;
    }
`

export const StyledContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 25px;
    & h3{
        font-size: 20px;
        margin: 15px 0px 5px 0px;
    }
    p{
        font-size: 18px;
        opacity: 0.9;
        margin: 0;
        cursor: pointer;
    }
    a{
        align-self: center;
        margin-top: 20px;
    }
`

export const StyledForm = styled.form`
    width: 85%;
    display: flex;
    flex-direction: column;
    & label{
        display: flex;
        flex-direction: column;
    }
    & p{
        margin: 10px 0 5px 0;
        font-size: 18px;
    }
    @media(max-width: 650px){
        width: 100%;
    }
`

export const StyledInput = styled.input`
    padding: 7px;
    background-color: #555;
    outline: none;
    border: none;
    border-radius: 10px;
    width: 90%;
    max-width: 90%;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    background-color: ${({mode}) => {
        if(mode === 'light') return '#8EB7D5'
        if(mode === 'dark') return '#424958';
        return '#83667B'
    }};
    transition: all .5s;
    &:focus{
        background-color: ${({mode}) => {
        if(mode === 'light') return '#5D90B6'
        if(mode === 'dark') return '#2B3243';
        return '#603A55'
    }};
    @media(max-width: 650px){
        max-width: 100%;
    }
`

export const StyledTextarea = styled.textarea`
    padding: 7px;
    background-color: #555;
    outline: none;
    border: none;
    border-radius: 10px;
    width: 90%;
    height: 200px;
    max-width: 90%;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    background-color: ${({mode}) => {
        if(mode === 'light') return '#8EB7D5'
        if(mode === 'dark') return '#424958';
        return '#83667B'
    }};
    transition: all .5s;
    &:focus{
        background-color: ${({mode}) => {
        if(mode === 'light') return '#5D90B6'
        if(mode === 'dark') return '#2B3243';
        return '#603A55'
        }};
    }
    @media(max-width: 650px){
        max-width: 100%;
    }
`

export const StyledButton = styled.button`
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
    border: none;
    width: 100px;
    cursor: pointer;
    transition: all .5s;
    &:hover{
        background-color: ${({mode}) => {
        if(mode === 'light') return '#8EB7D5'
        if(mode === 'dark') return '#424958';
        return '#83667B'
        }};
    }
`