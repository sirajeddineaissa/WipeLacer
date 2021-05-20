import './App.scss';
import HomePage from './Pages/HomePage';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import PracticePage from './Pages/PracticePage';
import SettingsPage from './Pages/SettingsPage'

function App() {
  return (
    <Router>
    <Switch>
    <div className="App">
      <Route path="/" exact>
      <HomePage/>
      </Route>
      <Route path="/practice" exact>
        <PracticePage />
      </Route>
      <Route path="/settings" exact>
        <SettingsPage/>
      </Route>
    </div>
    </Switch>
    </Router>
  );
}

export default App;
