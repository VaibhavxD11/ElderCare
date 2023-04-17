import React from "react";
import "./leaderboard.css";

const ExampleTable = ({ data }) => {
  return (
    <table className="leader">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
                {index==0? (
                <td><img src="first.jpg" className="badge-image"></img></td>
                ):
                index==1 ? (
                <td><img src="second.jpg" className="badge-image"></img></td>
                ):index==2?(
                <td><img src="third.jpg" className="badge-image"></img></td>
                ):<td>{index+1}</td> 
                }
            <td>{item.name}</td>
            <td>{item.point}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExampleTable;
