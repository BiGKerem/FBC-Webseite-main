import React from "react";
import "../styles/Gallerie.css";

function TeamItem({ image, bereich, name, text }) {
  return (
    <div className="teamItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <h2>{bereich}</h2>
      <p>{text}</p>
    </div>
  );
}

export default TeamItem;
