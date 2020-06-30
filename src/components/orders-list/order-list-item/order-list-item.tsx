import React from 'react'
import './order-list-item.scss';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const OrdersListItem = (props) => {
    const {order} = props;
    return (
        <TableRow hover tabIndex={-1} key={order?._id}>
            <TableCell>
                <p>{order?._id}</p>
            </TableCell>
            <TableCell>
                <p>{order?.products.size}</p>
            </TableCell>
            <TableCell>
                <p>{order?.status}</p>
            </TableCell>
            <TableCell>
                <p>{order?.created_at}</p>
            </TableCell>
            <TableCell>
                <p>1500 c</p>
            </TableCell>
        </TableRow>
    )
}
export default OrdersListItem;