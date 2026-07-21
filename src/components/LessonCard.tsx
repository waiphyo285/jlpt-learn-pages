import React from 'react';
import { ExternalLink, CheckCircle2, Circle, PlayCircle, FileText, Hash, HelpCircle, Users } from 'lucide-react';
import { ResourceLink } from '../data/n5Data';

interface LessonCardProps {
  item: ResourceLink;
  isCompleted: boolean;
  onToggleComplete: (id: string) => void;
}

export const LessonCard: React.FC<LessonCardProps> = ({
  item,
  isCompleted,
  onToggleComplete
}) => {
  const getTypeBadge = (type?: ResourceLink['type']) => {
    switch (type) {
      case 'video':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <PlayCircle className="w-3 h-3" />
            <span>Video</span>
          </span>
        );
      case 'exam':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <HelpCircle className="w-3 h-3" />
            <span>Exam</span>
          </span>
        );
      case 'anskey':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="w-3 h-3" />
            <span>Ans Key</span>
          </span>
        );
      case 'counting':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Hash className="w-3 h-3" />
            <span>Counting</span>
          </span>
        );
      case 'group':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Users className="w-3 h-3" />
            <span>Group</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
            <FileText className="w-3 h-3" />
            <span>Lesson</span>
          </span>
        );
    }
  };

  return (
    <div className={`group glass-card glass-card-hover rounded-2xl p-4 flex flex-col justify-between transition-all ${isCompleted ? 'opacity-75 bg-slate-950/40 border-emerald-500/20' : ''}`}>
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
              {getTypeBadge(item.type)}
            </div>
            <h3 className={`text-sm font-semibold leading-snug ${isCompleted ? 'line-through text-slate-400' : 'text-slate-100 group-hover:text-rose-300'}`}>
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
          className="inline-flex items-center space-x-1 text-xs font-semibold text-slate-400 hover:text-rose-300 transition-colors"
          title="Open original link"
        >
          <span>FB Link</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
