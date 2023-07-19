import React from 'react'
import './Caracteristicas.css'
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";

export default function Caracteristicas() {
    return (
        <div className='CaracteristicasConatin'>

            <h2>Nuestras características</h2>
            <span>Bitcoin es la forma más sencilla de cambiar dinero a un costo muy bajo.</span>

            <div className='caractContent'>

                <div className='card'>


                    <h3>Aplicaciones móviles</h3>
                    <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui oficia deserunt mollit anim id est laborum.</p>
                    <Anchor to={`/`} >Leer más</Anchor>


                </div>

                <div className='card'>

                    <h3>Seguro seguro</h3>
                    <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui oficia deserunt mollit anim id est laborum.</p>
                    <Anchor to={`/`} >Leer más</Anchor>


                </div>

                <div className='card'>

                    <h3>Billetera</h3>
                    <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui oficia deserunt mollit anim id est laborum.</p>
                    <Anchor to={`/`} >Leer más</Anchor>


                </div>



                <div className='card'>

                    <h3>Soporte de expertos</h3>
                    <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui oficia deserunt mollit anim id est laborum.</p>
                    <Anchor to={`/`} >Leer más</Anchor>


                </div>

                <div className='card'>

                    <h3>Intercambio instantáneo</h3>
                    <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui oficia deserunt mollit anim id est laborum.</p>
                    <Anchor to={`/`} >Leer más</Anchor>


                </div>


                <div className='card'>

                    <h3>Compras recurrentes</h3>
                    <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui oficia deserunt mollit anim id est laborum.</p>
                    <Anchor to={`/`} >Leer más</Anchor>


                </div>


            </div>

        </div>
    )
}
