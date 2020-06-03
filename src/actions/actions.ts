import {actionTypes} from '../consts/actions';
import { CreateProductDto } from '../types/types';

export const getProductsRequest = (query:string) => ({type: actionTypes.FETCH_PRODUCTS, payload: query});

export const getProductsResponse = (data:Array<any>) => ({type: actionTypes.RECIEVED_PRODUCTS, payload: data})

export const createProductRequest = (product: CreateProductDto) => ({type: actionTypes.CREATE_PRODUCT, payload: product})