import React, { useState, useEffect } from 'react'
import './Navbar.css'

import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import ButtonRegister from './ButtonRegister/ButtonRegister';


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)





    return (
        <header>
            <nav className="navbar">

                <div className='logo'>
                    <img src="../../../img/logo.png" alt="logo" />
                </div>
                <div className={`nav_toggle  ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`nav_items ${isOpen && "open"}`} >

                    <div className="cerrar-nav" onClick={() => setIsOpen(!isOpen)}>
                        x
                    </div>
                    <div className='logo-nav'>
                        <img src="../../../img/logo.png" alt="logo" />
                    </div>

                    <div className='enlaces'>
                        <Anchor to={`/`} >Inico</Anchor>
                        <Anchor to={`/`} >Solucion</Anchor>
                        <Anchor to={`/`} >Caracteristicas</Anchor>
                        <Anchor to={`/`} >Noticias</Anchor>
                        <Anchor to={`/`} >Acerca de</Anchor>
                        <Anchor to={`/`} >Contacto</Anchor>
                    </div>

                    <ButtonRegister />

                </div>







            </nav>


        </header>
    );
}
