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
import { Modal, ModalBody, ModalHeader } from "reactstrap";



const HomePage = () => {

  const [Sosmodal, setSosmodal] = useState(false);
  const [Medmodal, setMedmodal] = useState(false);
  const [Foodmodal, setFoodmodal] = useState(false);
  const [Checkupmodal, setCheckupmodal] = useState(false);
  const [Familymodal, setFamilymodal] = useState(false);
  const [Yogamodal, setYogamodal] = useState(false);

  const [showModal, setShowModal] = useState(false);

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
    id: window.useruid
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
    }, [window.useruid]);

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
    window.useremail = user.email;

    return (
      null
    );
  }



  // fetch Form Data

  function YogaForm() {
    const [yoga, setYoga] = useState(null);
    const [yloading, setYLoading] = useState(true);

    useEffect(() => {
      const fetchYForm = async () => {
        try {
          console.log(Edata);
          const url = "http://localhost:8080/yform";
          const { data: res } = await axios.post(url, Edata);
          console.log(res[0]);
          setYoga(res[0]);
          setYLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      fetchYForm();
    }, [window.useruid]);

    if (yloading) {
      return <h1>loading</h1>;
    }

    if (!yoga) {
      return <div>User not found</div>;
    }

    // Yoga data

    window.yoganame = yoga.name;
    window.yDuration = yoga.duration;
    window.yTime = yoga.time;
    window.yLink = yoga.link;

    return (
      null
    );
  }


  function MedForm() {
    const [med, setMed] = useState(null);
    const [mloading, setMLoading] = useState(true);

    useEffect(() => {
      const fetchMForm = async () => {
        try {
          console.log(Edata);
          const url = "http://localhost:8080/mform";
          const { data: res } = await axios.post(url, Edata);
          console.log(res[0]);
          setMed(res[0]);
          setMLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      fetchMForm();
    }, [window.useruid]);

    if (mloading) {
      return <h1>loading</h1>;
    }

    if (!med) {
      return <div>User not found</div>;
    }

    // Medicine data

    window.medname = med.name;
    window.dose = med.dose;
    window.mBreakfast = med.breakfast;
    window.mLunch = med.lunch;
    window.mHighTea = med.higtea;
    window.mDinner = med.dinner;



    return (
      null
    );
  }


  function FoodForm() {
    const [food, setFood] = useState(null);
    const [floading, setFLoading] = useState(true);

    useEffect(() => {
      const fetchFForm = async () => {
        try {
          console.log(Edata);
          const url = "http://localhost:8080/fform";
          const { data: res } = await axios.post(url, Edata);
          console.log(res[0]);
          setFood(res[0]);
          setFLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      fetchFForm();
    }, [window.useruid]);

    if (floading) {
      return <h1>loading</h1>;
    }

    if (!food) {
      return <div>User not found</div>;
    }

    // Food data

    
    window.fBreakfast = food.breakfast;
    window.fLunch = food.lunch;
    window.fHighTea = food.higtea;
    window.fDinner = food.dinner;



    return (
      null
    );
  }


  function CheckupForm() {
    const [checkup, setCheckup] = useState(null);
    const [cloading, setCLoading] = useState(true);

    useEffect(() => {
      const fetchCForm = async () => {
        try {
          console.log(Edata);
          const url = "http://localhost:8080/cform";
          const { data: res } = await axios.post(url, Edata);
          console.log(res[0]);
          setCheckup(res[0]);
          setCLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      fetchCForm();
    }, [window.useruid]);

    if (cloading) {
      return <h1>loading</h1>;
    }

    if (!checkup) {
      return <div>User not found</div>;
    }

    // Checkup data


    window.checkupname = checkup.name;
    window.cplace = checkup.place;
    window.cdesc = checkup.descprition;
    



    return (
      null
    );
  }


  function NumForm() {
    const [num, setNum] = useState(null);
    const [nloading, setNLoading] = useState(true);

    useEffect(() => {
      const fetchNForm = async () => {
        try {
          console.log(Edata);
          const url = "http://localhost:8080/nform";
          const { data: res } = await axios.post(url, Edata);
          console.log(res[0]);
          setNum(res[0]);
          setNLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      fetchNForm();
    }, [window.useruid]);

    if (nloading) {
      return <h1>loading</h1>;
    }

    if (!num) {
      return <div>User not found</div>;
    }

    // Number data


    window.numname = num.name;
    window.formnum = num.number;




    return (
      null
    );
  }


  //function calls

  YogaForm();
  MedForm();
  FoodForm();
  CheckupForm();
  NumForm();

  



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




  return (
    <>
      <UserDetails />
      <div>
        <ToastContainer />
      </div>
      <Navbar />


      <Container fluid>
        <Row className="main-row-home-1 ">
          {/* //EMERGENCY contact number */}
          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            {/* //this is the popup */}

            {/* <Modal
              size="lg"
              isOpen={Sosmodal}
              toggle={() => setSosmodal(!Sosmodal)}
            >
              <ModalHeader toggle={() => setSosmodal(!Sosmodal)}>
                <h3 id="sostext">Emergency Contact Numbers</h3>
              </ModalHeader>
              <ModalBody>
              <div className="modal-wrapper"></div>
                <div className="modal-container">
                  <br></br>
                  <table id="customers">
                    <tr>
                      <th>Medicine Name</th>
                      <th>Image</th>
                      <th>Time</th>
                      <th>Dose</th>
                    </tr>
                    <tr>
                      <td>knokgo</td>
                      <td>powekp</td>
                      <td>Jawpmfepipur</td>
                      <td>Jawpmfepipur</td>
                    </tr>
                    <tr>
                      <td>Ambulance</td>
                      <td>102</td>
                      <td>Jodhpur</td>
                      <td>Jodhpur</td>
                    </tr>
                    <tr>
                      <td>Doctor</td>
                      <td>8797988979</td>
                      <td>Delhi</td>
                      <td>Delhi</td>
                    </tr>
                    <tr>
                      <td>Fire / rescue</td>
                      <td>101</td>
                      <td>Andhra pradesh</td>
                      <td>Andhra pradesh</td>
                    </tr>
                  </table>
                  <br></br>
                </div>
              </ModalBody>
              <button
                type="button"
                className="close-button"
                onClick={() => setSosmodal(!Sosmodal)}
              >
                Close
              </button>
              <br></br>
            </Modal> */}

            <center>
              <img
                src="sos.jpg"
                alt="sos image"
                className="card-image img-fluid"
                onClick={() => setSosmodal(true)}
              ></img>
            </center>
          </Col>

          {/* this is the medicine logger */}
          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            {/* this is the popup for the medicine logger */}
            <Modal
              size="lg"
              isOpen={Medmodal}
              toggle={() => setMedmodal(!Medmodal)}
            >
              <ModalHeader toggle={() => setMedmodal(!Medmodal)}>
                <h3 id="sostext">Medicine logger</h3>
              </ModalHeader>
              <ModalBody>
                <div className="modal-container">
                  this is the medicine logger.
                </div>
                <h3>{window.medname}</h3>
                <h3>{ window.dose}</h3>
              </ModalBody>
              <button
                type="button"
                className="close-button"
                onClick={() => setMedmodal(!Medmodal)}
              >
                Close
              </button>
              <br></br>
            </Modal>

            <center>
              <img
                src="med.jpg"
                alt="medicine image"
                className="card-image img-fluid"
                onClick={() => setMedmodal(true)}
              ></img>
            </center>
          </Col>

          {/* this is the food logger */}

          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            {/* this is the modal for food logger */}
            <Modal
              size="lg"
              isOpen={Foodmodal}
              toggle={() => setFoodmodal(!Foodmodal)}
            >
              <ModalHeader toggle={() => setFoodmodal(!Foodmodal)}>
                <h3 id="sostext">Food logger</h3>
              </ModalHeader>
              <ModalBody>
                <div className="modal-container">this is the Food logger.</div>
                <h3>{ window.fBreakfast}</h3>
              </ModalBody>
              <button
                type="button"
                className="close-button"
                onClick={() => setFoodmodal(!Foodmodal)}
              >
                Close
              </button>
              <br></br>
            </Modal>
            <center>
              <img
                src="food.jpg"
                alt="food image"
                className="card-image img-fluid"
                onClick={() => setFoodmodal(true)}
              ></img>
            </center>
          </Col>

          {/* this is the checkup card */}
          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>

            {/* this is the modal for checkup */}
            <Modal
              size="lg"
              isOpen={Checkupmodal}
              toggle={() => setCheckupmodal(!Checkupmodal)}
            >
              <ModalHeader toggle={() => setCheckupmodal(!Checkupmodal)}>
                <h3 id="sostext">Checkup logger</h3>
              </ModalHeader>
              <ModalBody>
                <div className="modal-container">this is the Checkup logger.</div>
                <h3>{window.checkupname}</h3>
                <h3>{window.checkupname}</h3>
                <h3>{window.cdesc}</h3>
              </ModalBody>
              <button
                type="button"
                className="close-button"
                onClick={() => setCheckupmodal(!Checkupmodal)}
              >
                Close
              </button>
              <br></br>
            </Modal>

            <center>
              <img
                src="checkup.png"
                alt="checkup image"
                className="card-image img-fluid"
                onClick={() => setCheckupmodal(true)}
              ></img>
            </center>
          </Col>

          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            <Modal
              size="lg"
              isOpen={Familymodal}
              toggle={() => setFamilymodal(!Familymodal)}
            >
              <ModalHeader toggle={() => setFamilymodal(!Familymodal)}>
                <h3 id="sostext">Family logger</h3>
              </ModalHeader>
              <ModalBody>
                <div className="modal-container">this is the Family Contact Numbers.</div>
                <h3>{window.numname}</h3>
                <h3>{window.formnum}</h3>
              </ModalBody>
              <button
                type="button"
                className="close-button"
                onClick={() => setFamilymodal(!Familymodal)}
              >
                Close
              </button>
              <br></br>
            </Modal>

            <center>
              <img
                src="family.png"
                alt="family image"
                className="card-image img-fluid"
                onClick={() => setFamilymodal(true)}
              ></img>
            </center>
          </Col>

          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>

            <Modal
              size="lg"
              isOpen={Yogamodal}
              toggle={() => setYogamodal(!Yogamodal)}
            >
              <ModalHeader toggle={() => setYogamodal(!Yogamodal)}>
                <h3 id="sostext">Yoga logger</h3>
              </ModalHeader>
              <ModalBody>
                <div className="modal-container">this is the yoga logger.</div>
                <h3>{window.yoganame}</h3>
                <h3>{window.yDuration}</h3>
              </ModalBody>
              <button
                type="button"
                className="close-button"
                onClick={() => setYogamodal(!Yogamodal)}
              >
                Close
              </button>
              <br></br>
            </Modal>
            <center>
              <img
                src="yoga.jpeg"
                alt="yoga image"
                className="card-image img-fluid"
                onClick={() => setYogamodal(true)}
              ></img>
            </center>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}


export default HomePage;
