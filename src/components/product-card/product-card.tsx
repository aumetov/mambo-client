import React, { Component } from 'react'
import './product-cars.scss'
const productPhoto = require('../../shared/icons/product-photo.png');

export default class ProductCard extends Component {
    render() {
        return (
            <div className='product-card-container'>
                <img className='product-card-thumbnail' alt='product-thumbnail' src={productPhoto}/>
                <div className='product-card-info'>
                    <div className='product-card-left-container'>
                        <h3 className='product-title'>Red Dress</h3>
                        <p className='product-shop'>{'H&M'}</p>
                    </div>
                    <p className='product-card-price'>2300 с</p>
                </div>
            </div>
        )
    }
}
