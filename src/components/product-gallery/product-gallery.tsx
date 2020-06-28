import React, { useState } from 'react'
import './product-gallery.scss'
import { connect, ConnectedProps } from "react-redux";
import { ProductDetailsDto } from '../../types/types';

interface RootState{
    loading: boolean,
    productById: ProductDetailsDto,
    user: any
}

interface RootDispatch{
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RootDispatch;

const ProductGallery:React.FC<Props> = ({loading, user, productById}:Props) => {
    const [selectedPhoto, setSelectedPhoto] = useState(productById?.productImages[0] || '')

    return (
        <div className='product-gallery-container'>
            <div className='product-main-photo-container'>
                <img className='product-main-photo' alt='main' src={selectedPhoto} />
            </div>
            <div className='product-photos'>
                {productById.productImages.map(photo => (
                    <img className='product-photo' alt='product-detailed' src={photo} onClick={() => setSelectedPhoto(photo)}/>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    loading: state.loading,
    productById: state.productById,
    user: state.user
});

// const mapDispatchToProps:RootDispatch = ({
// });

const connector = connect(
    mapStateToProps
);

export default connector(ProductGallery);

