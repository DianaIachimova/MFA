import React from "react";

function InputElement(props) {
  const { text, type, name, value, onChange } = props;
  return (
    <div>
      {" "}
      <div className="border mt-5 border-gray-300 rounded-lg px-3 py-2 shadow-sm  bg-white">
        <label
          htmlFor="name"
          className="block text-xs font-medium text-gray-400"
        >
          {text}
        </label>
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-base bg-white focus:outline-none"
        />
      </div>
    </div>
  );
}

export default InputElement;
