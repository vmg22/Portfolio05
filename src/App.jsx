import  React  from  'react' ; 
import {   BrowserRouter  as  Router ,   Route ,   Link } from  'react-router-dom' 
import "flowbite";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import { Routes } from "react-router-dom";  
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
