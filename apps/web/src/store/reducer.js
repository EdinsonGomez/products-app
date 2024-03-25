import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import productsReducer from './productsSlice';

const reducer = combineReducers({
  auth: authReducer,
  products: productsReducer
});

export default reducer;