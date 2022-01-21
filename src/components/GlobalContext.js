import React from "react"

export const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {
    const [mode, setMode] = React.useState('light')
    const [english, setEnglish] = React.useState(false)

    React.useEffect(() => {
        const localMode = localStorage.getItem('themeMode')
        const localLanguage = localStorage.getItem('language')
        let newMode = 'light'
        if(localMode){
            setMode(localMode)
            newMode = localMode
        }
        else{
            newMode =  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
            setMode(newMode)
        }

        document.querySelector('body').classList.add(newMode + 'Scroll')
        document.querySelector('html').classList.add(newMode + 'Scroll')
        
        if(localLanguage === 'true') setEnglish(true)
        else setEnglish(() => (navigator.language === 'pt-BR' || navigator.language === 'pt-br') || (navigator.language === 'pt-PT' || navigator.language === 'pt-pt') ? false : true)

    }, [])
    return (
        <GlobalContext.Provider value={{mode, setMode, english, setEnglish}}>
            {children}
        </GlobalContext.Provider>
    )
}