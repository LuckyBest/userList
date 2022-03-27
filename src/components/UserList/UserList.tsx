import React, { FC } from "react";
import { useSelector } from "react-redux";
import { UsersListT } from "../../store/reducers/UsersReducer";
import { getUsersList } from "../../store/selectors/selectors";
import { UserListItem, UserListItemT } from "../UserLIstItem/UserListItem";

export const UserList:FC = ({ ...props }): JSX.Element => {
  const usersList: Array<UsersListT> = useSelector(getUsersList);

  return (
    <div className="h-screen relative z-10 overflow-y-auto">
      <div className="px-3 relative z-0">
        {usersList?.map((listItem: UsersListT, index: number) => {
          const props: UserListItemT = {
            userName: listItem.email,
            details: listItem.name,
            aboutUser: listItem.body,
          };
          return <UserListItem {...props} key={`${listItem.id}_${index}`} />;
        })}
      </div>
    </div>
  );
};
