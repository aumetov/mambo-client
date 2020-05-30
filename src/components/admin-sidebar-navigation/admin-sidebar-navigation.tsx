import React, { Component } from 'react'
import './admin-sidebar-navigation.scss'

const dashboardIcon = require('../../shared/icons/dashboard.png')
const salesIcon = require('../../shared/icons/sales.png')
const productsIcon = require('../../shared/icons/product.png')
const couponsIcon = require('../../shared/icons/coupon.png')
const statisticsIcon = require('../../shared/icons/statistics.png')
const settingsIcon = require('../../shared/icons/settings.png')

export default class AdminSidebarNavigation extends Component {
    render() {
        return (
            <div className='admin-sidebar-navigation-container'>
                <div className='navigation-button'>
                    <img className='navigation-icon' alt='dashboard' src={dashboardIcon}/>
                    <p className='navigation-title'>Панель</p>
                </div>

                <div className='navigation-button'>
                    <img className='navigation-icon' alt='sales' src={salesIcon}/>
                    <p className='navigation-title'>Продажи</p>
                </div>

                <div className='navigation-button'>
                    <img className='navigation-icon' alt='products' src={productsIcon}/>
                    <p className='navigation-title'>Товары</p>
                </div>

                <div className='navigation-button'>
                    <img className='navigation-icon' alt='coupons' src={couponsIcon}/>
                    <p className='navigation-title'>Купоны</p>
                </div>

                <div className='navigation-button'>
                    <img className='navigation-icon' alt='statistics' src={statisticsIcon}/>
                    <p className='navigation-title'>Статистика</p>
                </div>

                <div className='navigation-button'>
                    <img className='navigation-icon' alt='settings' src={settingsIcon}/>
                    <p className='navigation-title'>Настройки</p>
                </div>
            </div>
        )
    }
}
