import React, { useEffect, useState } from "react";
import Item from "./MenuItems";

interface CategoryProps {
  categories: {
    id: string;
    name: string;
    description: string;
    image: string;
  }[];
  items: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    categoryId: string;
  }[];
}

const Category: React.FC<CategoryProps> = ({ categories, items }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    categories.length > 0 ? categories[0].id : null
  );

  useEffect(() => {
    // When categories change, select the first category if none is selected
    if (categories.length > 0 && !selectedCategoryId) {
      setSelectedCategoryId(categories[0].id);
    }
  }, [categories, selectedCategoryId]);

  // Filter items based on the selected category
  const filteredItems = selectedCategoryId
    ? items.filter((item) => item.categoryId === selectedCategoryId)
    : items;

  // Find the selected category object
  const selectedCategory = selectedCategoryId
    ? categories.find((category) => category.id === selectedCategoryId)
    : null;

  return (
    <div className="relative mb-8">
      {/* Category Images in Grid */}
      <div className="mt-8 overflow-x-auto">
        <div className="flex space-x-4 min-w-max">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative cursor-pointer flex flex-col items-center justify-center"
              onClick={() => setSelectedCategoryId(category.id)}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-24 h-24 object-cover rounded-full"
              />
              <p className="text-center text-sm text-gray-700 mt-2">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Category background image */}
      <div className="inset-0 flex flex-col items-center justify-center bg-opacity-50 my-16">
        <h2 className="text-4xl text-black font-extrabold mb-2">
          {selectedCategory ? selectedCategory.name : "Categories"}
        </h2>
        <p className="text-lg text-gray-500">
          {selectedCategory
            ? selectedCategory.description
            : "Select a category to view items"}
        </p>
      </div>

      {/* Items List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {filteredItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
