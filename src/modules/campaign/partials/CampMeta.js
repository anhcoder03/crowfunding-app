import React from "react";

const CampMeta = ({
  amount = "$2,000",
  text = "Raised of $1,900",
  size = "small",
}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <h4
        className={`${
          size === "small" ? "text-sm" : "text-xl"
        } font-semibold text-text2`}
      >
        {amount}
      </h4>
      <span
        className={`${
          size === "small" ? "text-xs" : "text-base font-normal"
        } text-text4`}
      >
        {text}
      </span>
    </div>
  );
};

export default CampMeta;
