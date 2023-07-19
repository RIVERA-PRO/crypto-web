import React from 'react'
import './Comience.css'
import img1 from '../../img/process-icons/1.png'
import img2 from '../../img/process-icons/2.png'
import img3 from '../../img/process-icons/3.png'
import line from '../../img/line.png'
export default function Comience() {
    return (
        <div className='ComienceContain'>

            <h2>Comience con Bitcoin</h2>
            <span>Empieza a aprender sobre Bitcoin con tutoriales interactivos. ¡Es divertido, fácil y toma solo unos minutos!</span>


            <div className='line'>
                <img src={line} alt="line" />
                <img src={line} alt="line" />
            </div>
            <div className='ComienceContent'>
                <div className='ComCard'>
                    <img src={img1} alt="img1" />
                    <h4>Crea tu billetera</h4>
                    <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui oficia deserunt mollit anim id est laborum.</p>

                </div>
                <div className='ComCard'>
                    <img src={img2} alt="img2" />
                    <h4>Crea tu billetera</h4>
                    <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui oficia deserunt mollit anim id est laborum.</p>

                </div>
                <div className='ComCard'>
                    <img src={img3} alt="img3" />
                    <h4>Crea tu billetera</h4>
                    <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui oficia deserunt mollit anim id est laborum.</p>

                </div>

            </div>
        </div>
    )
}
