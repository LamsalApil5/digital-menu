// src/App.tsx
import React from 'react';
import { menuData } from './data/menuData';
import Category from './components/MenuCategories';

const App: React.FC = () => {
  const { categories, items } = menuData;

  return (
    <div className="container mx-auto p-4">
      {categories.map(category => (
        <Category key={category.id} category={category} items={items} />
      ))}
    </div>
  );
};

export default App;
