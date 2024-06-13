import './Menssagem.modules.css'
import { useState, useEffect } from 'react'

export default function Menssagem({type, text, msg}) {
    
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(!msg) {
            setVisible(false)
            return
        }
    
        setVisible(true)
        
        const timer = setTimeout(() => {
            setVisible(false)
        }, 2000)
        
        return () => {
            clearTimeout(timer)
        }

    }, [msg])
    return (
        <>
        {
            visible && (
                <div className={`message ${type}`}>{text}</div>
            )
        }
        </>
    )
}