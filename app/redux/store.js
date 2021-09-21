import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice' 
import busketReducer from './slices/basketSlice' 

export const store = configureStore({
  reducer: {
    busket: busketReducer,
    auth: authReducer,
  }
});