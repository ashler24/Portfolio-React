// import logo from './logo.svg';
import Main from './components/Main.js';
import { HashRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div>
        <Main />
      </div>
    </HashRouter>
  );
}

export default App;
