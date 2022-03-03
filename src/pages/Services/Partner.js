import React from "react";
import "../../styles/Team.css";
import "../../styles/Partner.css";
import Navbar2 from "../../components/Navbar2"
import Gallerie from "../../components/Gallerie"
import { List } from '@mantine/core';
import timelessSOFT from "../../assets/timelessSOFT.png";
import or from "../../assets/or.png";
import cooppse from "../../assets/cooppse.png";
import VOESI from "../../assets/VOESI.jpg";
import activesolution from "../../assets/activesolution.png";
import huaweiCertified from "../../assets/huaweiCertified.png";
import ONEP from "../../assets/ONEP.png";
import spunky from "../../assets/spunky.png";
import planradar from "../../assets/planradar.png";
import HPC from "../../assets/HPC.png";
import Beko from "../../assets/Beko.png";
import Haufe_Partner from "../../assets/Haufe_Partner.png";
import IBM from "../../assets/IBM.png";
import AWS from "../../assets/AWS.png";
import MSLOGO from "../../assets/MSLOGO.jpg";
import Oracle_Partner from "../../assets/Oracle_Partner.png";
import Google_Cloud from "../../assets/Google_Cloud.png";

function Partner() {

  React.useEffect(() => {
    HeaderChange();
  });
  return (
    <>
      <Navbar2 />
      <Gallerie />
      <div id="Partner">
        <div id="PartnerBeschreibung1"> <h3>Partner – Vertrauen schaffen durch Transparenz</h3> <span>Wir pflegen bewusst das Fundament des Vertrauens und schaffen über einen transparenten Informationsfluss eine langfristige Basis für alle Beteiligten.</span></div>
        <div id="PartnerBeschreibung2"><h3>Wer sind unsere Partner?</h3>
          <List>
            <List.Item>Unternehmen mit umfassender Erfahrung</List.Item>
            <List.Item>Unternehmen mit Spezial Know-how in bestimmten Bereichen</List.Item>
            <List.Item>Unternehmen, welche einen guten Partner suchen, der für sie den Vertrieb übernimmt</List.Item>
            <List.Item>Unternehmen, die auch gerne mit uns gemeinsam große Kunden betreuen möchten</List.Item>
            <List.Item>Einzel- und Startup-Unternehmen</List.Item>
          </List>
        </div>
        <div id="PartnerBeschreibung3"><h3>Unsere Partner</h3>
          <div id="ImageBoxPartner">
            <img src={timelessSOFT}></img>
            <img src={or}></img>
            <img src={cooppse}></img>
            <img src={VOESI}></img>
            <img src={activesolution}></img>
            <img src={huaweiCertified}></img>
            <img src={ONEP}></img>
            <img src={spunky}></img>
            <img src={planradar}></img>
            <img src={HPC}></img>
            <img src={Beko}></img>
            <img src={Haufe_Partner}></img>
            <img src={IBM}></img>
            <img src={AWS}></img>
            <img src={MSLOGO}></img>
            <img src={Oracle_Partner}></img>
            <img src={Google_Cloud}></img>
          </div>
        </div>
      </div>
    </>
  );
}

function HeaderChange() {
  var el = document.querySelector('#GallerieHeaderId');
  el.innerHTML = 'Partner';
  if (window.location.pathname == "/Partner") {
    document.getElementsByClassName('slick-dots')[0].setAttribute('style', 'display: none !important;');
    el.setAttribute('style', '    font-size: 3rem; color: #fff !important; height: auto !important; width: fit-content; margin: auto; text-shadow: 0px 0px 10px rgb(0 0 0 / 61%);')
  }

}

export default Partner;