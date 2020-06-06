import React, { useState } from 'react'
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
import { CreateProductDto } from '../../types/types';
import { Sexes } from '../../consts/sex-enums';
import ImageUploader from "react-images-upload";

const addNewProductIcon = require('../../shared/icons/add.png')

interface RootState{
    loading: boolean
}

interface RootDispatch{
    createProduct: (product: CreateProductDto) => void;
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RootDispatch;

const AddProduct:React.FC<Props> = ({loading, createProduct}:Props) => {
    const [title, setTitle] = useState<string>('')
    const [categories, setCategories] = useState<Array<number>>([1,2])
    const [price, setPrice] = useState<number>(0)
    const [salePrice, setSalePrice] = useState<number>(0)
    const [productImages, setProductImages] = useState<Array<File>>([]) 
    const [collection, setCollection] = useState<string>('')
    const [status, setStatus] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [colors, setColors] = useState<Array<number>>([]);
    const [sizes, setSizes] = useState<Array<string>>([]);
    const [sex, setSex] = useState<Sexes>(Sexes.Female)

    const onProductAdd = () => {
        const data: CreateProductDto = {
            title,
            categories,
            price,
            salePrice,
            collection,
            status,
            description,
            colors,
            sizes,
            productImages,
            sex,
            shopId: 'testShopId',
            productThumbnail: '1'
        };

        createProduct(data)
    }

    const onDrop = (pictureFiles: File[], pictureDataURLs: string[]) => {
        setProductImages(pictureFiles)
    }

    return (
        <div className='add-product-container'>
            <div className='main-product-info'>
                <div className='main-product-info-textfields'>
                    <TextField label="Название" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} className='product-info-input'/>
                    <TextField label="Категория" value={categories} className='product-info-input'/>
                    <TextField label="Цена" value={price} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(parseInt(e.target.value))} type='number' className='product-info-input'/>
                    <TextField label="Цена распродажи" value={salePrice} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSalePrice(parseInt(e.target.value))} type='number' className='product-info-input'/>
                    <TextField label="Коллекция" value={collection} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCollection(e.target.value)} className='product-info-input'/>
                    <FormControl>
                        <InputLabel id="status-select-label">Статус</InputLabel>
                        <Select
                            labelId="status-select-label"
                            id="status-select"
                            value={status}
                            onChange={(e: React.ChangeEvent<{name?: string | undefined, value: any}>) => setStatus(e.target.value)}
                        >
                            <MenuItem value={'in-stock'}>В наличии</MenuItem>
                            <MenuItem value={'out-of-stock'}>Нет в наличии</MenuItem>
                            <MenuItem value={'delivery-expected'}>Ожидается поставка</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel id="sex-select-label">Пол</InputLabel>
                        <Select
                            labelId="sex-select-label"
                            id="sex-select"
                            value={sex}
                            onChange={(e: React.ChangeEvent<{name?: string | undefined, value: any}>) => setSex(e.target.value)}
                        >
                            <MenuItem value={Sexes.Male}>Мужской</MenuItem>
                            <MenuItem value={Sexes.Female}>Женский</MenuItem>
                            <MenuItem value={Sexes.Unisex}>Юнисекс</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="product-photos-upload">
                    <ImageUploader
                        withIcon={false}
                        withPreview={true}
                        label=""
                        buttonText="Добавить фото"
                        onChange={onDrop}
                        imgExtension={[".jpg", ".png"]}
                        maxFileSize={1048576}
                        fileSizeError=" размер файла слишком большой"
                    />
                </div>
            </div>
            <TextField
                label="Описание"
                multiline rows={4}
                className='product-description-input'
                inputProps={{maxLength: 340}}
                value={description}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
            />
            <div className='product-options'>
                <FormControl style={{width: 356}}>
                    <InputLabel id="size-selector">Размер</InputLabel>
                    <Select
                        labelId="size-selector"
                        id="size-selector"
                        label="Размер"
                        multiple
                        renderValue={(selected: any) => selected.join(', ')}
                        value={colors}
                        onChange={(e: React.ChangeEvent<{name?: string | undefined, value: any}>) => setColors(e.target.value)}
                    >
                        {[1,2,3,4].map((name) => (
                            <MenuItem key={name} value={name}>
                            <Checkbox checked={colors.includes(name)}/>
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
                        renderValue={(selected: any) => selected.join(', ')}
                        value={sizes}
                        onChange={(e: React.ChangeEvent<{name?: string | undefined, value: any}>) => setSizes(e.target.value)}
                    >
                        {['1', '2', '3'].map((name) => (
                            <MenuItem key={name} value={name}>
                            <Checkbox checked={sizes.includes(name)}/>
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