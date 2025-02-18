import React from 'react';
import { Language } from '../types';
import { Lightbulb } from 'lucide-react';

interface Props {
  language: Language;
}

export default function TipOfTheDay({ language }: Props) {
  const tips = {
    hindi: 'आज का टिप: स्वस्थ रहने के लिए रोज़ाना 30 मिनट व्यायाम करें',
    hinglish: 'Tip of the Day: Healthy rehne ke liye daily 30 minutes exercise karein',
    telugu: 'నేటి చిట్కా: ఆరోగ్యంగా ఉండటానికి రోజూ 30 నిమిషాలు వ్యాయామం చేయండి'
  };

  return (
    <div className="max-w-2xl mx-auto my-6 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-pink-100 shadow-md">
      <div className="flex items-center gap-3">
        <Lightbulb className="w-5 h-5 text-amber-500" />
        <p className="text-gray-800 font-medium tip-text">{tips[language]}</p>
      </div>
    </div>
  );
}