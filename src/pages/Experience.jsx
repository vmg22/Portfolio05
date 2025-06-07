import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
  flex: 1;
`;

const Content = styled.div`
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
`;

const Projects = () => {
  const projectList = [
    {
      title: 'Portfolio Personal',
      description: 'Sitio web para mostrar habilidades y proyectos como desarrollador frontend.',
      image: '/images/portfolio.jpg',
      liveLink: 'https://miportfolio.com',
      githubLink: 'https://github.com/vmg22/Portfolio05.git',
    },
    {
      title: 'Burguer App',
      description: 'Aplicación de pedidos de hamburguesas con carrito de compras y pago en línea.',
      image: '/images/shop.jpg',
      liveLink: 'https://mitienda.com',
      githubLink: 'https://github.com/vmg22/Pag-Burguer.git',
    },
    {
      title: 'Pag Lenguajes de Programación',
      description: 'Página informativa sobre lenguajes de programación populares con recursos y tutoriales.',
      image: '/images/dashboard.jpg',
      liveLink: 'https://dashboardadmin.com',
      githubLink: 'https://github.com/vmg22/Lenguajes-prog.git',
    },
    {
      title: 'GeoGebra',
      description: 'Aplicación de matemáticas interactivas para aprender geometría, álgebra y cálculo.',  
      image: '/images/todo.jpg',
      liveLink: 'https://apptareas.com',
      githubLink: 'https://github.com/vmg22/geoGebra.git',
    },
    {
      title: 'Agenda Tel',
      description: 'Aplicación de agenda telefónica para gestionar contactos con búsqueda y filtrado.',
      image: '/images/blog.jpg',
      liveLink: 'https://blogtecnico.com',
      githubLink: 'https://github.com/vmg22/AGENDA-TEL.git',
    },
  ];

  return (
    <PageWrapper>
      
      <Container>
        

        <Grid container spacing={4}>
          {projectList.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="160"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions sx={{ mt: 'auto', justifyContent: 'space-between', paddingX: 2 }}>
                  <Button size="small" color="primary" href={project.liveLink} target="_blank">
                    Demo
                  </Button>
                  <Button size="small" color="secondary" href={project.githubLink} target="_blank">
                    Código
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    
    </PageWrapper>
  );
};

export default Projects;
