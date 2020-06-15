import React, { useState, useEffect } from 'react'
import './sidebar-filter.scss'
import { connect, ConnectedProps } from "react-redux";
import 'react-input-range/lib/css/index.css'
import InputRange from 'react-input-range';
import { getProductsRequest, fetchCategoriesRequest } from '../../actions/actions';

interface RootState{
    products: any[],
    categories: any[]
}

interface RootDispatch{
    fetchProducts: (query: string) => void;
    fetchCategories: () => void;
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RootDispatch;

const SidebarFilter:React.FC<Props> = ({products, fetchProducts, categories, fetchCategories}:Props) => {
    useEffect(() => {
        fetchCategories()
    }, [fetchCategories])

    return (
        <div className='sidebar-filter-container'>
            <div className='filters'>
                <div className='categories-filter'>
                    <p className='filter-title'>Категории</p>
                    {categories.map(category => (
                        <p className='category'>{category.displayTitle}</p>
                    ))}
                </div>

                <div className='sex-filter'>
                    <p className='filter-title'>Пол</p>
                    <div className='sex-checkboxes'>
                        <input type="checkbox" id="male" name="male" value=""/>
                        <label>Мужской</label>

                        <input type="checkbox" id="female" name="female" value=""/>
                        <label>Женский</label>
                    </div>
                </div>

                <div className='size-filter'>
                    <p className='filter-title'>Размеры</p>
                    <div className='sizes'>
                        <div className='size'/>
                        <div className='size'/>
                        <div className='size'/>
                        <div className='size'/>
                        <div className='size'/>
                        <div className='size'/>
                        <div className='size'/>
                        <div className='size'/>
                    </div>
                </div>

                <div className='color-filter'>
                    <p className='filter-title'>Цвета</p>
                    <div className='colors'>
                        <div className='color'/>
                        <div className='color'/>
                        <div className='color'/>
                        <div className='color'/>
                        <div className='color'/>
                        <div className='color'/>
                        <div className='color'/>
                        <div className='color'/>
                        <div className='color'/>
                        <div className='color'/>
                    </div>
                </div>

                <div className='price-filter'>
                    <p className='filter-title'>Цена</p>
                    <InputRange
                        maxValue={100}
                        minValue={0}
                        formatLabel={value => `${value} с`}
                        value={{min:0, max:20}}
                        onChange={value => console.log(value)}
                        onChangeComplete={value => console.log(value)}
                    />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    products: state.products,
    categories: state.categories
});

const mapDispatchToProps:RootDispatch = ({
    fetchProducts: getProductsRequest,
    fetchCategories: fetchCategoriesRequest
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(SidebarFilter);
