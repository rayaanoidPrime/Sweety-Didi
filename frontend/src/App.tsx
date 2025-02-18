import { useState, useEffect } from 'react';
import { Language } from './types';
import { features } from './data/features';
import LanguageSelector from './components/LanguageSelector';
import DollyAvatar from './components/DollyAvatar';
import FeatureCard from './components/FeatureCard';
import ChatBot from './components/ChatBot';
import TipOfTheDay from './components/TipOfTheDay';
import CommunityKnowledge from './components/CommunityKnowledge';
import HowToUse from './components/HowToUse';
import FeatureDetails from './components/FeatureDetails';
import { UserCircle2, PhoneCall, AlertCircle } from 'lucide-react';
import useSound from 'use-sound';

function App() {
  const [language, setLanguage] = useState<Language>('hindi');
  const [convaiError, setConvaiError] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [playBeep] = useSound(
    'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',
    { volume: 0.5 },
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      const widget = document.querySelector('elevenlabs-convai');
      if (!widget || !widget.shadowRoot) {
        setConvaiError(true);
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const handleFeatureClick = (featureId: string) => {
    if (featureId === 'beauty') {
      window.open(
        'https://www.youtube.com/watch?v=playlist?list=beauty-tips-india',
        '_blank',
      );
    } else if (featureId === 'affirmations') {
      window.open(
        'https://open.spotify.com/playlist/daily-affirmations-hindi',
        '_blank',
      );
    } else if (featureId === 'games') {
      window.open('https://www.mindgames.com/hi/brain-training', '_blank');
    } else {
      setSelectedFeature(featureId);
    }
  };

  const handleSosCall = () => {
    window.location.href = 'tel:1091';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-orange-100 pb-24 relative">
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
      <div className="relative">
        {/* Top Navigation Bar */}
        <div className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-md z-50 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 border border-pink-100 hover:border-purple-200 transition-all">
              <UserCircle2 className="w-4 h-4 text-pink-600" />
              <span className="text-sm font-medium text-gray-700">
                My Nickname
              </span>
            </button>
            <button
              onClick={handleSosCall}
              className="flex items-center gap-2 bg-red-500 text-white rounded-full px-3 py-1.5 border border-red-400 hover:bg-red-600 transition-all animate-pulse"
            >
              <PhoneCall className="w-4 h-4" />
              <span className="text-sm font-medium">SOS</span>
            </button>
          </div>
          <LanguageSelector
            currentLanguage={language}
            onLanguageChange={setLanguage}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16 mt-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <DollyAvatar />
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 drop-shadow-sm leading-normal sm:leading-normal tracking-wide">
              {language === 'hindi' && 'स्वीटी दीदी'}
              {language === 'hinglish' && 'Sweety Didi'}
              {language === 'telugu' && 'స్వీటీ దీదీ'}
            </h1>
            <p className="text-gray-800 text-base sm:text-lg max-w-2xl mx-auto font-medium mb-6">
              {language === 'hindi' && 'आपकी सच्ची सहेली'}
              {language === 'hinglish' && 'Aapki Sachchi Saheli'}
              {language === 'telugu' && 'మీ నిజమైన స్నేహితురాలు'}
            </p>
            <div className="relative">
              <TipOfTheDay language={language} />
            </div>
          </div>

          {/* Community Knowledge Section */}
          <section className="mb-12">
            <CommunityKnowledge language={language} />
          </section>

          {/* How to Use Section */}
          <section className="mb-12">
            <HowToUse language={language} />
          </section>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {features
              .filter((feature) => !['community', 'help'].includes(feature.id))
              .map((feature) => (
                <FeatureCard
                  key={feature.id}
                  feature={feature}
                  language={language}
                  onClick={() => handleFeatureClick(feature.id)}
                />
              ))}
          </div>

          {/* Move ChatBot to bottom left */}
          <div className="fixed bottom-6 left-6 z-50">
            <ChatBot language={language} />
          </div>

          {selectedFeature && (
            <FeatureDetails
              feature={features.find((f) => f.id === selectedFeature)!}
              language={language}
              onClose={() => setSelectedFeature(null)}
            />
          )}

          {convaiError && (
            <div className="fixed bottom-20 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-orange-200 shadow-lg max-w-xs animate-fade-in">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-gray-800 mb-1">
                    Voice Assistant Unavailable
                  </h4>
                  <p className="text-xs text-gray-600">
                    {language === 'hindi' &&
                      'वॉइस सहायक अभी उपलब्ध नहीं है। कृपया थोड़ी देर बाद पुनः प्रयास करें।'}
                    {language === 'hinglish' &&
                      'Voice assistant abhi available nahi hai. Please thodi der baad try karein.'}
                    {language === 'telugu' &&
                      'వాయిస్ అసిస్టెంట్ ప్రస్తుతం అందుబాటులో లేదు. దయచేసి కొంత సేపు తర్వాత మళ్లీ ప్రయత్నించండి.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          <footer className="mt-16 text-center text-sm text-gray-500 bg-white/70 backdrop-blur-sm rounded-full py-3 px-6 max-w-fit mx-auto border border-pink-100 shadow-lg">
            <p>
              {language === 'hindi' && 'आपकी गोपनीयता हमारी प्राथमिकता है'}
              {language === 'hinglish' && 'Aapki privacy hamari priority hai'}
              {language === 'telugu' && 'మీ గోప్యత మా ప్రాధాన్యత'}
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
