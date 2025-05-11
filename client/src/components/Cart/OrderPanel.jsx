import React from "react";
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";

const OrderPanel = ({onPreOrder, onDelivery }) => {
  const { t } = useTranslation();
  const cart = useSelector((state) => state.cart);

  const subtotal = cart.reduce((acc, { product, quantity }) => {
    const price = Number(product.price) || 0;
    return acc + price * quantity;
  }, 0);
  
  const deliveryFee = 40;
  
  const total = subtotal + deliveryFee;

  return (
    <div className="sticky top-4 w-full bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('Order Summary')}</h2>
      
      <div className="flex justify-between mb-8">
        <button
          onClick={onPreOrder}
          className="w-[48%] py-3 px-4 bg-gray-100 rounded-lg text-gray-700 font-medium hover:bg-gray-200 transition-colors"
        >
          {t('pre_order')}
        </button>
        <button
          onClick={onDelivery}
          className="w-[48%] py-3 px-4 bg-yellow-400 rounded-lg text-gray-900 font-semibold hover:bg-yellow-500 transition-colors"
        >
          {t('delivery')}
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center py-3">
          <span className="text-gray-600">{t('Subtotal')}</span>
          <span className="text-lg font-medium text-gray-800">{subtotal} {t('mdl')}</span>
        </div>

        <div className="flex justify-between items-center py-3">
          <span className="text-gray-600">{t('delivery')}</span>
          <span className="text-lg font-medium text-gray-800">{deliveryFee} {t('mdl')}</span>
        </div>

        <div className="h-px bg-gray-200 my-4"></div>

        <div className="flex justify-between items-center py-3">
          <span className="text-xl font-semibold text-gray-800">{t('total')}</span>
          <span className="text-2xl font-bold text-gray-900">{total} {t('mdl')}</span>
        </div>

        <button className="w-full py-4 bg-yellow-400 rounded-lg text-gray-900 font-bold text-lg hover:bg-yellow-500 transition-colors mt-6 flex items-center justify-center gap-2">
          {t('order')}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default OrderPanel;
