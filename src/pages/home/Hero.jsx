import React from 'react'
import '../../styles/Hero.css'

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Hola, mi nombre es Matias</h1>
        <p>
          Apasionado por el código y el diseño, me dedico a crear experiencias web que combinan estética y funcionalidad. Siempre estoy en busca de nuevos desafíos y aprendizajes para mejorar como desarrollador.
        </p>
      </div>
      <div className="hero-image">
        <img src="/bn.png" alt="Foto de Matias" />
      </div>
    </div>
  )
}

export default Hero
