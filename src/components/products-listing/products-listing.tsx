import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './products-listing.scss'
import SidebarFilter from '../sidebard-filter/sidebar-filter'
import ProductCard from '../product-card/product-card'

export default class ProductsListing extends Component {
    render() {
        return (
            <div className='products-listing-container'>
                <SidebarFilter/>
                <div className='products-list'>
                    {[1,2,3,4,5,6,7,8, 10].map((i) => {
                        return <Link to={`product/${i}/`} className='product-link'><ProductCard/></Link>
                    })}
                </div>
            </div>
        )
    }
}
