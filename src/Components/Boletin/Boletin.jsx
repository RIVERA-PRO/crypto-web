import React from 'react'
import './Boletin.css'
export default function Boletin() {
    return (
        <div className='BoletinoContain'>

            <div>
                <h2>Suscríbete a nuestro boletín</h2>
                <p>Regístrese para recibir nuestras actualizaciones semanales de la industria, perspectivas internas y análisis de mercado en profundidad.</p>
            </div>

            <form action="" className='formBoletin'>
                <fieldset>
                    <input type="email" placeholder='introduce el correo electronico' />
                    <button>Empezar</button>
                </fieldset>
            </form>

        </div>
    )
}
