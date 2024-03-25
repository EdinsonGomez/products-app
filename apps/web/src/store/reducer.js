import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const reducer = combineReducers({
  auth: authReducer
});

export default reducer;