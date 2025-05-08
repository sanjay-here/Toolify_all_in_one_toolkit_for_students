import { useState, useEffect, useCallback } from 'react';

export default function useTimer(initialHours = 0, initialMinutes = 0, initialSeconds = 0) {
  const [time, setTime] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds
  });
  const [isRunning, setIsRunning] = useState(false);
  const [initialTime, setInitialTime] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds
  });

  const start = useCallback(() => setIsRunning(true), []);
  const pause = useCallback(() => setIsRunning(false), []);
  const reset = useCallback(() => {
    setIsRunning(false);
    setTime(initialTime);
  }, [initialTime]);

  const setTimer = useCallback((hours: number, minutes: number, seconds: number) => {
    const newTime = { hours, minutes, seconds };
    setTime(newTime);
    setInitialTime(newTime);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(current => {
          if (current.hours === 0 && current.minutes === 0 && current.seconds === 0) {
            setIsRunning(false);
            return current;
          }

          let newSeconds = current.seconds - 1;
          let newMinutes = current.minutes;
          let newHours = current.hours;

          if (newSeconds < 0) {
            newSeconds = 59;
            newMinutes -= 1;
          }

          if (newMinutes < 0) {
            newMinutes = 59;
            newHours -= 1;
          }

          return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return {
    time,
    isRunning,
    start,
    pause,
    reset,
    setTimer
  };
}