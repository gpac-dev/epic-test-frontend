import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import CandidateList from './pages/CandidateList'
import JobList from './pages/JobList'
import CompanyList from './pages/CompanyList'
import './css/Settings'
import CandidateNew from './pages/NewCandidate';
import CompanyNew from './pages/NewCompany';
import NewJobOrder from './pages/NewJobOrder';




function App() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Dashboard" component={Dashboard}/>
            <Route exact path="/CandidateList" component={CandidateList}/>
            <Route exact path="/JobList" component={JobList}/>
            <Route exact path="/CompanyList" component={CompanyList}/>
            <Route exact path="/NewCandidate" component={CandidateNew}/>
            <Route exact path="/NewCompany" component={CompanyNew}/>
            <Route exact path="/NewJobOrder" component={NewJobOrder}/>
          </Switch>
      </BrowserRouter>
    );
  }
  
  export default App;