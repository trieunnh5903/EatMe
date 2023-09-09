// store.js
import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './slice/cartSlice';
import userSlice from './slice/userSlice';
import {apiSlice} from './slice/apiSlice';
const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([apiSlice.middleware]),
});

export default store;
