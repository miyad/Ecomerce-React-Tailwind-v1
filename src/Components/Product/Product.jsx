import React from "react";
import Cart from "../Cart/Cart";

const Product = ({ product }) => {
  const {title, image, price } = product;
  let shortTitle = title.substring(0, 30);
  if (title.length > 20) shortTitle += "...";

  return (
    <div className="grid  grid-rows-1 items-start mx-6 my-8  bg-white shadow-md rounded-lg p-6 w-64">
      <div className="font-semibold mb-2">{shortTitle}</div>
      <div className="h-5/6">
        <img src={image} className={"h-40"} />
      </div>
      <br />
      <div className="mb-4">$ {price}</div>
      <Cart product={product}/>
    </div>
  );
};

export default Product;
