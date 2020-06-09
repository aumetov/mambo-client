import React, { useState, useEffect } from 'react'
import './edit-product.scss'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Gender, GenderDisplayNames } from '../../consts/gender';
import { Colors, ColorsDisplayNames } from '../../consts/colors';
import { Sizes } from '../../consts/sizes';
import { ProductStatus, ProductStatusDisplayNames } from '../../consts/product-status';
import { CreateProductDto } from '../../types/types';
import { connect, ConnectedProps } from "react-redux";
import { createProductRequest, fetchCategoriesRequest } from '../../actions/actions';

const addNewProductIcon = require('../../shared/icons/add.png')
const deleteIcon = require('../../shared/icons/delete.png')

interface RootState{
    loading: boolean
    categories: any[]
}

interface RootDispatch{
    fetchCategories: () => void;
    createProduct: (product: CreateProductDto) => void;
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RootDispatch;

const EditProduct:React.FC<Props> = ({loading, categories, fetchCategories, createProduct}:Props) => {
    const [title, setTitle] = useState<string>('')
    const [productCategories, setCategories] = useState<Array<any>>([])
    const [price, setPrice] = useState<number>(0)
    const [salePrice, setSalePrice] = useState<number>(0)
    const [productImages, setProductImages] = useState<Array<File>>([]) 
    const [collection, setCollection] = useState<string>('')
    const [status, setStatus] = useState<ProductStatus>(ProductStatus.IN_STOCK)
    const [description, setDescription] = useState<string>('')
    const [colors, setColors] = useState<Array<Colors>>([]);
    const [sizes, setSizes] = useState<Array<Sizes>>([]);
    const [sex, setSex] = useState<Gender>(Gender.FEMALE)

    return (
        <div className='edit-product-container'>
            <div className='main-product-info'>
                <div className='main-product-info-textfields'>
                    <TextField label="Название"  className='product-info-input'/>
                    <TextField label="Категория" className='product-info-input'/>
                    <TextField label="Цена" type='number' className='product-info-input'/>
                    <TextField label="Цена распродажи" type='number' className='product-info-input'/>
                    <TextField label="Коллекция" className='product-info-input'/>
                    <FormControl>
                        <InputLabel id="status-select-label">Статус</InputLabel>
                        <Select
                            labelId="status-select-label"
                            id="status-select"
                        >
                            <MenuItem value={'in-stock'}>В наличии</MenuItem>
                            <MenuItem value={'out-of-stock'}>Нет в наличии</MenuItem>
                            <MenuItem value={'delivery-expected'}>Ожидается поставка</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="product-photos-upload">

                </div>
            </div>
            <TextField
                label="Описание"
                multiline rows={4}
                className='product-description-input'
                inputProps={{maxLength: 340}}
            />
            <div className='product-options'>
                <FormControl style={{width: 356}}>
                    <InputLabel id="size-selector">Размер</InputLabel>
                    <Select
                        labelId="size-selector"
                        id="size-selector"
                        label="Размер"
                        multiple
                        value={[1,2,3]}
                        renderValue={(selected: any) => selected.join(', ')}
                        onChange={()=>{}}
                    >
                        {[1,2,3,4].map((name) => (
                            <MenuItem key={name} value={name}>
                            <Checkbox checked={[1,2,3].includes(name)}/>
                            <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl style={{width: 356}}>
                    <InputLabel id="color-selector">Цвет</InputLabel>
                    <Select
                        labelId="color-selector"
                        id="color-selector"
                        label="Цвет"
                        multiple
                        value={[1,2,3]}
                        renderValue={(selected: any) => selected.join(', ')}
                        onChange={()=>{}}
                    >
                        {[1,2,3,4].map((name) => (
                            <MenuItem key={name} value={name}>
                            <Checkbox checked={[1,2,3].includes(name)}/>
                            <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div className="product-action-buttons">
                <button className='delete-product-button'>
                    <img className='delete-product-icon' alt='delete product' src={deleteIcon}/>
                    Удалить
                </button>

                <button className='edit-product-button'>
                    <img className='add-product-icon' alt='edit product' src={addNewProductIcon}/>
                    Сохранить
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    loading: state.loading,
    categories: state.categories
});

const mapDispatchToProps:RootDispatch = ({
    createProduct: createProductRequest,
    fetchCategories: fetchCategoriesRequest
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(EditProduct);