export type Language = 'hindi' | 'hinglish' | 'telugu';

export interface Topic {
  id: string;
  title: {
    hindi: string;
    hinglish: string;
    telugu: string;
  };
  description: {
    hindi: string;
    hinglish: string;
    telugu: string;
  };
  icon: string;
}

export interface Resource {
  id: string;
  title: {
    hindi: string;
    hinglish: string;
    telugu: string;
  };
  content: {
    hindi: string;
    hinglish: string;
    telugu: string;
  };
  type: 'health' | 'legal' | 'safety' | 'support';
}

export type FeatureId = 'health' | 'legal' | 'safety' | 'support' | 'financial' | 'beauty' | 'affirmations' | 'games' | 'emergency' | 'community' | 'help';

export interface Feature {
  id: FeatureId;
  title: {
    hindi: string;
    hinglish: string;
    telugu: string;
  };
  description: {
    hindi: string;
    hinglish: string;
    telugu: string;
  };
  icon: string;
  color: string;
  gradient: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  timestamp: string;
  isBot: boolean;
}

export interface QAPost {
  id: string;
  question: string;
  answer: string;
  upvotes: number;
  category: 'health' | 'beauty' | 'lifestyle';
  askedBy: string;
  answeredBy: string;
  timestamp: string;
  helpful: number;
}