import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiPostman, SiDocker, SiCypress, SiBootstrap, SiPython } from 'react-icons/si';

const skills = [
  {
    name: 'React',
    icon: <FaReact size={40} color="#61DBFB" />, 
    description: 'SPA modernas, React Router y componentes funcionales.',
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs size={40} color="#68A063" />, 
    description: 'Backends con Express y APIs RESTful.',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb size={40} color="#4DB33D" />, 
    description: 'NoSQL escalable para datos flexibles.',
  },
  {
    name: 'Python',
    icon: <SiPython size={40} color="#3776AB" />,
    description: 'Lenguaje versátil para desarrollo web y análisis de datos.',
  },
  {
    name: 'JavaScript',
    icon: <FaJsSquare size={40} color="#F0DB4F" />, 
    description: 'Lenguaje principal para lógica frontend y backend.',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript size={40} color="#007acc" />, 
    description: 'Desarrollo robusto y tipado estático.',
  },
  {
    name: 'HTML & CSS',
    icon: (
      <>
        <FaHtml5 size={40} color="#E34C26" style={{ marginRight: 5 }} />
        <FaCss3Alt size={40} color="#264de4" />
      </>
    ),
    description: 'Diseño web responsivo y semántico.',
  },
  {
    name: 'Express.js',
    icon: <SiExpress size={40} color="#fff" />, 
    description: 'Framework ligero para servicios web.',
  },
  {
    name: 'Postman',
    icon: <SiPostman size={40} color="#FF6C37" />, 
    description: 'Pruebas manuales de APIs y endpoints.',
  },
  {
    name: 'MySQL',
    icon: <FaDatabase size={40} color="#4479A1" />, 
    description: 'Base de datos relacional estructurada.',
  },
  {
    name: 'Cypress',
    icon: <SiCypress size={40} color="white" />, 
    description: 'E2E testing automatizado.',
  },
  {
    name: 'Bootstrap',
    icon: <SiBootstrap size={40} color="#563d7c" />,
    description: 'Framework CSS para diseño responsivo.',
  },
  {
    name: 'Git & GitHub',
    icon: <FaGitAlt size={40} color="#F1502F" />, 
    description: 'Control de versiones y trabajo colaborativo.',
  },
  {
    name: 'Docker',
    icon: <SiDocker size={40} color="#0db7ed" />, 
    description: 'Contenerización y despliegue ágil.',
  },
  
];

const Skills = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Habilidades Técnicas</h2>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              backdropFilter: 'blur(30px)',
              background: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0px 0px 12px rgba(227, 228, 237, 0.37)',
              border: '1.5px solid rgba(255, 255, 255, 0.18)',
              padding: '1rem 1.5rem',
              borderRadius: '12px'
            }}
            className="flex flex-col items-center text-center hover:shadow-xl transition"
          >
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <p className="text-sm text-gray-600">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;


