  
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import AdminPanel from './pages/admin-panel/admin-panel';
import ProductDetails from './pages/product-details/product-details';

export const App: React.FC<{}> = () => {
  return (
      <div className="App">
        <Header/>
        <div className='main-wrapper'>
          <Router>
              <Switch>
                <Route path='/shop-admin/' component={AdminPanel}/>
                <Route path='/product' component={ProductDetails}/>
              </Switch>
          </Router>
        </div>
      </div>
  );
}