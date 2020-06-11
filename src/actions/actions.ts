import {actionTypes} from '../consts/actions';
import { CreateProductDto, UpdateProductDto } from '../types/types';

export const getProductsRequest = (query:string) => ({type: actionTypes.FETCH_PRODUCTS, payload: query});

export const getProductsResponse = (data:Array<any>) => ({type: actionTypes.RECIEVED_PRODUCTS, payload: data})

export const createProductRequest = (product: CreateProductDto) => ({type: actionTypes.CREATE_PRODUCT, payload: product})

export const createProductSuccess = (product: CreateProductDto[]) => ({type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product})

export const updateProductRequest = (product: UpdateProductDto) => ({type: actionTypes.UPDATE_PRODUCT, payload: product})

export const updateProductSuccess = (product: UpdateProductDto[]) => ({type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product})

export const fetchCategoriesRequest = () => ({type: actionTypes.FETCH_CATEGORIES_REQUEST})

export const fetchCategoriesResponse = (data:Array<any>) => ({type: actionTypes.FETCH_CATEGORIES_SUCCESS, payload: data})