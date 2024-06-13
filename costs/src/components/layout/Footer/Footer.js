import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import './Footer.modules.css'
export default function Footer() {
    return (
        <footer className="footer">
            <ul className="list_icons">
                <li className="icons">
                    <FaFacebook />
                </li>
                <li className="icons">
                    <FaInstagram />
                </li>
                <li className="icons">
                    <FaLinkedin />
                </li>
            </ul>
            <p><a href="https://github.com/rafasxpl" target='_blank' className="color_costs">@rafasxpl</a> &copy;2023</p>
        </footer>
    )
}