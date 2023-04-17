import Navbar from "./Navbar";
import Footer from "./Footer";
import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import "./leaderboard.css";

import ExampleTable from "./ExampleTable";


const LeaderBoard = () => {
  // useEffect(() => {
  //     const od = new Date();
  //     const cd = new Date('2023-04-20');
  //     if (cd != od) {
  //         console.log("Same");
  //     }
  // });



  // User Points
  const [p, setP] = useState([]);
  const [ploading, setPLoading] = useState(true);

  const [Edata, setEData] = useState({
    id: window.useruid
  });

  const [points, setPoints] = useState([]);
  const [username, setUserName] = useState([]);



  function Points() {

    useEffect(() => {
      const fetchPoints = async () => {
        try {
          console.log(Edata);
          const url = "http://localhost:8080/getpoints";
          const res = await axios.get(url);
          console.log(res.data.data);
          setPoints(res.data.data[1].point);
          setUserName(res.data.data[1].name);
          setP(res.data.data);
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
    console.log(p);


    return (
      null
    );
  }

  // console.log(p[0].point);

  // const items = p.map((item) => ({
  //   number: item.point,
  //   name: item.name,
  // }));


  Points();


  return (
    <>
      <Navbar />
      <div>
        {/* <div>{p[0].point}</div> */}
        <section className="hero-section">
          {/* <h2>{p[0].point}</h2> */}

          <div style={{ height: '200px', overflowY: 'scroll', padding: '20px', width: 'auto'}}>
            {items.map((item, index) => (
              <div key={index}>
                {index === 0 || index === 1 || index === 2 ? (
                  <h2>{<img src="favicon.ico"></img>},{item.number}, {item.name}</h2>

                ) : 
                  <h2>{index + 1},{item.number}, {item.name}</h2>
                }


                {/* <h2>{index + 1},{item.number}, {item.name}</h2> */}
                
                
                {/* <h2>{index},{item.number}, {item.name}</h2>
                <h2>{index},{item.number}, {item.name}</h2>
                <h2>{index},{item.number}, {item.name}</h2> */}
              </div>
            ))}
          </div>

          
        </section>
        {/* <h1>Current Date and Time:</h1>
              <h2>{new Date().getTime()}</h2> */}


      </div>
      <Footer />
    </>
  )
}

export default LeaderBoard;
