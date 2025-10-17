import React from "react";

function CartWidget() {
  return (
    <button className="btn btn-outline-light">
      🛒 <span className="badge bg-light text-dark">0</span>
    </button>
  );
}

export default CartWidget;
