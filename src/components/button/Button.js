import React from "react";
import PropTypes from "prop-types";
const Button = ({ type = "", children, className = "" }) => {
  return (
    <button
      className={`flex items-center justify-center p-4 text-base font-semibold text-white rounded-xl ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]),
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
