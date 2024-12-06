
import '../App.css';
import Navbar from './Navbar';
import About from './About';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Project from './Project';
import RolesAndResponsibilities from './RolesAndResponsibilities';
// import Skills from './components/Skill';
import Skills  from './Skill';

function Portfolio() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<About/>} />
                <Route path="/projects" element={<Project/>} />
                <Route path="/roles" element={<RolesAndResponsibilities/>} />
                <Route path="/skills" element={<Skills/>} />
                {/* <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} /> */}
            </Routes>
        </Router>
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

export default Portfolio;
