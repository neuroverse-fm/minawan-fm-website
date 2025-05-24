import { render } from "preact";
import { Router, Route } from "preact-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { RadioProvider } from "./utils/RadioContext";
import { RadioPlayer } from "./components/RadioPlayer";
import "./style.css";
import { NotFound } from "./pages/_404";
import { Attributions } from "./pages/Attributions";

function App() {
  return (
    <RadioProvider>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/attribs" component={Attributions} />
        <Route default component={NotFound} />
      </Router>
      <RadioPlayer />
    </RadioProvider>
  );
}

render(<App />, document.getElementById("app"));
