import React from 'react';
import './App.css';
import NavComponent from './components/Navbar/Nav';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavComponent />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/project" component={Project} />
        </Switch>

      </div>
    </Router>

  );
}

export default App;
