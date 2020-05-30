import React, { Component } from 'react'
import './admin-products.scss'
import ProductCard from '../product-card/product-card'

const addNewProductIcon = require('../../shared/icons/add.png')

export default class AdminProducts extends Component {
    render() {
        return (
            <div className='admin-products-container'>
                <div className='products-top-panel'>
                    <div className='products-top-filter'>

                    </div>
                    <button className='add-product-button'>
                        <img className='add-product-icon' alt='add product' src={addNewProductIcon}/>
                        Добавить товар
                    </button>
                </div>
                <div className='products-list'>
                    {[1,2,3,4,5,6,7,8].map(i => {
                        return <ProductCard/>
                    })}
                </div>
            </div>
        )
    }
}
