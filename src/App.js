import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from '../src/pages/dashboard'




function App() {
    return (
      <BrowserRouter>
        
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Dashboard" component={Dashboard}/>
          </Switch>
      </BrowserRouter>
    );
  }
  
  export default App;