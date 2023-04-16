import Navbar from "./Navbar";
import Footer from "./Footer";
import React from 'react';
import axios from "axios";
import  { useState, useEffect } from 'react';


const News = () => {
    // useEffect(() => {
    //     const od = new Date();
    //     const cd = new Date('2023-04-20');
    //     if (cd != od) {
    //         console.log("Same");
    //     }
    // });



    // User Points
  const [p, setP] = useState(0);
    const [ploading, setPLoading] = useState(true);
    
    const [Edata, setEData] = useState({
        id: window.useruid
    });


  function Points() {

    useEffect(() => {
      const fetchPoints = async () => {
        try {
          console.log(Edata);
          const url = "http://localhost:8080/getpoints";
          const res = await axios.get(url);
          console.log(res.data.data);
        //   setP(res.data.data.data);
          setPLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      fetchPoints();
    }, [window.useruid]);

    if (ploading) {
      return <h1>loading</h1>;
    }

    if (!p) {
      return <div>User not found</div>;
      }
      console.log(p.point);

    return (
      null
    );
  }

  Points();


  return (
      <>
          <Navbar />
          <div>
              <h1>{p.point}</h1>
              <section className="hero-section">News</section>
              <h1>Current Date and Time:</h1>
              <h2>{new Date().getTime()}</h2>
              
          </div>
          <Footer />
      </>
  )
}

export default News;
