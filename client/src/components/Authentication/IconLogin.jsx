import LogoutIcon from "@heroicons/react/outline/LogoutIcon";
import UserAddIcon from "@heroicons/react/solid/UserAddIcon";
import i18next from "i18next";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartData } from "../../store/actions/cartData.actions";
import { userLogout } from "../../store/actions/logout.action";
import { resetCart } from "../../store/actions/resetCart.actions";

const IconLogin = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user._id);
  const username = useSelector((state) => state.user.username);

  useEffect(() => {
    if (userId) {
      dispatch(getCartData);
    }
  }, [userId]);

  const handleLogout = () => {
    dispatch(userLogout);
    dispatch(resetCart);
  };

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
        <div className="flex items-center group hover:text-yellow-400">
          <UserAddIcon className="h-8 w-8 text-white group-hover:text-yellow-400" />
          <span className="text-white ml-2 text-base font-thin group-hover:text-yellow-400">
            {username}
          </span>
          <button onClick={handleLogout}>
            <LogoutIcon className="h-8 w-8 text-white  ml-10" />
          </button>{" "}
        </div>
      )}
    </>
  );
};

export default IconLogin;
