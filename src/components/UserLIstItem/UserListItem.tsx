import React, { FC, Fragment, useState } from "react";
import { PlayIcon } from "../../assets/PlayIcon";

export type UserListItemT = {
  userName: string;
  details: string;
  aboutUser: string;
};

export const UserListItem: FC<UserListItemT> = ({ ...props }): JSX.Element => {
  const { userName, details, aboutUser } = props;
  const [showBody, setShowBody] = useState<boolean>(false);

  const playIconOnclickHandler = (): void => {
    setShowBody(!showBody);
  };

  let playIconClass: string = "";

  if (showBody) {
    playIconClass = "rotate-90";
  }

  return (
    <div
      className={`w-full duration-300 py-2 flex items-center cursor-default hover:shadow-md hover:shadow-d-blue-1`}
    >
      <div className="h-11 w-11 bg-avatar-grey rounded-full ml-3" />
      <div className="ml-4 w-3/5">
        <div className="flex items-center">
          <div
            onClick={playIconOnclickHandler}
            className={`cursor-pointer duration-150 ${playIconClass}`}
          >
            <PlayIcon />
          </div>
          <span className="ml-2 text-xs text-white">{userName}</span>
        </div>
        {showBody && (
          <div
            className={`w-3/5 ml-4 my-2 animate-entrance text-white text-xs`}
          >
            {aboutUser}
          </div>
        )}
        <span className="text-xs mt text-d-blue-3">{details}</span>
      </div>
    </div>
  );
};
