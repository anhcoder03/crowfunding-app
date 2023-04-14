import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Button = ({
  type = "",
  children,
  className = "",
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );
  let defaultClassName =
    "flex items-center justify-center p-4 text-base font-semibold rounded-xl min-h-[56px]";
  switch (rest.kind) {
    case "primary":
      defaultClassName = defaultClassName + " bg-primary text-white";
      break;
    case "secondary":
      defaultClassName = defaultClassName + "  bg-secondary text-white";
      break;
    case "ghost":
      defaultClassName =
        defaultClassName + " bg-secondary bg-opacity-10 text-secondary";
      break;

    default:
      break;
  }
  if (rest.href)
    return (
      <Link to={rest.href} className={`${defaultClassName} ${className}`}>
        {children}
      </Link>
    );
  return (
    <button
      className={`${defaultClassName} ${
        isLoading ? "opacity-60 pointer-events-none" : ""
      } ${className}`}
      type={type}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]),
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};

export default Button;
