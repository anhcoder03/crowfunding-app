import { IconSearch } from "components/icons";
import React from "react";

const DashboardSearch = () => {
  return (
    <div className="bg-white rounded-full shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] p-2 w-full flex items-center">
      <div className="flex-1 px-5">
        <input
          type="text"
          placeholder="Do fundrise now"
          className="w-full text-sm bg-transparent placeholder:text-text4 text-text1"
        />
      </div>
      <button className="w-[72px] min-h-full rounded-full bg-primary text-white h-10 flex items-center justify-center flex-shrink-0">
        <IconSearch></IconSearch>
      </button>
    </div>
  );
};

export default DashboardSearch;
