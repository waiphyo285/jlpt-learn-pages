import React from 'react';
import { ExternalLink, CheckCircle2, Circle, PlayCircle, FileText, Hash, HelpCircle, Users } from 'lucide-react';
import { ResourceLink } from '../data/n5Data';

interface LessonCardProps {
  item: ResourceLink;
  isCompleted: boolean;
  onToggleComplete: (id: string) => void;
  category?: 'minna' | 'basic' | 'kanji' | 'exams' | 'groups';
}

export const LessonCard: React.FC<LessonCardProps> = ({
  item,
  isCompleted,
  onToggleComplete,
  category
}) => {
  const getTypeBadge = (type?: ResourceLink['type'], themeColors?: any) => {
    const bgClass = themeColors?.badgeBg || 'bg-slate-800';
    const textClass = themeColors?.badgeText || 'text-slate-300';
    const borderClass = themeColors?.badgeBorder || 'border-slate-700';

    switch (type) {
      case 'video':
        return (
          <span className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${bgClass} ${textClass} border ${borderClass}`}>
            <PlayCircle className="w-3 h-3" />
            <span>Video</span>
          </span>
        );
      case 'exam':
        return (
          <span className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${bgClass} ${textClass} border ${borderClass}`}>
            <HelpCircle className="w-3 h-3" />
            <span>Exam</span>
          </span>
        );
      case 'anskey':
        return (
          <span className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${bgClass} ${textClass} border ${borderClass}`}>
            <CheckCircle2 className="w-3 h-3" />
            <span>Ans Key</span>
          </span>
        );
      case 'counting':
        return (
          <span className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${bgClass} ${textClass} border ${borderClass}`}>
            <Hash className="w-3 h-3" />
            <span>Counting</span>
          </span>
        );
      case 'group':
        return (
          <span className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${bgClass} ${textClass} border ${borderClass}`}>
            <Users className="w-3 h-3" />
            <span>Group</span>
          </span>
        );
      default:
        return (
          <span className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${bgClass} ${textClass} border ${borderClass}`}>
            <FileText className="w-3 h-3" />
            <span>Lesson</span>
          </span>
        );
    }
  };

  const getTheme = (type?: ResourceLink['type'], cat?: LessonCardProps['category']) => {
    if (type === 'video') {
      return {
        badgeBg: 'bg-rose-500/10',
        badgeText: 'text-rose-400',
        badgeBorder: 'border-rose-500/20',
        hoverBorder: 'hover:border-rose-500/30',
        hoverText: 'group-hover:text-rose-400',
        hoverLink: 'hover:text-rose-400',
        hoverShadow: 'hover:shadow-[0_8px_20px_-6px_rgba(244,63,94,0.15)]',
      };
    }
    if (type === 'exam') {
      return {
        badgeBg: 'bg-amber-500/10',
        badgeText: 'text-amber-400',
        badgeBorder: 'border-amber-500/20',
        hoverBorder: 'hover:border-amber-500/30',
        hoverText: 'group-hover:text-amber-400',
        hoverLink: 'hover:text-amber-400',
        hoverShadow: 'hover:shadow-[0_8px_20px_-6px_rgba(245,158,11,0.15)]',
      };
    }
    if (type === 'anskey') {
      return {
        badgeBg: 'bg-emerald-500/10',
        badgeText: 'text-emerald-400',
        badgeBorder: 'border-emerald-500/20',
        hoverBorder: 'hover:border-emerald-500/30',
        hoverText: 'group-hover:text-emerald-400',
        hoverLink: 'hover:text-emerald-400',
        hoverShadow: 'hover:shadow-[0_8px_20px_-6px_rgba(16,185,129,0.15)]',
      };
    }
    if (type === 'counting') {
      return {
        badgeBg: 'bg-purple-500/10',
        badgeText: 'text-purple-400',
        badgeBorder: 'border-purple-500/20',
        hoverBorder: 'hover:border-purple-500/30',
        hoverText: 'group-hover:text-purple-400',
        hoverLink: 'hover:text-purple-400',
        hoverShadow: 'hover:shadow-[0_8px_20px_-6px_rgba(168,85,247,0.15)]',
      };
    }
    if (type === 'group') {
      return {
        badgeBg: 'bg-blue-500/10',
        badgeText: 'text-blue-400',
        badgeBorder: 'border-blue-500/20',
        hoverBorder: 'hover:border-blue-500/30',
        hoverText: 'group-hover:text-blue-400',
        hoverLink: 'hover:text-blue-400',
        hoverShadow: 'hover:shadow-[0_8px_20px_-6px_rgba(59,130,246,0.15)]',
      };
    }

    // Default lesson/text types follow the parent section theme
    switch (cat) {
      case 'minna':
        return {
          badgeBg: 'bg-rose-500/10',
          badgeText: 'text-rose-400',
          badgeBorder: 'border-rose-500/20',
          hoverBorder: 'hover:border-rose-500/30',
          hoverText: 'group-hover:text-rose-400',
          hoverLink: 'hover:text-rose-400',
          hoverShadow: 'hover:shadow-[0_8px_20px_-6px_rgba(244,63,94,0.15)]',
        };
      case 'kanji':
        return {
          badgeBg: 'bg-amber-500/10',
          badgeText: 'text-amber-400',
          badgeBorder: 'border-amber-500/20',
          hoverBorder: 'hover:border-amber-500/30',
          hoverText: 'group-hover:text-amber-400',
          hoverLink: 'hover:text-amber-400',
          hoverShadow: 'hover:shadow-[0_8px_20px_-6px_rgba(245,158,11,0.15)]',
        };
      case 'basic':
        return {
          badgeBg: 'bg-orange-500/10',
          badgeText: 'text-orange-400',
          badgeBorder: 'border-orange-500/20',
          hoverBorder: 'hover:border-orange-500/30',
          hoverText: 'group-hover:text-orange-400',
          hoverLink: 'hover:text-orange-400',
          hoverShadow: 'hover:shadow-[0_8px_20px_-6px_rgba(249,115,22,0.15)]',
        };
      case 'exams':
        return {
          badgeBg: 'bg-emerald-500/10',
          badgeText: 'text-emerald-400',
          badgeBorder: 'border-emerald-500/20',
          hoverBorder: 'hover:border-emerald-500/30',
          hoverText: 'group-hover:text-emerald-400',
          hoverLink: 'hover:text-emerald-400',
          hoverShadow: 'hover:shadow-[0_8px_20px_-6px_rgba(16,185,129,0.15)]',
        };
      case 'groups':
        return {
          badgeBg: 'bg-blue-500/10',
          badgeText: 'text-blue-400',
          badgeBorder: 'border-blue-500/20',
          hoverBorder: 'hover:border-blue-500/30',
          hoverText: 'group-hover:text-blue-400',
          hoverLink: 'hover:text-blue-400',
          hoverShadow: 'hover:shadow-[0_8px_20px_-6px_rgba(59,130,246,0.15)]',
        };
      default:
        return {
          badgeBg: 'bg-slate-800',
          badgeText: 'text-slate-300',
          badgeBorder: 'border-slate-700',
          hoverBorder: 'hover:border-slate-600/40',
          hoverText: 'group-hover:text-slate-300',
          hoverLink: 'hover:text-slate-300',
          hoverShadow: 'hover:shadow-[0_8px_20px_-6px_rgba(148,163,184,0.15)]',
        };
    }
  };

  const theme = getTheme(item.type, category);

  return (
    <div className={`group glass-card rounded-2xl p-4 flex flex-col justify-between transition-all duration-250 ease-out hover:bg-slate-900/85 hover:-translate-y-0.5 ${theme.hoverBorder} ${theme.hoverShadow} ${isCompleted ? 'opacity-75 bg-slate-950/40 border-emerald-500/20' : ''}`}>
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <button
            onClick={() => onToggleComplete(item.id)}
            className="mt-0.5 text-slate-400 hover:text-emerald-400 transition-colors focus:outline-none"
            title={isCompleted ? 'Mark incomplete' : 'Mark complete'}
          >
            {isCompleted ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-500/20" />
            ) : (
              <Circle className="w-5 h-5 text-slate-600 group-hover:text-slate-400" />
            )}
          </button>
 
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              {getTypeBadge(item.type, theme)}
            </div>
            <h3 className={`text-sm font-semibold leading-snug transition-colors ${isCompleted ? 'line-through text-slate-400' : `text-slate-100 ${theme.hoverText}`}`}>
              {item.title}
            </h3>
          </div>
        </div>
      </div>
 
      <div className="pt-3 mt-2 border-t border-slate-800/60 flex items-center justify-between gap-2">
        <span className="text-[11px] text-slate-500 font-mono">{item.id}</span>
 
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center space-x-1 text-xs font-semibold text-slate-400 ${theme.hoverLink} transition-colors`}
          title="Open original link"
        >
          <span>FB Link</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
