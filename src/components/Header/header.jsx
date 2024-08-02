import React from "react";
import { useSelector } from "react-redux";

export const Header = () => {
  const { totalCount, totalPrice } = useSelector((state) => state.product);
  return (
    <div className="bg-blue-600 p-4 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl">Total Products: {totalCount}</h1>
      <h2 className="text-xl">Total Price: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
};
