import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 mt-12 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            Developed by Sanjay A
          </p>
          <div className="flex items-center justify-center space-x-4">
            <a
              href="mailto:sanjay2407san@gmail.com"
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Mail className="h-5 w-5 mr-2" />
              sanjay2407san@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/sanjay-a-749a90223/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn Profile
            </a>
          </div>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Thank you for visiting!
          </p>
        </div>
      </div>
    </footer>
  );
}