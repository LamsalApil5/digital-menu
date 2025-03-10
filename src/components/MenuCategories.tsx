// src/components/Category.tsx
import React from "react";
import Item from "./MenuItems";

interface CategoryProps {
  category: {
    id: string;
    name: string;
    description: string;
    image: string;
  };
  items: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    categoryId: string;
  }[];
}

const Category: React.FC<CategoryProps> = ({ category, items }) => {
  const filteredItems = items.filter((item) => item.categoryId === category.id);

  return (
    <div className="relative mb-8">
      {/* Category background image */}
      <div
        className="inset-0 flex flex-col items-center justify-center bg-opacity-50"        
      >
        <h2 className="text-4xl text-black font-extrabold mb-2">
          {category.name}
        </h2>
        <p className="text-lg text-gray-500">{category.description}</p>
      </div>

      {/* Items list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {filteredItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
