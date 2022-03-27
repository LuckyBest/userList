import React, { FC, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { CloseIcon } from "../../assets/CloseIcon";
import { searchUser } from "../../store/actions/usersActions";
import { debounce } from "../../utils/debounce";

export const InputComponent: FC = ({ ...props }): JSX.Element => {
  const dispatch = useDispatch();
  const inputRef = useRef<any>();

  const inputOnchangeHandler = (): void => {
    if (!!inputRef.current.value) dispatch(searchUser(inputRef.current.value));
  };

  const clearButtonOnclickHandler = (): void => {
    inputRef.current.value = "";
    dispatch(searchUser(""));
  };

  return (
    <div className="mt-2.5 h-8 flex justify-center">
      <div className="relative w-4/6 h-full">
        <input
          type="text"
          className="bg-d-blue-1 rounded-sm px-3.5 h-full text-white text-sm w-full focus:outline-none placeholder:text-sm placeholder:text-white"
          placeholder="Search..."
          onChange={debounce(inputOnchangeHandler)}
          ref={inputRef}
        />
        <div
          onClick={clearButtonOnclickHandler}
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          <CloseIcon />
        </div>
      </div>
    </div>
  );
};
