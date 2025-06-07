import React from 'react'
import { motion } from 'framer-motion'
import biblioteca from '../assets/biblioteca.jpg'
import sandwicheria from '../assets/sandwicheria.jpg'
import geogenio from '../assets/geogenio.jpg'
import portfolio from '../assets/porfolio.jpg'
import productos from '../assets/productos.jpg'
import lenguages from '../assets/lenguages.jpg'

const projects = [
{
title: 'Portfolio Personal',
description: 'Sitio web para mostrar habilidades y proyectos como desarrollador frontend.',
image: portfolio,
liveLink: 'https://miportfolio.com',
githubLink: 'https://github.com/vmg22/Portfolio05.git',
},
{
title: 'Burguer App',
description: 'Aplicación de pedidos de hamburguesas con carrito de compras y pago en línea.',
image: sandwicheria,
liveLink: 'https://mitienda.com',
githubLink: 'https://github.com/vmg22/Pag-Burguer.git',
},
{
title: 'Pag Lenguajes de Programación',
description: 'Página informativa sobre lenguajes de programación populares con recursos y tutoriales.',
image: lenguages,
liveLink: 'https://dashboardadmin.com',
githubLink: 'https://github.com/vmg22/Lenguajes-prog.git',
},
{
title: 'GeoGenio',
description: 'Aplicación de geografía para aprender sobre países, capitales y datos geográficos.',
image: geogenio,
liveLink: 'https://apptareas.com',
githubLink: 'https://github.com/vmg22/geoGebra.git',
},
{
title: 'Biblioteca',
description: 'Aplicación de biblioteca para gestionar libros y préstamos.',
image: biblioteca,
liveLink: 'https://blogtecnico.com',
githubLink: 'https://github.com/vmg22/AGENDA-TEL.git',
},
{
title: 'Inventario',
description: 'Aplicación de inventario para gestionar productos y stock.',
image: productos,
liveLink: 'https://blogtecnico.com',
githubLink: 'https://github.com/vmg22/AGENDA-TEL.git',
},
]

const Projects = () => {
return (
<section className="min-h-screen bg-white dark:bg-black text-black dark:text-white py-16 px-4">
<div className="max-w-6xl mx-auto">
<h2 className="text-4xl font-bold mb-10 text-center">Proyectos</h2>
<div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
{projects.map((project, index) => (
<motion.div bg-white dark:bg-black
key={index}

initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, delay: index * 0.1 }}
whileHover={{ scale: 1.03 }}
className="flex flex-col items-center  mx-auto w-full max-w-sm p-6 rounded-xl 
            bg-white dark:bg-zinc-900 border  border-zinc-200 dark:border-zinc-700 
            shadow-lg dark:shadow-zinc-800 transition"
style={{
boxShadow: '0px 0px 12px rgba(227, 228, 237, 0.37)',
}}
>
<img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4 bg-orange-200" />
<h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
<p className="text-sm text-gray-700 dark:text-gray-300 text-center mb-4">
{project.description}
</p>
<div className="flex justify-between w-full mt-auto bg-white/10 dark:bg-black/20 p-4 rounded-b-md">
<a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline" >
Demo
</a>
<a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-pink-500 dark:text-pink-400 hover:underline" >
Código
</a>
</div>
</motion.div>
))}
</div>
</div>
</section>
)
}

export default Projects