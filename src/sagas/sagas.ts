import {put,takeLatest,all,call} from 'redux-saga/effects';
import {ActionTypeWithStringPayload, ActionTypeWithProductDto, ActionTypeWithUpdateProductDto, ActionTypeWithAny} from '../types/actions';
import {
    getProductsResponse, createProductSuccess, updateProductSuccess, deleteProductSuccess,
    fetchCategoriesResponse, createUserResponse, loginUserResponse, addProductToCartResponse,
    deleteProductFromCartResponse, getProductDetailsResponse
} from '../actions/actions';          
import { actionTypes } from '../consts/actions';
import Endpoints from '../consts/endpoints';

function* fetchProducts(action: ActionTypeWithStringPayload){
    try {
        const response = yield call(async () => await fetch(`${Endpoints.Product.getAll}?${action.payload}`));
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

function* createUser(action: ActionTypeWithAny){
    try {
        const response = yield call(async () => await fetch(`${Endpoints.Users.register}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(action.payload)
        }));
        const parsed = yield call(async () => await response.json());
        if (!parsed.message) {
            yield put(createUserResponse(parsed));
        } else {
            yield put(createUserResponse(parsed));
        }
    } catch(e) {
        console.log(e)
    }
}

function* loginUser(action: ActionTypeWithAny){
    try {
        const response = yield call(async () => await fetch(`${Endpoints.Auth.login}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(action.payload)
        }));
        const parsed = yield call(async () => await response.json());
        if (!parsed.message) {
            yield put(loginUserResponse(parsed));
        } else {
            yield put(loginUserResponse(parsed));
        }
    } catch(e) {
        console.log(e)
    }
}

function* addItemToCart(action: ActionTypeWithAny){
    try {
        const response = yield call(async () => await fetch(`${Endpoints.Users.addItemToCart(action.payload.userId)}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(action.payload.item)
        }));
        const parsed = yield call(async () => await response.json());
        if (!parsed.message) {
            yield put(addProductToCartResponse(parsed));
        } else {
            yield put(addProductToCartResponse(parsed));
        }
    } catch(e) {
        console.log(e)
    }
}

function* deleteItemFromCart(action: ActionTypeWithAny){
    try {
        const response = yield call(async () => await fetch(`${Endpoints.Users.deleteItemFromCart(action.payload.userId, action.payload.itemId)}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }));
        const parsed = yield call(async () => await response.json());
        if (!parsed.message) {
            yield put(deleteProductFromCartResponse(parsed));
        } else {
            yield put(deleteProductFromCartResponse(parsed));
        }
    } catch(e) {
        console.log(e)
    }
}

function* getProductDetails(action: ActionTypeWithAny){
    try {
        const response = yield call(async () => await fetch(Endpoints.Product.getById(action.payload.id)));
        const parsed = yield call(async () => await response.json());
        if (!parsed.message) {
            yield put(getProductDetailsResponse(parsed));
        } else {
            yield put(getProductDetailsResponse(parsed));
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

function* requestCreateUser(){
    yield takeLatest(actionTypes.CREATE_USER, createUser)
}

function* requestLoginUser(){
    yield takeLatest(actionTypes.LOGIN_USER, loginUser)
}

function* requestAddItemToCart(){
    yield takeLatest(actionTypes.ADD_ITEM_TO_CART, addItemToCart)
}

function* requestDeleteItemFromCart(){
    yield takeLatest(actionTypes.DELETE_ITEM_FROM_CART, deleteItemFromCart)
}

function* requestFetchProductDetails(){
    yield takeLatest(actionTypes.FETCH_PRODUCT_DETAILS, getProductDetails)
}


export default function* rootSaga(){
    yield all([
        responseFetchSearch(),
        requestCreateProduct(),
        requestUpdateProduct(),
        requestDeleteProduct(),
        requestCategories(),
        requestCreateUser(),
        requestLoginUser(),
        requestAddItemToCart(),
        requestDeleteItemFromCart(),
        requestFetchProductDetails()
    ])
}