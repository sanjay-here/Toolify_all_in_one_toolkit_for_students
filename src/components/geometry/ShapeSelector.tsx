import React from 'react';

export type Shape = '2d-rectangle' | '2d-circle' | '2d-triangle' | '3d-cube' | '3d-sphere';

interface ShapeSelectorProps {
  selectedShape: Shape;
  onShapeSelect: (shape: Shape) => void;
}

export default function ShapeSelector({ selectedShape, onShapeSelect }: ShapeSelectorProps) {
  const shapes: { id: Shape; label: string }[] = [
    { id: '2d-rectangle', label: 'Rectangle' },
    { id: '2d-circle', label: 'Circle' },
    { id: '2d-triangle', label: 'Triangle' },
    { id: '3d-cube', label: 'Cube' },
    { id: '3d-sphere', label: 'Sphere' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
      {shapes.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onShapeSelect(id)}
          className={`p-3 rounded-lg transition-colors duration-200 ${
            selectedShape === id
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