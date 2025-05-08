import React, { useState, useEffect } from 'react';

const units = {
  meters: 1,
  kilometers: 1000,
  centimeters: 0.01,
  millimeters: 0.001,
  miles: 1609.34,
  yards: 0.9144,
  feet: 0.3048,
  inches: 0.0254
};

type Unit = keyof typeof units;

export default function LengthConverter() {
  const [value, setValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<Unit>('meters');
  const [toUnit, setToUnit] = useState<Unit>('kilometers');
  const [result, setResult] = useState<string>('');

  useEffect(() => {
    if (value && !isNaN(parseFloat(value))) {
      const inputValue = parseFloat(value);
      const baseValue = inputValue * units[fromUnit];
      const convertedValue = baseValue / units[toUnit];
      setResult(convertedValue.toFixed(6));
    } else {
      setResult('');
    }
  }, [value, fromUnit, toUnit]);

  return (
    <div className="max-w-xl mx-auto mt-8 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Length Converter</h2>
        
        <div className="space-y-4">
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
                onChange={(e) => setFromUnit(e.target.value as Unit)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {Object.keys(units).map((unit) => (
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
                onChange={(e) => setToUnit(e.target.value as Unit)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {Object.keys(units).map((unit) => (
                  <option key={unit} value={unit}>
                    {unit.charAt(0).toUpperCase() + unit.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Result</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {result ? `${result} ${toUnit}` : '-'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}