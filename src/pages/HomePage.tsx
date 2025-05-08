import React from 'react';
import Hero from '../components/home/Hero';
import CategorySection from '../components/home/CategorySection';
import ToolGrid from '../components/tools/ToolGrid';
import Footer from '../components/layout/Footer';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center mb-12">
          <img 
            src="/toolifyhead.PNG" 
            alt="Toolify Logo" 
            className="max-w-[200px] w-full h-auto"
          />
        </div>
        <CategorySection title="All Tools">
          <ToolGrid />
        </CategorySection>
      </main>
      <Footer />
    </div>
  );
}
