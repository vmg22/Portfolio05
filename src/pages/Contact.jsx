// src/pages/Contact.js
import React, { useRef, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Header from '../components/Header';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

const SERVICE_ID = 'service_ph3jml8';
const TEMPLATE_ID = 'template_ln99hge';
const PUBLIC_KEY = 'dtfnAKp_9pL3-teZW';

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

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current)
      .then(() => {
        toast.success('¡Mensaje enviado correctamente!');
        form.current.reset();
      })
      .catch((error) => {
        toast.error('Error al enviar el mensaje. Intenta nuevamente.');
        console.error('EmailJS Error:', error);
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <>
      <Header />
      <Container>
        <Content>
          <motion.h1
            className="text-3xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contactame
          </motion.h1>

          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            className="max-w-sm mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <label className="block mb-2 text-sm font-medium text-white-900 dark:text-black">
              Nombre
            </label>
            <input type="text" name="nombre" required className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

            <label className="block mb-2 text-sm font-medium text-white-900 dark:text-black">
              Apellido
            </label>
            <input type="text" name="apellido" required className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

            <label className="block mb-2 text-sm font-medium text-white-900 dark:text-black">
              Teléfono
            </label>
            <input type="text" name="telefono" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-white-900 dark:text-black">
                Correo Electrónico
              </label>
              <input type="email" name="email" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-white-900 dark:text-black">
                Describe tu consulta
              </label>
              <textarea name="mensaje" required className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>

            <motion.button
              type="submit"
              disabled={sending}
              whileTap={{ scale: 0.98 }}
              className={`mt-6 w-full ${sending ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} text-white font-bold py-2 px-4 rounded-lg transition`}
            >
              {sending ? 'Enviando...' : 'Contactame'}
            </motion.button>
          </motion.form>
        </Content>
      </Container>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Contact;
