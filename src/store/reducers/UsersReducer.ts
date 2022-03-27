import { USER_REDUCER_TYPES } from "../actionTypes/UserActionConstants";
import { ReducerActionT } from "../types";

const initialState: UsersStateT = {
  usersList: [],
  searchList: []
};

export type UsersStateT = {
  usersList: Array<UsersListT>;
  searchList: Array<UsersListT>;
};

export type UsersListT = {
  email: string;
  name: string;
  id: number;
  body: string;
  postId: number;
};

export const UserReducer = (
  state: UsersStateT = initialState,
  action: ReducerActionT
) => {
  switch (action.type) {
    case USER_REDUCER_TYPES.SET_FETCHED_USERS: {
      return {
        ...state,
        usersList: action.payload,
      };
    }

    case USER_REDUCER_TYPES.SEARCH_USER: {
      const searchWord: string = (action.payload).toLowerCase();

      if(!searchWord)
        return {
          ...state,
          searchList: [],
        };

      const userListCopied: Array<UsersListT> = JSON.parse(
        JSON.stringify(state.usersList)
      );

      const filteredUserList: Array<UsersListT> = userListCopied.filter(
        (userData: UsersListT): boolean => (userData.email).toLowerCase().includes(searchWord)
      );

      return {
        ...state,
        searchList: filteredUserList,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
