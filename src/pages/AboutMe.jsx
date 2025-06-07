import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiPostman,
  SiDocker,
  SiCypress,
  SiJest,
} from "react-icons/si";

// ✅ Tecnologías agrupadas por categoría
const technologies = [
  { name: "HTML", icon: <FaHtml5 size={40} color="#E34C26" />, category: "Frontend" },
  { name: "CSS", icon: <FaCss3Alt size={40} color="#264de4" />, category: "Frontend" },
  { name: "JavaScript", icon: <FaJsSquare size={40} color="#F0DB4F" />, category: "Frontend" },
  { name: "TypeScript", icon: <SiTypescript size={40} color="#007acc" />, category: "Frontend" },
  { name: "React", icon: <FaReact size={40} color="#61DBFB" />, category: "Frontend" },

  { name: "Node.js", icon: <FaNodeJs size={40} color="#68A063" />, category: "Backend" },
  { name: "Express", icon: <SiExpress size={40} />, category: "Backend" },
  { name: "Postman", icon: <SiPostman size={40} color="#FF6C37" />, category: "Backend" },
  { name: "Cypress", icon: <SiCypress size={40} />, category: "Backend" },
  { name: "Jest", icon: <SiJest size={40} />, category: "Backend" },

  { name: "MongoDB", icon: <SiMongodb size={40} color="#4DB33D" />, category: "Database" },
  { name: "MySQL", icon: <FaDatabase size={40} color="#4479A1" />, category: "Database" },
  { name: "Cassandra", icon: <FaDatabase size={40} color="#4479A1" />, category: "Database" },

  { name: "Git", icon: <FaGitAlt size={40} color="#F1502F" />, category: "DevOps" },
  { name: "Docker", icon: <SiDocker size={40} color="#0db7ed" />, category: "DevOps" },
];
const categories = ["Frontend", "Backend", "Database", "DevOps"];

// ✅ Estilos personalizados para el texto sobre mí
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3.1rem;
`;

const Content = styled.div`
  margin-top: 2rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #D64218;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
    color: rgba(156, 156, 156, 0.945);
  }
`;

const AboutMe = () => {
  

   


  return (
    <>
      <Header />
      <Container >
        <Content>
          <h1>Sobre mí</h1>
          <p className="block mb-2 text-sm font-medium text-white-900 dark:text-black">
            Soy un desarrollador web apasionado por crear experiencias digitales
            únicas. Me especializo en React y tengo experiencia en el desarrollo
            de aplicaciones web modernas y responsivas.
          </p>
          <p className="block mb-2 text-sm font-medium text-white-900 dark:text-black">
            Me encanta aprender nuevas tecnologías y siempre estoy buscando
            mejorar mis habilidades. En mi tiempo libre, disfruto contribuir a
            proyectos de código abierto y explorar nuevas tendencias en el mundo
            del desarrollo web.
          </p>
          <p className="block mb-2 text-sm font-medium text-white-900 dark:text-black">
            Si quieres saber más sobre mis proyectos o colaborar, ¡no dudes en
            contactarme!
          </p>
        </Content>
      </Container>
      <container className= "flex items-center justify-center  ">
      {/* Skills section */}
      <section className="grid grid-cols-1 sm:grid-cols- md:grid-cols-6 gap-4 justify-items-center ">
        <div  align-center  style={{                
                backdropFilter: 'blur(30px)',
                background: 'rgba(0, 0, 0, 0.7)',
                boxShadow: '0px 0px 12px rgba(227, 228, 237, 0.7)',
                border: '3.5px solid rgba(253, 80, 0, 0.98)',
                padding: '1rem 1.5rem',
                borderRadius: '12px',
                maxWidth: '400px'
              }}>
          <h2 className="block mb-5 text-center font-medium text-white-900 dark:text-black">
            Tecnologias usadas 
          </h2>

          {categories.map((cat) => (
            <div key={cat} className="mb-12">
              <hr />
              <h3 className="block mb-5 text-center font-medium text-white-900 dark:text-black">
                {cat}
              </h3>
              <div className="grid grid-cols-5 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
                {technologies
                  .filter((t) => t.category === cat)
                  .map((tech, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.1 }}
                      className="flex flex-col items-center text-center gap-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
                    >
                      {tech.icon}
                      <span className="block mb-5 text-center font-medium text-white-900 dark:text-black">{tech.name}</span>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        <br />
      </section>
      </container>

      <Footer />
    </>
  );
};

export default AboutMe;
