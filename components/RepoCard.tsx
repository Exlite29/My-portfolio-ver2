import React from 'react';
import { Star, GitFork, Scale } from 'lucide-react';
import { Project } from '../types';
import { LANG_COLORS } from '../constants';

interface RepoCardProps {
  project: Project;
}

const RepoCard: React.FC<RepoCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col justify-between p-4 border border-gh-border rounded-md bg-gh-bg/50 w-full mb-4">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-bold text-gh-link text-xl hover:underline cursor-pointer">
            {project.name}
          </h3>
          <span className="text-xs border border-gh-border rounded-full px-2 py-0.5 text-gh-muted">
            {project.private ? 'Private' : 'Public'}
          </span>
        </div>
        <p className="text-gh-muted text-sm mb-4">
          {project.description}
        </p>

        {/* Technical Deep Dive Section */}
        <div className="mb-4 bg-gh-card p-3 rounded border border-gh-border/50 text-sm">
           <div className="mb-2">
             <span className="text-xs uppercase tracking-wider text-gh-muted font-bold">Frontend Stack</span>
             <p className="text-gh-text mt-1">{project.frontend}</p>
           </div>
           <div>
             <span className="text-xs uppercase tracking-wider text-gh-muted font-bold">Backend Logic</span>
             <p className="text-gh-text mt-1">{project.backend}</p>
           </div>
        </div>
        
        {/* Features Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
            {project.features.map((feat, idx) => (
                <span key={idx} className="text-xs bg-gh-btn border border-gh-border px-2 py-1 rounded text-gh-text">
                    {feat}
                </span>
            ))}
        </div>
      </div>

      <div className="flex items-center gap-4 text-xs text-gh-muted mt-2">
        <div className="flex items-center gap-1">
          <span 
            className="w-3 h-3 rounded-full" 
            style={{ backgroundColor: LANG_COLORS[project.language] || '#ccc' }}
          ></span>
          <span>{project.language}</span>
        </div>
        {/* Mock stats to look like GitHub */}
        <div className="flex items-center gap-1 hover:text-gh-link cursor-pointer">
          <Star size={14} />
          <span>{Math.floor(Math.random() * 50) + 1}</span>
        </div>
        <div className="flex items-center gap-1 hover:text-gh-link cursor-pointer">
          <GitFork size={14} />
          <span>{Math.floor(Math.random() * 20) + 1}</span>
        </div>
        <div className="text-gh-muted">
            {project.updatedAt}
        </div>
      </div>
    </div>
  );
};

export default RepoCard;