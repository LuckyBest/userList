import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { USER_REDUCER_TYPES } from "../actionTypes/UserActionConstants";
import { UsersListT } from "../reducers/UsersReducer";

const fetchUsersData = () =>
  axios.get(`https://jsonplaceholder.typicode.com/comments`);

function* fetchUsersWorker() {
  try {
    const { data }: { data: Array<UsersListT> } = yield call(fetchUsersData);

    yield put({ type: USER_REDUCER_TYPES.SET_FETCHED_USERS, payload: data });
  } catch (e) {
    console.log("fetchUsersWorker", e);
  }
}

export function* fetchUsersWatcher() {
  yield takeLatest(USER_REDUCER_TYPES.FETCH_USERS, fetchUsersWorker);
}
