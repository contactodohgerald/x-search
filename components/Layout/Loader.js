import React from "react";

const Loader = () => {
  return(
    <>
     <div className="container m-auto px-6 py-40 md:px-12 lg:px-20">
        <div className="mt-0 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
          <div className="w-24 h-24 border-4 border-red-400 border-double rounded-full border-r-transparent animate-spin "></div>
        </div>
     </div>
    </>
  ) 
};

export default Loader;
