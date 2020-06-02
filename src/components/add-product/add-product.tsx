import React, { Component } from 'react'
import './add-product.scss'
import { connect, ConnectedProps } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { createProductRequest } from '../../actions/actions';

const addNewProductIcon = require('../../shared/icons/add.png')

interface RootState{
    loading: boolean
}

interface RootDispatch{
    createProduct: (query: string) => void;
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RootDispatch;

const AddProduct:React.FC<Props> = ({loading, createProduct}:Props) => {
    const titleInputRef = React.createRef<HTMLInputElement>();
    const categoryInputRef = React.createRef<HTMLInputElement>();
    const priceInputRef = React.createRef<HTMLInputElement>();
    const salePriceInputRef = React.createRef<HTMLInputElement>();
    const collectionInputRef = React.createRef<HTMLInputElement>();
    const statusInputRef = React.createRef<HTMLInputElement>();
    const descriptionInputRef = React.createRef<HTMLInputElement>();


    const onProductAdd = () => {
        console.log(titleInputRef!.current!.value);
        console.log(statusInputRef!.current!.value);
        return createProduct('');
    }

    return (
        <div className='add-product-container'>
            <div className='main-product-info'>
                <div className='main-product-info-textfields'>
                    <TextField label="Название" inputRef={titleInputRef} className='product-info-input'/>
                    <TextField label="Категория" inputRef={categoryInputRef} className='product-info-input'/>
                    <TextField label="Цена" inputRef={priceInputRef} type='number' className='product-info-input'/>
                    <TextField label="Цена распродажи" inputRef={salePriceInputRef} type='number' className='product-info-input'/>
                    <TextField label="Коллекция" inputRef={collectionInputRef} className='product-info-input'/>
                    <FormControl>
                        <InputLabel id="status-select-label">Статус</InputLabel>
                        <Select
                            labelId="status-select-label"
                            id="status-select"
                            inputRef={statusInputRef}
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
                inputRef={descriptionInputRef}
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
                <button className='add-product-button' onClick={onProductAdd}>
                    <img className='add-product-icon' alt='add product' src={addNewProductIcon}/>
                    Добавить товар
                </button>
            </div>
        </div>
    )
}

const mapStateToProps: ({loading}:RootState) => RootState = ({loading}:RootState) => ({
    loading
});

const mapDispatchToProps:RootDispatch = ({
    createProduct: createProductRequest,
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(AddProduct);