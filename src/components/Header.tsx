import React, { useState } from 'react';
import { Send, CheckCircle2, Languages, HelpCircle, X, AlertCircle } from 'lucide-react';
import { getPercentColorClass } from '../utils/progress';

interface HeaderProps {
  completedCount: number;
  totalCount: number;
}

export const Header: React.FC<HeaderProps> = ({ completedCount, totalCount }) => {
  const percent = Math.round((completedCount / totalCount) * 100) || 0;
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  return (
    <>
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

          {/* Quick Stats & Help Button */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="flex items-center space-x-3 bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-2 text-xs">
              <CheckCircle2 className={"h-4 w-4 " + getPercentColorClass(percent)} />
              <div>
                <div className="text-slate-400">Progress</div>
                <div className="font-bold text-white">{completedCount} / {totalCount} (<span className={getPercentColorClass(percent)}>{percent}%</span>)</div>
              </div>
            </div>

            {/* Help Button (Visible on mobile/small screens) */}
            <button
              onClick={() => setIsHelpOpen(true)}
              className="md:hidden p-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              title="Help & Support Info"
              aria-label="Help and Support Info"
            >
              <HelpCircle className="w-5 h-5 text-rose-400" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Help Modal */}
      {isHelpOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
          onClick={() => setIsHelpOpen(false)}
        >
          <div 
            className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsHelpOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center space-x-2 mb-5 pr-8">
              <Languages className="w-5 h-5 text-rose-400" />
              <h2 className="text-base font-bold text-white">JLPT N5 Learning Hub</h2>
            </div>

            {/* Modal Body */}
            <div className="space-y-5 text-sm text-slate-300">
              <div>
                <p className="text-xs leading-relaxed text-slate-400">
                  Complete structured Japanese N5 study curriculum featuring video lessons, Minna no Nihongo chapters 1-25 notes, kanji guides, and mock exams for Myanmar learners.
                </p>
              </div>

              {/* Quick Support & Q&A */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                <h3 className="text-xs font-bold text-white mb-2 uppercase tracking-wider text-rose-400">Quick Support & Q&A</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  For course enrollment questions, textbook details, class schedules, or study guidance, feel free to contact via Telegram to get direct, friendly teacher support at any time:
                </p>
                <a
                  href="https://t.me/yaminjlc33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Sensei Yamin (@yaminjlc33)</span>
                </a>
              </div>

              {/* Important Reminder */}
              <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10">
                <h3 className="text-xs font-bold text-amber-400 mb-2 flex items-center gap-1.5 uppercase tracking-wider">
                  <span>Important Reminder</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>သောကြာနေ့တိုင်း သင်တန်းပိတ်ပါသဖြင့် စာမစစ်ပေးပါ။ နားမလည်သော သင်ခန်းစာများရှိပါက Telegram Account သို့ တိုက်ရိုက် မေးမြန်းနိုင်ပါသည်။</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
