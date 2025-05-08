import React, { useState } from 'react';

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (isNaN(h) || isNaN(w)) {
      return;
    }

    let bmiValue: number;
    if (unit === 'metric') {
      // Height in cm, weight in kg
      bmiValue = w / Math.pow(h / 100, 2);
    } else {
      // Height in inches, weight in pounds
      bmiValue = (w / Math.pow(h, 2)) * 703;
    }

    setBmi(bmiValue);
  };

  const getBMICategory = (bmi: number): string => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">BMI Calculator</h2>

        <div className="space-y-4">
          <div className="flex space-x-4">
            <button
              onClick={() => setUnit('metric')}
              className={`flex-1 py-2 rounded-lg ${
                unit === 'metric'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Metric
            </button>
            <button
              onClick={() => setUnit('imperial')}
              className={`flex-1 py-2 rounded-lg ${
                unit === 'imperial'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Imperial
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Height ({unit === 'metric' ? 'cm' : 'inches'})
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder={`Enter height in ${unit === 'metric' ? 'centimeters' : 'inches'}`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Weight ({unit === 'metric' ? 'kg' : 'lbs'})
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder={`Enter weight in ${unit === 'metric' ? 'kilograms' : 'pounds'}`}
            />
          </div>

          <button
            onClick={calculateBMI}
            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Calculate BMI
          </button>

          {bmi !== null && (
            <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Your BMI</div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {bmi.toFixed(1)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Category: {getBMICategory(bmi)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}