import React from 'react';
import { CalculatorCard } from './components/CalculatorCard';
import { PageHeader } from './components/PageHeader';
import { calculators } from './data/calculators';

export function App() {
  return (
    <div className="min-h-screen bg-[#100030] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <PageHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {calculators.map((calc, index) => (
            <CalculatorCard
              key={calc.title}
              {...calc}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;