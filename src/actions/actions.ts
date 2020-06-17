import {actionTypes} from '../consts/actions';
import { CreateProductDto, UpdateProductDto, CreateUserDto } from '../types/types';

export const getProductsRequest = (query:string) => ({type: actionTypes.FETCH_PRODUCTS, payload: query});

export const getProductsResponse = (data:Array<any>) => ({type: actionTypes.RECIEVED_PRODUCTS, payload: data})

export const createProductRequest = (product: CreateProductDto) => ({type: actionTypes.CREATE_PRODUCT, payload: product})

export const createProductSuccess = (product: CreateProductDto[]) => ({type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product})

export const updateProductRequest = (product: UpdateProductDto) => ({type: actionTypes.UPDATE_PRODUCT, payload: product})

export const updateProductSuccess = (product: UpdateProductDto[]) => ({type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product})

export const deleteProductRequest = (id: string) => ({type: actionTypes.DELETE_PRODUCT, payload: id})

export const deleteProductSuccess = (id: string) => ({type: actionTypes.DELETE_PRODUCT_SUCCESS, payload: id})

export const fetchCategoriesRequest = () => ({type: actionTypes.FETCH_CATEGORIES_REQUEST})

export const fetchCategoriesResponse = (data:Array<any>) => ({type: actionTypes.FETCH_CATEGORIES_SUCCESS, payload: data})

export const createUserRequest = (user: CreateUserDto) => ({type: actionTypes.CREATE_USER, payload: user})

export const createUserResponse = (user: CreateUserDto) => ({type: actionTypes.CREATE_USER_SUCCESS, payload: user})