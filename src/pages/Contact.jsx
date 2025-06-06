import React, { useRef } from 'react'
import Footer from '../components/Footer'
import styled from 'styled-components'
import Header from '../components/Header'

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3.1rem;
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

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Mensaje enviado correctamente! (simulado)');
    form.current.reset();
  };

  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1 className="text-3xl font-bold text-center mb-6">Contactame</h1>
          <form ref={form} onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              required
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Apellido
            </label>
            <input
              type="text"
              name="apellido"
              required
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Teléfono
            </label>
            <input
              type="text"
              name="telefono"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Describe tu consulta
              </label>
              <textarea
                name="mensaje"
                required
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition"
            >
              Contactame
            </button>
          </form>
        </Content>
      </Container>
      <Footer />
    </>
  )
}

export default Contact
