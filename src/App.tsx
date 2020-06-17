  
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import AdminPanel from './pages/admin-panel/admin-panel';
import ProductDetails from './pages/product-details/product-details';
import {MainPage} from './pages/main-page/main-page';
import CartCheckout from './pages/cart-checkout/cart-checkout';
import { LoginPage } from './pages/login-page/login-page';
import RegisterPage from './pages/register-page/register-page';

export const App: React.FC<{}> = () => {
  return (
      <div className="App">
        <Router>
        <Header/>
        <div className='main-wrapper'>
            <Switch>
              <Route path='/' exact component={MainPage}/>
              <Route path='/shop-admin/' component={AdminPanel}/>
              <Route path='/product' component={ProductDetails}/>
              <Route path='/cart' component={CartCheckout}/>
              <Route path='/login' component={LoginPage}/>
              <Route path='/register' component={RegisterPage}/>
            </Switch>
        </div>
        </Router>
      </div>
  );
}