import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCartProduct, removeProduct } from "../../store/actions/cartData.actions";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ModalCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { t, i18n} = useTranslation();

  const subtotal = cart.reduce((acc, { quantity, product }) => {
    return acc + quantity * product?.price;
  }, 0);

  const total = subtotal + 40;

  const handleAddQuantity = (id, quantity) => {
    dispatch(addCartProduct(id, quantity + 1));
  };


  const handleRemoveQuantity = (id, quantity) => {
    if (quantity > 1) {
      dispatch(addCartProduct(id, quantity - 1));
    }

    if(quantity == 1) {
      dispatch(removeProduct(id));
    }
  };

  return (
    <div className="border-transparent">
      <div className="mt-3 mb-3 text-xl ml-10 font-medium text-yellow-400">
        {t('yourOrder')}
      </div>
      <div className="bg-white pb-8 text-black">
        <div className="max-h-96 overflow-y-auto">
        {cart.map(({ product, quantity }) => (
          <div  key={product._id} className="border-b border-neutral-300">
            <div className="text-base font-medium ml-5  pt-2 pb-2">
              {t(product.name)}
            </div>
            <div className=" flex justify-between ml-6 mb-3">
              <button
                className="w-6 h-6 bg-yellow-400 text-center text-xl"
                onClick={() => handleRemoveQuantity(product._id, quantity)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
              </button>
              <div className="text-xl font-bold">{quantity}</div>
              <button
                className="w-6 h-6 bg-yellow-400 text-center text-xl"
                onClick={() => handleAddQuantity(product._id, quantity)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
              <div className="text-xl font-bold mr-4">{product?.price} {t('mdl')}</div>
            </div>
          </div>
        ))}
        </div>
       
        <div className="flex justify-between border-b border-t border-neutral-300 ml-5 mr-5 pt-5 pb-4">
          <div className="text-base">{t('delivery')}</div>
          <div className="text-xl">40 {t('mdl')}</div>
        </div>
        <div className="flex justify-between pt-5 pl-5 pr-5">
          <div className="text-2xl font-medium">{t('total')}</div>
          <div className="text-2xl font-bold">{total} {t('mdl')}</div>
        </div>
        <Link to={`/${i18n.language}/cart`} className="bg-[#ff0000] w-11/12 h-[48px] m-auto rounded-md flex justify-between content-center mt-5">
          <div className="text-white font-bold text-xl m-auto">{t('order')}</div>
        </Link>
      </div>
    </div>
  );
};

export default ModalCart;
