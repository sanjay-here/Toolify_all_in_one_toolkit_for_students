import React, { useState } from 'react';

type EquationType = 'linear' | 'quadratic';

interface Solution {
  x1?: number;
  x2?: number;
  error?: string;
}

const solveLinear = (a: number, b: number): Solution => {
  if (a === 0) {
    return { error: 'Coefficient "a" cannot be zero' };
  }
  return { x1: -b / a };
};

const solveQuadratic = (a: number, b: number, c: number): Solution => {
  if (a === 0) {
    return { error: 'Coefficient "a" cannot be zero' };
  }

  const discriminant = b * b - 4 * a * c;
  
  if (discriminant < 0) {
    return { error: 'No real solutions (discriminant < 0)' };
  }
  
  if (discriminant === 0) {
    const x = -b / (2 * a);
    return { x1: x, x2: x };
  }
  
  const sqrtDiscriminant = Math.sqrt(discriminant);
  return {
    x1: (-b + sqrtDiscriminant) / (2 * a),
    x2: (-b - sqrtDiscriminant) / (2 * a)
  };
};

export default function EquationSolver() {
  const [equationType, setEquationType] = useState<EquationType>('linear');
  const [coefficients, setCoefficients] = useState({
    a: '',
    b: '',
    c: ''
  });
  const [solution, setSolution] = useState<Solution | null>(null);

  const handleSolve = () => {
    const a = parseFloat(coefficients.a);
    const b = parseFloat(coefficients.b);
    const c = parseFloat(coefficients.c);

    if (isNaN(a) || isNaN(b) || (equationType === 'quadratic' && isNaN(c))) {
      setSolution({ error: 'Please enter valid numbers' });
      return;
    }

    setSolution(
      equationType === 'linear' 
        ? solveLinear(a, b)
        : solveQuadratic(a, b, c)
    );
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Equation Solver</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Equation Type
            </label>
            <div className="flex space-x-4">
              <button
                onClick={() => setEquationType('linear')}
                className={`px-4 py-2 rounded-lg ${
                  equationType === 'linear'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                Linear (ax + b = 0)
              </button>
              <button
                onClick={() => setEquationType('quadratic')}
                className={`px-4 py-2 rounded-lg ${
                  equationType === 'quadratic'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                Quadratic (ax² + bx + c = 0)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                a
              </label>
              <input
                type="number"
                value={coefficients.a}
                onChange={(e) => setCoefficients({ ...coefficients, a: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter a"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                b
              </label>
              <input
                type="number"
                value={coefficients.b}
                onChange={(e) => setCoefficients({ ...coefficients, b: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter b"
              />
            </div>
            {equationType === 'quadratic' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  c
                </label>
                <input
                  type="number"
                  value={coefficients.c}
                  onChange={(e) => setCoefficients({ ...coefficients, c: e.target.value })}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter c"
                />
              </div>
            )}
          </div>

          <button
            onClick={handleSolve}
            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 
                     transition-colors duration-200"
          >
            Solve
          </button>

          {solution && (
            <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Solution</div>
              {solution.error ? (
                <div className="text-red-600 dark:text-red-400 font-medium">
                  {solution.error}
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    x₁ = {solution.x1?.toFixed(4)}
                  </div>
                  {solution.x2 !== undefined && solution.x1 !== solution.x2 && (
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      x₂ = {solution.x2.toFixed(4)}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}