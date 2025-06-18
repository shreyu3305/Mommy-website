import React from 'react';
import { BookOpen, Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Sonu Arora Tuitions</span>
            </div>
            <p className="text-gray-400 mb-4">
              Nurturing young minds with personalized education and care. Excellence in learning, one student at a time.
            </p>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>for students</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-400 transition-colors"
                >
                  About Teacher
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('classes')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-400 transition-colors"
                >
                  Classes Offered
                </button>
              </li>
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Classes</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Classes 1-2 (Foundation)</li>
              <li>Classes 3-4 (Skill Building)</li>
              <li>Classes 5-6 (Concept Mastery)</li>
              <li>Classes 7-8 (Excellence)</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9460631322</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>sonuarora001@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>46-A Indra Colony, Satsang Vihar, Sri Ganganagar postal code 335001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 Sonu Arora Tuitions. All rights reserved.
              </p>
            </div>
            <div className="mt-4 md:mt-0 text-center md:text-right">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Book Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;