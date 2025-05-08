import React from 'react';

interface AngleInputProps {
  angle: string;
  setAngle: (value: string) => void;
  isRadians: boolean;
}

export default function AngleInput({ angle, setAngle, isRadians }: AngleInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Angle {isRadians ? '(radians)' : '(degrees)'}
      </label>
      <input
        type="number"
        value={angle}
        onChange={(e) => setAngle(e.target.value)}
        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        placeholder={`Enter angle in ${isRadians ? 'radians' : 'degrees'}`}
      />
    </div>
  );
}