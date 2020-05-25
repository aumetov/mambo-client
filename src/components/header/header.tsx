import React, { Component } from 'react'
import './header.scss';

const hamburger = require('../../shared/icons/hamburger.png');
const shoppingBagIcon = require('../../shared/icons/shopping-bag.png');

export default class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                <div className='header-left-container'>
                    <img className='header-menu-icon' alt='hamburger-menu' src={hamburger}/>
                    <h2>mambo</h2>
                </div>

                <div className='header-right-container'>
                    <button className='sing-in-register-button'>Sign in | Register</button>
                    <img className='shopping-cart-icon' alt='shopping-cart' src={shoppingBagIcon}/>
                </div>
            </div>
        )
    }
}
