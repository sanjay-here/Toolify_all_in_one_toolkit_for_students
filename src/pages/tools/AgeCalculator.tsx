import React, { useState } from 'react';
import AgeResult from '../../components/age/AgeResult';

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });
  const [error, setError] = useState('');

  const calculateAge = () => {
    const birth = new Date(birthDate);
    const today = new Date();

    if (birth > today) {
      setError('Birth date cannot be in the future');
      return;
    }

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, birth.getDate());
      days += Math.floor((today - lastMonth) / (1000 * 60 * 60 * 24));
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
    setError('');
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Age Calculator</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Birth Date
            </label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              max={new Date().toISOString().split('T')[0]}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          {error && (
            <div className="text-red-600 dark:text-red-400 text-sm">{error}</div>
          )}

          <button
            onClick={calculateAge}
            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 
                     transition-colors duration-200"
          >
            Calculate Age
          </button>

          {birthDate && !error && (
            <AgeResult
              years={age.years}
              months={age.months}
              days={age.days}
            />
          )}
        </div>
      </div>
    </div>
  );
}