import React, { Component } from 'react'
import './admin-panel.scss'
import AdminSidebarNavigation from '../../components/admin-sidebar-navigation/admin-sidebar-navigation'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AdminProducts from '../../components/admin-products/admin-products';

export default class AdminPanel extends Component {
    render() {
        return (
            <div className='admin-panel-container'>
                <AdminSidebarNavigation/>
                <div className='admin-panel-content'>
                    <AdminProducts/>
                    {/* <Router>
                        <Switch>
                            <Route path='/' exact={true} component={<div/>}/>
                            <Route path='/product' exact={true} component={<div/>}/>
                            <Route path='/shop' exact={true} component={<div/>}/>
                        </Switch>
                    </Router> */}
                </div>
            </div>
        )
    }
}
