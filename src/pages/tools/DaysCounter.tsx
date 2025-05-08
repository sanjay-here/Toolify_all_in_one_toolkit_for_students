import React, { useState, useEffect } from 'react';

interface TimeSpan {
  years: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalDays: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
}

function calculateTimeSpan(startDate: Date, endDate: Date): TimeSpan {
  const diff = endDate.getTime() - startDate.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);

  return {
    years,
    days: days % 365,
    hours: hours % 24,
    minutes: minutes % 60,
    seconds: seconds % 60,
    totalDays: days,
    totalHours: hours,
    totalMinutes: minutes,
    totalSeconds: seconds
  };
}

export default function DaysCounter() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [timeSpan, setTimeSpan] = useState<TimeSpan | null>(null);

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      if (start > end) return;
      
      setTimeSpan(calculateTimeSpan(start, end));
    }
  }, [startDate, endDate]);

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Days Counter</h2>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Start Date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                End Date
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          {timeSpan && (
            <div className="space-y-4">
              <div className="p-4 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
                  Broken Down Time
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">
                      {timeSpan.years}
                    </div>
                    <div className="text-sm text-indigo-600 dark:text-indigo-400">Years</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">
                      {timeSpan.days}
                    </div>
                    <div className="text-sm text-indigo-600 dark:text-indigo-400">Days</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">
                      {timeSpan.hours}
                    </div>
                    <div className="text-sm text-indigo-600 dark:text-indigo-400">Hours</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">
                      {timeSpan.minutes}
                    </div>
                    <div className="text-sm text-indigo-600 dark:text-indigo-400">Minutes</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">
                      {timeSpan.seconds}
                    </div>
                    <div className="text-sm text-indigo-600 dark:text-indigo-400">Seconds</div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg space-y-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Total Time
                </h3>
                <div className="text-gray-700 dark:text-gray-300">
                  Total Days: <span className="font-bold">{timeSpan.totalDays}</span>
                </div>
                <div className="text-gray-700 dark:text-gray-300">
                  Total Hours: <span className="font-bold">{timeSpan.totalHours}</span>
                </div>
                <div className="text-gray-700 dark:text-gray-300">
                  Total Minutes: <span className="font-bold">{timeSpan.totalMinutes}</span>
                </div>
                <div className="text-gray-700 dark:text-gray-300">
                  Total Seconds: <span className="font-bold">{timeSpan.totalSeconds}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}