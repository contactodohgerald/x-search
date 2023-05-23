import React from "react";
import TransHistory from "./Layout/TransHistory";
import SearchHistory from "./Layout/SearchHistory";

const History = () => { 

  return (
    <>
      <div className="max-w-screen-xl  mt-0 px-8 xl:px-16 mx-auto mb-5 pb-5 bg-orange-100" id="history">
        <TransHistory />
      </div>

      <div className="max-w-screen-xl  mt-0 px-8 xl:px-16 mx-auto mb-5">
        <SearchHistory />
      </div>
    </>
  );
};

export default History;
