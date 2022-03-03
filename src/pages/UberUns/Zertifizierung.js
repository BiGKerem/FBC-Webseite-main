import React from "react";
import "../../styles/Team.css";
import "../../styles/Zertifizierung.css";
import Navbar2 from "../../components/Navbar2"
import Gallerie from "../../components/Gallerie"
import ATB from "../../assets/Zertifizierungen_ATB.png";
import IPMA from "../../assets/Zertifizierungen_IPMA.png";
import ISTQB from "../../assets/Zertifizierungen_ISTQB.png";
import ANKOE from "../../assets/ANKOE.jpeg";

function Zertifizierung() {

  React.useEffect(() => {
    HeaderChange();
  });
  return (
    <>

      <div id="Zertifizierung">
        <a href="http://www.ankoe.at/" target="_blank" rel="noopener">
          <img src={ANKOE}></img> </a>

        <a href="https://www.istqb.org/" target="_blank" rel="noopener">
          <img src={ISTQB}></img></a>

        <a href="https://www.ipma.world/" target="_blank" rel="noopener">
          <img src={IPMA}></img></a>

        <a href="https://www.austriantestingboard.at/" target="_blank" rel="noopener">
          <img src={ATB}></img>
        </a>
      </div>
    </>
  );
}

function HeaderChange() {
  var el = document.querySelector('#GallerieHeaderId');
  el.innerHTML = 'Zertifizierung';
  if (window.location.pathname == "/Zertifizierung") {
    document.getElementsByClassName('slick-dots')[0].setAttribute('style', 'display: none !important;');
    el.setAttribute('style', '    font-size: 3rem; color: #fff !important; height: auto !important; width: fit-content; margin: auto; text-shadow: 0px 0px 10px rgb(0 0 0 / 61%);')
  }

}

export default Zertifizierung;