import React, { useState } from 'react';

export default function ScientificCalculator() {
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

  const handleFunction = (func: string) => {
    switch (func) {
      case 'sin':
      case 'cos':
      case 'tan':
        const angle = parseFloat(display);
        const radians = (angle * Math.PI) / 180;
        const result = Math[func](radians);
        setDisplay(result.toString());
        setEquation(`${func}(${angle})`);
        setHasResult(true);
        break;
      case 'sqrt':
        const sqrtResult = Math.sqrt(parseFloat(display));
        setDisplay(sqrtResult.toString());
        setEquation(`sqrt(${display})`);
        setHasResult(true);
        break;
      case 'pow2':
        const pow2Result = Math.pow(parseFloat(display), 2);
        setDisplay(pow2Result.toString());
        setEquation(`${display}²`);
        setHasResult(true);
        break;
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
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="mb-4 p-4 bg-gray-100 dark:bg-gray-700 rounded text-right">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{equation || '0'}</div>
          <div className="text-3xl font-bold">{display}</div>
        </div>
        
        <div className="grid grid-cols-6 gap-2">
          {/* Scientific Functions */}
          <button
            onClick={() => handleFunction('sin')}
            className="p-3 text-sm font-semibold bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-lg"
          >
            sin
          </button>
          <button
            onClick={() => handleFunction('cos')}
            className="p-3 text-sm font-semibold bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-lg"
          >
            cos
          </button>
          <button
            onClick={() => handleFunction('tan')}
            className="p-3 text-sm font-semibold bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-lg"
          >
            tan
          </button>
          <button
            onClick={() => handleFunction('sqrt')}
            className="p-3 text-sm font-semibold bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-lg"
          >
            √
          </button>
          <button
            onClick={() => handleFunction('pow2')}
            className="p-3 text-sm font-semibold bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-lg"
          >
            x²
          </button>
          <button
            onClick={handleClear}
            className="p-3 text-sm font-semibold bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-lg"
          >
            C
          </button>

          {/* Numbers and Basic Operators */}
          {['7', '8', '9', '÷', '(', ')', 
            '4', '5', '6', '×', 'π', 'e',
            '1', '2', '3', '-', '^', '!',
            '0', '.', '=', '+', 'log', 'ln'].map((btn) => (
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
                  case 'π':
                    handleNumber(Math.PI.toString());
                    break;
                  case 'e':
                    handleNumber(Math.E.toString());
                    break;
                  case '+':
                  case '-':
                  case '^':
                    handleOperator(btn);
                    break;
                  default:
                    handleNumber(btn);
                }
              }}
              className={`p-3 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                btn === '=' 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : ['÷', '×', '-', '+', '^', '!', 'log', 'ln'].includes(btn)
                  ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400'
                  : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}