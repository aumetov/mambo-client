  
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import AdminPanel from './pages/admin-panel/admin-panel';

export const App: React.FC<{}> = () => {
  return (
      <div className="App">
        <Header/>
        <div className='main-wrapper'>
          <AdminPanel/>
          <Router>
              {/* <Switch>
                <Route path='/' exact={true} component={<div/>}/>
                <Route path='/product' exact={true} component={<div/>}/>
                <Route path='/shop' exact={true} component={<div/>}/>
              </Switch> */}
          </Router>
        </div>
      </div>
  );
}