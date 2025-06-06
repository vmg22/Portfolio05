import React from 'react';
import '../../styles/Experience.css'
import { Carousel } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiJest, SiPostman, SiDocker, SiCypress, SiGithub } from 'react-icons/si';

const technologies = [
  {
    name: 'React',
    icon: <FaReact size={50} color="#61DBFB" />,
    description: 'Desarrollo de interfaces SPA modernas con React y React Router.',
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs size={50} color="#68A063" />,
    description: 'APIs RESTful y lógica de negocio con Express y Node.js.',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb size={50} color="#4DB33D" />,
    description: 'Base de datos NoSQL para manejo ágil de datos y escalabilidad.',
  },
  {
    name: 'Express',
    icon: <SiExpress size={50} color="#ffff" />,
    description: 'Framework backend minimalista para construir APIs robustas.',
  },
  {
    name: 'JavaScript',
    icon: <FaJsSquare size={50} color="#F0DB4F" />,
    description: 'Lenguaje principal para desarrollo frontend y backend.',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript size={50} color="#007acc" />,
    description: 'Código tipado y más robusto para proyectos complejos.',
  },
  {
    name: 'Cassandra',
    icon: <FaDatabase size={50} color="#4479A1" />,
    description: 'Base de datos NoSQL para manejo ágil de datos y escalabilidad.',
  },
  {
    name: 'HTML & CSS',
    icon: (
      <>
        <FaHtml5 size={50} color="#E34C26" style={{ marginRight: 10 }} />
        <FaCss3Alt size={50} color="#264de4" />
      </>
    ),
    description: 'Maquetación semántica y diseño responsivo.',
  },
  {
    name: 'Postman',
    icon: <SiPostman size={50} color="#FF6C37" />,
    description: 'Testing manual de APIs REST y validación de endpoints.',
  },
  {
    name: 'MySQL',
    icon: <FaDatabase size={50} color="#4479A1" />,
    description: 'Sistema de gestión de bases de datos relacional.',
  },
  {
    name: 'Cypress',
    icon: <SiCypress size={50} color="#ffff" />,
    description: 'Pruebas end-to-end para aplicaciones web.',
  },
  {
    name: 'Git',
    icon: <FaGitAlt size={50} color="#F1502F" />,
    description: 'Control de versiones y colaboración con Git y GitHub.',
  },
  {
    name: 'Docker',
    icon: <SiDocker size={50} color="#0db7ed" />,
    description: 'Contenerización de aplicaciones para facilitar despliegue.',
  },
];

const Skills = () => {
  return (
    <div className="experience-container p-4"
    >
      <h2 className="text-center mb-4">Skills</h2>
      <Carousel interval={4000} indicators={false}>
        {technologies.map((tech, index) => (
          <Carousel.Item key={index} className="text-center">
            <div
              className="d-flex flex-column align-items-center mx-auto"
              style={{
                backdropFilter: 'blur(30px)',
                background: 'rgba(0, 0, 0, 0.1)',
                boxShadow: '0px 0px 12px rgba(227, 228, 237, 0.37)',
                border: '1.5px solid rgba(255, 255, 255, 0.18)',
                padding: '1rem 1.5rem',
                borderRadius: '12px',
                maxWidth: '400px'
              }}
            >
              <div>{tech.icon}</div>
              <h5 className="mt-3">{tech.name}</h5>
              <p className="w-75 mx-auto" style={{ color: "rgba(82, 95, 218, 0.94)" }}>{tech.description}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Skills;