import React from 'react';
import { Trophy, RefreshCw, CheckCircle2 } from 'lucide-react';
import { getPercentColorClass } from '../utils/progress';

interface ProgressHeaderProps {
  completedCount: number;
  totalCount: number;
  onReset: () => void;
}

export const ProgressHeader: React.FC<ProgressHeaderProps> = ({
  completedCount,
  totalCount,
  onReset
}) => {
  const percentage = Math.round((completedCount / totalCount) * 100) || 0;

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden mb-8 border border-slate-800">
      {/* Background glow motif */}
      <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-gradient-to-br from-rose-600/20 to-orange-500/0 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-rose-600 via-orange-500 to-amber-400 p-0.5 shadow-lg shadow-rose-950/50 flex-shrink-0">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <Trophy className="w-7 h-7 text-amber-400" />
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">Your JLPT N5 Progress</h2>
              {percentage === 100 && (
                <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Completed!</span>
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              {completedCount} of {totalCount} resources completed (<span className={getPercentColorClass(percentage)}>{percentage}%</span>)
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
          {completedCount > 0 && (
            <button
              onClick={onReset}
              className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-xs font-medium border border-slate-800 transition-colors"
              title="Reset all completed items"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-6 w-full bg-slate-900 rounded-full h-3.5 p-0.5 border border-slate-800 overflow-hidden">
        <div
          className="bg-gradient-to-r from-rose-600 via-orange-500 to-amber-400 h-full rounded-full transition-all duration-500 shadow-sm shadow-rose-500/50"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
