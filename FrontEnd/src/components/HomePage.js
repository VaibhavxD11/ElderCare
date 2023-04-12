import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import "./toast.css";


const HomePage = () => {

  
  useEffect(() => {
    toast.success('Login Success !', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      closeOnClick: false,
      theme: "light",
      pauseOnHover: false,
    });
  }, []);

  
  

  const [Edata, setEData] = useState({
    id: window.Eusername
  });
  

  function UserDetails() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchUser = async () => {
        try {
          const url = "http://localhost:8080/userdetails";
          const { data: res } = await axios.post(url, Edata);
          setUser(res);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      fetchUser();
    }, [window.Eusername]);

    if (loading) {
      return null;
    }

    if (!user) {
      return <div>User not found</div>;
    }

    // profile data

    window.elderName = user.elderName;
    window.num = user.number;
    window.guardName = user.guardName;

    return (
      null
    );
  }



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
  

  const [showProfile, setShowProfile] = useState(false);
  const closeProfile = () => {
    setShowProfile(false);
  }



  const Profile = () => {
    return (
      <>

        <div className="modal-wrapper-prof" onClick={closeProfile}></div>
        <div className="modal-container-prof">
          <br></br>
          <table>
            <tr><b>Name : </b> {window.elderName}</tr>
            <tr><b>Guardian Name : </b>{window.guardName}</tr>
            <tr><b>Phone No. : </b>{window.num}</tr>
          </table>
          <br></br>
          <div className="button-for-card" style={{ width: "80px"}}>
            <button onClick={closeProfile} className="modal-done-btn" style={{ height: "100%", width:"100%"} }>
              Close
            </button>
          </div>
        </div>

      </>
    );
  };




  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const Popup = () => {
    return (
      <>
        
        <div className="modal-wrapper" onClick={closeModal}></div>
        <div className="modal-container">
          <h2>Emergency Contact Numbers</h2>

          <br></br>
          <table id="customers">
            <tr>
              <th>Name</th>
              <th>Contact No.</th>
              <th>Location</th>
            </tr>
            <tr>
              <td>Police (cops)</td>
              <td>100</td>
              <td>Jaipur</td>
            </tr>
            <tr>
              <td>Ambulance</td>
              <td>102</td>
              <td>Jodhpur</td>
            </tr>
            <tr>
              <td>Doctor</td>
              <td>8797988979</td>
              <td>Delhi</td>
            </tr>
            <tr>
              <td>Fire / rescue</td>
              <td>101</td>
              <td>Andhra pradesh</td>
            </tr>
          </table>

          <br></br>
          <div className="button-for-card">
            <button onClick={closeModal} className="modal-done-btn">
              Close
            </button>
          </div>
        </div>
        
      </>
    );
  };

  return (
    <>
      <UserDetails />
      <div>
        <ToastContainer />
      </div>
      <Navbar/>
      <Container fluid>
        <Row className="row-prof">
          <Col className="col-prof align-self-end">
            <div className="float-right">
              <center>
                <img style={{
                  height: "50px",
                  width: "50px",
                }}
                  src="profile.jpg"
                  alt="profile image"
                  className="card-image-prof img-fluid"
                  onClick={() => setShowProfile(true)}>
                </img>
                {showProfile && <Profile />}

              </center>
            </div>
          </Col>
        </Row>
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
                src="checkup.png"
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
                src="family.png"
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
                src="yoga.jpeg"
                alt="food image"
                className="card-image img-fluid"
                onClick={() => setShowModal(true)}
              ></img>
              {showModal && <Popup />}
            </center>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
};


export default HomePage;
