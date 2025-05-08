import React, { useState, useEffect } from 'react';

type Scale = 'celsius' | 'fahrenheit' | 'kelvin';

const convert = (value: number, from: Scale, to: Scale): number => {
  if (from === to) return value;

  let celsius: number;

  // Convert to Celsius first
  switch (from) {
    case 'fahrenheit':
      celsius = (value - 32) * (5/9);
      break;
    case 'kelvin':
      celsius = value - 273.15;
      break;
    default:
      celsius = value;
  }

  // Convert from Celsius to target
  switch (to) {
    case 'fahrenheit':
      return (celsius * 9/5) + 32;
    case 'kelvin':
      return celsius + 273.15;
    default:
      return celsius;
  }
};

export default function TemperatureConverter() {
  const [value, setValue] = useState<string>('');
  const [fromScale, setFromScale] = useState<Scale>('celsius');
  const [toScale, setToScale] = useState<Scale>('fahrenheit');
  const [result, setResult] = useState<string>('');

  useEffect(() => {
    if (value && !isNaN(parseFloat(value))) {
      const inputValue = parseFloat(value);
      const convertedValue = convert(inputValue, fromScale, toScale);
      setResult(convertedValue.toFixed(2));
    } else {
      setResult('');
    }
  }, [value, fromScale, toScale]);

  return (
    <div className="max-w-xl mx-auto mt-8 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Temperature Converter</h2>
        
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
              placeholder="Enter temperature"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                From
              </label>
              <select
                value={fromScale}
                onChange={(e) => setFromScale(e.target.value as Scale)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="celsius">Celsius (°C)</option>
                <option value="fahrenheit">Fahrenheit (°F)</option>
                <option value="kelvin">Kelvin (K)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                To
              </label>
              <select
                value={toScale}
                onChange={(e) => setToScale(e.target.value as Scale)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="celsius">Celsius (°C)</option>
                <option value="fahrenheit">Fahrenheit (°F)</option>
                <option value="kelvin">Kelvin (K)</option>
              </select>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Result</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {result ? `${result}° ${toScale.charAt(0).toUpperCase() + toScale.slice(1)}` : '-'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}