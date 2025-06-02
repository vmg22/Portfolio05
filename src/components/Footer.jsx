import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'

// Contenedor principal del footer
const FooterContainer = styled(motion.footer)`
  position: auto;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  display: flex;
  justify-content: center;
  padding: 1rem 0;

  backdrop-filter: blur(30px);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 0px 30px rgba(227, 228, 237, 0.37);
  border-top: 1.5px solid rgba(255, 255, 255, 0.18);
`

// Enlaces internos del sitio
const FooterLink = styled(Link)`
  position: relative;
  cursor: pointer;
  color: #efefee;
  font-size: 18px;
  padding: 0.3rem 0.8rem;
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

  @media (max-width: 600px) {
    display: none;
  }
`

// Íconos sociales visibles solo en mobile
const IconLink = styled.a`
  color: #efefee;
  font-size: 20px;
  transition: transform 0.3s ease;
  display: none;

  &:hover {
    transform: scale(1.2);
    color: #ffffff;
  }

  @media (max-width: 600px) {
    display: inline-block;
  }
`

// Texto de derechos
const Copyright = styled.div`
  color: #efefee;
  font-size: 14px;
  white-space: nowrap;
`

// Footer completo
const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <FooterContainer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <FooterLink to="/privacy">Privacidad</FooterLink>
      <FooterLink to="/terms">Términos</FooterLink>
      <FooterLink to="/contact">Contacto</FooterLink>

      <IconLink
        href="https://github.com/tuusuario"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <FaGithub />
      </IconLink>

      <IconLink
        href="https://instagram.com/tuusuario"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <FaInstagram />
      </IconLink>

      <IconLink
        href="https://www.tiktok.com/@tuusuario"
        target="_blank"
        rel="noopener noreferrer"
        title="TikTok"
      >
        <SiTiktok />
      </IconLink>

      <IconLink
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp"
      >
        <FaWhatsapp />
      </IconLink>

      <Copyright>© {year} TuNombre</Copyright>
    </FooterContainer>
  )
}

export default Footer
