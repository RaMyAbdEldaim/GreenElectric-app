import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card, Modal } from "react-bootstrap";
import "./Homee.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ge from "../assets/ge.jpeg";
import Logo from "../assets/logoo.png"; // ✅ لازم يكون الامتداد مظبوط
import Certificates from "./Certificates";
import "../App.css";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Electrical Solutions",
      icon: "⚡",
      description:
        "We provide comprehensive electrical solutions for industrial and marine applications.",
      details:
        "Our electrical services include power system design, installation, maintenance, and troubleshooting for a wide range of applications. We specialize in energy-efficient solutions and renewable energy integration.",
    },
    {
      title: "Marine Services",
      icon: "⛴️",
      description:
        "Professional marine electrical services for vessels and offshore installations.",
      details:
        "Our marine services cover electrical systems for ships, ports, and offshore platforms. We offer 24/7 support, emergency repairs, and compliance with international marine regulations and safety standards.",
    },
    {
      title: "Petroleum Operations",
      icon: "🛢️",
      description:
        "Electrical solutions tailored for the petroleum and gas industry.",
      details:
        "We provide specialized electrical services for petroleum operations including refineries, pipelines, and drilling operations. Our solutions prioritize safety, reliability, and compliance with explosive atmosphere regulations.",
    },
    {
      title: "Sustainable Projects",
      icon: "🌱",
      description: "Green energy solutions and sustainable electrical projects.",
      details:
        "Our sustainable projects division focuses on renewable energy integration, energy efficiency audits, and green technology implementation. We help clients reduce their carbon footprint and energy costs.",
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
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center text-center text-light">
        <Container>
          {/* Logo */}
          <img
            src={Logo}
            alt="Green Electric Logo"
            className="mb-4 hero-logo img-fluid"
          />

          {/* English Title */}
          <h3 className="fw-bold mb-2">
            Green Electric For Petroleum And Marine Services Co. W.L.L
          </h3>

          {/* Arabic Title */}
          <h4 className="fw-semibold mb-4">
            شركة جرين إليكتريك للخدمات البترولية والبحرية ذ.م.م
          </h4>

          {/* Buttons */}
          <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
            <Button
              variant="success"
              size="lg"
              className="px-4 shadow-sm btn-custom"
              as={Link}
              to="#About"
            >
              Learn More
            </Button>
            <Button
              variant="outline-light"
              size="lg"
              className="px-4 shadow-sm btn-custom"
              as={Link}
              to="/contactus"
            >
              Contact Us
            </Button>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="about-section py-5" id="About">
        <div className="container">
          <div className="row align-items-center">
            {/* النص */}
            <div className="col-lg-7 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-4 text-success">About Green Electric</h2>
              <p className="text-muted mb-3">
                At Green Electric, we aim to support your electrical, automation,
                instrumentation, and mechanical processes in any way possible.
                Our experience in these core fields, processes, and retrofit/repair
                work is extensive. We stay up-to-date on the best practices in the
                industries. Our efficient setup makes us mobile, readily available,
                and cost-effective.
              </p>
              <p className="text-muted mb-3">
                We always strive for excellence with a customer-focused approach.
                We believe in adapting quickly to the changing environment and see
                every change and challenge as an opportunity to set us apart.
              </p>
              <p className="text-muted">
                We have a great aptitude for providing solutions for obsolete
                spares, retrofits & upgrades. Main Sectors are Oil & Gas, Marine,
                Offshore, Power plants, and Renewable Energy.
              </p>
            </div>

            {/* الصورة */}
            <div className="col-lg-5 text-center">
              <img
                src={ge}
                alt="GE Company"
                className="img-fluid rounded shadow-lg about-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card feature-card shadow-sm bg-white h-100">
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
                    We provide high-performance trading by sourcing the best &
                    economical.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card feature-card shadow-sm bg-white h-100">
              <div className="card-body">
                <div className="feature-icon icon-blue mb-3">
                  <i className="bi bi-building"></i>
                </div>
                <h5 className="card-title mb-3">EPC Projects</h5>
                <ul className="text-muted small">
                  <li>
                    Through strategic alliances with leading vendors, engineering,
                    and construction companies,
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
            <div className="card feature-card shadow-sm bg-white h-100">
              <div className="card-body">
                <div className="feature-icon icon-pink mb-3">
                  <i className="bi bi-tools"></i>
                </div>
                <h5 className="card-title mb-3">Maintenance & Training</h5>
                <ul className="text-muted small">
                  <li>
                    We perform specialist maintenance services and customer
                    training.
                  </li>
                  <li>
                    Understanding the importance of effective communication and
                    collaboration.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="services py-5 bg-light" id="Services">
        <Container>
          <h2 className="text-center mb-5">Our Services</h2>
          <Row>
            {services.map((service, idx) => (
              <Col xs={12} sm={6} lg={3} key={idx} className="mb-4">
                <Card
                  className="h-100 shadow-sm text-center p-3 service-card"
                  onClick={() => handleServiceClick(service)}
                  style={{ cursor: "pointer" }}
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
          <Button as={Link} to="/contactus" variant="primary">
            Contact Us About This Service
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Certificates */}
      <Certificates />
    </div>
  );
}
