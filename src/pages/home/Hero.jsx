import React from 'react'
import '../../styles/Hero.css'


const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text" style={{ color: '#D64218' }}>
        <h1 className="block mb-2 text-sm font-medium text-white-900 dark:text-black">Hola, mi nombre es Matias</h1>
        <p className="block mb-2 text-sm font-medium text-white-900 dark:text-black">
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
