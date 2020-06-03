import {StoreTypes} from '../types/store';
import {actionTypes} from '../consts/actions';
import { ActionTypeWithArray, ActionTypeWithStringPayload, ActionTypeWithProductDto } from '../types/actions';

const initialStore:StoreTypes = {
    result: null,
    loading: false
};

const fetchToServer = (
    state: StoreTypes = initialStore,
    action: ActionTypeWithArray | ActionTypeWithStringPayload | ActionTypeWithProductDto
    ): StoreTypes => {
    switch(action.type){
        case actionTypes.FETCH_PRODUCTS:
            return{
                ...state,
                loading: true,
            };
        case actionTypes.RECIEVED_PRODUCTS:
            return{
                ...state,
                result: action.payload,
                loading: false
            };     
        case actionTypes.CREATE_PRODUCT:
            return{
                ...state,
                loading: true
            };  
        default:
            return state;
    }
};

export default fetchToServer;