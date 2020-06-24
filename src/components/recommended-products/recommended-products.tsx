import React, { useState, useEffect } from 'react'
import './recommended-products.scss'
import { connect, ConnectedProps } from "react-redux";
import { getProductsRequest } from '../../actions/actions';
import ProductCard from '../product-card/product-card';
import { createQueryString } from '../../utils/create-query';
import { ProductDto, SearchFilter } from '../../types/types';

interface RootState{
    loading: boolean,
    recommendedProducts: any,
    productById: ProductDto
}

interface RootDispatch{
    getProducts: (query: string) => void
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RootDispatch;

const RecommendedProducts:React.FC<Props> = ({loading, productById, getProducts}:Props) => {
    useEffect(() => {
        const query: SearchFilter = {
            category: productById.categories.map(cat => cat._id),
            priceRange: {min: 0, max: 20000}
        }
        getProducts(createQueryString(query))
    }, [getProducts])

    return (
        <div className='recommended-products-container'>
            {[1,2,3,4,5].map(i =>
                (<ProductCard/>)
            )}
        </div>
    )
}

const mapStateToProps = (state: RootState, props: any) => ({
    loading: state.loading,
    productById: state.productById
});

const mapDispatchToProps:RootDispatch = ({
    getProducts: getProductsRequest
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(RecommendedProducts);
