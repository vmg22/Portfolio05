import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import biblioteca from '../assets/biblioteca.jpg'
import sandwicheria from '../assets/sandwicheria.jpg'
import geogenio from '../assets/geogenio.jpg'
import portfolio from '../assets/porfolio.jpg'
import productos from '../assets/productos.jpg'
import lenguages from '../assets/lenguages.jpg'

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3.1rem;
  flex: 1;
`

const Content = styled.div`
  margin-top: 2rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
`

const projectos = [
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

const cardColors = [

'Dark'
]

const Projects = () => {
  return (
    <PageWrapper>
      <Header />
      <Container>
        <Content>
          <h1 className="text-4xl font-bold mb-10 text-center" style={{ fontFamily: 'Oswald, sans-serif', color: '#D64218' }}>Proyectos</h1>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {projectos.map((project, idx) => (
              <Card
                bg={cardColors[idx % cardColors.length].toLowerCase()}
                text={cardColors[idx % cardColors.length].toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '20rem', minHeight: '20rem', boxShadow: '0px 0px 12px rgba(82, 95, 218, 0.94)', border: '1.5px solid rgba(255, 255, 255, 0.18)',maxWidth: '400px' }}
                className="mb-4 shadow-lg"
                key={idx}
              >
                <Card.Img variant="top" src={project.image} alt={project.title} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Header className="text-center font-bold" style={{ color: "#D64218" }}>{project.title}</Card.Header>
                <Card.Body className="d-flex flex-column">
                  <Card.Text className="mb-3" style={{ color: "rgba(156, 156, 156, 0.945)" }}>{project.description}</Card.Text>
                  <div className="mt-auto d-flex justify-content-between">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-light btn-sm">
                      Demo
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm">
                      Código
                    </a>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Content>
      </Container>
      <Footer />
    </PageWrapper>
  )
}

export default Projects
