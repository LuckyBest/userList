import { UsersListT } from "../reducers/UsersReducer";
import { RootReducerT } from "../types";

export const getUsersList = ({ ...state }: RootReducerT): Array<UsersListT> => {
  const searchList: Array<UsersListT> = state.UserReducer.searchList;

  if (searchList.length > 0) return searchList;

  const UsersList: Array<UsersListT> = state.UserReducer.usersList;
  return UsersList;
};
