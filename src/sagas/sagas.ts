import {put,takeLatest,all,call} from 'redux-saga/effects';
import {ActionTypeWithStringPayload} from '../types/actions';
import {getProductsResponse} from '../actions/actions';          
import { actionTypes } from '../consts/actions';
import Endpoints from '../consts/endpoints';

function* getFetchSearch(action:ActionTypeWithStringPayload){
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

function* responseFetchSearch(){
    yield takeLatest(actionTypes.FETCH_PRODUCTS, getFetchSearch)
}

export default function* rootSaga(){
    yield all([
        responseFetchSearch(),
    ])
}