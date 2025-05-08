import { useState, useEffect, useCallback } from 'react';

export default function useStopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  });

  const start = useCallback(() => setIsRunning(true), []);
  const pause = useCallback(() => setIsRunning(false), []);
  const reset = useCallback(() => {
    setIsRunning(false);
    setTime({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
  }, []);

  useEffect(() => {
    let interval: number;

    if (isRunning) {
      const startTime = Date.now() - (
        (time.hours * 3600000) +
        (time.minutes * 60000) +
        (time.seconds * 1000) +
        time.milliseconds
      );

      interval = window.setInterval(() => {
        const elapsed = Date.now() - startTime;
        const hours = Math.floor(elapsed / 3600000);
        const minutes = Math.floor((elapsed % 3600000) / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);
        const milliseconds = elapsed % 1000;

        setTime({ hours, minutes, seconds, milliseconds });
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isRunning, time.hours, time.minutes, time.seconds, time.milliseconds]);

  return { time, isRunning, start, pause, reset };
}