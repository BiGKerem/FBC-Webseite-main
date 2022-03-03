import "./App.css";
import 'antd/dist/antd.min.css';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Karriere from "./pages/Karriere";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/UberUns/Team";
import WirUnterstutzen from "./pages/UberUns/WirUnterstutzen";
import Zertifizierung from "./pages/UberUns/Zertifizierung";
import Bewerber from "./pages/Karriere/Bewerber";
import Leistungen from "./pages/Services/Leistungen";
import Partner from "./pages/Services/Partner";
import Kunden from "./pages/Services/Kunden";
import Termin from "./pages/Services/Termin";
import Impressum from "./pages/Kontakt/Impressum";
import DSGVO from "./pages/Kontakt/DSGVO";
import Uber from "./pages/UberUns/Uber";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (<>
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
    <div className="App">

      <Router>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Karriere" exact component={Karriere} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/Team" exact component={Team} />
          <Route path="/WirUnterstutzen" exact component={WirUnterstutzen} />
          <Route path="/Zertifizierung" exact component={Zertifizierung} />
          <Route path="/Bewerber" exact component={Bewerber} />
          <Route path="/Leistungen" exact component={Leistungen} />
          <Route path="/Partner" exact component={Partner} />
          <Route path="/Kunden" exact component={Kunden} />
          <Route path="/Termin" exact component={Termin} />
          <Route path="/Impressum" exact component={Impressum} />
          <Route path="/DSGVO" exact component={DSGVO} />
          <Route path="/Uber" exact component={Uber} />

        </Switch>
        <Footer />
      </Router>
    </div>
  </>
  );
}

export default App;
