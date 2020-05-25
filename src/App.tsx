  
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';

export const App: React.FC<{}> = () => {
  return (
      <div className="App">
        <Header/>
        <Router>
            {/* <Switch>
              <Route path='/' exact={true} component={<div/>}/>
              <Route path='/product' exact={true} component={<div/>}/>
              <Route path='/shop' exact={true} component={<div/>}/>
            </Switch> */}
        </Router>
      </div>
  );
}