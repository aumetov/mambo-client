import React, { useState, useEffect } from 'react'
import './shop-page.scss';
import { connect, ConnectedProps } from "react-redux";
import { getProductsRequest } from '../../actions/actions';
import ProductsListing from '../../components/products-listing/products-listing';

interface RootState{
    loading: boolean,
    shopId: string
}

interface RootDispatch{
    getProducts: (query: string) => void;
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RootDispatch;

const ShopPage:React.FC<Props> = ({loading, getProducts, shopId}:Props) =>  {
    useEffect(() => {
        getProducts(`shopId=${shopId}`)
    }, [getProducts])

    return (
        <div className="shop-page-container">
            <ProductsListing/>
        </div>
    );
}

const mapStateToProps = (state: RootState, props: any) => ({
    loading: state.loading,
    shopId: props.match.params.shopId
});

const mapDispatchToProps:RootDispatch = ({
    getProducts: getProductsRequest
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(ShopPage);