import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import ayoolaLand1 from "../Img/i (1).jpeg"
import ayoolaLand2 from "../Img/i (12).jpg"
import ayoolaLand3 from "../Img/loll (13).jpg"

function LandingPage() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ayoolaLand3}
            alt="First slide"
            style={{ backgroundColor: "chocolate", height: "550px", width: "100vw", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ayoolaLand1}
            alt="Second slide"
            style={{ backgroundColor: "lightblue", height: "550px", width: "100vw", objectFit: "cover" }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ayoolaLand2}
            alt="Third slide"
            style={{ backgroundColor: "darkred", height: "550px", width: "100vw", objectFit: "cover" }}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default LandingPage
