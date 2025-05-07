import ShoppingCartIcon from "@heroicons/react/outline/ShoppingCartIcon";
import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Popover from "../../elements/Popover";
import EmptyCartModal from "./EmptyCartModal";
import ModalCart from "./ModalCart";

const IconCart = () => {
  const { t } = useTranslation();
  const cart = useSelector((state) => state.cart);

  const { pathname } = useLocation();

  if (pathname.includes("cart")) {
    return null;
  }

  return (
    <Popover
      contentWidth={300}
      left={-100}
      chevronPosition={{ left: 150 }}
      content={<div>{cart.length ? <ModalCart /> : <EmptyCartModal />}</div>}
    >
      <Link to={`/${i18next.language}/cart`}>
        <ShoppingCartIcon className="h-8 w-8 text-white ml-10" />

        {cart.length >= 0 && (
          <div className="absolute -top-2 -right-1.5 rounded-full w-6 h-6 bg-red-700 text-white flex items-center justify-center">
            {cart.length}
          </div>
        )}
      </Link>
    </Popover>
  );
};

export default IconCart;
