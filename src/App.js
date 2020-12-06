import React from 'react'
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import { Global, Home, Indonesia, Provinsi } from './Pages';
import './App.css';



const App = () => {
  return (
    <Router>
      <div className="ContainerApp">
        <nav>
          <ul>
            <li><NavLink to="/" style={{color: "#e5e5e5", float: "left", display: "block", textAlign: "center", textDecoration: "none", padding: 14}}> Home </NavLink></li>
            <li><NavLink to="/global" style={{color: "#e5e5e5", float: "left", display: "block", textAlign: "center", textDecoration: "none", padding: 14}} activeStyle={{fontWeight: "bold", backgroundColor: "#5e0007"}}> Global </NavLink></li>
            <li><NavLink to="/indonesia" style={{color: "#e5e5e5", float: "left", display: "block", textAlign: "center", textDecoration: "none", padding: 14}} activeStyle={{fontWeight: "bold", backgroundColor: "#5e0007"}}> Indonesia </NavLink></li>
            <li><NavLink to="/provinsi" style={{color: "#e5e5e5", float: "left", display: "block", textAlign: "center", textDecoration: "none", padding: 14}} activeStyle={{fontWeight: "bold", backgroundColor: "#5e0007"}}> Provinsi </NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route path = "/global"> <Global /> </Route>
          <Route path = "/indonesia"> <Indonesia /> </Route>
          <Route path = "/provinsi"> <Provinsi /> </Route>
          <Route path = "/"> <Home /> </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
