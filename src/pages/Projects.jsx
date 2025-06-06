import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import Footer from '../components/Footer'

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  max-width: 800px;
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

const Projects = () => {
  return (
    <PageWrapper>
      <Header />
      <Container>
        <Content>
          <h1>Proyectos</h1>  
          <p>
            Aquí encontrarás una selección de mis proyectos más recientes. Cada uno refleja mi pasión por el desarrollo web y mi compromiso con la calidad.
          </p>
          <p>Aquí puedes ver algunos de mis proyectos más recientes.</p>
        </Content>
      </Container>
      <Footer />
    </PageWrapper>
  )
}

export default Projects
