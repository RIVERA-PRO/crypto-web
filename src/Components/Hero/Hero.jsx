import React from 'react'
import './Hero.css'
import laptop from '../../img/laptop.png'
import Form from '../Form/Form'
export default function Hero() {
    return (
        <div className='heroContain'>

            <div className='heroContent'>
                <div className='heroText'>
                    <h1>Invertir en <span>Bitcoin </span>
                        Comercio de Bitcoin

                    </h1>
                    <p>Use tecnologías progresivas modernas de Bitcoin para ganar dinero</p>

                    <Form />

                </div>
                <div className='laptop' >
                    <img src={laptop} alt="laptop" />
                </div>

            </div>
        </div>
    )
}
