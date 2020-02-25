import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import CandidateList from './pages/CandidateList'
import JobList from './pages/JobList'
import './css/Settings'




function App() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Dashboard" component={Dashboard}/>
            <Route exact path="/CandidateList" component={CandidateList}/>
            <Route exact path="/JobList" component={JobList}/>
          </Switch>
      </BrowserRouter>
    );
  }
  
  export default App;