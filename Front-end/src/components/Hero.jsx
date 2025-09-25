import logoo from "../assets/logoo.png";
import React, { useState } from "react";
import {Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card, Modal } from "react-bootstrap";
import "./Homee.css"; 
import "bootstrap-icons/font/bootstrap-icons.css";
import ge from '../assets/ge.jpeg';
import Customers from './Customers';
import Certificates from "./Certificates";
export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { 
      title: "Electrical Solutions", 
      icon: "⚡",
      description: "We provide comprehensive electrical solutions for industrial and marine applications.",
      details: "Our electrical services include power system design, installation, maintenance, and troubleshooting for a wide range of applications. We specialize in energy-efficient solutions and renewable energy integration."
    },
    { 
      title: "Marine Services", 
      icon: "⛴️",
      description: "Professional marine electrical services for vessels and offshore installations.",
      details: "Our marine services cover electrical systems for ships, ports, and offshore platforms. We offer 24/7 support, emergency repairs, and compliance with international marine regulations and safety standards."
    },
    { 
      title: "Petroleum Operations", 
      icon: "🛢️",
      description: "Electrical solutions tailored for the petroleum and gas industry.",
      details: "We provide specialized electrical services for petroleum operations including refineries, pipelines, and drilling operations. Our solutions prioritize safety, reliability, and compliance with explosive atmosphere regulations."
    },
    { 
      title: "Sustainable Projects", 
      icon: "🌱",
      description: "Green energy solutions and sustainable electrical projects.",
      details: "Our sustainable projects division focuses on renewable energy integration, energy efficiency audits, and green technology implementation. We help clients reduce their carbon footprint and energy costs."
    },
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <div className="home-page" id="Home">
      <section className="heroo d-flex align-items-center text-center text-light">
        <Container>
          <img
            src={logoo} 
            alt="Green Electric Logo"
            className="mb-3 hero-logo"
          />
          <h4 className="fw-bold">Green Electric For Petroleum And Marine Services Co.W.L.L</h4>
          <h4>شركة جرين اليكتريك للخدمات البتروليه والبحريه ذ.م.م</h4>
          <div className="mt-4">
            <Button variant="success" size="lg" className="me-3">
              <a  href="#About" className="text-decoration-none text-light"> Learn More </a>
            </Button>
            <Button variant="outline-light" size="lg">
              <Link className="text-decoration-none text-light " to={"/contactus"}><span className="hove">Contact Us</span></Link>  
            </Button>
          </div>
        </Container>
      </section>

      <section className="about py-5" id="About">
        
      
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2>About Al Green Electric</h2>
              <p>
                At Green Electric, we aim to support your electrical, automation,
                instrumentation, and Mechanical processes in any way possible. Our
                experience in these core fields, processes, and retrofit/ repair work
                is extensive. We stay up-to-date on the best practices in the
                industries. Our efficient Setup makes us mobile, readily available,
                and cost-effective.
              </p>
              <p>
                We always strive for excellence with a customer-focused approach. We
                believe in adapting quickly to the changing environment and see every
                change and challenge as an opportunity to set us apart and distinguish
                ourselves.
              </p>
              <p>
                We have a great aptitude for providing solutions for obsolete spares,
                retrofits & upgrades. That is how Green Electric gained a competitive
                edge over others. Main Sectors are Oil & Gas, Marine, Offshore, Power
                plants, and Renewable Energy
              </p>
            </div>
           
            <div className="col-lg-4 about-img text-center">
              <img src={ge} alt="GE Company" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>
     
      <div className="container py-5">
        <div className="row g-4">
         
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card feature-card shadow-sm bg-white">
              <div className="card-body">
                <div className="feature-icon icon-red mb-3">
                  <i className="bi bi-gear-fill"></i>
                </div>
                <h5 className="card-title mb-3">Consultancy & Trading</h5>
                <ul className="text-muted small">
                  <li>
                    We provide consultancy services from conceptual design till
                    project completion.
                  </li>
                  <li>
                    we provide high-performance trading by sourcing the best &
                    economical
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card feature-card shadow-sm bg-white">
              <div className="card-body">
                <div className="feature-icon icon-blue mb-3">
                  <i className="bi bi-building"></i>
                </div>
                <h5 className="card-title mb-3">EPC Projects</h5>
                <ul className="text-muted small">
                  <li>
                    Through strategic alliances with leading vendors, engineering and
                    construction companies,
                  </li>
                  <li>
                    we undertake turnkey EPC projects. Depending on project size &
                    scope, we act as main or sub-contractor.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card feature-card shadow-sm bg-white">
              <div className="card-body">
                <div className="feature-icon icon-pink mb-3">
                  <i className="bi bi-tools"></i>
                </div>
                <h5 className="card-title mb-3">Maintenance & Training</h5>
                <ul className="text-muted small">
                  <li>We perform specialist maintenance services and customer training</li>
                  <li>
                    understanding the importance of effective communication and
                    collaboration.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
          
              <Customers/>
      
      <section className="services py-5 bg-light" id="Services">
        <Container>
          <h2 className="text-center mb-5">Our Services</h2>
          <Row>
            {services.map((service, idx) => (
              <Col md={6} lg={3} key={idx} className="mb-4">
                <Card 
                  className="h-100 shadow-sm text-center p-3 service-card"
                  onClick={() => handleServiceClick(service)}
                  style={{ cursor: 'pointer' }}
                >
                  <Card.Body>
                    <div className="display-4 service-icon">{service.icon}</div>
                    <Card.Title className="mt-3">{service.title}</Card.Title>
                    <Card.Text className="mt-3">{service.description}</Card.Text>
                    <Button variant="outline-primary" size="sm">
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Service Detail Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <span className="me-2">{selectedService?.icon}</span>
            {selectedService?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={12}>
              <p className="lead">{selectedService?.description}</p>
              <p>{selectedService?.details}</p>
              
              <div className="bg-light p-3 rounded mt-4">
                <h6>Our offerings include:</h6>
                <ul>
                  <li>Professional consultation and assessment</li>
                  <li>Customized solutions for your specific needs</li>
                  <li>24/7 emergency support services</li>
                  <li>Compliance with international standards</li>
                  <li>Ongoing maintenance and support packages</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            <Link className="text-decoration-none text-light " to={"/contactus"}>Contact Us About This Service</Link>
          </Button>
        </Modal.Footer>
      </Modal>
            <Certificates/>

    </div>
  );
}