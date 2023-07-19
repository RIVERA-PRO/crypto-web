import React from 'react'
import './Footer.css'
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import logo from '../../img/logo.png'
export default function Footer() {
    return (
        <div className='FooterContain'>

            <div className='footerText'>
                <img src={logo} alt="logo" />

                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui oficia dese mollit anim id est laborum.</p>

            </div>

            <div className='footerText'>
                <h3>Recursos</h3>

                <Anchor to={`/`} >Cómo comprar monedas</Anchor>
                <Anchor to={`/`} >Resumen de monedas</Anchor>
                <Anchor to={`/`} >Blog Noticias</Anchor>
                <Anchor to={`/`} >Cómo vender monedas</Anchor>

            </div>

            <div className='footerText'>
                <h3>Enlaces rápidos</h3>

                <Anchor to={`/`} >Estadísticas de la red</Anchor>
                <Anchor to={`/`} >Exploradores de bloques</Anchor>
                <Anchor to={`/`} >Gobernancia</Anchor>
                <Anchor to={`/`} >Mercados de Cambio </Anchor>

            </div>

            <div className='footerText'>
                <h3>Síganos</h3>

                <div class="redes-sociales-footer">

                    <a href="#"><i class='fa fa-instagram'></i></a>
                    <a href="#"> <i class='fa fa-linkedin'></i></a>
                    <a href="#"><i class='fa fa-twitter'></i></a>
                </div>
            </div>

        </div>
    )
}
