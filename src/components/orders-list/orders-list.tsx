import React, { useState, useEffect } from 'react'
import { connect, ConnectedProps } from "react-redux";
import './orders-list.scss';
import OrdersListItem from './order-list-item/order-list-item';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

interface RootState{
    loading: boolean,
    user: any
}

interface RootDispatch{
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RootDispatch;

const OrdersList:React.FC<Props> = ({loading, user}:Props) => {
    return (
        <div className='orders-list-container'>
            <TableContainer className={'orders-list-table'}>
                <Table aria-label="sticky table">
                <TableHead>
                    <TableRow>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {[1,2].map((order) => {
                        return (
                            <OrdersListItem order={order}/>
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

const connector = connect(
    mapStateToProps
);

export default connector(OrdersList);