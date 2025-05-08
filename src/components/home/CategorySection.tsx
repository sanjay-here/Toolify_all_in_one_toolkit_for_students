import React from 'react';

interface CategorySectionProps {
  title: string;
  children: React.ReactNode;
}

export default function CategorySection({ title, children }: CategorySectionProps) {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}