import React, { useState, useEffect } from 'react'
import './product-details.scss'
import { connect, ConnectedProps } from "react-redux";
import ProductGallery from '../../components/product-gallery/product-gallery'
import { ProductDto, CartItemDto } from '../../types/types';
import { Colors } from '../../consts/colors';
import { Sizes } from '../../consts/sizes';

const addToBagIcon = require('../../shared/icons/add-to-bag.png');
const addToWishList = require('../../shared/icons/add-to-wishlist.png');

interface RootState{
    loading: boolean,
    productById: ProductDto,
    user: any
}

interface RootDispatch{
    getProductById
    addProductToCart
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RootDispatch;

const ProductDetails:React.FC<Props> = ({loading, user, productById}:Props) => {
    const [amount, setAmount] = useState<number>(1)
    const [selectedColor, setColor] = useState<Colors>(productById.colors[0])
    const [selectedSize, setSize] = useState<Sizes>(productById.sizes[0])

    const onAddToCart = () => {
        const item: CartItemDto = {
            productId: productById._id,
            productCode: productById.productCode,
            shopId: productById.shopId,
            title: productById.title,
            color: selectedColor,
            size: selectedSize,
            qty: amount,
            price: productById.price,
        }

        if (user) {
            // addProductToCart(item);
        } else {
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : []
            cart.push(item)
            localStorage.setItem('cart', JSON.stringify(cart))
        }
        
    }
    return (
        <div className='product-details-container'>
            <ProductGallery/>
            <div className='product-info'>
                <h3 className='product-info-title'>{productById.title}</h3>
                <p className='product-info-shop'>{productById.shopId}</p>

                <div className='size-selection'>
                    <p className='selection-title'>Размер</p>
                    <div className='sizes-container'>
                        {productById.sizes.map(size => <div className='size-option' onClick={() => setSize(size)}>{Sizes[size]}</div>)}
                    </div>
                </div>

                <div className='color-selection'>
                    <p className='selection-title'>Цвет</p>
                    <div className='colors-container'>
                        {productById.colors.map(color => <div className='color-option' onClick={() => setColor(color)}>{Colors[color]}</div>)}
                    </div>
                </div>

                <p className='product-price'>{productById.price} c</p>
                {productById.salePrice && <p className='product-sale-price'>{productById.salePrice} c</p>}

                <div className='product-action-buttons'>
                    <button className='add-to-cart-button' onClick={onAddToCart}>
                        <img className='add-to-cart-icon' alt='add to cart' src={addToBagIcon}/>
                        Добавить в корзину
                    </button>

                    <button className='add-to-wishlist-button'>
                        <img className='add-to-wishlist-icon' alt='add to wishlist' src={addToWishList}/>
                        в список желаемых
                    </button>
                </div>

                <p className='description-title'>Описание</p>
                <p>{productById.description}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    loading: state.loading,
    productById: state.productById,
    user: any
});

const mapDispatchToProps:RootDispatch = ({
    getProductById: () => {},
    addProductToCart: () => {}
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(ProductDetails);
