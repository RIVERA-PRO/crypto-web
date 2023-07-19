import React from 'react'
import './Noticias.css'
import img1 from '../../img/blog/1.jpg'
import img2 from '../../img/blog/2.jpg'
import img3 from '../../img/blog/3.jpg'
export default function Noticias() {
    return (
        <div className='NoticiasContain'>
            <h2>Últimas noticias</h2>
            <span>
                Bitcoin es la forma más sencilla de cambiar dinero a un costo muy bajo.
            </span>

            <div className='NoticiasContent'>

                <div className='cardNoticias'>
                    <img src={img1} alt="img" />
                    <div className='cardNoticiasText'>

                        <h5>03 ENE 2023</h5>
                        <h3>Coinbase reabrirá el libro de pedidos GDAX Bitcoin Cash-Euro</h3>
                        <div className='deGrid'>

                            <p>
                                por administrador
                            </p>
                            <p>
                                234 me gusta
                            </p>
                            <p>
                                08 comentarios
                            </p>
                        </div>

                    </div>

                </div>


                <div className='cardNoticias'>
                    <img src={img2} alt="img" />
                    <div className='cardNoticiasText'>

                        <h5>03 ENE 2023</h5>
                        <h3>Blockchain lanza función comercial para 22 estados en los EE. UU.</h3>
                        <div className='deGrid'>

                            <p>
                                por administrador
                            </p>
                            <p>
                                234 me gusta
                            </p>
                            <p>
                                08 comentarios
                            </p>
                        </div>

                    </div>

                </div>

                <div className='cardNoticias'>
                    <img src={img3} alt="img" />
                    <div className='cardNoticiasText'>

                        <h5>03 ENE 2023</h5>
                        <h3>Esta semana en Bitcoin: arriba, abajo y de lado</h3>
                        <div className='deGrid'>

                            <p>
                                por administrador
                            </p>
                            <p>
                                234 me gusta
                            </p>
                            <p>
                                08 comentarios
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
