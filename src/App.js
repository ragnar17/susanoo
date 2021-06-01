import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './components/Home.js'
import Navbar from './components/Navbar.js';
import Animation from './components/Animation.js';
function App() {
  return (
    <Router>
      <div>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/animation" exact component={Animation}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
