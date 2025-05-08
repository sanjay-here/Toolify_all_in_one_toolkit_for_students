import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const tools = [
  { name: 'Calculator', path: '/calculator' },
  { name: 'Scientific Calculator', path: '/scientific-calculator' },
  { name: 'Multiplication Table', path: '/multiplication-table' },
  { name: 'Number Base Converter', path: '/number-base-converter' },
  { name: 'Prime Number Checker', path: '/prime-checker' },
  { name: 'Roman Numeral Converter', path: '/roman-converter' },
  { name: 'Days Counter', path: '/days-counter' },
  { name: 'Length Converter', path: '/length-converter' },
  { name: 'Temperature Converter', path: '/temperature-converter' },
  { name: 'Weight Converter', path: '/weight-converter' },
  { name: 'Equation Solver', path: '/equation-solver' },
  { name: 'Geometry Calculator', path: '/geometry-calculator' },
  { name: 'Trigonometry', path: '/trigonometry' },
  { name: 'Periodic Table', path: '/periodic-table' },
  { name: 'Physics Converter', path: '/physics-converter' },
  { name: 'Timer', path: '/timer' },
  { name: 'Stopwatch', path: '/stopwatch' },
  { name: 'Age Calculator', path: '/age-calculator' },
  { name: 'Percentage Calculator', path: '/percentage-calculator' },
  { name: 'Date & Time Calculator', path: '/datetime-calculator' },
  { name: 'Grade Calculator', path: '/grade-calculator' },
  { name: 'BMI Calculator', path: '/bmi-calculator' },
];

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (path: string) => {
    navigate(path);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <input
          type="search"
          placeholder="Search tools..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                   focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg 
                      border border-gray-200 dark:border-gray-700">
          <ul className="py-2 max-h-96 overflow-y-auto">
            {filteredTools.map((tool) => (
              <li key={tool.path}>
                <button
                  onClick={() => handleSelect(tool.path)}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700
                           text-gray-700 dark:text-gray-300"
                >
                  {tool.name}
                </button>
              </li>
            ))}
            {filteredTools.length === 0 && (
              <li className="px-4 py-2 text-gray-500 dark:text-gray-400">
                No tools found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}