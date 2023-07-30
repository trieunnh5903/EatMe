const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    isLoading: false,
    foodList: [],
    error: null,
    pageNumber: 1,
}

const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        fetchFoodStart: (state, action) => {
            state.isLoading = true;
        },

        fetchFoodSuccess: (state, action) => {
            state.isLoading = false;
            state.foodList = [...state.foodList, ...action.payload]
            state.pageNumber += 1
        },

        fetchFoodFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default foodSlice.reducer;
export const {fetchFoodStart, fetchFoodFailure, fetchFoodSuccess } = foodSlice.actions;