import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SkillDashboard from './components/SkillDashboard';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/skills" component={SkillDashboard} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
