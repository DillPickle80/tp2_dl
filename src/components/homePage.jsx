import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class HomePage extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/1080"
            alt="Première diapositive"
          />
          <Carousel.Caption>
            <h3>Première diapositive</h3>
            <p>Une belle image aléatoire provenant de picsum.photos</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.picsum.photos/id/693/1080/1080.jpg?hmac=G9mgjEXFTw3kpbgysKbi30yPCiGiXQtebQrW-27u9Uc"
            alt="Seconde diapositive"
          />

          <Carousel.Caption>
            <h3>Seconde diapositive</h3>
            <p>Quel magnifique pont!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.picsum.photos/id/804/1080/1080.jpg?hmac=QRMvcwAJSQ9vLf-cq7bm_x2J0jB5Asgc6U0h5eMUWkw"
            alt="Troisième diapositive"
          />

          <Carousel.Caption>
            <h3>Troisième diapositive</h3>
            <p>Grosse journée..!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default HomePage;
