import React from 'react';
import { BookOpen, Send, Sparkles, CheckCircle2, Languages } from 'lucide-react';

interface HeaderProps {
  completedCount: number;
  totalCount: number;
}

export const Header: React.FC<HeaderProps> = ({ completedCount, totalCount }) => {
  const percent = Math.round((completedCount / totalCount) * 100) || 0;

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-rose-600 via-orange-500 to-amber-400 p-0.5 shadow-lg shadow-rose-900/30">
            <div className="w-full h-full bg-slate-950 rounded-[9px] sm:rounded-[14px] flex items-center justify-center">
              <Languages className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-none">
                JLPT N5 <span className="text-gradient">Hub</span>
              </h1>
            </div>
            <p className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5">Japanese Study Series</p>
          </div>
        </div>

        {/* Quick Stats & Telegram link */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="hidden sm:flex items-center space-x-3 bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-2 text-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <div>
              <div className="text-slate-400">Progress</div>
              <div className="font-bold text-white">{completedCount} / {totalCount} ({percent}%)</div>
            </div>
          </div>

          {/* Mobile Telegram Link (Icon only) */}
          <a
            href="https://t.me/yaminjlc33"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-rose-600 to-orange-500 text-white shadow-md shadow-rose-950/50 hover:scale-105 active:scale-95 transition-transform"
            aria-label="Sensei Acc (Telegram)"
          >
            <Send className="w-4 h-4" />
          </a>

          {/* Desktop Telegram Link (Full text) */}
          <a
            href="https://t.me/yaminjlc33"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-orange-500 hover:from-rose-500 hover:to-orange-400 text-white font-semibold text-xs shadow-md shadow-rose-950/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Sensei Acc (Telegram)</span>
          </a>
        </div>
      </div>
    </header>
  );
};
