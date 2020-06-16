import React, { useState, useEffect } from 'react'
import './sidebar-filter.scss'
import { connect, ConnectedProps } from "react-redux";
import 'react-input-range/lib/css/index.css'
import InputRange, {Range} from 'react-input-range';
import { getProductsRequest, fetchCategoriesRequest } from '../../actions/actions';
import { Gender } from '../../consts/gender';
import { Sizes } from '../../consts/sizes';
import { Colors, ColorsHexCodes } from '../../consts/colors';
import { PriceRange, SearchFilter } from '../../types/types';
import { createQueryString } from '../../utils/create-query';

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
    const [sexes, setSex] = useState<Array<Gender>>([Gender.UNISEX])
    const [sizes, setSizes] = useState<Array<Sizes>>([])
    const [colors, setColors] = useState<Array<Colors>>([])
    const [priceRange, setPriceRange] = useState<PriceRange>({min:0, max: 2500})

    useEffect(() => {
        fetchCategories()
    }, [fetchCategories])

    const getProducts = () => {
        const filter: SearchFilter = {
            category,
            sexes,
            sizes,
            colors,
            priceRange
        }

        fetchProducts(createQueryString(filter))
    }

    useEffect(() => {
        const filter: SearchFilter = {
            category,
            sexes,
            sizes,
            colors,
            priceRange
        }

        fetchProducts(createQueryString(filter))
    }, [category, sexes, sizes, colors, fetchProducts])

    const selectColor = (color: string) => {
        if (!colors.includes(Colors[color])) {
            setColors([...colors, Colors[color]])
        } else {
            const newColors = colors.filter(c => c !== color)
            setColors(newColors)
        }
    }

    const selectSize = (size: string) => {
        if (!sizes.includes(Sizes[size])) {
            setSizes([...sizes, Sizes[size]])
        } else {
            const newSizes = sizes.filter(c => c !== size)
            setSizes(newSizes)
        }
    }

    const selectSex = (sex: string) => {
        if (!sexes.includes(Gender[sex])) {
            setSex([...sexes, Gender[sex]])
        } else {
            const newSexes = sexes.filter(c => c !== sex)
            setSex(newSexes)
        }
    }

    return (
        <div className='sidebar-filter-container'>
            <div className='filters'>
                <div className='categories-filter'>
                    <p className='filter-title'>Категории</p>
                    {categories.map(cat => (
                        <p className={`category ${category === cat._id && 'selected-category'}`} key={cat._id} onClick={() => {setCategory(cat._id)}}>{cat.displayTitle}</p>
                    ))}
                </div>

                <div className='sex-filter'>
                    <p className='filter-title'>Пол</p>
                    <div className='sex-checkboxes'>
                        <input type="checkbox" id="male" name="male" checked={sexes.includes(Gender.MALE)} onChange={() => selectSex(Gender.MALE)}/>
                        <label>Мужской</label>

                        <input type="checkbox" id="female" name="female" checked={sexes.includes(Gender.FEMALE)} onChange={() => selectSex(Gender.FEMALE)}/>
                        <label>Женский</label>
                    </div>
                </div>

                <div className='size-filter'>
                    <p className='filter-title'>Размеры</p>
                    <div className='sizes'>
                        {Object.keys(Sizes).map(size => (
                            <div className={`size ${sizes.includes(Sizes[size]) && 'selected-size'}`} key={size} onClick={() => selectSize(size)}>{Sizes[size]}</div>
                        ))}
                    </div>
                </div>

                <div className='color-filter'>
                    <p className='filter-title'>Цвета</p>
                    <div className='colors'>
                        {Object.keys(ColorsHexCodes).map((color: string) => (
                            <div className={`color ${colors.includes(Colors[color]) && 'selected-color'}`} key={color} style={{background: ColorsHexCodes[color]}} onClick={() => selectColor(color)}/>
                        ))}
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
                        onChangeComplete={getProducts}
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
