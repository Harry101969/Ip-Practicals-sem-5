import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

function Home() {
  return <div>Home Component!</div>;
}

function About() {
  return <div>Home Component!</div>;
}
function Contact() {
  return <div>Contact Component!</div>;
}
