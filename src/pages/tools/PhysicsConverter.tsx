import React, { useState, useEffect } from 'react';
import CategorySelector from '../../components/physics/CategorySelector';
import ConversionResult from '../../components/physics/ConversionResult';
import { units, type PhysicsCategory, type UnitType } from '../../utils/physics';

export default function PhysicsConverter() {
  const [category, setCategory] = useState<PhysicsCategory>('force');
  const [value, setValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('newton');
  const [toUnit, setToUnit] = useState<string>('kilonewton');
  const [result, setResult] = useState<string>('');

  useEffect(() => {
    if (value && !isNaN(parseFloat(value))) {
      const inputValue = parseFloat(value);
      const categoryUnits = units[category];
      const baseValue = inputValue * categoryUnits[fromUnit as UnitType<typeof category>];
      const convertedValue = baseValue / categoryUnits[toUnit as UnitType<typeof category>];
      setResult(convertedValue.toString());
    } else {
      setResult('');
    }
  }, [value, category, fromUnit, toUnit]);

  const handleCategoryChange = (newCategory: PhysicsCategory) => {
    setCategory(newCategory);
    const categoryUnits = Object.keys(units[newCategory]);
    setFromUnit(categoryUnits[0]);
    setToUnit(categoryUnits[1]);
    setValue('');
    setResult('');
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Physics Converter
        </h2>

        <div className="space-y-6">
          <CategorySelector
            selectedCategory={category}
            onCategorySelect={handleCategoryChange}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Value
            </label>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Enter value"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                From
              </label>
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {Object.keys(units[category]).map((unit) => (
                  <option key={unit} value={unit}>
                    {unit.charAt(0).toUpperCase() + unit.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                To
              </label>
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {Object.keys(units[category]).map((unit) => (
                  <option key={unit} value={unit}>
                    {unit.charAt(0).toUpperCase() + unit.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <ConversionResult value={result} unit={toUnit} />
        </div>
      </div>
    </div>
  );
}