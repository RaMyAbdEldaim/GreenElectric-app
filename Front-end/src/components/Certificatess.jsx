import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Certificate1 from "../assets/pictures/Certificate1.jpg";
import Certificate2 from "../assets/pictures/Certificate2.jpg";
import Certificate3 from "../assets/pictures/Certificate3.jpg";
import NavBar from "./NavBar";
import Footer from "./Footer";


function Certificates() {
  const [show, setShow] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (img) => {
    setSelectedImg(img);
    setShow(true);
  };

  const certificates = [
    {
      title: "SAFETY MANAGEMENT SYSTEM ",
      img: Certificate1, 
      icon: "🏅",
    },
    {
      title: "ENVIROMENTAL MANAGEMENT SYSTEM",
      img: Certificate2,
      icon: "🎖️",
    },
    {
      title: "QUALITY MANAGEMENT SYSTEM",
      img: Certificate3,
      icon: "📜",
    },

  ];

  return (
    <>
    <NavBar/>
    <div className="container mt-5" id="careers">
      <h2 className="text-center mb-4">Certificates</h2>
      <div className="row">
        {certificates.map((cert, index) => (
          <div key={index} className="col-md-4">
            <div
              className="card text-center shadow p-3 mb-5 bg-white rounded"
              onClick={() => handleShow(cert.img)}
              style={{ cursor: "pointer" }}
            >
              <div style={{ fontSize: "40px" }}>{cert.icon}</div>
              <h5 className="mt-3">{cert.title}</h5>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
  <Modal.Body className="d-flex justify-content-center">
    <img 
      src={selectedImg} 
      alt="certificate" 
      className="img-fluid" 
    />
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
  </Modal.Footer>
</Modal>
    </div>
    <Footer/>
  </>);
}

export default Certificates;
