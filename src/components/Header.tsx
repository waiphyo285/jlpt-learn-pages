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
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-600 via-orange-500 to-amber-400 p-0.5 shadow-lg shadow-rose-900/30">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <Languages className="w-5 h-5 text-rose-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold tracking-tight text-white">
                JLPT N5 <span className="text-gradient">Hub</span>
              </h1>
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                Myanmar
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Daisy Learn Series</p>
          </div>
        </div>

        {/* Quick Stats & Telegram link */}
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-3 bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-2 text-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <div>
              <div className="text-slate-400">Progress</div>
              <div className="font-bold text-white">{completedCount} / {totalCount} ({percent}%)</div>
            </div>
          </div>

          <a
            href="https://t.me/yaminjlc33"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-orange-500 hover:from-rose-500 hover:to-orange-400 text-white font-semibold text-xs shadow-md shadow-rose-950/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Sensei Acc (Telegram)</span>
          </a>
        </div>
      </div>
    </header>
  );
};
