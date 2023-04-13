import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";

const Input = ({
  className = "",
  control,
  name = "text",
  type = "",
  error = "",
  placeholder = "",
  children,
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
        className={`w-full px-6 py-4 text-sm font-medium border  text-text1 rounded-xl  placeholder:text-text4 ${
          error.length > 0 ? "border-error" : "border-strock"
        } ${children ? "pr-16" : ""}
         ${className}`}
        id={name}
        placeholder={`${error.length > 0 ? "" : placeholder}`}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <span className="absolute text-sm font-medium pointer-events-none text-error top-2/4 -translate-y-2/4 left-6 error-input">
          {error}
        </span>
      )}
      {children && (
        <div className="absolute cursor-pointer select-none top-2/4 -translate-y-2/4 right-6">
          {children}
        </div>
      )}
    </div>
  );
};
Input.propTypes = {
  type: PropTypes.string,
  control: PropTypes.any.isRequired,
  name: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};

export default withErrorBoundary(Input, {
  FallbackComponent: <ErrorComponent></ErrorComponent>,
});
