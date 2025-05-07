import React from "react";
import ChevronRightIcon from "@heroicons/react/outline/ChevronRightIcon";
import { useLocation } from "react-router-dom";

function CategoryName(props) {
  const { pathname } = useLocation();
  const { name } = props;

  return (
    <div className="flex items-baseline justify-between w-10/12 m-auto pt-8 pb-4 border-b border-neutral-800 mb-8">
      <div className="text-4xl text-white font-bold">{name}</div>

      {!pathname.includes(name?.toLowerCase()) ? (
        <a
          href={`catalog/${name?.toLowerCase()}`}
          className="flex items-center"
        >
          <div className="text-neutral-500 text-base">Go to menu {name}</div>
          <ChevronRightIcon className="h-6 w-6 ml-1 text-neutral-500" />
        </a>
      ) : null}
    </div>
  );
}

export default CategoryName;
