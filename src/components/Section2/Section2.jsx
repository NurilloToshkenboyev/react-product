import React from "react";
import { useDispatch } from "react-redux";
import { toggleAmount, removeProduct } from "../../redux/products/products-reducer";

export const Section2 = ({ userPrice, img, userCount, count, id, name }) => {
  const dispatch = useDispatch();

  const changeProductPrice = (type = undefined) => {
    dispatch(toggleAmount({ id, type }));
  };

  return (
    <div className="bg-blue-300 p-4 m-2 rounded-lg shadow-lg hover:bg-gray-100">
      <img src={img} alt={name} className="w-full h-48 object-cover rounded-lg" />
      <h1 className="text-xl font-bold">{name}</h1>
      <strong className="text-lg">${userPrice}</strong>
      <p>Count: {count}</p>
      <div className="flex items-center mt-2">
        <button
          onClick={() => changeProductPrice("add")}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          +
        </button>
        <strong className="text-lg mx-2">{userCount}</strong>
        {userCount > 1 ? (
          <button
            onClick={() => changeProductPrice("remove")}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            -
          </button>
        ) : (
          <button
            onClick={() => dispatch(removeProduct(id))}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            X
          </button>
        )}
      </div>
    </div>
  );
};
