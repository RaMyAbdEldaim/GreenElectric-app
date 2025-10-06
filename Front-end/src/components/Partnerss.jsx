import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import ge from '../assets/pictures/ge.jpeg'
// import شركه1  from "../assets/pictures/شركه 1.jpeg";
// import شركه2  from "../assets/pictures/شركه2.jpeg";
// import شركه3  from "../assets/pictures/شركه3.jpeg";
// import شركه4  from "../assets/pictures/شركه4.jpeg";
// import شركه5  from "../assets/pictures/شركه5.jpeg";
// import شركه6  from "../assets/pictures/شركه6.jpeg";
// import شركه7  from "../assets/pictures/شركه7.jpeg";
// import شركه8 from "../assets/pictures/شركه8.jpeg";
import شركه9  from "../assets/pictures/شركه9.jpeg";
// import شركه10  from "../assets/pictures/شركه10.jpeg";
import شركه11 from "../assets/pictures/شركه11.jpeg";
// import شركه12 from "../assets/pictures/شركه12.jpeg";
// import شركه14 from "../assets/pictures/شركه14.jpeg";
import شركه15 from "../assets/pictures/شركه15.jpeg";
import شركه16 from "../assets/pictures/شركه16.jpeg";
import شركه17 from "../assets/pictures/شركه17.jpeg";
// import شركه18 from "../assets/pictures/شركه 18.jpeg";
import شركه19 from "../assets/pictures/شركه 19.jpeg";
// import شركه20 from "../assets/pictures/شركه20.jpeg";
// import شركه21 from "../assets/pictures/شركه21.jpeg";
import شركه24 from "../assets/pictures/شركه24.jpeg";
import NavBar from "./NavBar";
import Footer from "./Footer";
const Partners = [
  // { name: "Riken Company", img: شركه1 },
  // { name: "victron energy Company", img: شركه2 },
  // { name: "Senko Company", img: شركه3 },
  // { name: "cotrem Company", img: شركه4 },
  // { name: "FCG Company", img: شركه5 },
  // { name: "AEG Company", img: شركه6 },
  // { name: "IMCA Company", img: شركه7 },
  // { name: "SIEMENS Company", img: شركه8 },
  { name: "", img: شركه9 },
  // { name: "LAPP Company", img: شركه10 },
  { name: "", img: شركه11 },
  // { name: "ROVO Company", img: شركه12 },
  // { name: "impa Company", img: شركه14 },
  { name: "", img: شركه15 },
  { name: "", img: شركه16 },
  { name: "", img: شركه17 },
  // { name: "blueye Company", img: شركه18 },
 { name: "", img: شركه19 },
  // { name: "victron energy Company", img: شركه20 },
  // { name: "JIULI ROPE Company", img: شركه21 },
  { name: "", img: شركه24 },
];


function Partnerss() {
  return (
    <>
    <NavBar/>
    <section className="py-5 bg-light" id="partners">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center mb-5">
          <h2 className="fw-bold me-3">🤝 Partners</h2>
        </div>

        <div className="row g-4">
          {Partners.map((Partners, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <div className="card shadow-sm border-0 text-center p-3 h-100">
                <img
                  src={Partners.img}
                  className="img-fluid mx-auto d-block"
                  alt={Partners.name}
                  style={{ maxHeight: "80px", objectFit: "contain" }}
                />
                <div className="card-body p-2">
                  <h6 className="card-title small">{Partners.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
  </>);
}

export default Partnerss;