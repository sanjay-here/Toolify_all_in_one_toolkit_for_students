import React, { useState } from 'react';

export default function PercentageCalculator() {
  const [value, setValue] = useState('');
  const [percentage, setPercentage] = useState('');
  const [result, setResult] = useState<{ value: number; type: string } | null>(null);

  const calculatePercentage = () => {
    const v = parseFloat(value);
    const p = parseFloat(percentage);

    if (isNaN(v) || isNaN(p)) {
      return;
    }

    const percentageValue = (v * p) / 100;
    const total = v + percentageValue;
    const isPercentOf = (v / p) * 100;

    setResult({
      value: percentageValue,
      type: 'percentage'
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Percentage Calculator
        </h2>

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

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Percentage (%)
            </label>
            <input
              type="number"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Enter percentage"
            />
          </div>

          <button
            onClick={calculatePercentage}
            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Calculate
          </button>

          {result && (
            <div className="mt-6 space-y-4">
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {percentage}% of {value}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {result.value.toFixed(2)}
                </div>
              </div>
              
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Total ({value} + {percentage}%)
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {(parseFloat(value) + result.value).toFixed(2)}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}