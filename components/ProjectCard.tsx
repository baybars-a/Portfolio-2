
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#f4538a]/50"
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
        />
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold group-hover:text-[#f4538a] transition-colors">{project.title}</h3>
          <a href={project.link} className="text-neutral-500 hover:text-white transition-colors">
            <ExternalLink size={20} />
          </a>
        </div>
        <p className="text-neutral-400 mb-6 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-widest px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full border border-neutral-700">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

export default ProjectCard;
