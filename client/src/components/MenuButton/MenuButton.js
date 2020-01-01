import React from "react";
import "./MenuButton.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function MenuButton(props) {
  return (
    <button className="btn btn-primary mx-auto mt-3 w-100" {...props} role="button">
    </button>
  );
}

export default MenuButton;