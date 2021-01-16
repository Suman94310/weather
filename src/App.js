import './App.css';

import Navbar from "./components/navbar/navbar"
import City from "./components/city/city"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <City/>
        <Switch>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
