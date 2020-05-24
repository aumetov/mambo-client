import {StoreTypes} from '../types/store';
import {actionTypes} from '../consts/actions';
import { ActionTypeWithArray, ActionTypeWithStringPayload } from '../types/actions';

const initialStore:StoreTypes = {
    result: null,
    loading: false
};

const fetchToServer = (
    state:StoreTypes = initialStore,
    action: ActionTypeWithArray | ActionTypeWithStringPayload
    ):StoreTypes => {
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
        default:
            return state;
    }
};

export default fetchToServer;