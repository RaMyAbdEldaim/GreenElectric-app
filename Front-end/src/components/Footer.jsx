import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {Link } from 'react-router-dom';
import ContactForm from './ContactForm'
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <Container>
        <Row>
          {/* Logo & Social Icons */}
          <Col md={3} className="mb-4">
            <h4 className="fw-bold text-success"> GREEN ELECRTRIC</h4>
            <div className="d-flex gap-3 mt-3 ms-5">
              <a href="mailto:ceo@ge-kwt.com" className="text-light fs-5"><FaEnvelope /></a>
              <a href="https://wa.me/96595554616" className="text-light fs-5"><FaWhatsapp /></a>
              <a href="https://linkedin.com" className="text-light fs-5"><FaLinkedin /></a>
            
            </div>
          </Col>

          {/* Useful Links */}
          <Col md={3} className="mb-4">
            <h5 className="text-danger">Useful Links</h5>
            <ul className="list-unstyled mt-3">
              <li><a href="#About" className="text-light text-decoration-none">About Us</a></li>
               <li><Link className='text-light text-decoration-none' to={"/contactus"}>
                Contact Us
                </Link></li>

              
              
            </ul>
          </Col>

          {/* Policies */}
          <Col md={3} className="mb-4">
            <h5 className="text-danger">Policies</h5>
            <ul className="list-unstyled mt-3">
              <li><a href="#careers" className="text-light text-decoration-none">Careers</a></li>
              <li><Link className='text-light text-decoration-none' to={"/Partners"}>
                Partners
                </Link></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={3} className="mb-4">
            <h5 className="text-danger">Contact Us</h5>
            <p className="mt-3"><FaMapMarkerAlt />Space Tower floor 1, Abduaziz Hamad AlSaqer St., Mirqab, kuwait city</p>
            <p><FaPhone /> +965 95554616</p>
            <p><FaEnvelope />ceo@ge-kwt.com</p>
          </Col>
        </Row>

        <hr className="border-light" />
        <div className="text-center small">
          © All rights reserved to GREEN ELECTRIC | Designed & Developed By Y&R Tech
        </div>
      </Container>
    </footer>
  );
}

export default Footer;


