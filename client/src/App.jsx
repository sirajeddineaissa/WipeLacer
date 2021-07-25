import React from 'react';

import './App.scss';
import HomePage from './Pages/HomePage';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import StartPage from './Pages/StartPage';
import PracticePage from './Pages/PracticePage';
import SettingsPage from './Pages/SettingsPage'
import Signup from './Pages/Signup';
import SoundPlayer from './Components/SoundPlayer';
import { SoundProvider } from './contexts/SoundContext';


import { CSSTransition } from "react-transition-group";


import { AuthProvider } from "./contexts/AuthContext";
import Login from './Pages/Login';
import TransitionScreen from './Components/TransitionScreen';


const routes = [
  {name: 'home', path: '/', Component:HomePage},
  { name: 'start', path: '/start', Component: StartPage },
  {name: 'practice', path: '/practice', Component:PracticePage},
  {name: 'setting', path: '/settings', Component:SettingsPage},
  {name: 'sign up', path: '/signup', Component:Signup},
  {name: 'login', path: '/login', Component:Login},
]

function App() {

  return (
    <AuthProvider>
    <SoundProvider>
      <SoundPlayer/>
      <Router>
      <Switch>
      <div className="App">
        {routes.map(({name, path, Component})=>(
          <Route path={path} exact key={name}>
            {({match})=>(
              <CSSTransition
                in={match != null}
                timeout={1300}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <TransitionScreen/>
                  <Component/>
                </div>
              </CSSTransition>
            )}
            
          </Route>
        ))}
      </div>
      </Switch>
      </Router>
    </SoundProvider>
    </AuthProvider>
   
  );
}

export default App;
