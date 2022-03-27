import { all } from "redux-saga/effects";
import { fetchUsersWatcher } from "./usersSagas";


export function* rootWatcher(){
    yield all([fetchUsersWatcher()])
}