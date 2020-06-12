import React, { Component } from 'react'
import './header.scss';
import { Link } from 'react-router-dom'

const hamburger = require('../../shared/icons/hamburger.png');
const shoppingBagIcon = require('../../shared/icons/shopping-bag.png');

export default class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                <div className='header-left-container'>
                    <img className='header-menu-icon' alt='hamburger-menu' src={hamburger}/>
                    <Link to='/'><h2>mambo</h2></Link>
                </div>

                <div className='header-right-container'>
                    <button className='sing-in-register-button'>Sign in | Register</button>
                    <Link to='/cart'><img className='shopping-cart-icon' alt='shopping-cart' src={shoppingBagIcon}/></Link>
                </div>
            </div>
        )
    }
}
