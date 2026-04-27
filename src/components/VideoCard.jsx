import React from 'react';

const VideoCard = ({ title, category, thumbnail, onClick }) => {
  return (
    <div 
      className="group relative cursor-pointer overflow-hidden rounded-xl bg-zinc-900"
      onClick={onClick}
    >
      {/* Thumbnail Image */}
      <img 
        src={thumbnail} 
        alt={title} 
        className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Dark Overlay (Hidden by default, fades in on hover) */}
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        
        {/* Play Icon Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 transform scale-75 group-hover:scale-100 transition-transform duration-300">
          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
        </div>

        <p className="text-xs font-bold text-blue-400 mb-1 uppercase tracking-widest">{category}</p>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
    </div>
  );
};

export default VideoCard;