import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>FB CONSULTING & TRADE GMBH</Heading>
            <FooterLink>Ihr Partner für Projektmanagement und IT-Consulting!</FooterLink>
          </Column>
          <Column>
            <Heading>UNSERE LEISTUNGEN</Heading>
            <FooterLink>Projektmanagement</FooterLink>
            <FooterLink>Webdesign</FooterLink>
            <FooterLink>Softwareentwicklung</FooterLink>
            <FooterLink>Webseiten</FooterLink>
          </Column>
          <Column>
            <Heading>KONTAKT</Heading>
            <FooterLink>T +43 1 9974017</FooterLink>
            <FooterLink>office(at)fbk.co.at</FooterLink>
            <FooterLink>www.fbconsulting.co.at</FooterLink>
            <FooterLink>Impressum</FooterLink>
            <FooterLink>DSGVO</FooterLink>
          </Column>
          <Column>
            <Heading>ADRESSE</Heading>
            <FooterLink>FB Consulting & Trade GmbH</FooterLink>
            <FooterLink>Neubaugasse 10/3a</FooterLink>
            <FooterLink>A-1070 Wien</FooterLink>
            <FooterLink>Österreich</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;