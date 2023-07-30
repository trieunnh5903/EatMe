const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    foodList: [],
    error: null,
    isLoading: false,
    pageNumber: 1,
}

const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        fetchFoodSuccess: (state, action) => {
            state.foodList = [...state.foodList, ...action.payload]
            state.pageNumber += 1
        },

        fetchFoodFailure: (state, action) => {
            state.error = action.payload;
        }
    }
})

export default foodSlice.reducer;
export const { fetchFoodFailure, fetchFoodSuccess } = foodSlice.actions;