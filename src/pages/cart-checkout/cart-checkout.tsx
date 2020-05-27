import React, { Component } from 'react'
import './cart-checkout.scss'

export default class CartCheckout extends Component {
    render() {
        return (
            <div className='cart-checkout-container'>
                <div className='cart-products-info-list'>
                    <h3 className='cart-checkout-title'>Корзина</h3>
                    <div className='price-info-container'>
                        <div className='subtotal-price-container'>
                            <p className='subtotal-title'>Subtotal:</p>
                            <p className='subtotal-price'>4500 c</p>
                        </div>

                        <div className='shipping-price-container'>
                            <p className='shipping-title'>Shipping:</p>
                            <p className='shipping-price'>0 c</p>
                        </div>

                        <div className='total-price-container'>
                            <p className='total-title'>Total:</p>
                            <p className='total-price'>4500 c</p>
                        </div>
                    </div>
                </div>

                <div className='payment-info-container'>

                </div>
            </div>
        )
    }
}
