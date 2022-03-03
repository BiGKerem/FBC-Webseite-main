import React from "react";
import "../styles/Gallerie.css";

function MenuItem({ image, name, text }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p>{text}</p>
    </div>
  );
}

export default MenuItem;
