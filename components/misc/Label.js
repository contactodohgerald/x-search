import React from "react";

const Label = ({ children, id, addClass }) => {
  return (
    <label htmlFor={id} 
        className={
            "block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left" + 
            addClass} >
        {children}
    </label>
  );
};

export default Label;
