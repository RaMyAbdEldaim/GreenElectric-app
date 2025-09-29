import React from 'react'
import { Container, Row, Col, Button, Card, Modal } from "react-bootstrap";
import "./Homee.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";
import ge from "../assets/ge.jpeg";
import NavBar from './NavBar';
import Footer from "./Footer"
function About() {
  return (
    <>
    <NavBar/>
    <div>
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
    </div>
  <Footer/>
  </>)
}

export default About
