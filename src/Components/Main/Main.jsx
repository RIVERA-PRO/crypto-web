import React from 'react'
import './Main.css'
import main from '../../img/main.png'
export default function Main() {
    return (
        <div className='mainContain'>


            <div className='imgBitcoin'>
                <img src={main} alt="main" />
            </div>
            <div className='mainText'>
                <h2>Que es bitcoin ?</h2>
                <p className='pColor'>Bitcoin es una red de pago innovadora y un nuevo tipo de dinero.</p>
                <p>Bitcoin es uno de los inventos más importantes en toda la historia humana. Por primera vez, cualquier persona puede enviar o recibir cualquier cantidad de dinero con otra persona, en cualquier parte del planeta, de forma cómoda y sin restricciones. Es el amanecer de un mundo mejor y más libre.</p>

                <button className='btn'>Empezar</button>

            </div>

        </div>
    )
}
