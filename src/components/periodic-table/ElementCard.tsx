import React from 'react';
import { Element } from '../../data/periodicTableData';

interface ElementCardProps {
  element: Element;
  onClick: (element: Element) => void;
}

export default function ElementCard({ element, onClick }: ElementCardProps) {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'nonmetal': 'bg-green-100 dark:bg-green-900',
      'noble-gas': 'bg-purple-100 dark:bg-purple-900',
      'alkali-metal': 'bg-red-100 dark:bg-red-900',
      'alkaline-earth': 'bg-orange-100 dark:bg-orange-900',
      'metalloid': 'bg-yellow-100 dark:bg-yellow-900',
      'halogen': 'bg-blue-100 dark:bg-blue-900',
      'transition': 'bg-indigo-100 dark:bg-indigo-900',
      'post-transition': 'bg-pink-100 dark:bg-pink-900',
      'lanthanoid': 'bg-teal-100 dark:bg-teal-900',
      'actinoid': 'bg-cyan-100 dark:bg-cyan-900',
    };
    return colors[category] || 'bg-gray-100 dark:bg-gray-900';
  };

  return (
    <button
      onClick={() => onClick(element)}
      className={`p-2 rounded-lg ${getCategoryColor(element.category)} 
                hover:ring-2 hover:ring-indigo-500 transition-all duration-200`}
    >
      <div className="text-xs text-gray-600 dark:text-gray-400">{element.atomicNumber}</div>
      <div className="text-lg font-bold">{element.symbol}</div>
      <div className="text-xs truncate">{element.name}</div>
    </button>
  );
}