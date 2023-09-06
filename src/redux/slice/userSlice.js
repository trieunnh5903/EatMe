const {createSlice} = require('@reduxjs/toolkit');

const userSlice = createSlice({
  name: 'user',
  initialState: {favorite: []},
  reducers: {
    addToFavorite: (state, action) => {
      state.favorite.push(action.payload);
    },
    removeFromFavorite: (state, action) => {
      const index = state.favorite.findIndex(
        item => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.favorite.splice(index, 1);
      }
    },
  },
});

export const {addToFavorite, removeFromFavorite} = userSlice.actions;
export default userSlice.reducer;
