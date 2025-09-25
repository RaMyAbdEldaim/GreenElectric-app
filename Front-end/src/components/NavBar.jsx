import {React} from 'react';
import {Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Form, Button, Offcanvas, InputGroup  } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logoo from "../assets/logoo.png";
import "../App.css"
import Home from './Home';
import ContactForm from './ContactForm'
import Partnerss from './Partnerss';
export default function NavBar() {
  return (
    <>
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="top"
        className="shadow-sm"
      >
        <Container>
          <Navbar.Brand href="#home" className="fw-bold green ">
            <img
              src={logoo}  
              alt="Logo"
              width="35"
              height="35"
              className="d-inline-block align-top me-2 rounded-circle"
            />    
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end text-success flex-grow-1 pe-3">
                <Nav.Link className='fw-bold green' href='#Home'>Home</Nav.Link>
                <Nav.Link className='fw-bold green' href="#About">About</Nav.Link>
                <Link className='text-decoration-none mt-2 fw-bold green' to={"/contactus"}>
                Contact Us
                </Link>
                <Link className='text-decoration-none mt-2 fw-bold ps-2 green' to={"/Partners"}>
                Industrial division
                </Link>
              </Nav>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}





