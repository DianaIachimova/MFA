import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import CartContent from "./CartContent";
import CartItem from "./CartItem";
import OrderPanel from "./OrderPanel";

const CartProduct = () => {
  const { t } = useTranslation();
  const cart = useSelector((state) => state.cart);

  return (
    <div className="w-10/12 bg-white m-auto">
      <div className="grid grid-cols-12 ">
        <div className="col-span-8">
          <CartContent />
          {cart.map(({ product, quantity }) => (
            <CartItem key={product.id} product={product} quantity={quantity} />
          ))}
          {cart.length === 0 && (
            <div className="text-center text-2xl text-gray-500">
              {t("empty-basket")}
            </div>
          )}
        </div>
        <div className="col-span-4">
          <OrderPanel />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
