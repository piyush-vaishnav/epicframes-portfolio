import React from 'react';

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null; // If not open, don't render anything

  // YouTube Professional Settings:
  // autoplay=1 (starts immediately)
  // rel=0 (don't show related videos from other channels)
  // modestbranding=1 (hides the YouTube logo as much as possible)
  const cleanUrl = `${videoUrl}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
      {/* 1. Dark Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose} 
      ></div>

      {/* 2. Modal Content */}
      <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
        >
          ✕
        </button>

        {/* The YouTube Iframe */}
        <iframe
          src={cleanUrl}
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Video Player"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;