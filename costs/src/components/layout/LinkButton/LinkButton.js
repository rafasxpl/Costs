import {NavLink} from 'react-router-dom'
import './LinkButton.modules.css'

export default function LinkButton({to, text}) {
    return (
        <NavLink className="linkButton" to={to}>{text}</NavLink>
    )
}