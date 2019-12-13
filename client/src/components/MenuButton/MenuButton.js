import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function MenuButton(props) {
  return (
    <button className="btn" {...props} role="button" tabIndex="0">
    </button>
  );
}

export default MenuButton;