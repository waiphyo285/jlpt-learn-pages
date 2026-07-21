import React from 'react';
import { X, Download, ExternalLink, Play, Video, AlertCircle } from 'lucide-react';
import { ResourceLink } from '../data/n5Data';

interface VideoPlayerModalProps {
  item: ResourceLink | null;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const videoSrc = item.localVideoPath || `/videos/${item.id}.mp4`;
  const fileName = item.downloadFileName || `${item.id}.mp4`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-400">JLPT N5 Video Player</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden border border-slate-800 shadow-inner flex items-center justify-center group">
            <video
              controls
              autoPlay
              playsInline
              preload="metadata"
              src={videoSrc}
              className="w-full h-full object-contain"
            >
              Your browser does not support HTML5 video player.
            </video>
          </div>

          {/* Info Notice */}
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-400 flex items-start space-x-2.5">
            <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <span>Offline Video File Notice: To play or download this video offline, save the downloaded MP4 file to </span>
              <code className="text-rose-400 font-mono font-semibold px-1 py-0.5 bg-rose-950/30 rounded border border-rose-900/40">{videoSrc}</code>
            </div>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/50 flex flex-wrap items-center justify-between gap-3">
          <a
            href={videoSrc}
            download={fileName}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs shadow-lg shadow-emerald-950/40 transition-transform hover:scale-[1.02]"
          >
            <Download className="w-4 h-4" />
            <span>Download Video MP4</span>
          </a>

          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
          >
            <span>Open in Facebook Group</span>
            <ExternalLink className="w-3.5 h-3.5 text-rose-400" />
          </a>
        </div>
      </div>
    </div>
  );
};
