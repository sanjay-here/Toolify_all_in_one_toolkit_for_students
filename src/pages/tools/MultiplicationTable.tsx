import React, { useState } from 'react';

export default function MultiplicationTable() {
  const [number, setNumber] = useState('');
  const [range, setRange] = useState('10');
  const [table, setTable] = useState<number[][]>([]);

  const generateTable = () => {
    const num = parseInt(number);
    const rangeNum = parseInt(range);
    
    if (isNaN(num) || isNaN(rangeNum)) return;

    const newTable = Array.from({ length: rangeNum }, (_, i) => {
      const multiplier = i + 1;
      return [num, multiplier, num * multiplier];
    });

    setTable(newTable);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Multiplication Table Generator
        </h2>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Number
              </label>
              <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter a number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Range
              </label>
              <input
                type="number"
                value={range}
                onChange={(e) => setRange(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter range"
              />
            </div>
          </div>

          <button
            onClick={generateTable}
            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Generate Table
          </button>

          {table.length > 0 && (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="p-3">Number</th>
                    <th className="p-3">Multiplier</th>
                    <th className="p-3">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {table.map(([num, multiplier, result], index) => (
                    <tr key={index} className="border-b dark:border-gray-700">
                      <td className="p-3">{num}</td>
                      <td className="p-3">{multiplier}</td>
                      <td className="p-3 font-bold">{result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}