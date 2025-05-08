import React from 'react';

export type TrigFunction = 'sin' | 'cos' | 'tan' | 'arcsin' | 'arccos' | 'arctan';

interface FunctionSelectorProps {
  selectedFunction: TrigFunction;
  onFunctionSelect: (func: TrigFunction) => void;
}

export default function FunctionSelector({ selectedFunction, onFunctionSelect }: FunctionSelectorProps) {
  const functions: { id: TrigFunction; label: string }[] = [
    { id: 'sin', label: 'sin' },
    { id: 'cos', label: 'cos' },
    { id: 'tan', label: 'tan' },
    { id: 'arcsin', label: 'arcsin' },
    { id: 'arccos', label: 'arccos' },
    { id: 'arctan', label: 'arctan' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
      {functions.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onFunctionSelect(id)}
          className={`p-3 rounded-lg transition-colors duration-200 ${
            selectedFunction === id
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}