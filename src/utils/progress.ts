export const getPercentColorClass = (p: number) => {
  if (p === 0) return 'text-slate-400';
  if (p < 25) return 'text-rose-400 font-bold';
  if (p < 50) return 'text-orange-400 font-bold';
  if (p < 75) return 'text-amber-400 font-bold';
  if (p < 100) return 'text-sky-400 font-bold';
  return 'text-emerald-400 font-bold';
};

export const getPercentBadgeClass = (p: number) => {
  if (p === 0) {
    return 'bg-slate-900 text-slate-400 border border-slate-800/80';
  }
  if (p < 25) {
    return 'bg-rose-500/10 text-rose-400 border border-rose-500/20';
  }
  if (p < 50) {
    return 'bg-orange-500/10 text-orange-400 border border-orange-500/20';
  }
  if (p < 75) {
    return 'bg-amber-500/10 text-amber-400 border border-amber-500/20';
  }
  if (p < 100) {
    return 'bg-sky-500/10 text-sky-400 border border-sky-500/20';
  }
  return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
};
