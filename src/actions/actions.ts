import {actionTypes} from '../consts/actions';
import { CreateProductDto, UpdateProductDto, CreateUserDto, UserLogin, CartItemDto } from '../types/types';

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

export const loginUserRequest = (userCredentials: UserLogin) => ({type: actionTypes.LOGIN_USER, payload: userCredentials})

export const loginUserResponse = (user: CreateUserDto) => ({type: actionTypes.LOGIN_USER_SUCCESS, payload: user})

export const addProductToCartRequest = (userId: string, item: CartItemDto) => ({type: actionTypes.ADD_ITEM_TO_CART, payload: {userId, item}})

export const addProductToCartResponse = (user: CreateUserDto) => ({type: actionTypes.ADD_ITEM_TO_CART_SUCCESS, payload: user})

export const deleteProductFromCartRequest = (userId: string, itemId: string) => ({type: actionTypes.DELETE_ITEM_FROM_CART, payload: {userId, itemId}})

export const deleteProductFromCartResponse = (user: CreateUserDto) => ({type: actionTypes.DELETE_ITEM_FROM_CART_SUCCESS, payload: user})