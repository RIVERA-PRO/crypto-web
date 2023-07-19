import React from 'react'
import Header from '../Pages/Header/Header'
import Hero from '../Components/Hero/Hero'
import Main from '../Components/Main/Main'
import Caracteristicas from '../Components/Caracteristicas/Caracteristicas'
export default function IndexLayout() {
    return (
        <div>
            <Header />
            <Hero />
            <Main />
            <Caracteristicas />
        </div>
    )
}
