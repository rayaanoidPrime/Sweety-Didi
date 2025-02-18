import React, { useState } from 'react';
import { Language, ChatMessage } from '../types';
import { MessageSquare, Send } from 'lucide-react';

interface Props {
  language: Language;
}

function ChatBot({ language }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const placeholders = {
    hindi: 'अपना संदेश यहाँ लिखें...',
    hinglish: 'Apna message yahan likhein...',
    telugu: 'మీ సందేశాన్ని ఇక్కడ టైప్ చేయండి...'
  };

  const titles = {
    hindi: 'स्वीटी दीदी को मैसेज करें',
    hinglish: 'Message Sweety Didi',
    telugu: 'స్వీటీ దీదీకి సందేశం పంపండి'
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content: message,
      timestamp: new Date().toISOString(),
      isBot: false
    };

    setMessages([...messages, newMessage]);
    setMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: 'Thank you for your message. I will help you with this.',
        timestamp: new Date().toISOString(),
        isBot: true
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg border border-pink-100 hover:border-purple-200 transition-all hover:scale-105"
      >
        <MessageSquare className="w-6 h-6 text-pink-600" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[80vh] flex flex-col">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-semibold text-lg">{titles[language]}</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      msg.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-pink-500 text-white'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={placeholders[language]}
                  className="flex-1 rounded-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-pink-300"
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button
                  onClick={sendMessage}
                  className="bg-pink-500 text-white rounded-full p-2 hover:bg-pink-600 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;