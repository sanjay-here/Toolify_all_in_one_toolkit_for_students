import React, { useState } from 'react';

type Base = 2 | 8 | 10 | 16 | number;

export default function NumberBaseConverter() {
  const [number, setNumber] = useState('');
  const [fromBase, setFromBase] = useState<Base>(10);
  const [toBase, setToBase] = useState<Base>(2);
  const [customBase, setCustomBase] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const convert = () => {
    try {
      setError('');
      if (!number) return;

      // Parse the input number according to its base
      const decimal = parseInt(number, fromBase);
      if (isNaN(decimal)) {
        throw new Error('Invalid number for selected base');
      }

      // Convert to target base
      const targetBase = toBase === 0 ? parseInt(customBase) : toBase;
      if (targetBase < 2 || targetBase > 36) {
        throw new Error('Base must be between 2 and 36');
      }

      setResult(decimal.toString(targetBase).toUpperCase());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Conversion error');
      setResult('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Number Base Converter
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Number
            </label>
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Enter a number"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                From Base
              </label>
              <select
                value={fromBase}
                onChange={(e) => setFromBase(parseInt(e.target.value) as Base)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value={2}>Binary (2)</option>
                <option value={8}>Octal (8)</option>
                <option value={10}>Decimal (10)</option>
                <option value={16}>Hexadecimal (16)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                To Base
              </label>
              <select
                value={toBase}
                onChange={(e) => setToBase(parseInt(e.target.value) as Base)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value={2}>Binary (2)</option>
                <option value={8}>Octal (8)</option>
                <option value={10}>Decimal (10)</option>
                <option value={16}>Hexadecimal (16)</option>
                <option value={0}>Custom</option>
              </select>
            </div>
          </div>

          {toBase === 0 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Custom Base (2-36)
              </label>
              <input
                type="number"
                min="2"
                max="36"
                value={customBase}
                onChange={(e) => setCustomBase(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          )}

          <button
            onClick={convert}
            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Convert
          </button>

          {(result || error) && (
            <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              {error ? (
                <div className="text-red-600 dark:text-red-400">{error}</div>
              ) : (
                <>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Result</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white break-all">
                    {result}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}