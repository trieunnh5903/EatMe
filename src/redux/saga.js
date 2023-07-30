import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import FOOD_API from './api/foodAPI'
import { fetchFoodFailure, fetchFoodSuccess } from './slice/foodSlice';


function* fetchFood() {
    try {
        const foodList = yield call(FOOD_API.fetchAllFood);
        yield put(fetchFoodSuccess(foodList));
    } catch (error) {
        yield put(fetchFoodFailure(error));
    }
}



function* rootSaga() {
    yield takeLatest('FETCH_FOOD_REQUESTED', fetchFood);
}

export default rootSaga