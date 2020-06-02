import {actionTypes} from '../consts/actions';

export const getProductsRequest = (query:string) => ({type: actionTypes.FETCH_PRODUCTS, payload: query});

export const getProductsResponse = (data:Array<any>) => ({type: actionTypes.RECIEVED_PRODUCTS, payload: data})

export const createProductRequest = (query: string) => ({type: actionTypes.RECIEVED_PRODUCTS, payload: query})