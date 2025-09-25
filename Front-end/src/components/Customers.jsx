import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/ccustomers.css";
import pc1 from "../assets/pic/pc1.jpeg"
import pc2 from "../assets/pic/pc2.jpeg"
import pc3 from "../assets/pic/pc3.jpeg"
import pc4 from "../assets/pic/pc4.jpeg"
import pc5 from "../assets/pic/pc5.jpeg"
import pc6 from "../assets/pic/pc6.jpeg"
import pc7 from "../assets/pic/pc7.jpeg"
import pc8 from "../assets/pic/pc8.jpeg"
function CustomersBar() {
  return (
    <div className="customers-bar">
      <div className="scrolling v ">
        <img src={pc1} alt="Partner 1" />
        <img src={pc2} alt="Partner 2" />
        <img src={pc3} alt="Partner 3" />
        <img src={pc4} alt="Partner 4" />
        <img src={pc5} alt="Partner 5" />
        <img src={pc6} alt="Partner 6" />
        <img src={pc7} alt="Partner 7" />
        <img src={pc8} alt="Partner 8" />
      </div>
    </div>
  );
}

export default CustomersBar;