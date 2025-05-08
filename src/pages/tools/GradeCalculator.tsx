import React, { useState } from 'react';

interface Grade {
  subject: string;
  score: string;
  credits: string;
}

export default function GradeCalculator() {
  const [grades, setGrades] = useState<Grade[]>([{ subject: '', score: '', credits: '' }]);
  const [gpa, setGpa] = useState<number | null>(null);

  const addGrade = () => {
    setGrades([...grades, { subject: '', score: '', credits: '' }]);
  };

  const removeGrade = (index: number) => {
    setGrades(grades.filter((_, i) => i !== index));
  };

  const updateGrade = (index: number, field: keyof Grade, value: string) => {
    const newGrades = [...grades];
    newGrades[index][field] = value;
    setGrades(newGrades);
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    grades.forEach(grade => {
      const score = parseFloat(grade.score);
      const credits = parseFloat(grade.credits);

      if (!isNaN(score) && !isNaN(credits)) {
        totalPoints += score * credits;
        totalCredits += credits;
      }
    });

    if (totalCredits > 0) {
      setGpa(totalPoints / totalCredits);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Grade Calculator</h2>

        <div className="space-y-4">
          {grades.map((grade, index) => (
            <div key={index} className="grid grid-cols-4 gap-4">
              <div className="col-span-2">
                <input
                  type="text"
                  placeholder="Subject"
                  value={grade.subject}
                  onChange={(e) => updateGrade(index, 'subject', e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Score"
                  value={grade.score}
                  onChange={(e) => updateGrade(index, 'score', e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div className="flex">
                <input
                  type="number"
                  placeholder="Credits"
                  value={grade.credits}
                  onChange={(e) => updateGrade(index, 'credits', e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                {grades.length > 1 && (
                  <button
                    onClick={() => removeGrade(index)}
                    className="ml-2 p-2 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          ))}

          <div className="flex justify-between">
            <button
              onClick={addGrade}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 
                       rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              Add Subject
            </button>
            <button
              onClick={calculateGPA}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Calculate GPA
            </button>
          </div>

          {gpa !== null && (
            <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">GPA</div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {gpa.toFixed(2)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}