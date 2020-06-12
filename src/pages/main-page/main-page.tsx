import React from 'react'
import './main-page.scss'
import SidebarFilter from '../../components/sidebard-filter/sidebar-filter'
import { Link } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card'

export const MainPage: React.FC<{}> = () => {
    return (
        <div className="main-page-container">
            <SidebarFilter/>
            <div className="main-page-content">
                <div className='products-list'>
                    {[1,2,3,4,5,6,7,8].map(i => {
                        return <Link to={`product/${i}/`} className='product-link'><ProductCard/></Link>
                    })}
                </div>
            </div>
        </div>
    );
  }