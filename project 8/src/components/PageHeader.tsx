import React from 'react';
import { motion } from 'framer-motion';

export function PageHeader() {
  return (
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
        Calculator Tools
      </h1>
      <p className="text-gray-300 max-w-2xl mx-auto">
        Access our tools designed to streamline your workflow.
      </p>
    </motion.div>
  );
}