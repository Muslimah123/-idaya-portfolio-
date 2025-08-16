import React from 'react';
import AnimatedText from '../ui/AnimatedText';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <img
            src="/assets/images/profile.jpg"
            alt="Idaya"
            className="w-32 h-32 rounded-full mx-auto mb-8 shadow-lg"
          />
          <AnimatedText
            text="Hi, I'm Idaya"
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          />
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Researcher, Developer, and Innovator passionate about creating impactful solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
              variant="primary"
              size="lg"
            >
              View My Work
            </Button>
            <Button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              variant="secondary"
              size="lg"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
