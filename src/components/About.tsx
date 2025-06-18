import React from 'react';
import { BookOpen, Calculator, Globe, Beaker, Users, CheckCircle, Languages } from 'lucide-react';

const About = () => {
  const subjects = [
    { name: 'Mathematics', icon: Calculator, color: 'text-blue-600 bg-blue-100' },
    { name: 'English', icon: BookOpen, color: 'text-green-600 bg-green-100' },
    { name: 'Science', icon: Beaker, color: 'text-purple-600 bg-purple-100' },
    { name: 'Social Studies', icon: Globe, color: 'text-orange-600 bg-orange-100' },
    { name: 'Hindi', icon: Languages, color: 'text-red-600 bg-red-100' },
    { name: 'Punjabi', icon: Languages, color: 'text-indigo-600 bg-indigo-100' },
  ];

  const achievements = [
    'M.Ed in Elementary Education from Delhi University',
    'B.Ed in Education with First Class Honours',
    'M.A in English Literature',
    'B.A with Honours in English',
    '8+ years of teaching experience',
    'Specialized training in child psychology',
    'Fluent in Hindi, English, and Punjabi'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Your Teacher
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Meet Mrs. Sonu Arora, a dedicated educator with a passion for nurturing young minds and helping students achieve their full potential.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Teaching Philosophy</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                "Every child is unique and learns differently. My approach focuses on understanding each student's learning style and adapting my teaching methods to make learning enjoyable, effective, and meaningful. I believe in building confidence along with knowledge."
              </p>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-primary-light" />
                <span className="font-semibold text-gray-900">Student-Centered Learning</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Qualifications & Experience</h3>
              <div className="grid gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-500">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Subjects I Teach</h3>
              <div className="grid grid-cols-2 gap-4">
                {subjects.map((subject, index) => (
                  <div key={index} className="bg-white border-2 border-sky-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className={`w-12 h-12 rounded-lg ${subject.color.replace('bg-', 'bg-primary-').replace('text-', 'text-secondary-')} flex items-center justify-center mb-4`}>
                      <subject.icon className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold text-gray-900">{subject.name}</h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Teaching Approach</h3>
              <ul className="space-y-3 text-gray-500">
                <li className="flex items-start space-x-2">
                  <span className="text-secondary">•</span>
                  <span>Interactive and engaging lesson plans</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-light">•</span>
                  <span>Regular assessments and progress tracking</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-secondary-light">•</span>
                  <span>Homework assistance and exam preparation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span>Parent-teacher communication for better results</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;