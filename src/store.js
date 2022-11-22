import {combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';

const reducer = combineReducers({
    cart: cartReducer
})

export default configureStore({
    reducer,
    composeWithDevTools
});

