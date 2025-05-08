import React, { useState } from 'react';
import FunctionSelector, { TrigFunction } from '../../components/trigonometry/FunctionSelector';
import AngleInput from '../../components/trigonometry/AngleInput';
import * as trig from '../../utils/trigonometry';
import { roundToDecimals } from '../../utils/conversion';

export default function TrigonometryTool() {
  const [selectedFunction, setSelectedFunction] = useState<TrigFunction>('sin');
  const [angle, setAngle] = useState<string>('');
  const [isRadians, setIsRadians] = useState<boolean>(false);
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    const value = parseFloat(angle);
    
    if (isNaN(value)) {
      setError('Please enter a valid number');
      setResult(null);
      return;
    }

    try {
      let calculatedResult: number;

      switch (selectedFunction) {
        case 'sin':
          calculatedResult = trig.calculateSin(value, isRadians);
          break;
        case 'cos':
          calculatedResult = trig.calculateCos(value, isRadians);
          break;
        case 'tan':
          calculatedResult = trig.calculateTan(value, isRadians);
          break;
        case 'arcsin':
          if (value < -1 || value > 1) {
            throw new Error('Value must be between -1 and 1 for arcsin');
          }
          calculatedResult = trig.calculateArcSin(value, isRadians);
          break;
        case 'arccos':
          if (value < -1 || value > 1) {
            throw new Error('Value must be between -1 and 1 for arccos');
          }
          calculatedResult = trig.calculateArcCos(value, isRadians);
          break;
        case 'arctan':
          calculatedResult = trig.calculateArcTan(value, isRadians);
          break;
        default:
          throw new Error('Invalid function selected');
      }

      setResult(roundToDecimals(calculatedResult, 6));
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Calculation error');
      setResult(null);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Trigonometry Calculator
        </h2>

        <div className="space-y-6">
          <FunctionSelector
            selectedFunction={selectedFunction}
            onFunctionSelect={setSelectedFunction}
          />

          <div className="space-y-4">
            <AngleInput
              angle={angle}
              setAngle={setAngle}
              isRadians={isRadians}
            />

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="radians"
                checked={isRadians}
                onChange={(e) => setIsRadians(e.target.checked)}
                className="rounded border-gray-300 text-indigo-600 
                         focus:ring-indigo-500 dark:border-gray-600"
              />
              <label
                htmlFor="radians"
                className="text-sm text-gray-700 dark:text-gray-300"
              >
                Use radians
              </label>
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full py-2 bg-indigo-600 text-white rounded-lg 
                     hover:bg-indigo-700 transition-colors duration-200"
          >
            Calculate
          </button>

          {(result !== null || error) && (
            <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              {error ? (
                <div className="text-red-600 dark:text-red-400 font-medium">
                  {error}
                </div>
              ) : (
                <>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    Result
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {result}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}