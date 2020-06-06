import {put,takeLatest,all,call} from 'redux-saga/effects';
import {ActionTypeWithStringPayload, ActionTypeWithProductDto} from '../types/actions';
import {getProductsResponse, createProductSuccess, fetchCategoriesResponse} from '../actions/actions';          
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
            categories: action.payload.title,
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

function* requestCategories(){
    yield takeLatest(actionTypes.FETCH_CATEGORIES_REQUEST, fetchCategories)
}

export default function* rootSaga(){
    yield all([
        responseFetchSearch(),
        requestCreateProduct(),
        requestCategories()
    ])
}