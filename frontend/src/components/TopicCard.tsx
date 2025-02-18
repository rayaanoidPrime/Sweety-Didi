import React from 'react';
import { Topic, Language } from '../types';
import * as Icons from 'lucide-react';

interface Props {
  topic: Topic;
  language: Language;
  onClick: () => void;
}

export default function TopicCard({ topic, language, onClick }: Props) {
  const IconComponent = Icons[topic.icon as keyof typeof Icons];

  return (
    <button
      onClick={onClick}
      className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-102 transition-all duration-300 w-full text-left border border-purple-100"
    >
      <div className="flex items-center gap-4">
        <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl">
          <IconComponent className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {topic.title[language]}
          </h3>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            {topic.description[language]}
          </p>
        </div>
      </div>
    </button>
  );
}