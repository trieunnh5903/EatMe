// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slice/cartSlice';
import userSlice from './slice/userSlice';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga';
import foodSlice from './slice/foodSlice';
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        cart: cartSlice,
        user: userSlice,
        food: foodSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);
export default store;
