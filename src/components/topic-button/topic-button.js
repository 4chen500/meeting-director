import React, { useState } from "react";
import InputButton from "../input-button";
import classnames from "classnames";

import "./style.css";

const TopicButton = (props) => {
  const [isEdit, setIsEdit] = useState(true);
  const inputButtonProps = {
    className: classnames("topic-button", { "is-edit": isEdit }),
    label: "+ Topic",
    onSubmit: (inputValue) => {
      if (inputValue) {
        setIsEdit(!isEdit);
      }

      setIsEdit(true);
    },
    onClick: () => {
      setIsEdit(false);
    },
  };

  return <InputButton {...inputButtonProps} />;
};

export default TopicButton;
