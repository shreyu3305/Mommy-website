import React from 'react';
import { Star, Award, Users, Clock, BookOpen } from 'lucide-react';
import pussy from '../assets/pussy.png';
const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen relative bg-white">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${pussy})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-sky-100/80 to-white/80"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Personalized Learning for 
                <span className="text-blue-600 block">Classes 1 to 8</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Expert home tuition with 8+ years of experience. Helping students excel in Math, English, Science, and all subjects with personalized attention and proven teaching methods.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-gray-700">Certified Teacher</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium text-gray-700">200+ Happy Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-gray-700">Flexible Timings</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-primary-light text-primary-dark px-8 py-3 rounded-lg font-semibold hover:bg-primary transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Book Free Trial Class
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-primary-light text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-light hover:text-primary-dark transition-all duration-200"
              >
                Learn More
              </button>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-light to-secondary border-2 border-white"></div>
                ))}
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700">Rated 4.9/5 by parents</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-primary-light to-secondary-light rounded-3xl p-1">
              <div className="bg-white rounded-3xl p-8">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Mrs. Sonu Arora</h3>
                  <p className="text-gray-700">M.Ed, B.Ed, M.A, B.A</p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">8+</div>
                      <div className="text-sm text-gray-700">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">95%</div>
                      <div className="text-sm text-gray-700">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary rounded-full flex items-center justify-center animate-bounce">
              <span className="text-2xl">🌟</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;