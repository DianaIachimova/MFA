import React from "react";
import ChevronDownIcon from "@heroicons/react/outline/ChevronDownIcon";

function PhoneNumber() {
  return (
    <div>
      <div className="text-xl font-thin text-slate-300 text-opacity-50  mb-3 flex items-end	cursor-pointer">
        Chișinău: <span className="text-xl ml-1">022 210-210</span>
        <ChevronDownIcon className="w-4 h-4 mb-1 ml-1" />
      </div>
    </div>
  );
}

export default PhoneNumber;
