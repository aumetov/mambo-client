import React, { useState, useEffect } from 'react'
import './add-product.scss'
import { connect, ConnectedProps } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { createProductRequest, fetchCategoriesRequest } from '../../actions/actions';
import { CreateProductDto } from '../../types/types';
import ImageUploader from "react-images-upload";
import { Gender, GenderDisplayNames } from '../../consts/gender';
import { Colors, ColorsDisplayNames } from '../../consts/colors';
import { Sizes } from '../../consts/sizes';
import { ProductStatus, ProductStatusDisplayNames } from '../../consts/product-status';

const addNewProductIcon = require('../../shared/icons/add.png')

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

const AddProduct:React.FC<Props> = ({loading, categories, fetchCategories, createProduct}:Props) => {
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

    useEffect(() => {
        fetchCategories()
    }, [fetchCategories])

    const onProductAdd = () => {
        const data: CreateProductDto = {
            title,
            categories: productCategories,
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
                    <FormControl style={{width: 356}}>
                        <InputLabel id="category-selector">Категория</InputLabel>
                        <Select
                            labelId="category-selector"
                            id="category-selector"
                            label="Категория"
                            multiple
                            renderValue={(selected: any) => selected.map(category => category.displayTitle).join(', ')}
                            value={productCategories}
                            onChange={(e: React.ChangeEvent<{name?: string | undefined, value: any}>) => setCategories(e.target.value)}
                        >
                            {categories.map((category: any) => (
                                <MenuItem key={category._id} value={category}>
                                <Checkbox checked={productCategories.includes(category)}/>
                                <ListItemText primary={category.displayTitle} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
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
                            <MenuItem value={ProductStatus.IN_STOCK}>{ProductStatusDisplayNames.IN_STOCK}</MenuItem>
                            <MenuItem value={ProductStatus.OUT_OF_STOCK}>{ProductStatusDisplayNames.OUT_OF_STOCK}</MenuItem>
                            <MenuItem value={ProductStatus.DELIVERY_EXPECTED}>{ProductStatusDisplayNames.DELIVERY_EXPECTED}</MenuItem>
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
                            <MenuItem value={Gender.MALE}>{GenderDisplayNames.MALE}</MenuItem>
                            <MenuItem value={Gender.FEMALE}>{GenderDisplayNames.FEMALE}</MenuItem>
                            <MenuItem value={Gender.UNISEX}>{GenderDisplayNames.UNISEX}</MenuItem>
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
                        value={sizes}
                        onChange={(e: React.ChangeEvent<{name?: string | undefined, value: any}>) => setSizes(e.target.value)}
                    >
                        {Object.keys(Sizes).map((key) => (
                            <MenuItem key={key} value={Sizes[key]}>
                            <Checkbox checked={sizes.includes(Sizes[key])}/>
                            <ListItemText primary={Sizes[key]} />
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
                        renderValue={(selected: any) => selected.map(color => ColorsDisplayNames[color]).join(', ')}
                        value={colors}
                        onChange={(e: React.ChangeEvent<{name?: string | undefined, value: any}>) => setColors(e.target.value)}
                    >
                        {Object.keys(Colors).map((key) => (
                            <MenuItem key={Colors[key]} value={Colors[key]}>
                            <Checkbox checked={colors.includes(Colors[key])}/>
                            <ListItemText primary={ColorsDisplayNames[key]} />
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

export default connector(AddProduct);