import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const Input = ({
  className = "",
  control,
  name = "text",
  type = "",
  ...rest
}) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        type={type}
        className={`w-full px-6 py-4 text-sm font-medium border border-strock rounded-xl text-text1 placeholder:text-text4 ${className}`}
        id={name}
        {...rest}
        {...field}
      />
    </div>
  );
};
Input.propTypes = {
  type: PropTypes.string,
  control: PropTypes.any.isRequired,
  name: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
