import React from "react";

function PhonoNumberRestaurant(props) {
  const { name, number } = props;

  return (
    <div className="flex justify-center group hover:text-yellow-400">
      <button className="border-r border-neutral-500 text-white w-2/5 text-left font-thin text-base group-hover:text-yellow-400">
        {name}
      </button>
      <button className="text-neutral-500 pl-6 text-base font-mono group-hover:text-yellow-400">
        {number}
      </button>
    </div>
  );
}

export default PhonoNumberRestaurant;
