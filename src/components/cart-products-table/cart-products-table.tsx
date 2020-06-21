import React, { useState, useEffect } from 'react'
import { connect, ConnectedProps } from "react-redux";
import { deleteProductFromCartRequest } from '../../actions/actions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const deleteIcon = require('../../shared/icons/delete.png')

interface RootState{
    loading: boolean,
    user: any
}

interface RootDispatch{
    deleteItemFromCart: (userId: string, itemId: string) => void
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RootDispatch;

const CartProductsTable:React.FC<Props> = ({loading, user, deleteItemFromCart}:Props) => {
    return (
        <div className='cart-produts-table-container'>
                <TableContainer className={'card-products-table'}>
                <Table aria-label="sticky table">
                <TableHead>
                    <TableRow>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {user.cart.map((row) => {
                    return (
                        <TableRow hover tabIndex={-1} key={row}>
                        {user.cart.map((item) => {
                            return (
                            <TableCell>
                                <img className='delete-item-icon' src={deleteIcon} alt="delete-cart-item" onClick={() => deleteItemFromCart(user._id, item.productId)}/>
                            </TableCell>
                            );
                        })}
                        </TableRow>
                    );
                    })}
                </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    loading: state.loading,
    user: state.user
});

const mapDispatchToProps:RootDispatch = ({
    deleteItemFromCart: deleteProductFromCartRequest
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(CartProductsTable);