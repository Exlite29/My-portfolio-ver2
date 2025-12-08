import React, { useState } from 'react';
import { BookOpen, Box, Layout, Star, Book, Menu, X, Terminal, Server, Briefcase, Award } from 'lucide-react';
import ProfileSidebar from './components/ProfileSidebar';
import RepoCard from './components/RepoCard';
import ContributionGraph from './components/ContributionGraph';
import SkillsChart from './components/SkillsChart';
import { PROJECTS, EXPERIENCE, SKILLS, USER_INFO } from './constants';

enum Tab {
  OVERVIEW = 'Overview',
  PROJECTS = 'Projects',
  EXPERIENCE = 'Experience',
  SKILLS = 'Skills'
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.OVERVIEW);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filter pinned projects (simulating pinned functionality)
  const pinnedProjects = PROJECTS.slice(0, 2);

  const renderTabContent = () => {
    switch (activeTab) {
      case Tab.OVERVIEW:
        return (
          <div className="animate-fade-in">
            {/* Readme Section */}
            <div className="border border-gh-border rounded-md bg-gh-bg mb-6">
              <div className="flex items-center justify-between px-4 py-2 border-b border-gh-border bg-gh-card rounded-t-md">
                <span className="text-xs font-mono text-gh-text">{USER_INFO.username} / README.md</span>
                <div className="text-gh-muted hover:text-gh-link cursor-pointer">
                    <span className="text-xs">Edit</span>
                </div>
              </div>
              <div className="p-6 prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold border-b border-gh-border pb-2 mb-4">Hi there, I'm Ariel! 👋</h2>
                <p className="mb-4 text-gh-text">
                  I'm a <strong>Junior Front-End Developer</strong> with 2 years of experience building responsive, user-centric web applications. 
                  Currently working at <strong>Web Catalyst</strong>.
                </p>
                <p className="mb-4 text-gh-text">
                  I specialize in <strong>React.js</strong> and <strong>TypeScript</strong>, but I also love getting my hands dirty with backend logic using Node.js and SQL/NoSQL databases.
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-1 text-gh-text">
                  <li>🔭 I’m currently working on advanced <strong>Data Visualization</strong> dashboards.</li>
                  <li>🌱 I’m currently learning <strong>Deep backend architecture</strong> and <strong>System Design</strong>.</li>
                  <li>⚡ Fun fact: I reduced page load times by 40% using critical rendering path optimization.</li>
                </ul>
              </div>
            </div>

            {/* Pinned Repos */}
            <div className="mb-2 flex items-center justify-between">
                <h2 className="text-base font-semibold text-gh-text">Pinned Projects</h2>
                <span className="text-xs text-gh-muted cursor-pointer hover:text-gh-link">Customize your pins</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
              {pinnedProjects.map((project) => (
                <RepoCard key={project.name} project={project} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <h2 className="text-base font-semibold text-gh-text mb-2">Contribution Activity</h2>
                    <ContributionGraph />
                </div>
                <div className="lg:col-span-1 border border-gh-border rounded-md p-4 bg-gh-bg">
                    <SkillsChart />
                </div>
            </div>
          </div>
        );

      case Tab.PROJECTS:
        return (
          <div className="animate-fade-in">
             <div className="flex items-center justify-between mb-4 border-b border-gh-border pb-4">
                <div className="relative w-full max-w-lg">
                    <input 
                        type="text" 
                        placeholder="Find a project..." 
                        className="w-full bg-gh-bg border border-gh-border rounded-md px-3 py-1.5 text-sm text-gh-text focus:border-gh-link focus:ring-1 focus:ring-gh-link outline-none"
                    />
                </div>
                <div className="flex gap-2">
                    <button className="px-3 py-1.5 bg-gh-green text-white text-sm font-semibold rounded-md hover:opacity-90 flex items-center gap-2">
                        <Book size={16} /> New
                    </button>
                </div>
             </div>
             
             <div className="grid grid-cols-1 gap-4">
              {PROJECTS.map((project) => (
                <RepoCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        );

      case Tab.EXPERIENCE:
        return (
          <div className="animate-fade-in max-w-3xl">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gh-border">Work Experience</h2>
            <div className="relative border-l-2 border-gh-border ml-3 space-y-8">
                {EXPERIENCE.map((job, idx) => (
                    <div key={idx} className="mb-8 relative pl-8">
                        {/* Dot */}
                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gh-border border-4 border-gh-bg"></div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                            <h3 className="text-xl font-bold text-gh-link">{job.role}</h3>
                            <span className="text-sm text-gh-muted font-mono">{job.period}</span>
                        </div>
                        <h4 className="text-lg text-gh-text mb-2 font-medium flex items-center gap-2">
                            <Briefcase size={16} className="text-gh-muted" /> {job.company}
                        </h4>
                        
                        <ul className="list-disc pl-5 space-y-2 text-gh-text/80">
                            {job.description.map((desc, dIdx) => (
                                <li key={dIdx}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
          </div>
        );

      case Tab.SKILLS:
        return (
            <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gh-border">Technical Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SKILLS.map((skillGroup) => (
                        <div key={skillGroup.category} className="border border-gh-border rounded-md bg-gh-card p-4">
                            <div className="flex items-center gap-2 mb-4">
                                {skillGroup.category === 'Frontend' && <Layout className="text-blue-400" />}
                                {skillGroup.category === 'Backend' && <Server className="text-green-400" />}
                                {skillGroup.category.includes('Tools') && <Terminal className="text-yellow-400" />}
                                {skillGroup.category.includes('Performance') && <Award className="text-purple-400" />}
                                <h3 className="text-lg font-bold">{skillGroup.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((skill) => (
                                    <span key={skill} className="px-3 py-1 text-sm bg-gh-btn border border-gh-border rounded-full text-gh-text hover:text-gh-link transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gh-bg text-gh-text font-sans selection:bg-gh-link selection:text-white">
      {/* Header / Navbar */}
      <header className="bg-gh-card border-b border-gh-border py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between md:justify-start gap-4">
            <div className="flex items-center gap-4">
                <button 
                    className="md:hidden text-gh-text"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
                <div className="text-3xl font-bold text-white rounded-full bg-gh-text text-gh-bg w-8 h-8 flex items-center justify-center">
                    A
                </div>
                <span className="font-semibold text-sm hidden md:block text-gh-text">arielagdon</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 ml-4 overflow-x-auto">
                <button 
                    onClick={() => setActiveTab(Tab.OVERVIEW)}
                    className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-all ${activeTab === Tab.OVERVIEW ? 'font-semibold text-gh-text border-b-2 border-gh-link bg-gh-bg' : 'text-gh-text hover:bg-gh-btn'}`}
                >
                    <BookOpen size={16} /> Overview
                </button>
                <button 
                    onClick={() => setActiveTab(Tab.PROJECTS)}
                    className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-all ${activeTab === Tab.PROJECTS ? 'font-semibold text-gh-text border-b-2 border-gh-link bg-gh-bg' : 'text-gh-text hover:bg-gh-btn'}`}
                >
                    <Box size={16} /> Projects <span className="bg-gh-btn px-2 rounded-full text-xs border border-gh-border">{PROJECTS.length}</span>
                </button>
                <button 
                    onClick={() => setActiveTab(Tab.EXPERIENCE)}
                    className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-all ${activeTab === Tab.EXPERIENCE ? 'font-semibold text-gh-text border-b-2 border-gh-link bg-gh-bg' : 'text-gh-text hover:bg-gh-btn'}`}
                >
                    <Star size={16} /> Experience
                </button>
                <button 
                    onClick={() => setActiveTab(Tab.SKILLS)}
                    className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-all ${activeTab === Tab.SKILLS ? 'font-semibold text-gh-text border-b-2 border-gh-link bg-gh-bg' : 'text-gh-text hover:bg-gh-btn'}`}
                >
                    <Layout size={16} /> Skills
                </button>
            </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
          <div className="md:hidden bg-gh-card border-b border-gh-border p-4 flex flex-col gap-2">
               {Object.values(Tab).map((tab) => (
                   <button 
                        key={tab}
                        onClick={() => { setActiveTab(tab); setMobileMenuOpen(false); }}
                        className={`text-left px-4 py-2 rounded-md ${activeTab === tab ? 'bg-gh-link/10 text-gh-link font-bold' : 'text-gh-text'}`}
                   >
                       {tab}
                   </button>
               ))}
          </div>
      )}

      {/* Main Content Layout */}
      <main className="container mx-auto px-4 py-8 md:py-8 max-w-[1280px]">
        <div className="flex flex-col md:flex-row gap-8">
            {/* Left Sidebar */}
            <ProfileSidebar />

            {/* Right Content Area */}
            <div className="w-full md:w-3/4">
                {renderTabContent()}
            </div>
        </div>
      </main>

      <footer className="mt-12 py-8 border-t border-gh-border text-center text-xs text-gh-muted">
         <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
             <span>&copy; {new Date().getFullYear()} Ariel D. Agdon</span>
             <span className="hidden md:inline">•</span>
             <span>Built with React, TypeScript & Tailwind</span>
         </div>
      </footer>
    </div>
  );
};

export default App;