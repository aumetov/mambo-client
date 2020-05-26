  
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import ProductCard from './components/product-card/product-card';
import SidebarFilter from './components/sidebard-filter/sidebar-filter';

export const App: React.FC<{}> = () => {
  return (
      <div className="App">
        <Header/>
        <ProductCard/>
        <SidebarFilter/>
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