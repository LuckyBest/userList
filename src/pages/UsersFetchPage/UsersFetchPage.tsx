import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { InputComponent } from "../../components/InputComponent/InputComponent";
import { UserList } from "../../components/UserList/UserList";
import { fetchUsers } from "../../store/actions/usersActions";

export const UsersFetchPage = ({ ...props }): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  });

  return (
    <div className="bg-d-blue-2 w-1/3">
      <InputComponent />
      <div className="bg-d-blue-1 h-7 w-full mt-2.5" />
        <UserList />
    </div>
  );
};
