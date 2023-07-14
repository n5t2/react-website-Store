import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Women from "./pages/Women.js";
import Men from "./pages/Men.js";
import Kids from "./pages/Kids.js";
import FootballTops from "./pages/FootballTops.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path= "/women" exact component ={Women}/>
          <Route path= "/men" exact component ={Men}/>
          <Route path= "/kids" exact component ={Kids}/>
          <Route path= "/footballtops" exact component ={FootballTops}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
 
export default App;
//