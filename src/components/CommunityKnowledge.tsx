import React, { useState } from 'react';
import { Language, QAPost } from '../types';
import { ThumbsUp, MessageCircle, Heart, Volume2, ChevronDown, ChevronUp } from 'lucide-react';
import useSound from 'use-sound';

interface Props {
  language: Language;
}

const dummyQAs: QAPost[] = [
  {
    id: '1',
    question: 'What are some tips for staying safe during work hours?',
    answer: 'Safety first, always: 1) Trust your instincts - if something feels wrong, it probably is 2) Always let a trusted friend know your location 3) Keep emergency numbers saved with quick dial 4) Have a code word system with friends for emergencies 5) Carry personal safety items.',
    upvotes: 156,
    category: 'health',
    askedBy: 'Butterfly',
    answeredBy: 'Guardian',
    timestamp: '2024-03-15T10:00:00Z',
    helpful: 89
  },
  {
    id: '2',
    question: 'How do I handle difficult clients respectfully but firmly?',
    answer: "Remember your worth and boundaries: 1) Stay calm but firm 2) Clearly state your terms upfront 3) Trust your gut feeling 4) Have backup support ready 5) Know it's okay to say no 6) Keep emergency contacts handy.",
    upvotes: 142,
    category: 'lifestyle',
    askedBy: 'Phoenix',
    answeredBy: 'Wise',
    timestamp: '2024-03-14T09:30:00Z',
    helpful: 76
  },
  {
    id: '3',
    question: 'What are some self-care practices for mental wellbeing?',
    answer: 'Take care of yourself first: 1) Regular health check-ups 2) Find time for proper rest 3) Connect with supportive community members 4) Practice meditation or deep breathing 5) Set boundaries for your personal time 6) Seek professional counseling when needed.',
    upvotes: 98,
    category: 'health',
    askedBy: 'Hope',
    answeredBy: 'Healer',
    timestamp: '2024-03-13T08:45:00Z',
    helpful: 67
  }
];

export default function CommunityKnowledge({ language }: Props) {
  const [qas] = useState<QAPost[]>(dummyQAs);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'health' | 'beauty' | 'lifestyle'>('all');
  const [isExpanded, setIsExpanded] = useState(false);
  const [playBeep] = useSound('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3', { volume: 0.5 });

  const titles = {
    hindi: 'सामुदायिक प्रश्न और उत्तर',
    hinglish: 'Community Q&A',
    telugu: 'సామాజిక ప్రశ్నలు మరియు సమాధానాలు'
  };

  const filteredQAs = selectedCategory === 'all' 
    ? qas 
    : qas.filter(qa => qa.category === selectedCategory);

  const speakText = (text: string) => {
    playBeep();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-pink-100 hover:border-purple-200 transition-all mb-4 flex items-center justify-between"
      >
        <h2 className="text-2xl font-bold text-gray-800">{titles[language]}</h2>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>

      {isExpanded && (
        <div className="space-y-4 animate-fade-in">
          <div className="flex justify-center gap-2 mb-6">
            {['all', 'health', 'beauty', 'lifestyle'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category as any)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedCategory === category
                    ? 'bg-pink-500 text-white'
                    : 'bg-white/80 text-gray-600 hover:bg-pink-50'}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredQAs.map((qa) => (
              <div
                key={qa.id}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-pink-100 hover:border-purple-200 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {qa.question}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Asked by {qa.askedBy} • {new Date(qa.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm font-medium ml-4">
                    {qa.category}
                  </span>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-gray-500">
                          Answered by {qa.answeredBy}
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            speakText(qa.answer);
                          }}
                          className="flex items-center gap-2 text-pink-500 hover:text-pink-600 transition-colors"
                          aria-label="Listen to answer"
                        >
                          <Volume2 className="w-5 h-5" />
                          <span className="text-sm">Listen</span>
                        </button>
                      </div>
                      <p className="text-gray-600 whitespace-pre-line">{qa.answer}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-gray-500 hover:text-pink-500 transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{qa.upvotes} upvotes</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-pink-500 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span>{qa.helpful} found this helpful</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-pink-500 transition-colors ml-auto">
                    <MessageCircle className="w-4 h-4" />
                    <span>Add follow-up question</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}