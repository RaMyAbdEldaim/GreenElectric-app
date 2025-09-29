import React from 'react'
import NavBar from './components/NavBar'
import { Navbar, Nav, NavDropdown, Container, Form, Button, Offcanvas, InputGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router , Routes,BrowserRouter,Route} from 'react-router-dom';
import Hero from'./components/Hero'
import ContactForm from './components/ContactForm';
import Home from './components/Home';
import NotFound from './components/Notfound';
import Partnerss from './components/Partnerss';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import About from './components/About';
import Certificatess from './components/Certificatess';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/contactus' element={<ContactForm/>}/>
          <Route path='/Partners' element={<Partnerss/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/certificates' element={<Certificatess/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
