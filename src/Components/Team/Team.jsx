import React from 'react'
import img1 from '../../img/member/1.jpg'
import img2 from '../../img/member/2.jpg'
import img3 from '../../img/member/3.jpg'
import img4 from '../../img/member/4.jpg'
import img5 from '../../img/member/5.jpg'
import './Team.css'
export default function Team() {
    return (
        <div className='TeamContain'>
            <h2>Conozca a nuestro equipo</h2>
            <span>¡Nuestros expertos en el campo de las criptomonedas siempre pueden ayudarlo con cualquiera de sus preguntas!</span>


            <div className='teamCards'>

                <div className='cardTeam'>
                    <div className='cardText'>
                        <div>
                            <img src={img1} alt="imgTeam" />
                            <h4>Tom Biner</h4>
                            <p>Desarrrollo de negocios</p>

                        </div>

                        <p>Jackson Nash es miembro de la facultad de tiempo completo de la División de Marketing y Ciencias del Comportamiento en la Escuela de Negocios Sauder de la UBC. Lidera el Grupo de Emprendimiento, en los programas de pregrado y posgrado, enseñando activamente en ambos.</p>

                    </div>
                    <div className='cardCont'>
                        <img src={img1} alt="imgTeam" />
                        <h4>Tom Biner</h4>
                        <p>Desarrrollo de negocios</p>
                    </div>


                    <div className="redes-sociales">
                        <a href="#"><i class='fa fa-instagram'></i></a>
                        <a href="#"><i class='fa fa-linkedin'></i></a>
                        <a href="#"><i class='fa fa-twitter'></i></a>

                    </div>
                </div>

                <div className='cardTeam'>

                    <div className='cardText'>
                        <div>
                            <img src={img2} alt="imgTeam" />
                            <h4>Monica Nach</h4>
                            <p>Desarrrollo de negocios</p>

                        </div>

                        <p>Monica Naches miembro de la facultad de tiempo completo de la División de Marketing y Ciencias del Comportamiento en la Escuela de Negocios Sauder de la UBC. Lidera el Grupo de Emprendimiento, en los programas de pregrado y posgrado, enseñando activamente en ambos.</p>

                    </div>
                    <div className='cardCont'>
                        <img src={img2} alt="imgTeam" />
                        <h4>Monica Nach</h4>
                        <p>Desarrrollo de negocios</p>
                    </div>


                    <div className="redes-sociales">
                        <a href="#"><i class='fa fa-instagram'></i></a>
                        <a href="#"><i class='fa fa-linkedin'></i></a>
                        <a href="#"><i class='fa fa-twitter'></i></a>

                    </div>
                </div>

                <div className='cardTeam'>
                    <div className='cardText'>
                        <div>
                            <img src={img3} alt="imgTeam" />
                            <h4>Tomy Jean</h4>
                            <p>Desarrrollo de negocios</p>

                        </div>

                        <p>Tomy Jean miembro de la facultad de tiempo completo de la División de Marketing y Ciencias del Comportamiento en la Escuela de Negocios Sauder de la UBC. Lidera el Grupo de Emprendimiento, en los programas de pregrado y posgrado, enseñando activamente en ambos.</p>

                    </div>
                    <div className='cardCont'>
                        <img src={img3} alt="imgTeam" />
                        <h4>Tomy Jean</h4>
                        <p>Desarrrollo de negocios</p>
                    </div>


                    <div className="redes-sociales">
                        <a href="#"><i class='fa fa-instagram'></i></a>
                        <a href="#"><i class='fa fa-linkedin'></i></a>
                        <a href="#"><i class='fa fa-twitter'></i></a>

                    </div>
                </div>

                <div className='cardTeam'>
                    <div className='cardText'>
                        <div>
                            <img src={img4} alt="imgTeam" />
                            <h4>Joel Nison</h4>
                            <p>Desarrrollo de negocios</p>

                        </div>

                        <p>Joel Nison miembro de la facultad de tiempo completo de la División de Marketing y Ciencias del Comportamiento en la Escuela de Negocios Sauder de la UBC. Lidera el Grupo de Emprendimiento, en los programas de pregrado y posgrado, enseñando activamente en ambos.</p>

                    </div>
                    <div className='cardCont'>
                        <img src={img4} alt="imgTeam" />
                        <h4>Joel Nison</h4>
                        <p>Desarrrollo de negocios</p>
                    </div>




                    <div className="redes-sociales">
                        <a href="#"><i class='fa fa-instagram'></i></a>
                        <a href="#"><i class='fa fa-linkedin'></i></a>
                        <a href="#"><i class='fa fa-twitter'></i></a>

                    </div>
                </div>
                <div className='cardTeam'>
                    <div className='cardText'>
                        <div>

                            <img src={img5} alt="imgTeam" />
                            <h4>Maria Debe</h4>
                            <p>Desarrrollo de negocios</p>

                        </div>

                        <p>Maria Debemiembro de la facultad de tiempo completo de la División de Marketing y Ciencias del Comportamiento en la Escuela de Negocios Sauder de la UBC. Lidera el Grupo de Emprendimiento, en los programas de pregrado y posgrado, enseñando activamente en ambos.</p>

                    </div>
                    <div className='cardCont'>

                        <img src={img5} alt="imgTeam" />
                        <h4>Maria Debe</h4>
                        <p>Desarrrollo de negocios</p>
                    </div>



                    <div className="redes-sociales">
                        <a href="#"><i class='fa fa-instagram'></i></a>
                        <a href="#"><i class='fa fa-linkedin'></i></a>
                        <a href="#"><i class='fa fa-twitter'></i></a>

                    </div>
                </div>
            </div>
        </div>
    )
}
