// import logo from './logo.svg';
import Main from "./components/Main.js";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Main />
      </div>
    </Router>
  );
}

export default App;
