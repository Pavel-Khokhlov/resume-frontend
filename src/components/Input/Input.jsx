import React from "react";

import "./Input.css";

const Input = ({ labelName, inputName, type, onChange, value, errors }) => {

  return (
        <label className="paragraph paragraph__label paragraph__color_grey">{labelName}
          <input
            type={type}
            name={inputName}
            id={inputName}
            className="input"
            onChange={onChange}
            value={value || ""}
          />
          <p className="input__error">{errors}</p>
        </label>
  );
};

export default Input;