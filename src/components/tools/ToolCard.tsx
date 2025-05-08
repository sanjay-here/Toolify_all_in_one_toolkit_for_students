import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  onClick: () => void;
}

export default function ToolCard({ title, description, Icon, onClick }: ToolCardProps) {
  return (
    <button
      onClick={onClick}
      className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md 
                 transition-all duration-200 ease-in-out transform hover:-translate-y-1 
                 text-left w-full"
    >
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg group-hover:bg-indigo-200 
                      dark:group-hover:bg-indigo-800 transition-colors duration-200">
          <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </button>
  );
}