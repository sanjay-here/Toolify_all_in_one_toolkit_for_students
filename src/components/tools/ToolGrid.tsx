import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Calculator,
  CalculatorIcon,
  Ruler,
  Thermometer,
  Weight,
  FunctionSquare,
  Shapes,
  Triangle,
  Grid3X3,
  Gauge,
  Timer,
  Clock12,
  CalendarDays,
  Percent,
  Clock,
  GraduationCap,
  Activity,
  Table,
  Binary,
  Hash,
  FileDigit,
  Calendar
} from 'lucide-react';
import ToolCard from './ToolCard';

const tools = [
  {
    id: 'calculator',
    title: 'Calculator',
    description: 'Basic arithmetic operations',
    Icon: Calculator,
    path: '/calculator',
  },
  {
    id: 'scientific-calculator',
    title: 'Scientific Calculator',
    description: 'Advanced mathematical functions',
    Icon: CalculatorIcon,
    path: '/scientific-calculator',
  },
  {
    id: 'multiplication-table',
    title: 'Multiplication Table',
    description: 'Generate multiplication tables',
    Icon: Table,
    path: '/multiplication-table',
  },
  {
    id: 'number-base-converter',
    title: 'Number Base Converter',
    description: 'Convert between number bases',
    Icon: Binary,
    path: '/number-base-converter',
  },
  {
    id: 'prime-checker',
    title: 'Prime Checker',
    description: 'Check if a number is prime',
    Icon: Hash,
    path: '/prime-checker',
  },
  {
    id: 'roman-converter',
    title: 'Roman Converter',
    description: 'Convert between Roman and decimal numbers',
    Icon: FileDigit,
    path: '/roman-converter',
  },
  {
    id: 'days-counter',
    title: 'Days Counter',
    description: 'Calculate time between dates',
    Icon: Calendar,
    path: '/days-counter',
  },
  {
    id: 'percentage-calculator',
    title: 'Percentage Calculator',
    description: 'Calculate percentages and ratios',
    Icon: Percent,
    path: '/percentage-calculator',
  },
  {
    id: 'datetime-calculator',
    title: 'Date & Time Calculator',
    description: 'Calculate time differences and dates',
    Icon: Clock,
    path: '/datetime-calculator',
  },
  {
    id: 'grade-calculator',
    title: 'Grade Calculator',
    description: 'Calculate GPA and grades',
    Icon: GraduationCap,
    path: '/grade-calculator',
  },
  {
    id: 'bmi-calculator',
    title: 'BMI Calculator',
    description: 'Calculate Body Mass Index',
    Icon: Activity,
    path: '/bmi-calculator',
  },
  {
    id: 'length-converter',
    title: 'Length Converter',
    description: 'Convert between different units of length',
    Icon: Ruler,
    path: '/length-converter',
  },
  {
    id: 'temperature-converter',
    title: 'Temperature Converter',
    description: 'Convert between temperature scales',
    Icon: Thermometer,
    path: '/temperature-converter',
  },
  {
    id: 'weight-converter',
    title: 'Weight Converter',
    description: 'Convert between weight units',
    Icon: Weight,
    path: '/weight-converter',
  },
  {
    id: 'equation-solver',
    title: 'Equation Solver',
    description: 'Solve linear and quadratic equations',
    Icon: FunctionSquare,
    path: '/equation-solver',
  },
  {
    id: 'geometry-calculator',
    title: 'Geometry Calculator',
    description: 'Calculate area, perimeter, and volume',
    Icon: Shapes,
    path: '/geometry-calculator',
  },
  {
    id: 'trigonometry',
    title: 'Trigonometry',
    description: 'Calculate sin, cos, and tan',
    Icon: Triangle,
    path: '/trigonometry',
  },
  {
    id: 'periodic-table',
    title: 'Periodic Table',
    description: 'Interactive periodic table of elements',
    Icon: Grid3X3,
    path: '/periodic-table',
  },
  {
    id: 'physics-converter',
    title: 'Physics Converter',
    description: 'Convert between physics units',
    Icon: Gauge,
    path: '/physics-converter',
  },
  {
    id: 'timer',
    title: 'Timer',
    description: 'Countdown timer with alerts',
    Icon: Timer,
    path: '/timer',
  },
  {
    id: 'stopwatch',
    title: 'Stopwatch',
    description: 'Precise time measurement',
    Icon: Clock12,
    path: '/stopwatch',
  },
  {
    id: 'age-calculator',
    title: 'Age Calculator',
    description: 'Calculate age and important dates',
    Icon: CalendarDays,
    path: '/age-calculator',
  },
];

export default function ToolGrid() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool) => (
        <ToolCard
          key={tool.id}
          title={tool.title}
          description={tool.description}
          Icon={tool.Icon}
          onClick={() => navigate(tool.path)}
        />
      ))}
    </div>
  );
}