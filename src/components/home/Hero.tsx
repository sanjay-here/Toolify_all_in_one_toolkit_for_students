import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Your Complete Schooling Toolkit
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Access powerful calculators, converters, and academic tools at one place designed to make learning easier and more engaging.
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent" />
    </div>
  );
}