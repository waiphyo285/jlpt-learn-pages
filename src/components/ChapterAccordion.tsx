import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { MinnaChapter } from '../data/n5Data';
import { LessonCard } from './LessonCard';
import { getPercentBadgeClass } from '../utils/progress';

interface ChapterAccordionProps {
  chapter: MinnaChapter;
  completedMap: Record<string, boolean>;
  onToggleComplete: (id: string) => void;
  isInitiallyOpen?: boolean;
}

export const ChapterAccordion: React.FC<ChapterAccordionProps> = ({
  chapter,
  completedMap,
  onToggleComplete,
  isInitiallyOpen = false
}) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);

  const completedCount = chapter.items.filter(item => completedMap[item.id]).length;
  const isAllDone = completedCount === chapter.items.length && chapter.items.length > 0;
  const percent = Math.round((completedCount / chapter.items.length) * 100) || 0;

  return (
    <div className={`glass-card rounded-2xl overflow-hidden transition-all border ${isAllDone ? 'border-emerald-500/30' : 'border-slate-800'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between bg-slate-900/40 hover:bg-slate-900/80 transition-colors text-left"
      >
        <div className="flex items-center space-x-3.5">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${isAllDone ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
            {chapter.chapter}
          </div>
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span>{chapter.title}</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {chapter.items.length} lesson parts • <span className={completedCount > 0 ? 'text-emerald-400 font-semibold' : ''}>{completedCount} completed</span>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getPercentBadgeClass(percent)}`}>
            {percent}%
          </span>
          <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-rose-400' : ''}`} />
        </div>
      </button>

      {isOpen && (
        <div className="p-6 border-t border-slate-800/80 bg-slate-950/40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {chapter.items.map(item => (
            <LessonCard
              key={item.id}
              item={item}
              isCompleted={!!completedMap[item.id]}
              onToggleComplete={onToggleComplete}
            />
          ))}
        </div>
      )}
    </div>
  );
};
