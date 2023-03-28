import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import { Switch, Route } from "react-router-dom";
// import { Switch, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Signup from "./components/Signup";
import HomeGuardian from "./components/HomeGuardian";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome To</p>
        <a href="/">
          <img src="image.jpg" height="300px" width="300px"></img>
        </a>
        <h1>Support You</h1>
      </section>
      <Footer />
    </>
  );
};

const News = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section"></section>
      <Footer />
    </>
  );
};

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
    // <>
    //   <Routes>
    //     <Route path="/" element={<Home />}></Route>
    //   </Routes>
    // </>
    
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      
      <Route path="/about">
        <Navbar/>
        <About />
        <Footer/>
      </Route>

      <Route path="/contact">
        <Navbar />
        <ContactForm/>
        <Footer />
      </Route>

      <Route path="/news">
        <News/>
      </Route>

      <Route path="/login">
        <Navbar/>
        <Login />
        <Footer/>
      </Route>

      <Route path="/homepage">
        <Navbar/>
        <HomePage />
        <Footer/>
      </Route>
      <Route path="/signup">
        <Navbar />
        <Signup/>
        <Footer />
      </Route>
      
    </Switch>
  );
};

export default App;
