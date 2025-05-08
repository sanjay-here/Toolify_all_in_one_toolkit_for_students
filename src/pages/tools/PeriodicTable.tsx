import React, { useState } from 'react';
import { elements, Element, ElementCategory, categories } from '../../data/periodicTableData';
import ElementCard from '../../components/periodic-table/ElementCard';
import ElementDetails from '../../components/periodic-table/ElementDetails';
import CategoryLegend from '../../components/periodic-table/CategoryLegend';

export default function PeriodicTable() {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ElementCategory | 'all'>('all');

  const filteredElements = selectedCategory === 'all'
    ? elements
    : elements.filter(element => element.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto mt-8 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Periodic Table of Elements
        </h2>

        <div className="mb-6 space-y-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              All Elements
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg capitalize transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                {category.replace('-', ' ')}
              </button>
            ))}
          </div>
          <CategoryLegend />
        </div>

        <div className="grid grid-cols-18 gap-1">
          {filteredElements.map(element => (
            <ElementCard
              key={element.atomicNumber}
              element={element}
              onClick={setSelectedElement}
            />
          ))}
        </div>

        {selectedElement && (
          <ElementDetails
            element={selectedElement}
            onClose={() => setSelectedElement(null)}
          />
        )}
      </div>
    </div>
  );
}