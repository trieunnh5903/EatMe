import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects'
import FOOD_API from './api/foodAPI'
import { fetchFoodFailure, fetchFoodStart, fetchFoodSuccess } from './slice/foodSlice';


function* fetchFood() {
    try {
        yield put(fetchFoodStart);
        const pageNumber = yield select((state) => state.food.pageNumber);
        const foodList = yield call(FOOD_API.fetchAllFood, pageNumber);
        yield put(fetchFoodSuccess(foodList));
    } catch (error) {
        yield put(fetchFoodFailure(error));
    }
}



function* rootSaga() {
    yield takeLatest('food/fetchFoodRequested', fetchFood);
}

export default rootSaga