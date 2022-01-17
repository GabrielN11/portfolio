import React from 'react'

const useAlert = () => {
    const [alert, setAlert] = React.useState({items: []})
    const timeout = React.useRef()

    const displayAlert = React.useCallback((text= 'Alerta disparado.', type = '#dc3545', duration=5000) => {

        const id = Math.random() * (1000 - 1) + 1

        const pickColor = type => {
            if(type === 'light') return '#13243d'
            if(type === 'dark') return '#235269'
            if(type === 'twilight') return '#945060'
            return type
        }

        const color = pickColor(type)

        const removeAlert = obj => {
            const newArr = obj.items.filter((item) => item.id!== id)
            return {items: newArr}
        }

        const addAlert = obj => {
            const newArr = [...obj.items, {id, color, duration, text}]
            return {items: newArr}
        }

        setAlert(addAlert)
        timeout.current = setTimeout(() => {
            setAlert(removeAlert)
        }, duration)
    }, [])

    return {alert, displayAlert}
}

export default useAlert