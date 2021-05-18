import './App.scss';
import HomePage from './Pages/HomePage';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import PracticePage from './Pages/PracticePage';

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
    </div>
    </Switch>
    </Router>
  );
}

export default App;
