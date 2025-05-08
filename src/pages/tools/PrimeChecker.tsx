import React, { useState } from 'react';

function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

export default function PrimeChecker() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState<{ isPrime: boolean; message: string } | null>(null);

  const checkPrime = () => {
    const num = parseInt(number);
    if (isNaN(num)) {
      setResult({ isPrime: false, message: 'Please enter a valid number' });
      return;
    }

    const prime = isPrime(num);
    setResult({
      isPrime: prime,
      message: prime ? `${num} is a prime number` : `${num} is not a prime number`
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Prime Number Checker</h2>

        <div className="space-y-4">
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

          <button
            onClick={checkPrime}
            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Check Number
          </button>

          {result && (
            <div className={`mt-6 p-4 rounded-lg ${
              result.isPrime ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'
            }`}>
              <div className={`text-lg font-bold ${
                result.isPrime ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'
              }`}>
                {result.message}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}