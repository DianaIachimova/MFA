import ChevronRightIcon from "@heroicons/react/outline/ChevronRightIcon";
import React from "react";
import { useSelector } from "react-redux";

const OrderPanel = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const subtotal = cart.reduce((acc, { quantity, product }) => {
    return acc + quantity * product.price;
  }, 0);

  const total = subtotal + 40;

  return (
    <div className="border w-full bg-neutral-100">
      <div className="flex justify-around items-center mt-5 mb-5">
        <div className="rounded-full w-9 h-9 border-2 border-black text-2xl font-medium text-center">
          1
        </div>
        <ChevronRightIcon className="w-5 h-5 text-black" />
        <div className="rounded-full w-9 h-9 border-2 border-gray-400 text-2xl font-medium text-center text-gray-400">
          2
        </div>
        <ChevronRightIcon className="w-5 h-5 text-black" />
        <div className="rounded-full w-9 h-9 border-2 border-gray-400 text-2xl font-medium text-center text-gray-400">
          3
        </div>
      </div>
      <div className="bg-white pt-4">
        <div className="flex justify-evenly pl-1 pr-1">
          <div className="w-[176px] h-[60px] border-x-2 border-t-2 border-yellow-400 bg-white rounded-t-lg flex content-center">
            <span className="text-sm m-auto">PRE-ORDER</span>
          </div>
          <div className="w-[176px] h-[60px] border-x-2 border-t-2 border-yellow-400 bg-yellow-400 rounded-t-lg flex content-center">
            <span className="text-sm m-auto font-bold">DELIVERY</span>
          </div>
        </div>{" "}
        <div className="w-11/12 h-[60px] border-2 border-yellow-400 bg-white rounded-b-lg m-auto"></div>
        <div className="border-y w-full h-[63px] mt-5 border-neutral-400 flex justify-between content-center pt-4 pl-5 pr-5">
          <div className="text-xl">Subtotal</div>
          <div className="text-xl">{subtotal} mdl</div>
        </div>{" "}
      </div>
      <div className="flex justify-between border-b border-neutral-300 ml-5 mr-5 pt-5 pb-4">
        <div className="text-base">Delivery</div>
        <div className="text-xl">40 mdl</div>
      </div>
      <div className="flex justify-between pt-5 pl-5 pr-5">
        <div className="text-2xl font-medium">Total</div>
        <div className="text-2xl font-bold">{total}mdl</div>
      </div>
      <div className="bg-[#ff0000] w-11/12 h-[63px] m-auto rounded-md flex justify-between content-center mt-5 mb-10">
        <div className="text-white font-bold text-xl m-auto">ORDER</div>
      </div>
    </div>
  );
};

export default OrderPanel;
