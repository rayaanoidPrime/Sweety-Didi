import React, { useState } from 'react';
import { Language } from '../types';
import { CheckCircle2, Volume2, ChevronDown, ChevronUp } from 'lucide-react';
import useSound from 'use-sound';

interface Props {
  language: Language;
}

export default function HowToUse({ language }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [playBeep] = useSound('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3', { volume: 0.5 });

  const titles = {
    hindi: 'ऐप का उपयोग कैसे करें',
    hinglish: 'App Kaise Use Karein',
    telugu: 'యాప్ ఎలా వాడాలి'
  };

  const steps = {
    hindi: [
      'स्वीटी दीदी से बात करें - वॉइस या टेक्स्ट चैट का उपयोग करें',
      'स्वास्थ्य और सौंदर्य टिप्स देखें',
      'समुदाय के अनुभव पढ़ें और साझा करें',
      'आपातकालीन नंबर तुरंत एक्सेस करें',
      'दैनिक टिप्स और सुझाव प्राप्त करें'
    ],
    hinglish: [
      'Sweety Didi se baat karein - voice ya text chat ka use karein',
      'Health aur beauty tips dekhein',
      'Community ke experiences padhen aur share karein',
      'Emergency numbers turant access karein',
      'Daily tips aur suggestions prapt karein'
    ],
    telugu: [
      'స్వీటీ దీదీతో మాట్లాడండి - వాయిస్ లేదా టెక్స్ట్ చాట్ ఉపయోగించండి',
      'ఆరోగ్యం మరియు అందం చిట్కాలు చూడండి',
      'సమాజ అనుభవాలు చదవండి మరియు పంచుకోండి',
      'అత్యవసర నంబర్లను వెంటనే యాక్సెస్ చేయండి',
      'రోజువారీ చిట్కాలు మరియు సూచనలు పొందండి'
    ]
  };

  const speakText = (text: string) => {
    playBeep();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  const speakAllSteps = () => {
    playBeep();
    const allSteps = steps[language].join('. ');
    const utterance = new SpeechSynthesisUtterance(allSteps);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="w-full bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-pink-100 hover:border-purple-200 transition-all mb-4 flex items-center justify-between">
        <div 
          className="flex-1 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h2 className="text-2xl font-bold text-gray-800">{titles[language]}</h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={speakAllSteps}
            className="text-pink-500 hover:text-pink-600 transition-colors p-2"
            aria-label="Listen to all steps"
          >
            <Volume2 className="w-6 h-6" />
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500"
            aria-label={isExpanded ? "Collapse section" : "Expand section"}
          >
            {isExpanded ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl border border-pink-100 animate-fade-in">
          <div className="space-y-6">
            {steps[language].map((step, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-pink-500" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-800">{step}</p>
                </div>
                <button
                  onClick={() => speakText(step)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-pink-500 hover:text-pink-600"
                  aria-label="Listen to step"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-pink-50 rounded-lg">
            <p className="text-pink-600 text-sm">
              {language === 'hindi' && 'टिप: अधिक मदद के लिए चैट बटन का उपयोग करें'}
              {language === 'hinglish' && 'Tip: More help ke liye chat button ka use karein'}
              {language === 'telugu' && 'చిట్కా: మరింత సహాయం కోసం చాట్ బటన్‌ని ఉపయోగించండి'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}