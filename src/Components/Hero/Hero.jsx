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

                    </h1>
                    <p>Use tecnologías progresivas modernas de Bitcoin para ganar dinero</p>



                </div>
                <div className='laptop' >
                    <img src={laptop} alt="laptop" />
                </div>

            </div>
        </div>
    )
}
