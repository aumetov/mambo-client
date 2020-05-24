import { actionTypes } from "../consts/actions";

export interface ActionTypeWithStringPayload{
    type: typeof actionTypes.FETCH_PRODUCTS;
    payload: string;
}

export interface ActionTypeWithArray{
    type: typeof actionTypes.RECIEVED_PRODUCTS;
    payload: Array<any>
}