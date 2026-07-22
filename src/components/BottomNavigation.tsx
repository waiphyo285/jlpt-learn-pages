import React from 'react';
import { Layers, BookOpen, Video, Hash, HelpCircle, Users } from 'lucide-react';

export type TabType = 'all' | 'minna' | 'basic' | 'kanji' | 'exams' | 'groups';

interface BottomNavigationProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const tabs: { id: TabType; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'all', label: 'All', icon: Layers },
    { id: 'minna', label: 'Minna', icon: BookOpen },
    { id: 'basic', label: 'Videos', icon: Video },
    { id: 'kanji', label: 'Kanji', icon: Hash },
    { id: 'exams', label: 'Exams', icon: HelpCircle },
    { id: 'groups', label: 'Groups', icon: Users },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-950/85 backdrop-blur-xl border-t border-slate-800/80 shadow-[0_-8px_30px_rgb(0,0,0,0.5)] px-2 pb-safe pt-2">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative flex flex-col items-center justify-center flex-1 py-1.5 transition-all duration-300 group"
            >
              {/* Icon Container with scale pop on select */}
              <div
                className={`p-1.5 rounded-xl transition-all duration-300 transform group-active:scale-90 ${
                  isActive
                    ? 'bg-rose-500/10 text-rose-400 scale-110'
                    : 'text-slate-400 group-hover:text-slate-200'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>

              {/* Label */}
              <span
                className={`text-[9.5px] font-bold mt-1 tracking-tight transition-all duration-300 ${
                  isActive
                    ? 'text-rose-400 font-extrabold transform scale-105'
                    : 'text-slate-500'
                }`}
              >
                {tab.label}
              </span>

              {/* Active Dot / Micro-bar Indicator */}
              {isActive && (
                <div className="absolute bottom-0 w-6 h-0.5 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full shadow-lg shadow-rose-500/50 animate-pulse" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
