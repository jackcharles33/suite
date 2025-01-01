import React from 'react';
import { LucideIcon } from 'lucide-react';
import { UnderConstructionOverlay } from './UnderConstructionOverlay';
import { motion } from 'framer-motion';

interface CalculatorCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  url: string;
  underConstruction?: boolean;
  index: number;
}

export function CalculatorCard({ 
  title, 
  icon: Icon, 
  description, 
  url, 
  underConstruction,
  index
}: CalculatorCardProps) {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <a 
        href={underConstruction ? undefined : url}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full text-left bg-[#33274d] rounded-xl p-6 transition-all ${
          !underConstruction && 'hover:bg-[#3d2e5c] hover:scale-[1.02] hover:shadow-xl cursor-pointer group'
        }`}
      >
        <div className="flex items-center gap-4 mb-3">
          <div className="p-3 bg-pink-500/20 rounded-lg group-hover:bg-pink-500/30 transition-colors">
            <Icon className="w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform" />
          </div>
          <h2 className="text-xl font-semibold text-white">
            {title}
          </h2>
        </div>
        <p className="text-gray-300 text-sm">{description}</p>
      </a>
      {underConstruction && <UnderConstructionOverlay />}
    </motion.div>
  );
}