import React from "react";
import "../../styles/Team.css";
import "../../styles/Leistungen.css";
import Navbar2 from "../../components/Navbar2"
import Gallerie from "../../components/Gallerie"
import { Accordion } from '@mantine/core';


function Leistungen() {

  React.useEffect(() => {
    HeaderChange();
  });
  return (
    <>
      <Navbar2 />
      <Gallerie />
      <div id="Leistungen">
        <div id="LeistungenBeschreibung1"> <h3>IT-Projektmanagement</h3> <span>FBK Software (FB Consulting and Trade GmbH) verfügt über langjährige Erfahrung im IT-Projektmanagement. Von der Entwicklung komplexer Software bishin zur Migration von kompletten IT-Landschaften.
          Die budget- und termingerechte Umsetzung von IT-Projekten ist für uns das erklärte Ziel!
          Wir planen Ihr Projekt und steuern es mit höchster Präzision und Qualität, damit es innerhalb des Budgets und Terminplans fertiggestellt wird!</span></div>
        <div id="LeistungenBeschreibung2"><h3>Unsere Leistungen</h3>
          <Accordion>
            <Accordion.Item label="Projektumsetzung">
              Wir unterstützen Sie durch die  Übernahme von bestehenden oder neuen Projekten, und führen diese in Ihrem Auftrag verantwortungsgemäß durch.
            </Accordion.Item>

            <Accordion.Item label="IT-Consulting">
              Wir unterstützen Ihre Geschäftsprozesse und Modelle mit der Einbindung von IT-Dienstleistungen und Automatisierungen.
            </Accordion.Item>

            <Accordion.Item label="IT-Dienstleistungen">
              Nach Ihren Bedürfnissen erhalten Sie IT-Fachpersonal, dass Sie in den Bereichen:
              – IT-Projektmanagement
              – IT-Architektur
              – IT-Design
              – Software-Analyse
              – Software-Entwicklung
              – Software-Testmanagement
              – Software-QS

              erfolgreich einsetzen können!
            </Accordion.Item>
          </Accordion></div>
      </div>
    </>
  );
}

function HeaderChange() {
  var el = document.querySelector('#GallerieHeaderId');
  el.innerHTML = 'Leistungen';
  if (window.location.pathname == "/Leistungen") {
    document.getElementsByClassName('slick-dots')[0].setAttribute('style', 'display: none !important;');
    el.setAttribute('style', '    font-size: 3rem; color: #fff !important; height: auto !important; width: fit-content; margin: auto; text-shadow: 0px 0px 10px rgb(0 0 0 / 61%);')
  }

}

export default Leistungen;