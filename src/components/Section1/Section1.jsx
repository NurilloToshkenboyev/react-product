import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addProduct } from "../../redux/products/products-reducer";

export const Section1 = ({ name, price, count, img, id }) => {
  const dispatch = useDispatch();

  const buyProduct = () => {
    dispatch(addProduct({ name, price, count, img, id }));
    toast.success(`${name} added to cart!`);
  };

  return (
    <div className="bg-green-400 p-4 m-2 rounded-lg shadow-lg hover:bg-gray-100">
      <img src={img} alt={name} className="w-full h-48 object-cover rounded-lg" />
      <h1 className="text-xl font-bold">{name}</h1>
      <strong className="text-lg">${price}</strong>
      <p>Count: {count}</p>
      <button
        onClick={buyProduct}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg hover:bg-blue-600"
      >
        Buy
      </button>
    </div>
  );
};
