import React from 'react'
import './Hero.css'
import laptop from '../../img/laptop.png'
export default function Hero() {
    return (
        <div className='heroContain'>

            <div className='heroContent'>
                <div className='heroText'>
                    <h1>Invertir en Bitcoin
                        Comercio de Bitcoin
                        Use tecnologías progresivas modernas de Bitcoin para ganar dinero
                        Introduce tu correo electrónico
                        Empezar
                    </h1>
                    <p>Use tecnologías progresivas modernas de Bitcoin para ganar dinero</p>

                    <input type="email" placeholder='Introduce tu correo electronico' />

                </div>
                <img src={laptop} alt="laptop" className='laptop' />

            </div>
        </div>
    )
}
