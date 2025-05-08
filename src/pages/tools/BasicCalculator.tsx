import React, { useState } from 'react';

export default function BasicCalculator() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [hasResult, setHasResult] = useState(false);

  const handleNumber = (num: string) => {
    if (hasResult) {
      setDisplay(num);
      setEquation(num);
      setHasResult(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
      setEquation(equation + num);
    }
  };

  const handleOperator = (op: string) => {
    if (!equation.endsWith(' ') && equation !== '') {
      setEquation(equation + ' ' + op + ' ');
      setDisplay('0');
      setHasResult(false);
    }
  };

  const handleEqual = () => {
    try {
      const result = eval(equation);
      setDisplay(result.toString());
      setEquation(result.toString());
      setHasResult(true);
    } catch (error) {
      setDisplay('Error');
      setEquation('');
      setHasResult(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setHasResult(false);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="mb-4 p-4 bg-gray-100 dark:bg-gray-700 rounded text-right">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{equation || '0'}</div>
          <div className="text-3xl font-bold">{display}</div>
        </div>
        
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '÷', '4', '5', '6', '×', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
            <button
              key={btn}
              onClick={() => {
                switch (btn) {
                  case '=':
                    handleEqual();
                    break;
                  case '÷':
                    handleOperator('/');
                    break;
                  case '×':
                    handleOperator('*');
                    break;
                  case '+':
                  case '-':
                    handleOperator(btn);
                    break;
                  default:
                    handleNumber(btn);
                }
              }}
              className={`p-4 text-xl font-semibold rounded-lg transition-colors duration-200 ${
                btn === '=' 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : ['÷', '×', '-', '+'].includes(btn)
                  ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400'
                  : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {btn}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="col-span-4 p-4 mt-2 text-xl font-semibold bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-800 transition-colors duration-200"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}