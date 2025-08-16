import React from 'react';
import Timeline from '../ui/Timeline';
import { experienceData } from '../../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Experience
          </h2>
          <Timeline items={experienceData} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
