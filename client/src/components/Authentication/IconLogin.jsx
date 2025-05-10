import UserAddIcon from "@heroicons/react/solid/UserAddIcon";
import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const IconLogin = () => {
  const { t } = useTranslation();
  const { _id: userId, username } = useSelector(state => state.user);

  return (
    <>
      {!userId && (
        <Link to={`/${i18next.language}/login`}>
          <div className="flex items-center group hover:text-yellow-400">
            <UserAddIcon className="h-8 w-8  text-white group-hover:text-yellow-400" />
            <span className="text-white ml-2 mb-1 text-base font-thin group-hover:text-yellow-400">
              {t("login")}
            </span>
          </div>
        </Link>
      )}

      {userId && (
        <Link to={`/${i18next.language}/profile`} className="flex items-center">
          <div className="flex items-center group hover:text-yellow-400 cursor-pointer">
            <UserAddIcon className="h-8 w-8 text-white group-hover:text-yellow-400" />
            <span className="text-white ml-2 text-base font-thin group-hover:text-yellow-400">
              {username}
            </span>
          </div>
        </Link>
      )}
    </>
  );
};

export default IconLogin;
