import React from "react";
import './App.css'
import Header from "./components/Header";
import Films from './components/Films';
import Persons from './components/Persons';
import Planets from './components/Planets';
import Starships from './components/Starships';
import Vehicles from './components/Vehicles';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

export default function App() {

  return (
    <Router>
      <div className='app'>
        <Header />
        <Switch>
          <Route path='/films'  component={Films} />
          <Route path='/persons' component={Persons} />
          <Route path='/planets' component={Planets} />
          <Route path='/starships' component={Starships} />
          <Route path='/vehicles' component={Vehicles} />
          <Redirect from="/" to='/films'  />
        </Switch>
      </div>
    </Router>
  );
}

//e8cce2