import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar.js";
import MainBody from "./MainBody.js";
import IntroText from "./IntroText.js";
import RightImagetext from "./RightImagetext.js";
import LeftImageText from "./LeftImageText.js";
import Contact from "./Contact.js";
import About from "./About.js";
import HomeNav from "./HomeNav.js";

function App() {
  return (
    <div id="page-wraper">
      {/* Router is used to navigate user from navigation bar of HomePage
    which is combination Navbar and MainBody componant and SPA implementation*/}
      <Router>
        <Switch>
          <Route exact path="/" component={MainBody} />
          <Route path="/home" component={HomeNav} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={LeftImageText} />
          <Route path="/contact" component={Contact} />
          <Route path="*">Error 404 :Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
