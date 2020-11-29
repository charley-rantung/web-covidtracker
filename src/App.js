import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { Global, Home, Indonesia, Provinsi } from './Pages';



const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/global"> Global </Link></li>
            <li><Link to="/indonesia"> Indonesia </Link></li>
            <li><Link to="/provinsi"> Provinsi </Link></li>
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
