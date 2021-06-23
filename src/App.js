import "./App.css";
import { Home } from "./pages/Home/Home";
import { CitiesList } from "./features/cities/CitiesList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/home">
          <CitiesList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
