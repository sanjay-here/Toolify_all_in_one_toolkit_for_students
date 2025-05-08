import React, { useState } from 'react';
import TimerDisplay from '../../components/timer/TimerDisplay';
import TimerControls from '../../components/timer/TimerControls';
import TimeInput from '../../components/timer/TimeInput';
import useTimer from '../../hooks/useTimer';

export default function Timer() {
  const [showSettings, setShowSettings] = useState(true);
  const { time, isRunning, start, pause, reset, setTimer } = useTimer();

  const handleStart = () => {
    if (showSettings) {
      setShowSettings(false);
    }
    start();
  };

  const handleReset = () => {
    reset();
    setShowSettings(true);
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Timer</h2>

        {showSettings ? (
          <div className="grid grid-cols-3 gap-4 mb-6">
            <TimeInput
              label="Hours"
              value={time.hours}
              onChange={(hours) => setTimer(hours, time.minutes, time.seconds)}
              max={99}
            />
            <TimeInput
              label="Minutes"
              value={time.minutes}
              onChange={(minutes) => setTimer(time.hours, minutes, time.seconds)}
              max={59}
            />
            <TimeInput
              label="Seconds"
              value={time.seconds}
              onChange={(seconds) => setTimer(time.hours, time.minutes, seconds)}
              max={59}
            />
          </div>
        ) : (
          <div className="mb-6">
            <TimerDisplay
              hours={time.hours}
              minutes={time.minutes}
              seconds={time.seconds}
            />
          </div>
        )}

        <TimerControls
          isRunning={isRunning}
          onStart={handleStart}
          onPause={pause}
          onReset={handleReset}
        />
      </div>
    </div>
  );
}