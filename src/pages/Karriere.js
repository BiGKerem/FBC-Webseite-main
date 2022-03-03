import React from "react";
import "../styles/Karriere.css";
import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { Spoiler } from '@mantine/core';


var scrolly = true;
function Karriere() {
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

      <div style={{ minheight: '100vh', height: 'auto', background: "white", zIndex: 1, paddingBottom: "5vh" }} >
        <h3 className="ÜberUnsHome">Karriere</h3>
        <div className="FadeDownCards" id="Karriere">
          <div style={{ width: "30%", margin: "20vh auto" }}
            data-aos="flip-left"
            data-aos-delay="500"
            data-aos-duration="800"
            data-aos-easing="ease-in-cubic"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor="#Karriere">
            <Card shadow="sm" padding="lg">
              <Card.Section>
                <Image src={require("../assets/Card1.jpg")} height={160} alt="Norway" />
              </Card.Section>

              <div
                data-aos="flip-up"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-easing="ease-in-cubic"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor="#Karriere">
                <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
                  <Text className="CardTitel"><h4>Software Tester</h4></Text>
                </Group>

                <Text size="sm" className="CardText">
                Im stark expandierenden IT-Sektor kann in den letzten Jahren ein signifikanter Anstieg der Komplexität der Softwareprodukte beobachtet werden. 
                Die Erfahrung zeigt, dass jedes System ausreichender Komplexität Softwarefehler beinhaltet und zusammen mit der stetig sinkenden Fehlertoleranz der Anwender nimmt die Bedeutung des Softwaretests erheblich zu. 
                Durch den konsequenten Einsatz von Testressourcen können Fehler frühzeitig festgestellt und die daraus entstehenden Fehlerkosten minimiert werden. 
                Deshalb freuen wir uns, dass wir bei FB Consulting und Trade GmbH die Rollen Software-Tester, Test-Automation-Engineer und Test-Manager als Teil unseres Teams zu haben und Ihnen zur Umsetzung Ihrer Projekte bereitstellen zu dürfen. 
                Wir legen außerdem großen Wert darauf, unsere Mitarbeiter stetig weiterzubilden und sind daher auch Mitglied des Austrian Testing Boards. 
                </Text>

              </div>
            </Card>
          </div>
          <div style={{ width: "30%", margin: "10vh auto" }}
            data-aos="flip-left"
            data-aos-delay="500"
            data-aos-duration="800"
            data-aos-easing="ease-in-cubic"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor="#Karriere">
            <Card shadow="sm" padding="lg">
              <Card.Section>
                <Image src={require("../assets/Card2.jpg")} height={160} alt="Norway" />
              </Card.Section>
              <div
                data-aos="flip-up"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-easing="ease-in-cubic"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor="#Karriere">
                <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
                  <Text className="CardTitel"><h4>Projektmanager</h4></Text>
                </Group>

                <Text size="sm" className="CardText">
                  Zu den Zuständigkeiten eines Projektmanagers oder einer Projektmanagerin zählen Planung, Organisation und Steuerung von IT-Projekten. 
                  Ebenfalls im Kompetenzbereich vertreten ist die Ressourcenplanung. 
                  Somit sind Projektmanager und Projektmanagerinnen maßgeblich an der Durchführung und dem erfolgreichen Abschluss von IT-Projekten beteiligt. 
                  Eine ausgezeichnete Kommunikationsfähigkeit, Teamfähigkeit, sowie eine ausgeprägte Kundenorientierung zeichnen unsere Mitarbeiter des Projektmanagements aus. 
                  Im Kundenauftrag konnten mithilfe unserer Kollegen und Kolleginnen zahlreiche Projekte sowohl im klassischen als auch im agilen Umfeld erfolgreich umgesetzt werden. Da die Weiterentwicklung unserer Mitarbeiter einen wesentlichen Aspekt unserer Unternehmensphilosophie darstellt, werden unsere Mitarbeiter nach den Stufen des IPMA Standards zertifiziert. 
                </Text>

               
              </div>
            </Card>
          </div>
          <div style={{ width: "30%", margin: "0vh auto" }}
            data-aos="flip-left"
            data-aos-delay="500"
            data-aos-duration="800"
            data-aos-easing="ease-in-cubic"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor="#Karriere">
            <Card shadow="sm" padding="lg">
              <Card.Section>
                <Image src={require("../assets/Card3.jpg")} height={160} alt="Norway" />
              </Card.Section>
              <div
                data-aos="flip-up"
                data-aos-delay="500"
                data-aos-duration="400"
                data-aos-easing="ease-in-cubic"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor="#Karriere">
                <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
                  <Text className="CardTitel"><h4>Software Entwickler</h4></Text>
                </Group>

                <Text size="sm" className="CardText">
                Im IT-Sektor gibt es eine Vielzahl an Technologien und ebenso viele Spezialisten benötigt es, um ein Softwareprojekt erfolgreich umzusetzen. 
                Die Rolle des Softwareentwicklers ist von zentraler Bedeutung für den Erfolg eines Projektes und Lösungsorientierung, Kommunikationsbereitschaft, Teamorientierung und der Wille sich ständig weiterzubilden, stellen die Kernkompetenzen unserer Entwickler da. 
                Als Ihr IT-Partner können wir Ihnen bei FB Consulting eine Vielzahl an unterschiedlichen Entwicklungsleistungen anbieten. Angular, Java, C# und React sind nur einige Bespiel-Technologien, welche von unseren Mitarbeitern tagtäglich eigesetzt werden. 
                Scheuen Sie sie sich bitte nicht uns zu kontaktieren, damit wir Ihnen ein maßgeschneidertes Angebot für Ihre Bedürfnisse und Anforderungen unterbreiten können. 
                Auch in diesem Bereich gilt, wir sind stets bemüht unsere Mitarbeiter mit den für Ihr Spezialgebiet relevanten Zertifizierungen und Weiterbildungen zu versehen.
                </Text>

                
              </div >
            </Card >
          </div >
        </div >
      </div >
    </>
  );
}

export default Karriere;
