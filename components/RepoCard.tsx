import React from 'react';
import { Star, GitFork, ExternalLink, Code } from 'lucide-react';
import { Project } from '../types';
import { LANG_COLORS } from '../constants';

interface RepoCardProps {
  project: Project;
}

const RepoCard: React.FC<RepoCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col h-full border border-gh-border rounded-md bg-gh-bg hover:bg-gh-card/50 transition-colors duration-200">
      <div className="p-4 flex-grow">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-gh-link text-xl hover:underline cursor-pointer">
              {project.name}
            </h3>
            <span className="text-xs border border-gh-border rounded-full px-2 py-0.5 text-gh-muted font-medium">
              {project.private ? 'Private' : 'Public'}
            </span>
          </div>
        </div>
        
        <p className="text-gh-muted text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technical Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
           <div className="bg-gh-card/50 p-3 rounded border border-gh-border/30">
             <span className="text-[10px] uppercase tracking-wider text-blue-400 font-bold block mb-1">Frontend</span>
             <p className="text-gh-text text-xs leading-relaxed">{project.frontend}</p>
           </div>
           <div className="bg-gh-card/50 p-3 rounded border border-gh-border/30">
             <span className="text-[10px] uppercase tracking-wider text-green-400 font-bold block mb-1">Backend</span>
             <p className="text-gh-text text-xs leading-relaxed">{project.backend}</p>
           </div>
        </div>
        
        {/* Features Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
            {project.features.slice(0, 3).map((feat, idx) => (
                <span key={idx} className="text-xs bg-gh-btn hover:bg-gh-btnHover border border-gh-border/50 px-2 py-1 rounded text-gh-text/90 transition-colors">
                    {feat}
                </span>
            ))}
        </div>
      </div>

      {/* Footer / Actions */}
      <div className="border-t border-gh-border p-4 bg-gh-card/20 rounded-b-md">
        <div className="flex items-center justify-between mb-3">
             <div className="flex items-center gap-4 text-xs text-gh-muted">
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
            </div>
            <div className="text-xs text-gh-muted">
                {project.updatedAt}
            </div>
        </div>

        <div className="flex gap-2">
            {project.demoUrl && (
                <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gh-green text-white py-1.5 rounded-md text-xs font-semibold hover:opacity-90 transition-opacity"
                >
                    <ExternalLink size={14} /> Visit Website
                </a>
            )}
            {project.repoUrl && !project.private && (
                <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gh-btn border border-gh-border text-gh-text py-1.5 rounded-md text-xs font-semibold hover:bg-gh-btnHover transition-colors"
                >
                    <Code size={14} /> View Code
                </a>
            )}
        </div>
      </div>
    </div>
  );
};

export default RepoCard;