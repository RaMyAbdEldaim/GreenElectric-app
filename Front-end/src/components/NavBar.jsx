import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Offcanvas
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logoo from "../assets/logoo.png";
import "../App.css";

export default function NavBar() {
  return (
    <>
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="top"
        className="shadow-sm py-2"
      >
        <Container>
          {/* Logo + Title */}
          <Navbar.Brand
            className="fw-bold text-success d-flex align-items-center"
          >
            <img
              src={logoo}
              alt="Logo"
              width="42"
              height="42"
              className="d-inline-block align-top me-2 rounded-circle border border-2 border-success"
            />
            <span className="d-none d-sm-inline">Green Electric</span>
          </Navbar.Brand>

          {/* Toggle Button */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" />

          {/* Offcanvas Menu */}
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className="bg-dark text-white"
          >
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title
                id="offcanvasNavbarLabel"
                className="fw-bold text-success"
              >
                Navigation
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-1 gap-2">
                <Link className="fw-bold text-success text-decoration-none nav-link" to={'/'}>
                  Home
                </Link>
                <Link className="fw-bold text-success text-decoration-none nav-link" to={'/about'}>
                  About
                </Link>
                <Link className="fw-bold text-success text-decoration-none nav-link" to={'/certificates'}>
                  Certificates
                </Link>
                <Link
                  className="fw-bold text-success nav-link"
                  to={"/Partners"}
                >
                  Industrial Division
                </Link>
                <Link
                  className="fw-bold text-success nav-link"
                  to={"/contactus"}
                >
                  Contact Us
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
