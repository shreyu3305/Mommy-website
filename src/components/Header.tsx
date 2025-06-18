import React, { useState } from 'react';
import { Menu, X, BookOpen, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-gray-900">Sonu Arora Tuitions</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <button onClick={() => scrollToSection('home')} className="bg-primary-light text-primary-dark px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-primary-light/80 transform hover:scale-105 transition-all duration-200">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="bg-primary-light text-primary-dark px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-primary-light/80 transform hover:scale-105 transition-all duration-200">
              About
            </button>
            <button onClick={() => scrollToSection('classes')} className="bg-primary-light text-primary-dark px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-primary-light/80 transform hover:scale-105 transition-all duration-200">
              Classes
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-primary-light text-primary-dark px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-primary-light/80 transform hover:scale-105 transition-all duration-200">
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Phone className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-gray-900">+91 9460631322</span>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-primary-light text-primary-dark px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-primary-light/80 transform hover:scale-105 transition-all duration-200"
            >
              Book Free Trial
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg">
            <nav className="flex flex-col space-y-4 p-4">
              <button onClick={() => scrollToSection('home')} className="bg-primary-light text-primary-dark px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-primary-light/80 transform hover:scale-105 transition-all duration-200 text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="bg-primary-light text-primary-dark px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-primary-light/80 transform hover:scale-105 transition-all duration-200 text-left">
                About
              </button>
              <button onClick={() => scrollToSection('classes')} className="bg-primary-light text-primary-dark px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-primary-light/80 transform hover:scale-105 transition-all duration-200 text-left">
                Classes
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-primary-light text-primary-dark px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-primary-light/80 transform hover:scale-105 transition-all duration-200 text-left">
                Contact
              </button>
              <div className="flex items-center space-x-2 pt-4 border-t">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-gray-900">+91 9460631322</span>
              </div>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="bg-primary-light text-primary-dark px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-primary-light/80 transform hover:scale-105 transition-all duration-200 text-left"
              >
                Book Free Trial
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;