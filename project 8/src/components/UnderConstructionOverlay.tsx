import React from 'react';
import { HardHat } from 'lucide-react';

export function UnderConstructionOverlay() {
  return (
    <div className="absolute inset-0 bg-black/80 rounded-xl flex flex-col items-center justify-center backdrop-blur-[1px]">
      <HardHat className="w-12 h-12 text-yellow-400 mb-3 animate-bounce" />
      <h3 className="text-xl font-bold text-white mb-2">Under Construction</h3>
      <div className="w-16 h-1 bg-yellow-400 mb-2" />
      <p className="text-gray-300 text-sm text-center px-4">
        Stay Tuned!
      </p>
    </div>
  );
}