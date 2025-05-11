import React from "react";
import { useTranslation } from 'react-i18next';
import CartItem from "./CartItem";

const CartContent = ({ cartItems }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gray-50">
        <div className="text-lg font-medium text-gray-600">{t('products')}</div>
        <div className="flex items-center gap-16">
          <div className="text-lg font-medium text-gray-600">{t('price')}</div>
          <div className="text-lg font-medium text-gray-600">{t('quantity')}</div>
          <div className="text-lg font-medium text-gray-600 w-24 text-right">{t('total_with_colon')}</div>
          <div className="w-6"></div>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {cartItems.map(({ product, quantity }) => (
          <CartItem key={product._id} product={product} quantity={quantity} />
        ))}
      </div>
    </div>
  );
};

export default CartContent;
