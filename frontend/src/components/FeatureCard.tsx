import React from 'react';
import { Feature, Language } from '../types';
import * as Icons from 'lucide-react';
import { Volume2 } from 'lucide-react';
import useSound from 'use-sound';

interface Props {
  feature: Feature;
  language: Language;
  onClick: () => void;
}

export default function FeatureCard({ feature, language, onClick }: Props) {
  const IconComponent = Icons[feature.icon as keyof typeof Icons];
  const [playBeep] = useSound('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3', { volume: 0.5 });

  const speakText = (e: React.MouseEvent) => {
    e.stopPropagation();
    playBeep();
    const text = `${feature.title[language]}. ${feature.description[language]}`;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div
      onClick={onClick}
      className={`group relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 w-full text-left border overflow-hidden cursor-pointer
        ${feature.id === 'emergency' 
          ? 'border-red-200 hover:border-red-300 animate-pulse' 
          : 'border-pink-100 hover:border-purple-200'}`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-pink-50 via-purple-50 to-orange-50 transition-opacity duration-300" />
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-4 sm:p-5 bg-gradient-to-br ${feature.gradient} rounded-xl sm:rounded-2xl`}>
            <IconComponent className={`w-8 h-8 sm:w-10 sm:h-10 text-${feature.color}`} />
          </div>
          <button
            onClick={speakText}
            className="text-pink-500 hover:text-pink-600 transition-colors p-2"
            aria-label="Listen to content"
          >
            <Volume2 className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        </div>
        <div>
          <h3 className={`text-lg sm:text-xl font-semibold ${feature.id === 'emergency' ? 'text-red-600' : 'text-gray-800'}`}>
            {feature.title[language]}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
            {feature.description[language]}
          </p>
          {feature.id === 'emergency' && (
            <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
              <EmergencyContact
                number="1091"
                label="Women Helpline"
              />
              <EmergencyContact
                number="102"
                label="Ambulance"
              />
              <EmergencyContact
                number="100"
                label="Police"
              />
              <EmergencyContact
                number="181"
                label="Women Commission"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function EmergencyContact({ number, label }: { number: string; label: string }) {
  return (
    <a
      href={`tel:${number}`}
      className="flex items-center gap-2 bg-red-50 p-2 rounded-lg hover:bg-red-100 transition-colors"
      onClick={(e) => e.stopPropagation()}
    >
      <span className="text-red-600 font-semibold">{number}</span>
      <span className="text-xs text-gray-600">{label}</span>
    </a>
  );
}