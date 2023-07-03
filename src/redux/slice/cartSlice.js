import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartList: [],
    totalCartPrice: 0,
}

export const addItem = createAsyncThunk('cart/addItem', (item, { dispatch }) => {
    dispatch(cartSlice.actions.addItem(item));
    dispatch(cartSlice.actions.calculateTotalCart())
});

const cartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const priceTotal = parseFloat((newItem.quantity * newItem.price).toFixed(2)) || 0;
            state.cartList.push({ ...newItem, priceTotal });
        },
        calculateTotalCart(state) {
            state.totalCartPrice = (state.cartList.reduce((total, item) => {
                return total += item.priceTotal;
            }, 0)).toFixed(2)
        },
        // removeItem(state, action) {
        //     const itemIdToRemove = action.payload;
        //     state.cartList = state.cartList.filter(item => item.id !== itemIdToRemove);
        // },
        // updateItemQuantity(state, action) {
        //     const { itemId, quantity } = action.payload;
        //     const itemToUpdate = state.cartList.find(item => item.id === itemId);
        //     if (itemToUpdate) {
        //         itemToUpdate.quantity = quantity;
        //     }
        // },
        // clearCart(state) {
        //     state.cartList = [];
        // },
    }
})

export default cartSlice.reducer;