import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import { Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import About from "./components/About";
import News from "./components/News";
import ContactForm from "./components/ContactForm";
import Signup from "./components/Signup";
import HomeGuardian from "./components/HomeGuardian";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome To</p>
        <a href="/">
          <img src="image.jpg" class="img-fluid; " style={{maxHeight:"320px",maxWidth:"100%"}}></img>
        </a>
        <h1>Support You</h1>
      </section>
      <Footer />
    </>
  );
};

// const News = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-section"></section>
//       <Footer />
//     </>
//   );
// };
// const News = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-section">
//         <p>Welcome To</p>
//         <a href="/">
//           <img src="image.jpg" class="img-fluid; " style={{maxHeight:"320px",maxWidth:"100%"}}></img>
//         </a>
//         <h1>News</h1>
//       </section>
//       <Footer />
//     </>
//   );
// };

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section"></section>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<ContactForm />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/homepage" element={<HomePage />}></Route>
        <Route path="/HomeGuardian" element={<HomeGuardian />}></Route>
      </Routes>
    </>
  );
};

export default App;
