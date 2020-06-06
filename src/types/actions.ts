import { actionTypes } from "../consts/actions";
import { CreateProductDto } from "./types";

export interface ActionTypeWithStringPayload{
    type: typeof actionTypes.FETCH_PRODUCTS;
    payload: string;
}

export interface ActionTypeWithArray{
    type: typeof actionTypes.RECIEVED_PRODUCTS;
    payload: Array<any>
}

export interface ActionTypeWithProductDto{
    type: actionTypes;
    payload: CreateProductDto;
}

export interface ActionTypeWithAny{
    type: actionTypes;
    payload: any
}