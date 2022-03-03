import React from "react";
import Team from "./Team";
import WirUnterstutzen from "./WirUnterstutzen";
import Zertifizierung from "./Zertifizierung";
import Navbar2 from "../../components/Navbar2"
import Gallerie from "../../components/Gallerie"


function Uber() {

  return (
    <>
    <Navbar2 />
    <Gallerie />
    <Team />
    <WirUnterstutzen />
    <Zertifizierung />
  </>
  );
}

export default Uber;
