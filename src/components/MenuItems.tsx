// src/components/Item.tsx
import React from 'react';

interface ItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

const Item: React.FC<ItemProps> = ({ name, description, price, image }) => {
  return (
    <div className="flex flex-col items-center border-b p-4 ">
      <img src={image} alt={name} className="h-40 w-40 object-cover rounded-md" />
      <h3 className="text-xl font-semibold mt-2">{name}</h3>
      <p>{description}</p>
      <p className="font-semibold text-green-600 mt-2">Rs {price}</p>
    </div>
  );
};

export default Item;
