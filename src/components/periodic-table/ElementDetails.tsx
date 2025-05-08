import React from 'react';
import { Element } from '../../data/periodicTableData';

interface ElementDetailsProps {
  element: Element;
  onClose: () => void;
}

export default function ElementDetails({ element, onClose }: ElementDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold">{element.name}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Atomic Number</div>
              <div className="font-semibold">{element.atomicNumber}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Symbol</div>
              <div className="font-semibold">{element.symbol}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Atomic Mass</div>
              <div className="font-semibold">{element.atomicMass}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Category</div>
              <div className="font-semibold capitalize">{element.category}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Block</div>
              <div className="font-semibold uppercase">{element.block}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Group</div>
              <div className="font-semibold">{element.group}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}