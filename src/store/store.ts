  
import {createStore, applyMiddleware} from "redux";
import reducer from "../reducers/reducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/sagas'

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

export default store;