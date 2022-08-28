import React from "react";

function Input(props) {
  const { onChange, style, className, name } = props;
  return (
    <div style={style} className={className}>
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {props.label}
      </label>
      <input
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
        placeholder={props.placeholder ?? "Enter Input"}
        onChange={onChange}
        name={name}
        required
      />
    </div>
  );
}

export default Input;
