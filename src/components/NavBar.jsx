import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaHome, FaUser, FaFolderOpen, FaEnvelope } from 'react-icons/fa'

const Nav = styled(motion.nav)`
  width: fit-content;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: center;
  backdrop-filter: blur(30px);
  // background: rgba(255, 255, 255, 0.1);
  // border: 1.5px solid rgba(255, 255, 255, 0.18);
  padding: 1rem 15rem;
  border-radius: 12px;
`

const StyledLink = styled(Link)`
  position: relative;
  cursor: pointer;
  color:rgb(202, 70, 17);
  font-size: 28px;
  padding: 0.5rem 1rem;
  transition: color 0.25s;
  text-decoration: none;

  &::after {
    position: absolute;
    content: '';
    inset: 0;
    background: white;
    scale: 1 0;
    z-index: -1;
    transition: 0.45s;
    border-radius: 10px;
  }

  &:hover {
    color: black;
  }

  &:hover::after {
    scale: 1 1;
  }
`

const NavBar = () => {
  return (
    <Nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <StyledLink to="/" title="Inicio"><FaHome /></StyledLink>
      <StyledLink to="/about" title="Sobre mí"><FaUser /></StyledLink>
      <StyledLink to="/projects" title="Proyectos"><FaFolderOpen /></StyledLink>
      <StyledLink to="/contact" title="Contacto"><FaEnvelope /></StyledLink>
    </Nav>
  )
}

export default NavBar
