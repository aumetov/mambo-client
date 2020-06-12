import {put,takeLatest,all,call} from 'redux-saga/effects';
import {ActionTypeWithStringPayload, ActionTypeWithProductDto, ActionTypeWithUpdateProductDto, ActionTypeWithAny} from '../types/actions';
import {getProductsResponse, createProductSuccess, updateProductSuccess, deleteProductSuccess, fetchCategoriesResponse} from '../actions/actions';          
import { actionTypes } from '../consts/actions';
import Endpoints from '../consts/endpoints';

function* fetchProducts(action: ActionTypeWithStringPayload){
    try {
        const response = yield call(async () => await fetch(`${Endpoints.Product.getAll}?q=${action.payload}`));
        const parsed = yield call(async () => await response.json());
        if (!parsed.message) {
            yield put(getProductsResponse(parsed));
        } else {
            yield put(getProductsResponse([]));
        }
    } catch(e) {
        console.log(e)
    }
}

function* createProduct(action: ActionTypeWithProductDto){
    try {
        const data = new FormData()
        data.append('productInfo', JSON.stringify({
            title: action.payload.title,
            categories: action.payload.categories.map(category => category._id),
            collection: action.payload.collection,
            price: action.payload.price,
            salePrice: action.payload.salePrice,
            status: action.payload.status,
            description: action.payload.description,
            productThumbnail: action.payload.productThumbnail,
            colors: action.payload.colors,
            sizes: action.payload.sizes,
            sex: action.payload.sex,
            shopId: action.payload.shopId
        }));

        action.payload.productImages.map((image) => {
            data.append('files', image)
        })

        const response = yield call(async () => {
            await fetch(`${Endpoints.Product.getAll}`, {
                method: 'POST',
                body: data
            })
        });

        const parsed = yield call(async () => await response.json());
        if (!parsed.message) {
            yield put(createProductSuccess(parsed));
        } else {
            yield put(createProductSuccess([]));
        }
    } catch(e) {
        console.log(e)
    }
}

function* updateProduct(action: ActionTypeWithUpdateProductDto){
    try {
        const data = new FormData()
        data.append('productInfo', JSON.stringify({
            title: action.payload.title,
            categories: action.payload.categories.map(category => category._id),
            collection: action.payload.collection,
            price: action.payload.price,
            salePrice: action.payload.salePrice,
            status: action.payload.status,
            description: action.payload.description,
            productThumbnail: action.payload.productThumbnail,
            colors: action.payload.colors,
            sizes: action.payload.sizes,
            sex: action.payload.sex,
            shopId: action.payload.shopId,
            id: action.payload.id
        }));

        action.payload.productImages.map((image) => {
            data.append('files', image)
        })

        const response = yield call(async () => {
            await fetch(`${Endpoints.Product.getAll}`, {
                method: 'PUT',
                body: data
            })
        });

        const parsed = yield call(async () => await response.json());
        if (!parsed.message) {
            yield put(updateProductSuccess(parsed));
        } else {
            yield put(updateProductSuccess([]));
        }
    } catch(e) {
        console.log(e)
    }
}

function* deleteProduct(action: ActionTypeWithAny){
    try {
        const response = yield call(async () => {
            await fetch(`${Endpoints.Product.getAll}/${action.payload.id}`, {
                method: 'DELETE'
            })
        });

        const parsed = yield call(async () => await response.json());
        if (!parsed.message) {
            yield put(deleteProductSuccess(parsed));
        } else {
            yield put(deleteProductSuccess(''));
        }
    } catch(e) {
        console.log(e)
    }
}

function* fetchCategories(action: ActionTypeWithStringPayload){
    try {
        const response = yield call(async () => await fetch(`${Endpoints.Categories.categories}`));
        const parsed = yield call(async () => await response.json());
        if (!parsed.message) {
            yield put(fetchCategoriesResponse(parsed));
        } else {
            yield put(fetchCategoriesResponse([]));
        }
    } catch(e) {
        console.log(e)
    }
}

function* responseFetchSearch(){
    yield takeLatest(actionTypes.FETCH_PRODUCTS, fetchProducts)
}

function* requestCreateProduct(){
    yield takeLatest(actionTypes.CREATE_PRODUCT, createProduct)
}

function* requestUpdateProduct(){
    yield takeLatest(actionTypes.UPDATE_PRODUCT, updateProduct)
}

function* requestDeleteProduct(){
    yield takeLatest(actionTypes.DELETE_PRODUCT, deleteProduct)
}

function* requestCategories(){
    yield takeLatest(actionTypes.FETCH_CATEGORIES_REQUEST, fetchCategories)
}

export default function* rootSaga(){
    yield all([
        responseFetchSearch(),
        requestCreateProduct(),
        requestUpdateProduct(),
        requestDeleteProduct(),
        requestCategories()
    ])
}