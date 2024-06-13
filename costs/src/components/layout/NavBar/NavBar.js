import Logo from '../../../img/costs_logo.png'
import {NavLink, Outlet} from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";
import  './NavBar.modules.css'
import { useState } from 'react';

export default function NavBar() {

    const [menu, setMenu] = useState(false)
    const [newMenu, setNewMenu] = useState(false)

    window.addEventListener("resize", () => {
        let widthWindow = window.innerWidth
        if(widthWindow <= 360) {
            setMenu(true)
        } else if(widthWindow > 360) {
            setMenu(false)
            setNewMenu(false)
        }
    })

    return (
        <header>
            <nav className="navBar">
                <div className="logo">
                    <NavLink to='/'>
                        <img src={Logo} alt="logo" />
                    </NavLink>
                </div>
                {
                    menu && (
                        <div>
                            <CiMenuBurger className='menu' onClick={() => setNewMenu(!newMenu)}/>
                        </div>
                    )
                }
                {
                    newMenu && (
                        <ul className='newList' onClick={() => {
                            setTimeout(() => {
                                setNewMenu(false)
                            }, 100)
                        }}>
                            <li>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/company'>Empresa</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contato'>Contato</NavLink>
                            </li>
                            <li>
                                <NavLink to='/projects'>Projetos</NavLink>
                            </li>
                        </ul>
                    )
                }
                <ul className={menu ? "listDisable" : "list"}>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/company'>Empresa</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contato'>Contato</NavLink>
                    </li>
                    <li>
                        <NavLink to='/projects'>Projetos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}