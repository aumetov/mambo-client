  
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import ProductsListing from './components/products-listing/products-listing';

export const App: React.FC<{}> = () => {
  return (
      <div className="App">
        <Header/>
        <div className='main-wrapper'>
          <ProductsListing/>
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