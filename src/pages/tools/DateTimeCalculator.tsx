import React, { useState } from 'react';

type CalculationType = 'difference' | 'add' | 'subtract';

export default function DateTimeCalculator() {
  const [calculationType, setCalculationType] = useState<CalculationType>('difference');
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [units, setUnits] = useState({ days: 0, hours: 0, minutes: 0 });
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const d1 = new Date(date1);
    
    switch (calculationType) {
      case 'difference': {
        const d2 = new Date(date2);
        const diff = Math.abs(d2.getTime() - d1.getTime());
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        setResult(`${days} days, ${hours} hours, ${minutes} minutes`);
        break;
      }
      case 'add': {
        const newDate = new Date(d1.getTime());
        newDate.setDate(newDate.getDate() + units.days);
        newDate.setHours(newDate.getHours() + units.hours);
        newDate.setMinutes(newDate.getMinutes() + units.minutes);
        setResult(newDate.toLocaleString());
        break;
      }
      case 'subtract': {
        const newDate = new Date(d1.getTime());
        newDate.setDate(newDate.getDate() - units.days);
        newDate.setHours(newDate.getHours() - units.hours);
        newDate.setMinutes(newDate.getMinutes() - units.minutes);
        setResult(newDate.toLocaleString());
        break;
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Date & Time Calculator
        </h2>

        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-2">
            {(['difference', 'add', 'subtract'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setCalculationType(type)}
                className={`py-2 rounded-lg capitalize ${
                  calculationType === type
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {calculationType === 'difference' ? 'First Date' : 'Start Date'}
            </label>
            <input
              type="datetime-local"
              value={date1}
              onChange={(e) => setDate1(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          {calculationType === 'difference' ? (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Second Date
              </label>
              <input
                type="datetime-local"
                value={date2}
                onChange={(e) => setDate2(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Days
                </label>
                <input
                  type="number"
                  value={units.days}
                  onChange={(e) => setUnits({ ...units, days: parseInt(e.target.value) || 0 })}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Hours
                </label>
                <input
                  type="number"
                  value={units.hours}
                  onChange={(e) => setUnits({ ...units, hours: parseInt(e.target.value) || 0 })}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Minutes
                </label>
                <input
                  type="number"
                  value={units.minutes}
                  onChange={(e) => setUnits({ ...units, minutes: parseInt(e.target.value) || 0 })}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>
          )}

          <button
            onClick={calculate}
            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Calculate
          </button>

          {result && (
            <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Result</div>
              <div className="text-xl font-bold text-gray-900 dark:text-white">
                {result}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}