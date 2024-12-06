import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Project from './components/Project';
import RolesAndResponsibilities from './components/RolesAndResponsibilities';
import Skills from './components/Skill';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter basename="/portfolio"> */}
        <Router>
            <Navbar />
            <Routes>
                <Route path="/"  element={<About/>} />
                <Route path="/projects" element={<Project/>} />
                <Route path="/roles" element={<RolesAndResponsibilities/>} />
                <Route path="/skills" element={<Skills/>} />
                {/* <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} /> */}
            </Routes>
        </Router>
        {/* </BrowserRouter> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
