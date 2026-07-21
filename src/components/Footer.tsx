import React from 'react';
import { Heart, Send, BookOpen, ExternalLink, Languages, AlertCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-slate-800/80 bg-slate-950 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Languages className="w-5 h-5 text-rose-400" />
              <span className="text-lg font-bold text-white">JLPT N5 Learning Hub</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Complete structured Japanese N5 study curriculum featuring video lessons, Minna no Nihongo chapters 1-25 notes, kanji guides, and mock exams for Myanmar learners.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Quick Support & Q&A</h4>
            <p className="text-xs text-slate-400 mb-3">
              For course questions, textbook details, or study guidance, contact via Telegram:
            </p>
            <a
              href="https://t.me/yaminjlc33"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-semibold text-rose-400 hover:text-rose-300"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Sensei Acc (@yaminjlc33)</span>
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Important Reminder</h4>
            <p className="text-xs text-slate-400 leading-relaxed flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <span>သောကြာနေ့တိုင်း သင်တန်းပိတ်ပါသဖြင့် စာမစစ်ပေးပါ။ နားမလည်သော သင်ခန်းစာများရှိပါက Telegram Account သို့ တိုက်ရိုက် မေးမြန်းနိုင်ပါသည်။</span>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <div className="flex items-center space-x-1 mb-4 sm:mb-0">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for JLPT N5 Learners in Myanmar</span>
          </div>
          <div>
            © {new Date().getFullYear()} Daisy Learn. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
