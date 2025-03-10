import React from 'react';
import { menuData } from './data/menuData';
import Category from './components/MenuCategories';

const App: React.FC = () => {
  const { categories, items } = menuData;

  return (
    <div className="container mx-auto p-4">
      {/* Render the Category component with all categories and items */}
      <Category categories={categories} items={items} />
    </div>
  );
};

export default App;
