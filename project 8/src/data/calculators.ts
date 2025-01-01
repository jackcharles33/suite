import { Calculator, Thermometer, ClipboardCheck, Percent } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface CalculatorTool {
  title: string;
  icon: LucideIcon;
  description: string;
  url: string;
  underConstruction?: boolean;
}

export const calculators: CalculatorTool[] = [
  {
    title: 'Heat Loss Calculator',
    icon: Thermometer,
    description: "Estimate the heat loss for a customer's property.",
    url: 'https://heatloss.netlify.app/',
    underConstruction: true
  },
  {
    title: 'Planning Assessment',
    icon: ClipboardCheck,
    description: 'Determine if planning permission for noise is necessary and generate planning assessment reports.',
    url: 'https://noiseplan.vercel.app/'
  },
  {
    title: 'Commission Calculator',
    icon: Calculator,
    description: 'Calculate your monthly sales commissions and earnings.',
    url: 'https://commissioncalculator.vercel.app/'
  },
  {
    title: 'Discount Calculator',
    icon: Percent,
    description: 'Calculate discounts & Installation Agreement prices for customers.',
    url: 'https://discountlct.vercel.app/'
  }
];