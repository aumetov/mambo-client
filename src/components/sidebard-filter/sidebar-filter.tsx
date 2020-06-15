import React, { useState, useEffect } from 'react'
import './sidebar-filter.scss'
import { connect, ConnectedProps } from "react-redux";
import 'react-input-range/lib/css/index.css'
import InputRange, {Range} from 'react-input-range';
import { getProductsRequest, fetchCategoriesRequest } from '../../actions/actions';
import { Gender } from '../../consts/gender';
import { Sizes } from '../../consts/sizes';
import { Colors } from '../../consts/colors';
import { PriceRange } from '../../types/types';

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
    const [category, setCategory] = useState<string>('')
    const [sex, setSex] = useState<Array<Gender>>([Gender.UNISEX])
    const [sizes, setSizes] = useState<Array<Sizes>>([])
    const [colors, setColors] = useState<Array<Colors>>([])
    const [priceRange, setPriceRange] = useState<PriceRange>({min:0, max: 2500})

    useEffect(() => {
        fetchCategories()
    }, [fetchCategories])

    return (
        <div className='sidebar-filter-container'>
            <div className='filters'>
                <div className='categories-filter'>
                    <p className='filter-title'>Категории</p>
                    {categories.map(category => (
                        <p className='category' key={category._id}>{category.displayTitle}</p>
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
                        {Object.keys(Sizes).map(size => (
                            <div className='size' key={size}>{Sizes[size]}</div>
                        ))}
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
                        maxValue={10000}
                        minValue={0}
                        formatLabel={value => `${value} с`}
                        value={priceRange}
                        onChange={(value: any) => {setPriceRange(value)}}
                        onChangeComplete={(value: any) => {}}
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
