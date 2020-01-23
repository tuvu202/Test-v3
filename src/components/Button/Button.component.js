import React from "react";
import "./Button.scss";

const Button = props => {
  const { className, text, icon, onClick, onChange } = props;

  return (
    <div className={`button ${className}`} onClick={onClick}>
      {icon && <img src={icon} alt="ic_upload" className="button-icon" />}
      <span>{text}</span>
      <label className="upload-file" onChange={onChange}>
        <input type="file" />
      </label>
    </div>
  );
};

Button.propTypes = {};

export default Button;
