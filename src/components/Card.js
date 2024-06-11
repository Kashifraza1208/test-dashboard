import React from "react";

const Card = ({ item }) => {
  return (
    <div className="flex flex-col p-5  w-full lg:w-64 bg-white mb-10 shadow-lg rounded">
      <p className="font-bold text-xl">{item.title}</p>
      <p className="text-sm overflow-ellipsis font-medium mt-2">
        {item.description}
      </p>

      <input type="checkbox" className="expand-btn" />
    </div>
  );
};

export default Card;
