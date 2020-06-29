import React, { useState, useEffect } from 'react'
import { connect, ConnectedProps } from "react-redux";
import './orders-list.scss';
import { TextField } from '@material-ui/core';

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
            <TextField/>
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