import React from 'react'
import Header from '../Pages/Header/Header'
import Hero from '../Components/Hero/Hero'
import Main from '../Components/Main/Main'
import Caracteristicas from '../Components/Caracteristicas/Caracteristicas'
import Comience from '../Components/Comience/Comience'
import Transacciones from '../Components/Transacciones/Transacciones'
import Team from '../Components/Team/Team'
import Testimonios from '../Components/Testimonios/Testimonios'
export default function IndexLayout() {
    return (
        <div>
            <Header />
            <Hero />
            <Main />
            <Caracteristicas />
            <Comience />
            <Transacciones />
            <Team />
            <Testimonios />
        </div>
    )
}
