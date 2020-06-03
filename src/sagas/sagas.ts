import {put,takeLatest,all,call} from 'redux-saga/effects';
import {ActionTypeWithStringPayload, ActionTypeWithProductDto} from '../types/actions';
import {getProductsResponse} from '../actions/actions';          
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
        const response = yield call(async () => await fetch(`${Endpoints.Product.getAll}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(action.payload)
        }));
        const parsed = yield call(async () => await response.json());
        if (!parsed.message) {
            console.log(parsed)
            yield put(getProductsResponse(parsed));
        } else {
            yield put(getProductsResponse([]));
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

export default function* rootSaga(){
    yield all([
        responseFetchSearch(),
        requestCreateProduct()
    ])
}