import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Stats from './Components/Stats';
import Profile from './Components/Profile';
import Header from './Components/Header';
import NewScore from './Components/NewScore';

function App() {
  return (
      <React.Fragment>
        <Header />
        <Router>
          <Switch>          
            <Route exact path="/" component={ Home } />
            <Route exact path="/stats" component={ Stats } />
            <Route exact path="/profile" component={ Profile } />
            <Route exact path="/new-score" component={ NewScore } />
          </Switch>       
        </Router>
      </React.Fragment>
  );
}

export default App;
