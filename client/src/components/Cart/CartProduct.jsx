import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import CartContent from "./CartContent";
import OrderPanel from "./OrderPanel";

const CartProduct = () => {
  const { t } = useTranslation();
  const cart = useSelector((state) => state.cart);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">{t('Shopping Cart')}</h1>
      
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8 bg-white rounded-xl shadow-lg overflow-hidden">
          {cart.length > 0 ? (
            <CartContent cartItems={cart} />
          ) : (
            <div className="p-8 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto text-gray-400 mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              <p className="text-2xl text-gray-500 font-medium">
                {t("empty-basket")}
              </p>
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
