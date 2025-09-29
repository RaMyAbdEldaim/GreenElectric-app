import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Row, Col } from "react-bootstrap";

import pc1 from "../assets/pic/pc1.jpeg";
import pc2 from "../assets/pic/pc2.jpeg";
import pc3 from "../assets/pic/pc3.jpeg";
import pc4 from "../assets/pic/pc4.jpeg";
import pc5 from "../assets/pic/pc5.jpeg";
import pc6 from "../assets/pic/pc6.jpeg";
import pc7 from "../assets/pic/pc7.jpeg";
import pc8 from "../assets/pic/pc8.jpeg";

const images = [pc1, pc2, pc3, pc4, pc5, pc6, pc7, pc8];

// تقسيم الصور لمجموعات كل مجموعة فيها 3 صور
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

export default function Customers() {
  const groupedImages = chunkArray(images, 3);

  return (
    <div className="container my-4">
      <Carousel
        indicators={false}
        controls={false}
        interval={2000}
        pause={false}
      >
        {groupedImages.map((group, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center text-center">
              {group.map((src, i) => (
                <Col key={i} xs={4}>
                  <img
                    src={src}
                    alt={`Partner ${i}`}
                    className="d-block mx-auto img-fluid"
                    style={{ maxHeight: "80px", objectFit: "contain" }}
                  />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
