import React from "react";

const Input = ({ addClass, ...props }) => {
  return (
    <input 
    className={"shadow appearance-none border rounded w-full py-3 px-4 focus:orange-blue-500 border-gray-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "+ addClass}  {...props} />
  );
};

export default Input;
