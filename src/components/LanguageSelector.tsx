import React from 'react';
import { Language } from '../types';

interface Props {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageSelector({ currentLanguage, onLanguageChange }: Props) {
  return (
    <select
      value={currentLanguage}
      onChange={(e) => onLanguageChange(e.target.value as Language)}
      className="bg-transparent text-gray-800 text-xs sm:text-sm font-medium focus:outline-none px-2 py-1.5 cursor-pointer hover:text-purple-600 transition-colors rounded-lg border border-pink-100"
    >
      <option value="hindi">हिंदी</option>
      <option value="hinglish">Hinglish</option>
      <option value="telugu">తెలుగు</option>
    </select>
  );
}