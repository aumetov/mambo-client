import React, { useState, useEffect } from 'react'
import { connect, ConnectedProps } from "react-redux";
import './payment-form.scss';
import { TextField } from '@material-ui/core';

interface RootState{
    loading: boolean,
    user: any
}

interface RootDispatch{
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RootDispatch;

const PaymentForm:React.FC<Props> = ({loading, user}:Props) => {
    const [promocode, setPromocode] = useState<string>('')

    return (
        <div className='cart-checkout-container'>
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

export default connector(PaymentForm);