import React from "react"

export const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {
    const [mode, setMode] = React.useState('light')
    const [english, setEnglish] = React.useState(false)

    React.useEffect(() => {
        const localMode = localStorage.getItem('themeMode')
        const localLanguage = localStorage.getItem('language')
        document.querySelector('body').classList.add(localMode + 'Scroll')
        document.querySelector('html').classList.add(localMode + 'Scroll')
        if(localMode){
            setMode(localMode)
        }else{
            setMode(() => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        }
        
        if(localLanguage === 'true') setEnglish(true)

    }, [])
    return (
        <GlobalContext.Provider value={{mode, setMode, english, setEnglish}}>
            {children}
        </GlobalContext.Provider>
    )
}