import React, { useState } from 'react';
import Button from '../ui/Button';

const ProjectFilter = ({ projects, onFilter }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === 'All') {
      onFilter(projects);
    } else {
      onFilter(projects.filter(project => project.category === category));
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeFilter === category ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => handleFilter(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default ProjectFilter;
