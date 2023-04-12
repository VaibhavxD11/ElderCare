import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Select from 'react-select';
import Select from "react-select";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";


function select() {
  let options = [{ label: "One", value: "one" }, { label: "Two", value: "two" }, { label: "Three", value: "three" }]
  return (
    <Select options={options}
      defaultValue={{ label: "Choose one", value: "" }}></Select>
  )
}

const HomeGuardian = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const Categories = [
    { label: "Food", value: 1 },
    { label: "Medicine", value: 2 },
    { label: "Checkup", value: 3 },
    { label: "Phone Number", value: 4 },
    { label: "Exercise", value: 5 }
  ]


  useEffect(() => {
    if (!window.isLoggedIn) {
      window.location.replace('/login'); // Replace with your desired page URL
    }

  }, [window.isLoggedIn]);

  useEffect(() => {
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener('popstate', onBackButtonEvent);

    return () => {
      window.removeEventListener('popstate', onBackButtonEvent);
    };
  }, []);

  const onBackButtonEvent = (e) => {
    e.preventDefault();
    window.history.pushState(null, null, window.location.pathname);
  };

  window.signout = true;
  ;

  const Med = () => {
    return (
      null
    );
  };


  return (
    <>
      <Navbar />
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
              {showModal && <Med />}
            </center>
          </Col>

          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            <center>
              <img
                src="med.jpg"
                alt="medicine image"
                className="card-image img-fluid"
                onClick={() => setShowModal(true)}
              ></img>
              {showModal && <Med />}
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
              {showModal && <Med />}
            </center>
          </Col>

          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            <center>
              <img
                src="checkup.png"
                alt="food image"
                className="card-image img-fluid"
                onClick={() => setShowModal(true)}
              ></img>
              {showModal && <Med />}
            </center>
          </Col>

          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            <center>
              <img
                src="family.png"
                alt="food image"
                className="card-image img-fluid"
                onClick={() => setShowModal(true)}
              ></img>
              {showModal && <Med />}
            </center>
          </Col>

          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            <center>
              <img
                src="yoga.jpeg"
                alt="food image"
                className="card-image img-fluid"
                onClick={() => setShowModal(true)}
              ></img>
              {showModal && <Med />}
            </center>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default HomeGuardian;
