import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default class CartProductsTable extends Component {
    render() {
        return (
            <div className='cart-produts-table-container'>
                 <TableContainer className={'card-products-table'}>
                    <Table aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[1,2,3,4,5].map((row) => {
                        return (
                            <TableRow hover tabIndex={-1} key={row}>
                            {[1,2,3].map((column) => {
                                return (
                                <TableCell>
                                    <img className='delete-item-icon' src={deleteIcon} alt="delete-cart-item" onClick={() => deleteProductFromCartRequest({userId: user._id, itemId: item.productId})}/>
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
}
