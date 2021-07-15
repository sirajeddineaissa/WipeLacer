import './App.scss';
import HomePage from './Pages/HomePage';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import PracticePage from './Pages/PracticePage';
import SettingsPage from './Pages/SettingsPage'
import Signup from './Pages/Signup';
import { Component, useEffect } from 'react';

import { AuthProvider } from "./contexts/AuthContext";


const routes = [
  {name: 'home', path: '/', Component:HomePage},
  {name: 'practice', path: '/practice', Component:PracticePage},
  {name: 'setting', path: '/settings', Component:SettingsPage},
  {name: 'sign up', path: '/signup', Component:Signup},
]

function App() {

  return (
    <AuthProvider>
      <Router>
      <Switch>
      <div className="App">
        {routes.map(({name, path, Component})=>(
          <Route path={path} exact key={name}>
            <Component/>
          </Route>
        ))}
      </div>
      </Switch>
      </Router>
    </AuthProvider>
   
  );
}

export default App;
