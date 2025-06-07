import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import useStore from './store/UseStore';
import Header from './components/Header'; // <-- importante

function App() {
  const { isDarkMode } = useStore();

  return (
    <div className={isDarkMode ? 'dark bg-black text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      <Router>
         {/* <-- movido aquí */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
