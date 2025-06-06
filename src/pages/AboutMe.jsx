import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Footer from "../components/Footer";
import Skills from "../pages/home/Skills"

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
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
`;

const AboutMe = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>Sobre mí</h1>
          <p>
            Soy un desarrollador web apasionado por crear experiencias digitales
            únicas. Me especializo en React y tengo experiencia en el desarrollo
            de aplicaciones web modernas y responsivas.
          </p>
          <p>
            Me encanta aprender nuevas tecnologías y siempre estoy buscando
            mejorar mis habilidades. En mi tiempo libre, disfruto contribuir a
            proyectos de código abierto y explorar nuevas tendencias en el mundo
            del desarrollo web.
          </p>
          <p>
            Si quieres saber más sobre mis proyectos o colaborar, ¡no dudes en
            contactarme!
          </p>
        </Content>
      </Container>
      <Skills />
      <br /> <br /> <br />
      <Footer />
    </>
  );
};

export default AboutMe;
