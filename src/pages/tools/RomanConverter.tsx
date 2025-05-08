import React, { useState } from 'react';

const romanNumerals: [number, string][] = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];

function toRoman(num: number): string {
  let result = '';
  for (const [value, symbol] of romanNumerals) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
}

function fromRoman(str: string): number {
  let result = 0;
  let i = 0;
  
  while (i < str.length) {
    const current = romanNumerals.find(([_, symbol]) => str.startsWith(symbol, i));
    if (!current) throw new Error('Invalid Roman numeral');
    
    result += current[0];
    i += current[1].length;
  }
  
  return result;
}

export default function RomanConverter() {
  const [number, setNumber] = useState('');
  const [roman, setRoman] = useState('');
  const [error, setError] = useState('');

  const convertToRoman = () => {
    try {
      setError('');
      const num = parseInt(number);
      if (isNaN(num) || num < 1 || num > 3999) {
        throw new Error('Please enter a number between 1 and 3999');
      }
      setRoman(toRoman(num));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid input');
      setRoman('');
    }
  };

  const convertFromRoman = () => {
    try {
      setError('');
      const num = fromRoman(roman.toUpperCase());
      setNumber(num.toString());
    } catch (err) {
      setError('Invalid Roman numeral');
      setNumber('');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Roman Numeral Converter
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Number (1-3999)
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter a number"
                min="1"
                max="3999"
              />
              <button
                onClick={convertToRoman}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                To Roman
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Roman Numeral
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                value={roman}
                onChange={(e) => setRoman(e.target.value)}
                className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white uppercase"
                placeholder="Enter a Roman numeral"
              />
              <button
                onClick={convertFromRoman}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                To Number
              </button>
            </div>
          </div>

          {error && (
            <div className="p-4 bg-red-100 dark:bg-red-900 rounded-lg">
              <div className="text-red-700 dark:text-red-300">{error}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}