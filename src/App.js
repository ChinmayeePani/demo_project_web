import "./App.css";
import About from "./components/About/About";
import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import Frequently from "./components/Frequently/Frequently";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Pricing from "./components/Pricing/Pricing";
import Service from "./components/Services/Service";
import Team from "./components/Team/Team";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Home />
      <Companies />
      <About/>
      <Service/>
      <Portfolio/>
      <Team/>
      <Pricing/>
      <Frequently/>
      <Contact/>
    </div>
  );
}

export default App;
