import React from 'react';
import { BookOpen, Calculator, Globe, Beaker, Monitor, Home, Clock, Star } from 'lucide-react';

const Classes = () => {
  const classDetails = [
    {
      class: 'Classes 1-2',
      subtitle: 'Foundation Building',
      subjects: ['Basic Mathematics', 'English Reading & Writing', 'EVS', 'Hindi'],
      outcomes: ['Number recognition & counting', 'Alphabet & phonics mastery', 'Basic writing skills', 'Simple problem solving'],
      color: 'from-pink-400 to-red-400'
    },
    {
      class: 'Classes 3-4',
      subtitle: 'Skill Development',
      subjects: ['Mathematics', 'English Grammar', 'Science', 'Social Studies', 'Hindi'],
      outcomes: ['Addition, subtraction, multiplication', 'Grammar fundamentals', 'Scientific thinking', 'Map reading basics'],
      color: 'from-blue-400 to-cyan-400'
    },
    {
      class: 'Classes 5-6',
      subtitle: 'Concept Mastery',
      subjects: ['Advanced Mathematics', 'English Literature', 'Science', 'Social Studies', 'Hindi'],
      outcomes: ['Fractions & decimals', 'Essay writing', 'Scientific experiments', 'Historical understanding'],
      color: 'from-green-400 to-emerald-400'
    },
    {
      class: 'Classes 7-8',
      subtitle: 'Academic Excellence',
      subjects: ['Algebra & Geometry', 'Advanced English', 'Physics, Chemistry, Biology', 'History & Geography'],
      outcomes: ['Algebraic problem solving', 'Critical thinking', 'Lab experiment analysis', 'Research skills'],
      color: 'from-purple-400 to-indigo-400'
    }
  ];

  return (
    <section id="classes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Classes Offered
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Comprehensive curriculum coverage for Classes 1-8 with personalized attention and proven teaching methodologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {classDetails.map((classInfo, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`h-2 bg-gradient-to-r from-primary to-secondary`}></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{classInfo.class}</h3>
                    <p className="text-gray-500">{classInfo.subtitle}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center`}>
                    <BookOpen className="h-6 w-6 text-gray-800" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Subjects Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {classInfo.subjects.map((subject, idx) => (
                        <span key={idx} className="bg-gray-200 text-gray-500 px-3 py-1 rounded-full text-sm">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Learning Outcomes:</h4>
                    <ul className="space-y-2">
                      {classInfo.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-500">
                          <Star className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Learning?</h3>
          <p className="text-secondary-light mb-6">Book a free trial class and experience our personalized teaching approach</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Flexible timings available</span>
            </div>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-light text-primary-dark px-8 py-3 rounded-lg font-semibold hover:bg-primary transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Book Free Trial Class
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;