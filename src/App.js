import header from "./assets/Header.png";
import logo from "./assets/logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from "./component/Menu";
import OurCoffe from "./OurCoffe";
import Account from "./Account";
import Home from "./Home";
import Meny from "./Meny";
import "./App.css";

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ourcoffe" component={OurCoffe} />
        <Route path="/account" component={Account} />
        <Route path="/meny" component={Meny} />
      </Switch>
    </Router>
  );
}

export default App;
