import React from "react";
import { Tools } from "react-sketch";

function Toolbutton(props) {

  return (
    <button
      className="btn btn-primary"
      onClick={props.selectTool}
      value={Tools.Pencil}>
      testbutton
    </button>
  );
}

export default Toolbutton; 