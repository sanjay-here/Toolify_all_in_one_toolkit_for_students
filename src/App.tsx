import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import BasicCalculator from './pages/tools/BasicCalculator';
import ScientificCalculator from './pages/tools/ScientificCalculator';
import LengthConverter from './pages/tools/LengthConverter';
import TemperatureConverter from './pages/tools/TemperatureConverter';
import WeightConverter from './pages/tools/WeightConverter';
import EquationSolver from './pages/tools/EquationSolver';
import GeometryCalculator from './pages/tools/GeometryCalculator';
import TrigonometryTool from './pages/tools/TrigonometryTool';
import PeriodicTable from './pages/tools/PeriodicTable';
import PhysicsConverter from './pages/tools/PhysicsConverter';
import Timer from './pages/tools/Timer';
import Stopwatch from './pages/tools/Stopwatch';
import AgeCalculator from './pages/tools/AgeCalculator';
import PercentageCalculator from './pages/tools/PercentageCalculator';
import DateTimeCalculator from './pages/tools/DateTimeCalculator';
import GradeCalculator from './pages/tools/GradeCalculator';
import BMICalculator from './pages/tools/BMICalculator';
import MultiplicationTable from './pages/tools/MultiplicationTable';
import NumberBaseConverter from './pages/tools/NumberBaseConverter';
import PrimeChecker from './pages/tools/PrimeChecker';
import RomanConverter from './pages/tools/RomanConverter';
import DaysCounter from './pages/tools/DaysCounter';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200`}>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<BasicCalculator />} />
          <Route path="/scientific-calculator" element={<ScientificCalculator />} />
          <Route path="/multiplication-table" element={<MultiplicationTable />} />
          <Route path="/number-base-converter" element={<NumberBaseConverter />} />
          <Route path="/prime-checker" element={<PrimeChecker />} />
          <Route path="/roman-converter" element={<RomanConverter />} />
          <Route path="/days-counter" element={<DaysCounter />} />
          <Route path="/length-converter" element={<LengthConverter />} />
          <Route path="/temperature-converter" element={<TemperatureConverter />} />
          <Route path="/weight-converter" element={<WeightConverter />} />
          <Route path="/equation-solver" element={<EquationSolver />} />
          <Route path="/geometry-calculator" element={<GeometryCalculator />} />
          <Route path="/trigonometry" element={<TrigonometryTool />} />
          <Route path="/periodic-table" element={<PeriodicTable />} />
          <Route path="/physics-converter" element={<PhysicsConverter />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/age-calculator" element={<AgeCalculator />} />
          <Route path="/percentage-calculator" element={<PercentageCalculator />} />
          <Route path="/datetime-calculator" element={<DateTimeCalculator />} />
          <Route path="/grade-calculator" element={<GradeCalculator />} />
          <Route path="/bmi-calculator" element={<BMICalculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;