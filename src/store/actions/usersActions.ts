import { USER_REDUCER_TYPES } from "../actionTypes/UserActionConstants";
import { ReducerActionT } from "../types";

export type FetchUsersDataT = {
  count: number;
  page: number;
  setCommentsPage: any;
};

export const fetchUsers = (): ReducerActionT => ({
  type: USER_REDUCER_TYPES.FETCH_USERS,
});

export const searchUser = (data: string): ReducerActionT => ({
  type: USER_REDUCER_TYPES.SEARCH_USER,
  payload: data,
});
