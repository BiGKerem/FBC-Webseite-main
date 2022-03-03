import React from "react";
import "../styles/About.css";
import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
var scrolly = true;
function About() {
  const [scroll, scrollTo] = useWindowScroll();
  console.log(scroll.y);

  if (scroll.y < 300 && !scrolly) {
    scrolly = true;
  }
  if (scroll.y > 300 && scroll.y < 890 && scrolly) {
    scrollTo({ y: 890 });
    console.log("yow")
    scrolly = false;
  }
  return (
    <>

      <div style={{ height: '100vh', background: "white", zIndex: 1 }} >
        <h3 className="ÜberUnsHome">Über uns</h3>
        <div className="FadeDownCards" id="example">
          <div style={{ width: "25%", margin: "0 auto" }}
            data-aos="flip-left"
            data-aos-delay="1000"
            data-aos-duration="800"
            data-aos-easing="ease-in-cubic"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor="#example">
            <Card shadow="sm" padding="lg">
              <Card.Section>
                <Image src={require("../assets/Card1.jpg")} height={160} alt="Norway" />
              </Card.Section>

              <div
                data-aos="flip-up"
                data-aos-delay="1000"
                data-aos-duration="800"
                data-aos-easing="ease-in-cubic"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor="#example">
                <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
                  <Text className="CardTitel">Unsere Kunden</Text>
                  <Text className="CardTitel2"><h5>FB Consulting liefert Softwarelösungen und unterstützt Kunden bei der Umsetzung Ihrer IT-Projekte.</h5></Text>
                </Group>

                <Text size="sm" className="CardText">
                Wir hatten in den vergangenen Jahren die Aufgabe eine Vielzahl an unterschiedlichen Kunden mit Softwarelösungen beliefern und noch mehr Kunden bei der Umsetzung ihrer individuellen Projekte unterstützen zu dürfen. 
                Auf der nachfolgenden Seite finden sie einen Überblick unserer Kunden und Projekte. 
                </Text>

              </div>
            </Card>
          </div>
          <div style={{ width: "25%", margin: "10vh auto" }}
            data-aos="flip-left"
            data-aos-delay="1000"
            data-aos-duration="800"
            data-aos-easing="ease-in-cubic"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor="#example">
            <Card shadow="sm" padding="lg">
              <Card.Section>
                <Image src={require("../assets/Card3.jpg")} height={160} alt="Norway" />
              </Card.Section>
              <div
                data-aos="flip-up"
                data-aos-delay="1000"
                data-aos-duration="800"
                data-aos-easing="ease-in-cubic"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor="#example">
                <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
                  <Text className="CardTitel"><h4>Leistungen</h4></Text>
                  <Text className="CardTitel2"><h5>FB Consulting ist ihr Partner bei der Umsetzung von IT-Projekten</h5></Text>
                </Group>

                <Text size="sm" className="CardText">
                Das Leistungsportfolio unseres Unternehmens erstreckt sich über das gesamte Feld der Softwareentwicklung. Zu den Hauptpfeilern unseres Angebots gehören Softwarenentwicklung, Softwaretest und Projektmanagement. 
                Zögern sie bitte nicht uns zu kontaktieren, um mit uns persönlich über ihre Bedürfnisse und Anforderungen zu sprechen. 
                </Text>

              </div>
            </Card>
          </div>
          <div style={{ width: "25%", margin: "20vh auto" }}
            data-aos="flip-left"
            data-aos-delay="1000"
            data-aos-duration="800"
            data-aos-easing="ease-in-cubic"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor="#example">
            <Card shadow="sm" padding="lg">
              <Card.Section>
                <Image src={require("../assets/Card4.jpg")} height={160} alt="Norway" />
              </Card.Section>
              <div
                data-aos="flip-up"
                data-aos-delay="1000"
                data-aos-duration="800"
                data-aos-easing="ease-in-cubic"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor="#example">
                <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
                  <Text className="CardTitel">Zertifizierungen</Text>
                  <Text className="CardTitel2"><h5>Qualitätsstandards und Mitarbeiterentwicklung</h5></Text>
                </Group>

                <Text size="sm" className="CardText">
                Die Entwicklung und Weiterbildung unserer Mitarbeiter und die Erfüllung höchster Qualitätsstandards sind wesentliche Augenmerke unserer Unternehmensphilosophie. 
                Aus diesem Grund sind wir stehts bemüht unsere Mitarbeiter mit den führenden Zertifizierungen in ihrem jeweiligen Kompetenzfeld auszustatten. 
                So sind unter anderen unsere Tester nach ISTQB und unsere Projektmanager nach IPMA zertifiziert.
                </Text>

              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
