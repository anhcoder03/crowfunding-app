import React from "react";

const CampTitle = ({ children, className = "mb-1 font-semibold" }) => {
  return <h3 className={`${className} text-text1`}>{children}</h3>;
};

export default CampTitle;
