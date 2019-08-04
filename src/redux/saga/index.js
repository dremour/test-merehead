import { USERS_FETCH_REQUESTED } from "../action-types";
import { put, takeEvery, all } from "redux-saga/effects";
import { requestUsersSuccess, requestUsersFail } from '../actions';

function* watchFetchUsers() {
    yield takeEvery(USERS_FETCH_REQUESTED, fetchUsers);
}

function* fetchUsers() {
    try {
        const data =
            yield fetch('http://www.mocky.io/v2/5d473b17320000e26fae8d39').then(res => res.json());

        yield put(requestUsersSuccess(data.users));
    } catch (error) {
        yield put(requestUsersFail());
    }
}

export default function* rootSaga() {
    yield all([watchFetchUsers()]);
}
