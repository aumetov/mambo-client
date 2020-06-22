import React from 'react'
import './main-page.scss'
import ProductsListing from '../../components/products-listing/products-listing'

export const MainPage: React.FC<{}> = () => {
    return (
        <div className="main-page-container">
            <ProductsListing/>
        </div>
    );
}