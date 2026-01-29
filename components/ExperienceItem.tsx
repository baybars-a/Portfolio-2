
import React from 'react';
import { Experience } from '../types';

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="relative pl-12 pb-16 last:pb-0 border-l border-neutral-800 group">
      {/* Timeline Dot */}
      <div className="absolute left-[-9px] top-0 w-4 h-4 bg-neutral-900 border-2 border-neutral-700 rounded-full group-hover:border-[#f4538a] transition-colors duration-300"></div>
      
      <div className="flex flex-col md:flex-row md:items-baseline md:gap-4 mb-2">
        <h4 className="text-xl font-bold text-white uppercase tracking-tight">{experience.role}</h4>
        <span className="text-[#f4538a] font-medium tracking-wide">@ {experience.company}</span>
      </div>
      <div className="text-neutral-500 text-sm font-grotesk uppercase tracking-[0.2em] mb-4">
        {experience.period}
      </div>
      <p className="text-neutral-400 leading-relaxed max-w-2xl">
        {experience.description}
      </p>
    </div>
  );
};

export default ExperienceItem;
