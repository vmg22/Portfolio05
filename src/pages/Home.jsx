import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/home.css'
import Hero from './home/Hero'
import Skills from './home/Skills'
import NavBar from '../components/NavBar'



const Home = () => {
  return (
    <div>

      <Header/>
      
      <Hero/>
      
      <Skills/>
     
      <Footer/>
    </div>
  )
}

export default Home
  