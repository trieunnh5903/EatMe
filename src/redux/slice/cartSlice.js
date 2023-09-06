import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartList: [],
  totalCartPrice: 0,
};

export const addItem = createAsyncThunk('cart/addItem', (item, {dispatch}) => {
  dispatch(cartSlice.actions.addItem(item));
  dispatch(cartSlice.actions.calculateTotalCart());
});

export const updateItemQuantity = createAsyncThunk(
  'cart/updateItemQuantity',
  (payload, {dispatch}) => {
    dispatch(cartSlice.actions.updateItemQuantity(payload));
    dispatch(cartSlice.actions.calculateTotalCart());
  },
);

export const removeItem = createAsyncThunk(
  'cart/removeItem',
  (itemIdToRemove, {dispatch}) => {
    dispatch(cartSlice.actions.removeItem(itemIdToRemove));
    dispatch(cartSlice.actions.calculateTotalCart());
  },
);

export const clearCart = createAsyncThunk(
  'cart/clearCart',
  (payload, {dispatch}) => {
    dispatch(cartSlice.actions.clearCart());
    dispatch(cartSlice.actions.calculateTotalCart());
  },
);
const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const priceTotal =
        parseFloat((newItem.quantity * newItem.price).toFixed(2)) || 0;
      state.cartList.push({...newItem, priceTotal});
    },
    updateItemQuantity(state, action) {
      const {quantity, itemId} = action.payload;
      const newCartList = state.cartList.map(item => {
        if (item.id === itemId) {
          const priceTotal =
            parseFloat((quantity * item.price).toFixed(2)) || 0;
          return {...item, quantity, priceTotal};
        }
        return item;
      });
      state.cartList = newCartList;
    },
    calculateTotalCart(state) {
      state.totalCartPrice = state.cartList
        .reduce((total, item) => {
          return (total += item.priceTotal);
        }, 0)
        .toFixed(2);
    },
    removeItem(state, action) {
      const itemIdToRemove = action.payload;
      state.cartList = state.cartList.filter(
        item => item.id !== itemIdToRemove,
      );
    },
    clearCart(state) {
      state.cartList = [];
    },
  },
});

export default cartSlice.reducer;
