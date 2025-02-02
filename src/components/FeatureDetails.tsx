import React from 'react';
import { Language } from '../types';
import { Volume2, MapPin, Phone, ArrowLeft, Shield, Play } from 'lucide-react';
import useSound from 'use-sound';

interface Props {
  feature: {
    id: string;
    title: { [key in Language]: string };
  };
  language: Language;
  onClose: () => void;
}

export default function FeatureDetails({ feature, language, onClose }: Props) {
  const [playBeep] = useSound('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3', { volume: 0.5 });

  const speakText = (text: string) => {
    playBeep();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  const selfDefenceVideos = [
    { title: 'Basic Self Defence Moves', url: '#', duration: '15 mins', description: 'Learn essential moves for personal safety' },
    { title: 'Emergency Response Training', url: '#', duration: '12 mins', description: 'How to react in dangerous situations' },
    { title: 'Situational Awareness', url: '#', duration: '20 mins', description: 'Stay alert and avoid dangerous situations' },
    { title: 'Using Common Objects for Defence', url: '#', duration: '18 mins', description: 'Everyday items that can help protect you' }
  ];

  const healthVideos = [
    { title: 'Self-Defense Basics', url: '#', duration: '15 mins' },
    { title: 'Stress Management', url: '#', duration: '12 mins' },
    { title: 'Personal Safety Tips', url: '#', duration: '20 mins' },
    { title: 'Emergency First Aid', url: '#', duration: '18 mins' }
  ];

  const financialVideos = [
    { title: 'Budgeting Basics', url: '#', duration: '10 mins' },
    { title: 'Saving Strategies', url: '#', duration: '15 mins' },
    { title: 'Investment 101', url: '#', duration: '20 mins' },
    { title: 'Financial Safety', url: '#', duration: '12 mins' }
  ];

  const emergencyContacts = [
    {
      type: 'Post Office',
      locations: [
        { name: 'Central Post Office', address: '123 Main Street', phone: '011-2345-6789' },
        { name: 'City Post Office', address: '456 Park Road', phone: '011-9876-5432' }
      ]
    },
    {
      type: 'Police Station',
      locations: [
        { name: 'Central Police Station', address: '789 Safety Road', phone: '100' },
        { name: 'Women Police Station', address: '321 Secure Lane', phone: '1091' }
      ]
    }
  ];

  const renderContent = () => {
    if (feature.id === 'affirmations') {
      return (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Self Defence Resources</h3>
          <div className="grid grid-cols-1 gap-4">
            {selfDefenceVideos.map((video, index) => (
              <div
                key={index}
                className="bg-white/80 p-4 rounded-lg border border-pink-100 hover:border-purple-200 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <Shield className="w-6 h-6 text-amber-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{video.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{video.description}</p>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Play className="w-4 h-4" />
                        {video.duration}
                      </span>
                      <button
                        onClick={() => speakText(`${video.title}. ${video.description}`)}
                        className="text-amber-500 hover:text-amber-600 transition-colors"
                      >
                        <Volume2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-amber-50 rounded-lg">
            <p className="text-amber-600 text-sm">
              {language === 'hindi' && 'सुरक्षा टिप: हमेशा अपने आस-पास के माहौल के प्रति सजग रहें'}
              {language === 'hinglish' && 'Safety Tip: Hamesha apne aas-paas ke mahol ke prati sajag rahein'}
              {language === 'telugu' && 'భద్రతా చిట్కా: ఎల్లప్పుడూ మీ చుట్టూ ఉన్న వాతావరణం పట్ల అప్రమత్తంగా ఉండండి'}
            </p>
          </div>
        </div>
      );
    }

    switch (feature.id) {
      case 'health':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Health Resources</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {healthVideos.map((video, index) => (
                <a
                  key={index}
                  href={video.url}
                  className="bg-white/80 p-4 rounded-lg border border-pink-100 hover:border-purple-200 transition-all flex items-center gap-3"
                >
                  <div className="p-2 bg-pink-50 rounded-lg">
                    <Volume2 className="w-5 h-5 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{video.title}</h4>
                    <p className="text-sm text-gray-500">{video.duration}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        );

      case 'financial':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Financial Education</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {financialVideos.map((video, index) => (
                <a
                  key={index}
                  href={video.url}
                  className="bg-white/80 p-4 rounded-lg border border-pink-100 hover:border-purple-200 transition-all flex items-center gap-3"
                >
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    <Volume2 className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{video.title}</h4>
                    <p className="text-sm text-gray-500">{video.duration}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        );

      case 'emergency':
        return (
          <div className="space-y-8">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">{contact.type}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contact.locations.map((location, idx) => (
                    <div
                      key={idx}
                      className="bg-white/80 p-4 rounded-lg border border-pink-100"
                    >
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-medium text-gray-800">{location.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">{location.address}</p>
                          <a
                            href={`tel:${location.phone}`}
                            className="flex items-center gap-2 text-pink-500 hover:text-pink-600 mt-2"
                          >
                            <Phone className="w-4 h-4" />
                            <span>{location.phone}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl w-full max-w-3xl max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            <button
              onClick={() => speakText(document.querySelector('.feature-content')?.textContent || '')}
              className="text-pink-500 hover:text-pink-600 transition-colors"
              aria-label="Listen to content"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>

          <div className="feature-content">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {feature.title[language]}
            </h2>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}