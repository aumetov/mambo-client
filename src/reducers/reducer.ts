import {StoreTypes} from '../types/store';
import {actionTypes} from '../consts/actions';
import { ActionTypeWithArray, ActionTypeWithStringPayload, ActionTypeWithProductDto, ActionTypeWithAny } from '../types/actions';

const initialStore:StoreTypes = {
    result: null,
    loading: false,
    categories: [],
};

const fetchToServer = (
    state: StoreTypes = initialStore,
    action: ActionTypeWithArray | ActionTypeWithStringPayload | ActionTypeWithProductDto | ActionTypeWithAny
    ): StoreTypes => {
    switch(action.type){
        case actionTypes.FETCH_PRODUCTS:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.RECIEVED_PRODUCTS:
            return {
                ...state,
                result: action.payload,
                loading: false
            };     
        case actionTypes.CREATE_PRODUCT:
            return {
                ...state,
                loading: true
            };
        case actionTypes.CREATE_PRODUCT_SUCCESS:
            return {
                ...state,
                result: action.payload,
                loading: false
            };
        case actionTypes.FETCH_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true

            };
        case actionTypes.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload,
                loading: true

            }
        default:
            return state;
    }
};

export default fetchToServer;