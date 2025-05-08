import React, { useState } from 'react';
import ShapeSelector, { Shape } from '../../components/geometry/ShapeSelector';
import ResultDisplay from '../../components/geometry/ResultDisplay';
import * as geometry from '../../utils/geometry';
import { roundToDecimals } from '../../utils/conversion';

export default function GeometryCalculator() {
  const [selectedShape, setSelectedShape] = useState<Shape>('2d-rectangle');
  const [dimensions, setDimensions] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Array<{ label: string; value: number; unit: string }>>([]);

  const handleCalculate = () => {
    const dims = Object.fromEntries(
      Object.entries(dimensions).map(([key, value]) => [key, parseFloat(value) || 0])
    );

    switch (selectedShape) {
      case '2d-rectangle': {
        const area = geometry.calculateRectangleArea(dims.length, dims.width);
        const perimeter = geometry.calculateRectanglePerimeter(dims.length, dims.width);
        setResults([
          { label: 'Area', value: roundToDecimals(area), unit: 'square units' },
          { label: 'Perimeter', value: roundToDecimals(perimeter), unit: 'units' }
        ]);
        break;
      }
      case '2d-circle': {
        const area = geometry.calculateCircleArea(dims.radius);
        const circumference = geometry.calculateCircleCircumference(dims.radius);
        setResults([
          { label: 'Area', value: roundToDecimals(area), unit: 'square units' },
          { label: 'Circumference', value: roundToDecimals(circumference), unit: 'units' }
        ]);
        break;
      }
      case '2d-triangle': {
        const area = geometry.calculateTriangleArea(dims.base, dims.height);
        const perimeter = geometry.calculateTrianglePerimeter(dims.sideA, dims.sideB, dims.sideC);
        setResults([
          { label: 'Area', value: roundToDecimals(area), unit: 'square units' },
          { label: 'Perimeter', value: roundToDecimals(perimeter), unit: 'units' }
        ]);
        break;
      }
      case '3d-cube': {
        const volume = geometry.calculateCubeVolume(dims.side);
        const surfaceArea = geometry.calculateCubeSurfaceArea(dims.side);
        setResults([
          { label: 'Volume', value: roundToDecimals(volume), unit: 'cubic units' },
          { label: 'Surface Area', value: roundToDecimals(surfaceArea), unit: 'square units' }
        ]);
        break;
      }
      case '3d-sphere': {
        const volume = geometry.calculateSphereVolume(dims.radius);
        const surfaceArea = geometry.calculateSphereSurfaceArea(dims.radius);
        setResults([
          { label: 'Volume', value: roundToDecimals(volume), unit: 'cubic units' },
          { label: 'Surface Area', value: roundToDecimals(surfaceArea), unit: 'square units' }
        ]);
        break;
      }
    }
  };

  const getDimensionFields = () => {
    switch (selectedShape) {
      case '2d-rectangle':
        return [
          { key: 'length', label: 'Length' },
          { key: 'width', label: 'Width' }
        ];
      case '2d-circle':
        return [{ key: 'radius', label: 'Radius' }];
      case '2d-triangle':
        return [
          { key: 'base', label: 'Base' },
          { key: 'height', label: 'Height' },
          { key: 'sideA', label: 'Side A' },
          { key: 'sideB', label: 'Side B' },
          { key: 'sideC', label: 'Side C' }
        ];
      case '3d-cube':
        return [{ key: 'side', label: 'Side Length' }];
      case '3d-sphere':
        return [{ key: 'radius', label: 'Radius' }];
      default:
        return [];
    }
  };

  const handleShapeChange = (shape: Shape) => {
    setSelectedShape(shape);
    setDimensions({});
    setResults([]);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Geometry Calculator
        </h2>

        <div className="space-y-6">
          <ShapeSelector
            selectedShape={selectedShape}
            onShapeSelect={handleShapeChange}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {getDimensionFields().map(({ key, label }) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {label}
                </label>
                <input
                  type="number"
                  value={dimensions[key] || ''}
                  onChange={(e) => setDimensions({ ...dimensions, [key]: e.target.value })}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder={`Enter ${label.toLowerCase()}`}
                />
              </div>
            ))}
          </div>

          <button
            onClick={handleCalculate}
            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 
                     transition-colors duration-200"
          >
            Calculate
          </button>

          {results.length > 0 && <ResultDisplay results={results} />}
        </div>
      </div>
    </div>
  );
}