import { IconFolder } from "components/icons";
import React from "react";
import { Link } from "react-router-dom";

const CampCategory = ({ text = "", className = "text-xs" }) => {
  return (
    <Link
      to="/"
      className={`${className} flex items-baseline mb-4 font-medium gap-x-3 text-text3`}
    >
      <IconFolder></IconFolder>
      <span>{text}</span>
    </Link>
  );
};

export default CampCategory;
