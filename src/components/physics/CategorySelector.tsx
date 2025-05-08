import React from 'react';
import type { PhysicsCategory } from '../../utils/physics';

interface CategorySelectorProps {
  selectedCategory: PhysicsCategory;
  onCategorySelect: (category: PhysicsCategory) => void;
}

export default function CategorySelector({ selectedCategory, onCategorySelect }: CategorySelectorProps) {
  const categories: PhysicsCategory[] = ['force', 'pressure', 'energy', 'power'];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategorySelect(category)}
          className={`p-3 rounded-lg capitalize transition-colors duration-200 ${
            selectedCategory === category
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}