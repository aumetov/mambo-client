import React, { useState, useEffect } from 'react'
import './shop-page.scss';
import { connect, ConnectedProps } from "react-redux";
import { fetchCategoriesRequest } from '../../actions/actions';
import ProductsListing from '../../components/products-listing/products-listing';

interface RootState{
    loading: boolean
    categories: any[]
}

interface RootDispatch{
    fetchCategories: () => void;
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RootDispatch;

const ShopPage:React.FC<Props> = ({loading, categories, fetchCategories}:Props) =>  {
  return (
      <div className="shop-page-container">
          <ProductsListing/>
      </div>
  );
}

const mapStateToProps = (state: RootState) => ({
    loading: state.loading,
    categories: state.categories
});

const mapDispatchToProps:RootDispatch = ({
    fetchCategories: fetchCategoriesRequest
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(ShopPage);