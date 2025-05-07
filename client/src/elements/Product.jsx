import { Link, useLocation, useNavigate } from "react-router-dom";
import React from "react";
import ShoppingCartIcon from "@heroicons/react/solid/ShoppingCartIcon";
import InformationCircleIcon from "@heroicons/react/outline/InformationCircleIcon";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { addCartProduct } from "../store/actions/cartData.actions";
import { useSelector } from "react-redux";

function Product(props) {
  const { id, name, price, src, _id } = props;
 const cart = useSelector((state) => state.cart);
  const currentEl = cart.find(el => el.product._id === _id)
  const productQuantity = currentEl ? currentEl?.quantity : null
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const { t, i18n } = useTranslation();

  const handleOnClick = async () => {
    if (!user._id) {
      navigate(`/${i18n.language}/login`);

      return;
    }

    dispatch(addCartProduct(_id, productQuantity ? productQuantity + 1 : 1));
  };

  return (
    <div className="w-60 border border-transparent hover:border-yellow-400 px-2 py-2 rounded-md ml-2 mb-10">
      <Link
        key={id}
        to={`/${i18n.language}/products/${id}`}
        state={{ backgroundLocation: location }}
      >
        <div
          className="w-[222px] h-[310px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${src})`,
          }}
        >
          {/* <img
            src={src}
            className="rounded-md object-cover bg-center w-full"
            alt="product"
          /> */}
        </div>
      </Link>

      <div className="flex justify-between w-full">
        <div className="text-lg text-white mt-3 ml-2">{name}</div>
        <InformationCircleIcon className="w-6 h-6 text-gray-400 mt-3 mr-2" />
      </div>

      <button
        type="button"
        onClick={handleOnClick}
        className="border border-solid border-yellow-400 rounded-md w-full flex justify-between items-center p-2 mt-3 hover:bg-yellow-500 group"
      >
        <div className="text-xs text-white group-hover:text-black">
          {price}.00 mdl
        </div>
        <div className="flex justify-evenly">
          <div className="text-white font-bold text-base group-hover:text-black mr-1">
            {t("Order")}
          </div>
          <ShoppingCartIcon className="h-6 w-6 text-white group-hover:text-black" />
          <span className="text-white ml-1">{productQuantity ? `(${productQuantity})` : null}</span>
        </div>
      </button>
    </div>
  );
}

export default Product;
