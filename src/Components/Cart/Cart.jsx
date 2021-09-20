import React, { useContext, useState } from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";

const Cart = ({ product }) => {
  const { id } = product;
  const [products, { cart }, dispatch] = useContext(GlobalContext);
  const [cartOptionClass, setCartOptionClass] = useState("p-2");
  const [cartAmountClass, setCartAmountClass] = useState(
    "p-2 flex justify-around"
  );

  const enableCart = (e) => {
    e.preventDefault();
    e.target.classList.add("hidden");
    setCartAmountClass(cartAmountClass.replace("hidden", ""));
    handleItemAdd(e);
  };

  const handleItemAdd = (e) => {
    e.preventDefault();

    dispatch({ type: "add", id });
  };
  const handleItemDelete = (e) => {
    e.preventDefault();
    if (cart.find((obj) => obj.id === id).amount === 1) {
      setCartOptionClass(cartAmountClass.replace("hidden", ""));
      setCartAmountClass(cartAmountClass + " hidden");
    }

    dispatch({ type: "delete", id });
  };

  const emptyHandler = () => {
    setCartOptionClass(cartOptionClass.replace("hidden", ""));
    setCartAmountClass(cartAmountClass + " hidden");
  };

  return (
    <div>
      <div className="shadow-md rounded-md bg-green-400 text-center font-semibold text-white text-lg">
        {!cart.find((e) => e.id === id) ? (
          <div className="" onClick={(e) => enableCart(e)}>
            <a href="">
              <div className={cartOptionClass}>Add to Cart</div>
            </a>
          </div>
        ) : (
          <div className={cartAmountClass}>
            <a href="">
              <div
                className="bg-gray-600 px-4 rounded-full"
                onClick={(e) => handleItemDelete(e)}
              >
                -
              </div>
            </a>

            <div>
              {cart.find((obj) => obj.id === id)
                ? cart.find((obj) => obj.id === id).amount
                : 0}
            </div>
            <a href="">
              <div
                className="bg-gray-600 px-4 rounded-full"
                onClick={(e) => handleItemAdd(e)}
              >
                +
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
