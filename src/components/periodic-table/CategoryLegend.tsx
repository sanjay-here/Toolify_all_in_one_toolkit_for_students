import React from 'react';

const categories = [
  { name: 'Nonmetal', class: 'bg-green-100 dark:bg-green-900' },
  { name: 'Noble Gas', class: 'bg-purple-100 dark:bg-purple-900' },
  { name: 'Alkali Metal', class: 'bg-red-100 dark:bg-red-900' },
  { name: 'Alkaline Earth', class: 'bg-orange-100 dark:bg-orange-900' },
  { name: 'Metalloid', class: 'bg-yellow-100 dark:bg-yellow-900' },
  { name: 'Halogen', class: 'bg-blue-100 dark:bg-blue-900' },
  { name: 'Transition Metal', class: 'bg-indigo-100 dark:bg-indigo-900' },
  { name: 'Post-Transition', class: 'bg-pink-100 dark:bg-pink-900' },
  { name: 'Lanthanoid', class: 'bg-teal-100 dark:bg-teal-900' },
  { name: 'Actinoid', class: 'bg-cyan-100 dark:bg-cyan-900' },
];

export default function CategoryLegend() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
      {categories.map(category => (
        <div key={category.name} className="flex items-center space-x-2">
          <div className={`w-4 h-4 rounded ${category.class}`} />
          <span className="text-gray-700 dark:text-gray-300">{category.name}</span>
        </div>
      ))}
    </div>
  );
}