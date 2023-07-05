// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slice/cartSlice';
import userSlice from './slice/userSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        user: userSlice,
    }
});

export default store;
