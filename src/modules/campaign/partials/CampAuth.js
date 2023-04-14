import { defaultImage } from "constants/Global";
import React from "react";

const CampAuth = ({ name = "Mahfuzul Nabil", avatar = defaultImage }) => {
  return (
    <div className="flex items-center gap-x-3">
      <img src={avatar} alt="" className="object-cover w-8 h-8 rounded-full" />
      <div className="flex items-center text-xs gap-x-1 text-text2">
        <span className="text-text3">by</span>
        <span className="font-semibold">{name}</span>
      </div>
    </div>
  );
};

export default CampAuth;
