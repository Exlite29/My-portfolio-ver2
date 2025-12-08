import React from 'react';
import { MapPin, Mail, Link as LinkIcon, Users, Building, Linkedin, Github } from 'lucide-react';
import { USER_INFO } from '../constants';

const ProfileSidebar: React.FC = () => {
  return (
    <div className="w-full md:w-1/4 flex flex-col gap-5 relative md:-top-8">
      {/* Avatar Section */}
      <div className="relative group mx-auto md:mx-0">
        <img 
          src={USER_INFO.avatar}
          alt="Profile" 
          className="w-48 h-48 md:w-[296px] md:h-[296px] rounded-full border border-gh-border z-10 bg-gh-bg object-cover shadow-md"
        />
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-gh-card border border-gh-border rounded-full text-lg shadow-sm cursor-pointer hover:bg-gh-border transition-colors group-hover:scale-110 duration-200">
          🎯
        </div>
      </div>

      {/* Names */}
      <div className="px-1 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-gh-text leading-tight">
          {USER_INFO.name}
        </h1>
        <h2 className="text-xl font-light text-gh-muted">
          {USER_INFO.username}
        </h2>
      </div>

      {/* Bio */}
      <div className="text-gh-text text-base leading-snug">
        {USER_INFO.bio}
      </div>

      <button className="w-full bg-gh-btn hover:bg-gh-btnHover border border-gh-border text-gh-text font-semibold py-1.5 rounded-md transition-colors text-sm shadow-sm">
        Edit profile
      </button>

      {/* Follow stats */}
      <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-gh-muted">
        <div className="flex items-center hover:text-gh-link cursor-pointer transition-colors">
          <Users size={16} className="mr-1.5" />
          <span className="font-bold text-gh-text mr-1">{USER_INFO.followers}</span> followers
        </div>
        <div className="hover:text-gh-link cursor-pointer transition-colors">
          <span className="font-bold text-gh-text mr-1">{USER_INFO.following}</span> following
        </div>
      </div>

      {/* Meta Details */}
      <div className="flex flex-col gap-2 text-sm text-gh-text">
         <div className="flex items-center gap-2">
          <Building size={16} className="text-gh-muted shrink-0" />
          <span className="truncate">Web Catalyst</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-gh-muted shrink-0" />
          <span className="truncate">{USER_INFO.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={16} className="text-gh-muted shrink-0" />
          <a href={`mailto:${USER_INFO.email}`} className="hover:text-gh-link hover:underline truncate">
            {USER_INFO.email}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <LinkIcon size={16} className="text-gh-muted shrink-0" />
          <a href={USER_INFO.website} target="_blank" rel="noreferrer" className="hover:text-gh-link hover:underline truncate">
            {USER_INFO.website}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Github size={16} className="text-gh-muted shrink-0" />
          <a href={USER_INFO.github} target="_blank" rel="noreferrer" className="hover:text-gh-link hover:underline truncate">
            {USER_INFO.username}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Linkedin size={16} className="text-gh-muted shrink-0" />
          <a href={USER_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-gh-link hover:underline truncate">
            LinkedIn Profile
          </a>
        </div>
      </div>

      {/* Achievements Section (Custom) */}
      <div className="pt-4 border-t border-gh-border">
        <h3 className="font-semibold text-gh-text mb-3">Highlights</h3>
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 p-2 rounded-md bg-gh-card border border-gh-border/50">
                <span className="text-lg">⚡</span>
                <div className="flex flex-col">
                    <span className="text-xs font-bold text-gh-text">40% Perf Boost</span>
                    <span className="text-[10px] text-gh-muted">Critical Rendering Path</span>
                </div>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-md bg-gh-card border border-gh-border/50">
                <span className="text-lg">⚛️</span>
                <div className="flex flex-col">
                    <span className="text-xs font-bold text-gh-text">React Specialist</span>
                    <span className="text-[10px] text-gh-muted">15+ Reusable Libs</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;