import React from "react";
import { useSelector } from "react-redux";

const CartContent = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="border border-white w-full">
      <div className="text-4xl text-black font-bold ml-5 mb-14 mt-7">
        {cart.length} Items in your cart
      </div>
      <div className="flex justify-between border-b border-neutral-400 mb-10 pb-3 ml-4 mr-4">
        <div className="text-2xl pl-5">Product(s)</div>
        <div className="w-5/12 flex justify-between pr-10">
          <div className="text-2xl">Price</div>
          <div className="text-2xl">Qty</div>
          <div className="text-2xl">Total:</div>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
