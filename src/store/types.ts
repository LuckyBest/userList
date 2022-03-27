import { UsersStateT } from "./reducers/UsersReducer";

export type ReducerActionT = {
  type: string;
  payload?: any;
};

export type RootReducerT = {
  UserReducer: UsersStateT;
};
