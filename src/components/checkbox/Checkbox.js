import { IconCheck } from "components/icons";
import React from "react";

const Checkbox = ({
  checked = false,
  onClick = () => {},
  name = "",
  children,
}) => {
  return (
    <div className="flex items-start gap-x-5">
      <div
        className={`inline-flex items-center justify-center p-1 text-white w-5 h-5 border rounded cursor-pointer ${
          checked ? "bg-primary border-primary" : "border-text4"
        }`}
        onClick={onClick}
      >
        <input
          type="checkbox"
          className="hidden"
          onChange={() => {}}
          name={name}
          checked={checked}
        />
        <IconCheck></IconCheck>
      </div>
      {children && (
        <div onClick={onClick} className="cursor-pointer">
          {children}
        </div>
      )}
    </div>
  );
};

export default Checkbox;
