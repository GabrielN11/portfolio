import styled, {keyframes} from "styled-components";

const slideIn = keyframes`
    0%{
        transform: translateX(-100%);
    }80%{
        transform: initial;
    }90%{
        transform: translateX(-15px);
    }100%{
        transform: initial;
    }
`

export const StyledMobileNav = styled.nav`
    position: absolute;
    top: 100px;
    left: 0;
    height: 400px;
    width: 100%;
    background-color: ${({ mode }) => mode === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)'};
    color: ${({mode}) => mode === 'light' ? '#555' : '#fff'};
    font-size: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    z-index: 0;
    animation: ${slideIn} .8s forwards linear;
    @media(min-width: 600px){
        display: none;
    }
`

export const StyledMobileNavItem = styled.div`
    margin: 10px 0;
    cursor: pointer;
`