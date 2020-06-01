import React, { Component } from 'react'
import './add-product.scss'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const addNewProductIcon = require('../../shared/icons/add.png')

interface IProps {
}

interface IState {
    title: string;
    categories: number[];
    price: number;
    salePrice?: number;
    description?: string;
    collection?: string;
    status: string;
    shopId: string;
    sizes: string[];
    sex: string;
}

export default class AddProduct extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            title: '',
            categories: [],
            price: 0,
            salePrice: 0,
            description: '',
            collection: '',
            status: '',
            shopId: '',
            sizes: [],
            sex: ''
        };
    }

    render() {
        return (
            <div className='add-product-container'>
                <div className='main-product-info'>
                    <div className='main-product-info-textfields'>
                        <TextField label="Название" value={this.state.title} onChange={this.onTitleChange} className='product-info-input'/>
                        <TextField label="Категория" className='product-info-input'/>
                        <TextField label="Цена" value={this.state.price} onChange={this.onPriceChange} type='number' className='product-info-input'/>
                        <TextField label="Цена распродажи" value={this.state.salePrice} onChange={this.onSalePriceChange} type='number' className='product-info-input'/>
                        <TextField label="Коллекция" value={this.state.collection} onChange={this.onCollectionChange} className='product-info-input'/>
                        <FormControl>
                            <InputLabel id="status-select-label">Статус</InputLabel>
                            <Select
                                labelId="status-select-label"
                                id="status-select"
                                value={this.state.status}
                                onChange={this.onStatusChange}
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
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
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
                    <button className='add-product-button'>
                        <img className='add-product-icon' alt='add product' src={addNewProductIcon}/>
                        Добавить товар
                    </button>
                </div>
            </div>
        )
    }

    onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({title: e.target.value})
    }

    onPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({price: parseInt(e.target.value)})
    }

    onSalePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({salePrice: parseInt(e.target.value)})
    }

    onCollectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({collection: e.target.value})
    }

    onStatusChange = (e: React.ChangeEvent<any>) => {
        this.setState({status: e.target.value})
    }

    onDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({description: e.target.value})
    }
}
