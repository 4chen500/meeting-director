import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import AppButton from "../../components/app-button";
import classnames from "classnames";
import "./style.css";

const InputButton = function (props) {
  const { label, className, onSubmit, onClick } = props;
  const inputRef = useRef(null);
  const getInputValue = () =>
    (inputRef && inputRef.current && inputRef.current.value) || "";
  const [isEdit, setEdit] = useState(false);
  const [buttonLabel, setButtonLabel] = useState(label);
  const onSubmitLabel = (event) => {
    event.preventDefault();
    const inputValue = getInputValue();

    setButtonLabel(inputValue);
    onSubmit && onSubmit(inputValue);
  };

  return (
    <AppButton
      className={classnames(className, "input-button")}
      onClick={(evt) => {
        setEdit(!isEdit);
        if (onClick) onClick(evt);
      }}
    >
      <label htmlFor="input-button-input">{buttonLabel}</label>
      <form onSubmit={onSubmitLabel}>
        <input
          ref={inputRef}
          name="input-button-input"
          className="input-button-input"
          type="text"
        />
      </form>
    </AppButton>
  );
};

InputButton.propTypes = {
  label: PropTypes.string,
};

InputButton.defaultProps = {
  label: "+",
};

export default InputButton;
