import React from "react";
import "../styles/Home.css";
import Karriere from "./Karriere";
import About from "./About";

import Navbar2 from "../components/Navbar2"
import Gallerie from "../components/Gallerie"
import Contact from "./Contact"

function Home() {
  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <Navbar2 />
      <Gallerie />
      <About />
      <Karriere />
    </>
  );
}


export default Home;

