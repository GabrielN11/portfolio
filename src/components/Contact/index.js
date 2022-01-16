import React from 'react'
import { GlobalContext } from '../GlobalContext'
import { StyledButton, StyledContact, StyledContactInfo, StyledDiv, StyledForm, StyledInput, StyledSeparator, StyledTextarea, StyledTitle } from './styles'
import styles from './Contact.module.css'

const index = ({ visible }) => {
    const { mode, english } = React.useContext(GlobalContext)
    const [show, setShow] = React.useState(0)

    React.useEffect(() => {
        if (visible) {
            const interval = setInterval(() => {
                setShow(current => current + 1)
                if (show >= 5) {
                    clearInterval(interval)
                }
            }, 1000)
        }
    }, [visible])

    function copyContact(content) {
        const el = document.createElement('textarea');
        el.value = content;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        const selected =
            document.getSelection().rangeCount > 0
                ? document.getSelection().getRangeAt(0)
                : false;
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        if (selected) {
            document.getSelection().removeAllRanges();
            document.getSelection().addRange(selected);
        }
    }


    return (
        <StyledContact mode={mode} id='contact' visible={visible}>
            <StyledTitle>
                <h2 className={styles.visibleOne}>{english ? 'Interested?' : 'Interessado?'}</h2>
                <h1 className={show < 1 ? styles.opacity : styles.visibleOne}>{english ? 'Contact-me!' : 'Entre em contato!'}</h1>
                <p className={show < 2 ? styles.opacity : styles.visibleOne}>{english ? "i'm open to work!" : 'Estou disponível para trabalho!'}</p>
            </StyledTitle>
            <StyledDiv className={show < 3 ? styles.opacity : styles.visibleTwo}>
                <StyledForm>
                    <label>
                        <p>{english ? 'Name' : 'Nome'}:</p>
                        <StyledInput type='text' mode={mode} placeholder={english ? 'Enter your name...' : 'Digite seu nome...'} />
                    </label>
                    <label>
                        <p>E-mail:</p>
                        <StyledInput type='text' mode={mode} placeholder={english ? 'Enter your e-mail...' : 'Digite seu e-mail...'} />
                    </label>
                    <label>
                        <p>{english ? 'Message' : 'Mensagem'}:</p>
                        <StyledTextarea mode={mode} placeholder={english ? 'Enter your message...' : 'Digite sua mensagem...'} />
                    </label>
                    <StyledButton mode={mode}>{english ? 'Send' : 'Enviar'}</StyledButton>
                </StyledForm>
            </StyledDiv>
            <StyledSeparator className={show < 4 ? styles.opacity : styles.visibleOne}>
                <h1>{english ? 'OR' : 'OU'}</h1>
            </StyledSeparator>
            <StyledDiv className={show < 5 ? styles.opacity : styles.visibleThree}>
                <StyledContactInfo>
                    <h3>{english ? 'Phone (WhatsApp and SMS)' : 'Número (WhatsApp ou SMS)'}</h3>
                    <p onClick={() => copyContact('+55 11 99180-4000')}>+55 11 99180-4000</p>
                    <h3>E-mail</h3>
                    <p onClick={() => copyContact('gabrielnunes11c@gmail.com')}>gabrielnunes11c@gmail.com</p>
                </StyledContactInfo>
                <img src='/notebook.png' alt='Notebook com duas mãos se cumprimentando' />
            </StyledDiv>
        </StyledContact>
    )
}

export default index
