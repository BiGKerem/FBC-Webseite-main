import React from "react";
import "../../styles/Team.css";
import "../../styles/WirUnterstutzen.css";
import Navbar2 from "../../components/Navbar2"
import Gallerie from "../../components/Gallerie"
import { Blockquote } from '@mantine/core';
import Caritas from "../../assets/CaritasDu.jpg";
import Frauenhaus from "../../assets/frauenhaeuser.jpg";

function WirUnterstutzen() {

  React.useEffect(() => {
    HeaderChange();
  });
  return (
    <>

      <div id="WirUnterstutzen">
        <h3 id="Caritas">Wir unterstützen "Caritas & Du" und "Wiener Frauenhaus"</h3>
        <span>Wir, die FB Consulting & Trade GmbH, sind regelmäßige Spender bei der Caritas & Du. und dem Wiener Frauenhaus
          Gemeinsam erschaffen wir einen Ort für die gute Sache.</span>

        <Blockquote cite="– Albert Camus" className="Blockquote">
          „Die wahre Großzügigkeit der Zukunft gegenüber besteht darin, in der Gegenwart alles zu geben.“
        </Blockquote>
        <div><img src={Caritas}></img> <img src={Frauenhaus}></img></div>
      </div>
    </>
  );
}

function HeaderChange() {
  var el = document.querySelector('#GallerieHeaderId');
  el.innerHTML = 'Wir unterstützen';
  if (window.location.pathname == "/WirUnterstutzen") {
    document.getElementsByClassName('slick-dots')[0].setAttribute('style', 'display: none !important;');
    el.setAttribute('style', '    font-size: 3rem; color: #fff !important; height: auto !important; width: fit-content; margin: auto; text-shadow: 0px 0px 10px rgb(0 0 0 / 61%);')
  }

}

export default WirUnterstutzen;