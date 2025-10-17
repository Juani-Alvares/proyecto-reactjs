import React from "react";

function ItemListContainer({ greeting }) {
  return (
    <div className="container text-center mt-5">
      <h1>{greeting}</h1>
      <p>Aquí pronto verás nuestros productos disponibles.</p>
    </div>
  );
}

export default ItemListContainer;
