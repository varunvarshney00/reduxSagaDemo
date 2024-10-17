import { call, put, takeLatest } from 'redux-saga/effects';



import { userFetchFailed, userFetchSucceeded } from './userSlice';



function fetchUserApi(userId: number) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((response) => response.json());
}



function* fetchUser(action) {
    try {
        const user = yield call(fetchUserApi, action.payload.userId);
        yield put(userFetchSucceeded(user));
    } catch (e) {
        yield put(userFetchFailed(e.message));
    }
}



function* userSaga() {
    yield takeLatest('user/userFetchRequested', fetchUser);
}

export default userSaga;
