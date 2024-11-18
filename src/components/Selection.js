import React, { useState } from "react";

const Selection = (props) => {
  const { applyColor } = props;
  const [style, setStyle] = useState({ background: "" });

  return (
    <div
      className="fix-box"
      style={style}
      onClick={() => applyColor(setStyle)}
    >
      <p className="subheading">Click to apply color</p>
    </div>
  );
};

export default Selection;

