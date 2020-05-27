import React, { Component } from 'react'
import './product-details.scss'
import ProductGallery from '../../components/product-gallery/product-gallery'

const addToBagIcon = require('../../shared/icons/add-to-bag.png');
const addToWishList = require('../../shared/icons/add-to-wishlist.png');

export default class ProductDetails extends Component {
    render() {
        return (
            <div className='product-details-container'>
                <ProductGallery/>
                <div className='product-info'>
                    <h3 className='product-info-title'>Go-Go Red Dress</h3>
                    <p className='product-info-shop'>Nike</p>

                    <div className='size-selection'>
                        <p className='selection-title'>Размер</p>
                        <div className='sizes-container'>
                            <div className='size-option'/>
                            <div className='size-option'/>
                            <div className='size-option'/>
                        </div>
                    </div>

                    <div className='color-selection'>
                        <p className='selection-title'>Цвет</p>
                        <div className='colors-container'>
                            <div className='color-option'/>
                            <div className='color-option'/>
                            <div className='color-option'/>
                        </div>
                    </div>

                    <p className='product-old-price'>1750 c</p>
                    <p className='product-price'>1400 c</p>

                    <div className='product-action-buttons'>
                        <button className='add-to-cart-button'>
                            <img className='add-to-cart-icon' alt='add to cart' src={addToBagIcon}/>
                            Добавить в корзину
                        </button>

                        <button className='add-to-wishlist-button'>
                            <img className='add-to-wishlist-icon' alt='add to wishlist' src={addToWishList}/>
                            в список желаемых
                        </button>
                    </div>

                    <p className='description-title'>Описание</p>
                </div>
            </div>
        )
    }
}
