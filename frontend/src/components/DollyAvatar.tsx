import React from 'react';

export default function DollyAvatar() {
  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto mb-12">
      <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl transform hover:scale-102 transition-transform border-4 border-white/50">
        <img
          src="https://images.unsplash.com/photo-1626193082710-a16206f819f2?auto=format&fit=crop&q=80&w=800"
          alt="Sweety Didi"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent hover:opacity-0 transition-opacity" />
      </div>
    </div>
  );
}