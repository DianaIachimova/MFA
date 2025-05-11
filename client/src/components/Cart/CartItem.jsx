import React from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  addCartProduct,
  removeProduct,
} from "../../store/actions/cartData.actions";

const CartItem = ({ quantity, product }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleAddQuantity = () => {
    dispatch(addCartProduct(product._id, quantity + 1));
  };

  const handleRemoveQuantity = () => {
    if (quantity > 1) {
      dispatch(addCartProduct(product._id, quantity - 1));
    } else {
      handleOnRemove();
    }
  };

  const handleOnRemove = () => {
    if (product?._id) {
      dispatch(removeProduct(product._id));
    }
  };

  if (!product) return null;

  return (
    <div className="flex items-center justify-between w-full p-6 border-b border-neutral-200">
      <div className="flex items-center gap-6">
        <div className="w-24 h-24 rounded-lg overflow-hidden shadow-md flex-shrink-0">
          <img 
            src={product?.imgLarge} 
            className="w-full h-full object-cover object-center" 
            alt={t(product?.name)} 
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-gray-800">{t(product?.name)}</h3>
          <p className="text-sm text-gray-600 max-w-md">{t(product?.description || '')}</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="text-lg font-medium text-gray-800">{product?.price} {t('mdl')}</div>
        
        <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1">
          <button
            className="w-8 h-8 flex items-center justify-center rounded-md bg-yellow-400 hover:bg-yellow-500 transition-colors"
            onClick={handleRemoveQuantity}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>
          
          <span className="text-xl font-semibold w-8 text-center">{quantity}</span>
          
          <button
            className="w-8 h-8 flex items-center justify-center rounded-md bg-yellow-400 hover:bg-yellow-500 transition-colors"
            onClick={handleAddQuantity}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>

        <div className="text-2xl font-bold text-gray-900 w-24 text-right">
          {product?.price * quantity} {t('mdl')}
        </div>

        <button
          className="ml-6 text-red-600 hover:text-red-800 transition-colors"
          onClick={handleOnRemove}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
