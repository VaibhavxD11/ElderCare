import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./HomePage.css";

//ahan its here finally
//this is for elder

const HomePage = () => {
  return (
    <>
      <Container fluid>
        <Row className="main-row-home-1 justify-md-content-center">
          {/* //EMERGENCY contact number */}
          <Col className="col-1" xs={12} sm={6} md={6} lg={4}>
            <center>
              <Card style={{ width: "300px", height: "300px" }}>
                <Card.Body>
                  <Card.Img
                    variant="center"
                    src="sos.jpg"
                    className="card-image"
                  />
                  <Card.Title>EMERGENCY</Card.Title>
                </Card.Body>
              </Card>
            </center>
          </Col>

          {/* Medicine */}

          <Col className="col-1" xs={12} sm={6} md={6} lg={4}>
            <center>
              <Card style={{ width: "300px", height: "300px" }}>
                <Card.Body>
                  <Card.Img
                    variant="center"
                    src="med.jpg"
                    className="card-image"
                  />
                  <Card.Title>MEDICINE</Card.Title>
                </Card.Body>
              </Card>
            </center>
          </Col>

          {/* FOOD LOGGER */}
          <Col className="col-1" xs={12} sm={6} md={6} lg={4}>
            <center>
              <Card style={{ width: "300px", height: "300px" }}>
                <Card.Body>
                  <Card.Img
                    variant="center"
                    src="food.jpg"
                    className="card-image"
                  />
                  <Card.Title>FOOD LOGGER</Card.Title>
                </Card.Body>
              </Card>
            </center>
          </Col>

          <Col className="col-1" xs={12} sm={6} md={6} lg={4}>
            <center>
              <Card style={{ width: "300px", height: "300px" }}>
                <Card.Img variant="center" src="food.png" />
                <Card.Body>
                  <Card.Title>Emergency Numbers</Card.Title>
                </Card.Body>
              </Card>
            </center>
          </Col>

          <Col className="col-1" xs={12} sm={6} md={6} lg={4}>
            <center>
              <Card style={{ width: "300px", height: "300px" }}>
                <Card.Img variant="center" src="food.png" />
                <Card.Body>
                  <Card.Title>Emergency Numbers</Card.Title>
                </Card.Body>
              </Card>
            </center>
          </Col>

          {/* Card Number 2 */}
          <Col className="col-1" xs={12} sm={6} md={6} lg={4}>
            <center>
              <Card style={{ width: "300px", height: "300px" }}>
                <Card.Img variant="center" src="food.png" />
                <Card.Body>
                  <Card.Title>12345 Numbers</Card.Title>
                </Card.Body>
              </Card>
            </center>
          </Col>

          <Col className="col-1" xs={12} sm={6} md={6} lg={4}>
            <center>
              <Card style={{ width: "300px", height: "300px" }}>
                <Card.Img variant="center" src="food.png" />
                <Card.Body>
                  <Card.Title>Emergency Numbers</Card.Title>
                </Card.Body>
              </Card>
            </center>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
