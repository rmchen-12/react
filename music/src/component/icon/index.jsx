import React from "react";

export const Icon = props => {
  return (
    <svg
      className="icon"
      aria-hidden="true"
      style={{ color: props.color, fontSize: props.size }}
    >
      <use xlinkHref={"#icon-" + props.type} />
    </svg>
  );
};

export default Icon;
