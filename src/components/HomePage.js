import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";

//ahan its here finally
//this is for elder

function sayHello() {
  alert("You clicked me!");
}

const HomePage = () => {
  return (
    <>
      <Container fluid>
        <Row className="main-row-home-1 justify-md-content-center">
          {/* //EMERGENCY contact number */}
          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            <center>
              <img
                src="sos.jpg"
                alt="sos image"
                className="card-image"
                onClick={sayHello}
              ></img>
            </center>
          </Col>

          {/* Medicine */}

          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            <center>
              <img
                src="med.jpg"
                alt="medicine image"
                className="card-image"
                onClick={sayHello}
              ></img>
            </center>
          </Col>
          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            <center>
              <img
                src="food.jpg"
                alt="food image"
                className="card-image"
                onClick={sayHello}
              ></img>
            </center>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
