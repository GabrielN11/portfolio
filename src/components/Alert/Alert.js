import React from 'react'
import { WarningBox, Warning, WarningBar } from './styles'

const Alert = ({alert}) => {

    if(alert.items.length === 0) return null
    return (
        <WarningBox>
            {alert.items.map(item => (
                <div key={item.id}>
                    <Warning color={item.color}>{item.text}</Warning>
                    <WarningBar color={item.color} time={item.duration}/>
                </div>
            ))}
        </WarningBox>
    )
}

export default Alert
