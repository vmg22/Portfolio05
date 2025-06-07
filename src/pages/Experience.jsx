
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt,
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiTypescript, SiPostman, SiDocker, SiCypress,
} from 'react-icons/si';

const technologies = [
  { name: 'HTML', icon: <FaHtml5 size={40} color="#E34C26" />, category: 'Frontend' },
  { name: 'CSS', icon: <FaCss3Alt size={40} color="#264de4" />, category: 'Frontend' },
  { name: 'JavaScript', icon: <FaJsSquare size={40} color="#F0DB4F" />, category: 'Frontend' },
  { name: 'TypeScript', icon: <SiTypescript size={40} color="#007acc" />, category: 'Frontend' },
  { name: 'React', icon: <FaReact size={40} color="#61DBFB" />, category: 'Frontend' },

  { name: 'Node.js', icon: <FaNodeJs size={40} color="#68A063" />, category: 'Backend' },
  { name: 'Express', icon: <SiExpress size={40} color="#ffffff" />, category: 'Backend' },
  { name: 'Postman', icon: <SiPostman size={40} color="#FF6C37" />, category: 'Backend' },
  { name: 'Cypress', icon: <SiCypress size={40} color="#ffffff" />, category: 'Backend' },
  { name: 'Jest', icon: <SiCypress size={40} color="#ffffff" />, category: 'Backend' },

  { name: 'MongoDB', icon: <SiMongodb size={40} color="#4DB33D" />, category: 'Database' },
  { name: 'MySQL', icon: <FaDatabase size={40} color="#4479A1" />, category: 'Database' },
  { name: 'Cassandra', icon: <FaDatabase size={40} color="#4479A1" />, category: 'Database' },

  { name: 'Git', icon: <FaGitAlt size={40} color="#F1502F" />, category: 'DevOps' },
  { name: 'Docker', icon: <SiDocker size={40} color="#0db7ed" />, category: 'DevOps' },
];

const Skills = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    // Run on mount
    updateMode();

    // Observe class changes
    const observer = new MutationObserver(updateMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const bgColor = isDark ? '#181818' : '#ffffff';
  const textColor = isDark ? '#c0c0c0' : '#0099ff';

  const categories = ['Frontend', 'Backend', 'Database', 'DevOps'];

  return (
    <section
      className="w-full px-4 py-16"
      style={{ background: bgColor, color: textColor }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Skills
        </h2>
        {categories.map((cat) => (
          <div key={cat} className="mb-12">
            <h3 className="text-center text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {cat}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
              {technologies
                .filter((t) => t.category === cat)
                .map((tech, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center text-center gap-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
