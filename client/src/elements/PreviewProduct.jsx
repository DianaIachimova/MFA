import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from "@heroicons/react/solid/ShoppingCartIcon";
import XIcon from "@heroicons/react/outline/XIcon";
import { useTranslation } from "react-i18next";
import { addCartProduct } from "../store/actions/cartData.actions";

import { useNavigate } from "react-router-dom";

function PreviewProduct(props) {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const { t, i18n } = useTranslation();
  const {_id, name, description, quantity, imgLarge, price, onClose } = props;
  const currentEl = cart.find(el => el.product._id === _id)
  const productQuantity = currentEl ? currentEl?.quantity : null

  const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleOnClick = async () => {
    if (!user._id) {
      navigate(`/${i18n.language}/login`);

      return;
    }

    dispatch(addCartProduct(_id, productQuantity ? productQuantity + 1 : 1));
  };

  return (
    <div>
      <div className="grid grid-cols-10 m-auto w-[80vw] h-[96vh]">
        <div
          className="z-20 col-span-6 filter shadow-[#000] shadow-2xl rounded-xl bg-cover bg-center"
          style={{
            backgroundImage: `url(${imgLarge})`,
          }}
        />

        <div className="z-20 bg-neutral-800 my-5 rounded-r-lg col-span-4">
          <div className="px-8 py-5 flex flex-col h-full">
            <div className="flex items-end justify-between">
              <div className="text-3xl text-white font-bold ">{name}</div>
              <button onClick={onClose}>
                <XIcon className="w-12 h-12 text-white" />
              </button>
            </div>
            <div className="text-base text-white pt-5">{t(description)}</div>
            <div className="text-base text-white pt-5">{t(quantity)}g</div>

            <div className="flex justify-between pt-[330px]">
              <div className="text-lg text-white font-bold">{t("Total")}</div>
              <div className="text-lg text-white font-bold">{price} mdl</div>
            </div>
            <button
              onClick={handleOnClick}
              className="w-full mt-auto bg-[#f00] text-white text-xl font-bold flex justify-center items-center rounded-md px-2 py-2"
            >
              {t("Order")}
              <ShoppingCartIcon className="w-6 h-6 text-white ml-1" />
              <span className="text-white ml-1">{productQuantity ? `(${productQuantity})` : null}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewProduct;
