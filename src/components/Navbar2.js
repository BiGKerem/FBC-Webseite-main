import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import "../styles/Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "../assets/fbcFuchs.png";

const überUns = (
  <Menu>
    <Menu.Item>
      <a target="/Team" target="_self" rel="noopener noreferrer" href="/Team">
        Team
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" target="_self" rel="noopener noreferrer" href="/WirUnterstutzen">
        Wir unterstützen
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" target="_self" rel="noopener noreferrer" href="/Zertifizierung">
        Zertifizierungen
      </a>
    </Menu.Item>
  </Menu>
);

const karriere = (
  <Menu>
    <Menu.Item>
      <a target="_blank" target="_self" rel="noopener noreferrer" href="/Bewerber">
        BewerberPortal
      </a>
    </Menu.Item>
  </Menu>
);

const services = (
  <Menu>
    <Menu.Item>
      <a target="_blank" target="_self" rel="noopener noreferrer" href="/Leistungen">
        Leistungen
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" target="_self" rel="noopener noreferrer" href="/Termin">
        Termin Vereinbarung
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" target="_self" rel="noopener noreferrer" href="/Partner">
        Unsere Partner
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" target="_self" rel="noopener noreferrer" href="/Kunden">
        Kunden
      </a>
    </Menu.Item>
  </Menu>
);

const kontakt = (
  <Menu>
    <Menu.Item>
      <a target="_blank" target="_self" rel="noopener noreferrer" href="/Impressum">
        Impressum
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" target="_self" rel="noopener noreferrer" href="/DSGVO">
        DSGVO
      </a>
    </Menu.Item>
  </Menu>
);
function Navbar2() {
  return (
    <div className="Navbar">
      <div className="Navbar-header">
        <a target="_blank" target="_self" rel="noopener noreferrer" href="/">
          <img src={Logo} />
        </a>
      </div>
      <div className="NavbarLinks">
        <Button className="NavbarButtons">Home</Button>
          <Button className="NavbarButtons" href='/About '>Über uns</Button>
          <Button className="NavbarButtons NoLink">Karriere</Button>
      </div>
    </div>
  );
}


export default Navbar2;