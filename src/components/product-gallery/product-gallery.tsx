import React, { Component } from 'react'
import './product-gallery.scss'
const photo = require('../../shared/icons/product-photo.png');

export default class ProductGallery extends Component {
    render() {
        return (
            <div className='product-gallery-container'>
                <div className='product-main-photo-container'>
                    <img className='product-main-photo' alt='main' src={photo} />
                </div>
                <div className='product-photos'>
                    <img className='product-photo' alt='product-detailed' src={photo}/>
                    <img className='product-photo' alt='product-detailed' src={photo}/>
                    <img className='product-photo' alt='product-detailed' src={photo}/>
                    <img className='product-photo' alt='product-detailed' src={photo}/>
                    <img className='product-photo' alt='product-detailed' src={photo}/>
                </div>
                
            </div>
        )
    }
}
