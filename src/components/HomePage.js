import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };


  const Popup = () => {
    return (
      <>
        <div className="modal-wrapper" onClick={closeModal}></div>
        <div className="modal-container">
          <h2>STAY TUNED</h2>
          <p>
            Subscribe to our newsletter and never miss our designs ,latest
            news.etc. Our newsletter is sent once a week, every Monday
          </p>

          <button onClick={closeModal} className="modal-btn">
            OK
          </button>
        </div>
      </>
    );
  };





  

  return (
    <>
      <Container fluid>
        <Row className="main-row-home-1 ">
          {/* //EMERGENCY contact number */}
          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            <center>
              <img
                src="sos.jpg"
                alt="sos image"
                className="card-image img-fluid"
                onClick={() => setShowModal(true)}
              ></img>

              {showModal && <Popup />}
            </center>
          </Col>

          {/* Medicine */}

          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            <center>
              <img
                src="med.jpg"
                alt="medicine image"
                className="card-image img-fluid"
                onClick={() => setShowModal(true)}
                ></img>
                {showModal && <Popup />}
            </center>
          </Col>

          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            <center>
              <img
                src="food.jpg"
                alt="food image"
                className="card-image img-fluid"
                onClick={() => setShowModal(true)}
                ></img>
                {showModal && <Popup />}
            </center>
          </Col>

          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            <center>
              <img
                src="food.jpg"
                alt="food image"
                className="card-image img-fluid"
                onClick={() => setShowModal(true)}
                ></img>
                {showModal && <Popup />}
            </center>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
