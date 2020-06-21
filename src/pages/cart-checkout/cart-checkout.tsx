import React, { useState, useEffect } from 'react'
import { connect, ConnectedProps } from "react-redux";
import './cart-checkout.scss'
import CartProductsTable from '../../components/cart-products-table/cart-products-table'
import { deleteProductFromCartRequest } from '../../actions/actions';

const deleteIcon = require('../../shared/icons/delete.png')

interface RootState{
    loading: boolean,
    user: any
}

interface RootDispatch{
    deleteProductFromCartRequest: ({userId: string, itemId: string}) => void
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RootDispatch;

const CartCheckout:React.FC<Props> = ({loading, user, deleteProductFromCartRequest}:Props) => {
    return (
        <div className='cart-checkout-container'>
            <div className='cart-products-info-list'>
                <h3 className='cart-checkout-title'>Корзина</h3>
                <CartProductsTable/>
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

const mapStateToProps = (state: RootState) => ({
    loading: state.loading,
    user: state.user
});

const mapDispatchToProps:RootDispatch = ({
    deleteItem: deleteProductFromCartRequest
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(CartCheckout);