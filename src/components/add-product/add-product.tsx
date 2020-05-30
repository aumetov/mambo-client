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
const deleteIcon = require('../../shared/icons/delete.png')

export default class AddProduct extends Component {
    render() {
        return (
            <div className='add-product-container'>
                <div className='main-product-info'>
                    <div className='main-product-info-textfields'>
                        <TextField label="Название" className='product-info-input'/>
                        <TextField label="Категория" className='product-info-input'/>
                        <TextField label="Цена" className='product-info-input'/>
                        <TextField label="Цена распродажи" className='product-info-input'/>
                        <TextField label="Коллекция" className='product-info-input'/>
                        <TextField label="Статус" className='product-info-input'/>
                    </div>
                    <div className="product-photos-upload">

                    </div>
                </div>
                <TextField label="Описание" multiline className='product-description-input'/>
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

                    <button className='add-product-button'>
                        <img className='add-product-icon' alt='add product' src={addNewProductIcon}/>
                        Добавить товар
                    </button>
                </div>
            </div>
        )
    }
}
