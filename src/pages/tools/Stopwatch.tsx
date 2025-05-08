import React from 'react';
import TimerDisplay from '../../components/timer/TimerDisplay';
import TimerControls from '../../components/timer/TimerControls';
import useStopwatch from '../../hooks/useStopwatch';

export default function Stopwatch() {
  const { time, isRunning, start, pause, reset } = useStopwatch();

  return (
    <div className="max-w-xl mx-auto mt-8 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Stopwatch</h2>

        <div className="mb-6">
          <TimerDisplay
            hours={time.hours}
            minutes={time.minutes}
            seconds={time.seconds}
            milliseconds={time.milliseconds}
            showMilliseconds={true}
          />
        </div>

        <TimerControls
          isRunning={isRunning}
          onStart={start}
          onPause={pause}
          onReset={reset}
        />
      </div>
    </div>
  );
}