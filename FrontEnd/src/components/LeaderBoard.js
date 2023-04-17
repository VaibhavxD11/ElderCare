import Navbar from "./Navbar";
import Footer from "./Footer";
import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import "./leaderboard.css";

import ExampleTable from "./PointsTable";


const LeaderBoard = () => {


  // User Points
  const [p, setP] = useState([]);
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



  Points();


  return (
    <>
      <Navbar />
      <div className="points" style={{ height:'450px'}}>
        <ExampleTable data={p} />
      </div>
      <Footer />
    </>
  )
}

export default LeaderBoard;
