import React from "react";

const Textarea = ({ addClass, ...props }) => {
  return (
    <textarea
      className={"border border-gray-500 text-gray-700 rounded-lg block w-full p-3 px-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" +
        addClass
      }
      {...props}
    ></textarea>
  );
};

export default Textarea;
