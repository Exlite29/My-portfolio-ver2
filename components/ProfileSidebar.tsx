import React from 'react';
import { MapPin, Mail, Link as LinkIcon, Users, Building } from 'lucide-react';
import { USER_INFO } from '../constants';

const ProfileSidebar: React.FC = () => {
  return (
    <div className="w-full md:w-1/4 flex flex-col gap-6 relative md:-top-8">
      {/* Avatar */}
      <div className="relative group">
        <img 
          src="https://picsum.photos/300/300" 
          alt="Profile" 
          className="w-24 h-24 md:w-[296px] md:h-[296px] rounded-full border border-gh-border z-10 bg-gh-bg object-cover"
        />
        <div className="absolute bottom-10 right-10 hidden md:flex items-center justify-center w-10 h-10 bg-gh-card border border-gh-border rounded-full text-lg shadow-sm">
          🎯
        </div>
      </div>

      {/* Names */}
      <div className="px-2">
        <h1 className="text-2xl md:text-3xl font-bold text-gh-text leading-tight">
          {USER_INFO.name}
        </h1>
        <h2 className="text-xl font-light text-gh-muted">
          {USER_INFO.username}
        </h2>
      </div>

      {/* Bio */}
      <div className="px-2 text-gh-text text-base">
        {USER_INFO.bio}
      </div>

      <button className="w-full bg-gh-btn hover:bg-gh-btnHover border border-gh-border text-gh-text font-semibold py-1.5 rounded-md transition-colors text-sm">
        Edit profile
      </button>

      {/* Follow stats */}
      <div className="flex items-center gap-4 px-2 text-sm text-gh-muted">
        <div className="flex items-center hover:text-gh-link cursor-pointer">
          <Users size={16} className="mr-1" />
          <span className="font-bold text-gh-text mr-1">{USER_INFO.followers}</span> followers
        </div>
        <div className="hover:text-gh-link cursor-pointer">
          <span className="font-bold text-gh-text mr-1">{USER_INFO.following}</span> following
        </div>
      </div>

      {/* Meta Details */}
      <div className="flex flex-col gap-2 px-2 text-sm text-gh-text">
         <div className="flex items-center gap-2">
          <Building size={16} className="text-gh-muted" />
          <span>Web Catalyst</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-gh-muted" />
          <span>{USER_INFO.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={16} className="text-gh-muted" />
          <a href={`mailto:${USER_INFO.email}`} className="hover:text-gh-link hover:underline">
            {USER_INFO.email}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <LinkIcon size={16} className="text-gh-muted" />
          <a href={USER_INFO.website} className="hover:text-gh-link hover:underline">
            {USER_INFO.website}
          </a>
        </div>
      </div>

      {/* Achievements Section (Custom) */}
      <div className="pt-4 border-t border-gh-border">
        <h3 className="font-semibold text-gh-text mb-3 px-2">Highlights</h3>
        <div className="flex flex-wrap gap-2 px-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gh-green/10 text-gh-green border border-gh-green/30">
            ⚡ 40% Perf Boost
          </span>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/30">
            ⚛️ React Specialist
          </span>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/30">
            🛠️ 15+ Reusable Libs
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;