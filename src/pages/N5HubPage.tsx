import React, { useState, useEffect, useMemo } from 'react';
import { Search, BookOpen, Video, HelpCircle, FileText, Send, Sparkles, AlertCircle, Users, CheckCircle2, Hash, Layers } from 'lucide-react';
import {
  supportInfo,
  basicVideos,
  basicPracticeAndTests,
  minnaChapters,
  kanjiLessons,
  mockExams,
  practiceGroups,
  totalItemCount
} from '../data/n5Data';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { LessonCard } from '../components/LessonCard';
import { ChapterAccordion } from '../components/ChapterAccordion';
import { ProgressHeader } from '../components/ProgressHeader';
import { BottomNavigation, TabType } from '../components/BottomNavigation';

const STORAGE_KEY = 'jlpt_n5_completed_items_v1';

export const N5HubPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [completedMap, setCompletedMap] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completedMap));
    } catch (e) {
      console.error('Failed to save progress', e);
    }
  }, [completedMap]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const toggleComplete = (id: string) => {
    setCompletedMap(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const resetAllProgress = () => {
    if (window.confirm('Are you sure you want to reset all completed checkboxes?')) {
      setCompletedMap({});
    }
  };

  const completedCount = useMemo(() => {
    return Object.values(completedMap).filter(Boolean).length;
  }, [completedMap]);

  // Search filter across all items
  const filteredBasicVideos = useMemo(() => {
    if (!searchQuery.trim()) return basicVideos;
    const q = searchQuery.toLowerCase();
    return basicVideos.filter(v => v.title.toLowerCase().includes(q) || v.id.toLowerCase().includes(q));
  }, [searchQuery]);

  const filteredBasicPractice = useMemo(() => {
    if (!searchQuery.trim()) return basicPracticeAndTests;
    const q = searchQuery.toLowerCase();
    return basicPracticeAndTests.filter(v => v.title.toLowerCase().includes(q));
  }, [searchQuery]);

  const filteredKanji = useMemo(() => {
    if (!searchQuery.trim()) return kanjiLessons;
    const q = searchQuery.toLowerCase();
    return kanjiLessons.filter(v => v.title.toLowerCase().includes(q));
  }, [searchQuery]);

  const filteredExams = useMemo(() => {
    if (!searchQuery.trim()) return mockExams;
    const q = searchQuery.toLowerCase();
    return mockExams.filter(e => e.name.toLowerCase().includes(q));
  }, [searchQuery]);

  const filteredMinnaChapters = useMemo(() => {
    if (!searchQuery.trim()) return minnaChapters;
    const q = searchQuery.toLowerCase();
    return minnaChapters.filter(ch => {
      const titleMatch = ch.title.toLowerCase().includes(q) || `ch-${ch.chapter}`.includes(q);
      const itemMatch = ch.items.some(it => it.title.toLowerCase().includes(q));
      return titleMatch || itemMatch;
    });
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Header completedCount={completedCount} totalCount={totalItemCount} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 md:pb-16">
        {/* Hero Banner */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-rose-950/40 p-6 sm:p-10 border border-slate-800/80 shadow-2xl mb-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 text-rose-400 text-xs font-semibold border border-rose-500/20 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Learn JLPT N5 Easily</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              <span className="text-gradient">Structured Video Lessons & Notes</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              JLPT or Nat Test N5 ဖြေဆိုမည့် ကျောင်းသား/သူများအတွက် Video များနှင့် စာအုပ် လေ့ကျင့်ခန်းများ၊ Kanji၊ Mock Exam Links များကို အစဉ်လိုက် လေ့လာနိုင်ရန် စနစ်တကျ စုစည်းပေးထားသော Web Portal ဖြစ်ပါသည်။
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={supportInfo.studyPlanUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-orange-500 hover:from-rose-500 hover:to-orange-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-rose-950/60 transition-transform hover:scale-[1.02] flex items-center space-x-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>စာကျက် Plan ကြည့်ရန်</span>
              </a>

              <a
                href={supportInfo.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm transition-colors flex items-center space-x-2"
              >
                <Send className="w-4 h-4 text-rose-400" />
                <span>Sensei Yamin (@yaminjlc33)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Progress Card */}
        <ProgressHeader
          completedCount={completedCount}
          totalCount={totalItemCount}
          onReset={resetAllProgress}
        />

        {/* Search & Tabs Controls */}
        <div className="sticky top-20 z-40 bg-[#0b0f19]/95 backdrop-blur-md py-4 border-b border-slate-800/50 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="hidden md:flex items-center space-x-1 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center space-x-1.5 ${activeTab === 'all' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-950/80' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All Resources</span>
            </button>
            <button
              onClick={() => setActiveTab('minna')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center space-x-1.5 ${activeTab === 'minna' ? 'bg-rose-600 text-white shadow-md shadow-rose-950/80' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Minna Ch 1-25</span>
            </button>
            <button
              onClick={() => setActiveTab('basic')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center space-x-1.5 ${activeTab === 'basic' ? 'bg-orange-600 text-white shadow-md shadow-orange-950/80' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Basic Videos (1-29)</span>
            </button>
            <button
              onClick={() => setActiveTab('kanji')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center space-x-1.5 ${activeTab === 'kanji' ? 'bg-amber-600 text-white shadow-md shadow-amber-950/80' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}`}
            >
              <Hash className="w-3.5 h-3.5" />
              <span>Kanji Days</span>
            </button>
            <button
              onClick={() => setActiveTab('exams')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center space-x-1.5 ${activeTab === 'exams' ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/80' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Mock Exams</span>
            </button>
            <button
              onClick={() => setActiveTab('groups')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center space-x-1.5 ${activeTab === 'groups' ? 'bg-blue-600 text-white shadow-md shadow-blue-950/80' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Discussion Groups</span>
            </button>
          </div>

          {/* Realtime Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Ch-14, Kanji, Exam..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Content Section based on Active Tab */}

        {/* 1. Minna no Nihongo Chapters 1-25 */}
        {(activeTab === 'all' || activeTab === 'minna') && (
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Minna no Nihongo Chapters (1 - 25)</h2>
                <p className="text-xs text-slate-400">Meaning, Grammar Notes, Exercises, Kaiwa & Counting modules</p>
              </div>
            </div>

            <div className="space-y-4">
              {filteredMinnaChapters.map((ch, idx) => (
                <ChapterAccordion
                  key={ch.chapter}
                  chapter={ch}
                  completedMap={completedMap}
                  onToggleComplete={toggleComplete}
                  isInitiallyOpen={idx === 0 && activeTab === 'minna'}
                />
              ))}
            </div>
          </section>
        )}

        {/* 2. Basic Video Lessons */}
        {(activeTab === 'all' || activeTab === 'basic') && (
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Basic Japanese Video Lessons (1 - 29)</h2>
                <p className="text-xs text-slate-400">Foundation videos & Overall Basic Practice Exams</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {filteredBasicPractice.map(item => (
                <LessonCard
                  key={item.id}
                  item={item}
                  isCompleted={!!completedMap[item.id]}
                  onToggleComplete={toggleComplete}
                  category="basic"
                />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredBasicVideos.map(item => (
                <LessonCard
                  key={item.id}
                  item={item}
                  isCompleted={!!completedMap[item.id]}
                  onToggleComplete={toggleComplete}
                  category="basic"
                />
              ))}
            </div>
          </section>
        )}

        {/* 3. Kanji Collection */}
        {(activeTab === 'all' || activeTab === 'kanji') && (
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Hash className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">N5 Kanji Mastery (Day 1 - 7 & Chapters)</h2>
                <p className="text-xs text-slate-400">Step by step Kanji writing & meaning guides</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredKanji.map(item => (
                <LessonCard
                  key={item.id}
                  item={item}
                  isCompleted={!!completedMap[item.id]}
                  onToggleComplete={toggleComplete}
                  category="kanji"
                />
              ))}
            </div>
          </section>
        )}

        {/* 4. Mock Exams Collection */}
        {(activeTab === 'all' || activeTab === 'exams') && (
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">JLPT N5 Mock Exam Series (1st - 8th)</h2>
                <p className="text-xs text-slate-400">Practice tests with instant Answer Keys</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredExams.map(exam => (
                <div key={exam.id} className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-800">
                  <h3 className="text-base font-bold text-white mb-3 flex items-center justify-between">
                    <span>{exam.name}</span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Exam + Key
                    </span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <LessonCard
                      item={{
                        id: `${exam.id}-paper`,
                        title: `${exam.name} Paper`,
                        url: exam.examUrl,
                        type: 'exam'
                      }}
                      isCompleted={!!completedMap[`${exam.id}-paper`]}
                      onToggleComplete={toggleComplete}
                      category="exams"
                    />

                    <LessonCard
                      item={{
                        id: `${exam.id}-key`,
                        title: `${exam.name} Answer Key`,
                        url: exam.ansKeyUrl,
                        type: 'anskey'
                      }}
                      isCompleted={!!completedMap[`${exam.id}-key`]}
                      onToggleComplete={toggleComplete}
                      category="exams"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. Practice & Mondai Groups */}
        {(activeTab === 'all' || activeTab === 'groups') && (
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Facebook Discussion & Practice Groups</h2>
                <p className="text-xs text-slate-400">Mondai exercises, Listening/Reading groups & JLPT Old Questions</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {practiceGroups.map(item => (
                <LessonCard
                  key={item.id}
                  item={item}
                  isCompleted={!!completedMap[item.id]}
                  onToggleComplete={toggleComplete}
                  category="groups"
                />
              ))}
            </div>
          </section>
        )}
      </main>

      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <Footer />
    </div>
  );
};
