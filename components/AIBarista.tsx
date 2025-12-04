import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { getBaristaResponse } from '../services/geminiService';

const AIBarista: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hey there! I\'m your virtual barista. Feeling sleepy? Sad? Or just need a treat? Tell me your mood, and I\'ll fix you up!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await getBaristaResponse(input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-brand-blue poster-text mb-2">AI BARISTA</h2>
        <p className="text-brand-brown font-medium">Let us prescribe the perfect dose of caffeine.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl border-2 border-brand-blue overflow-hidden flex flex-col h-[500px]">
        {/* Chat Header */}
        <div className="bg-brand-blue p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 8h.01" />
                    <path d="M20 12a8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8" />
                    <path d="M9.5 9.5c-1.5 1.5-1.5 3.5 0 5" />
                    <path d="M14.5 9.5c1.5 1.5 1.5 3.5 0 5" />
                </svg>
            </div>
            <div>
                <h3 className="text-white font-bold">Barista Bot</h3>
                <span className="text-blue-200 text-xs">Online • Ready to brew</span>
            </div>
        </div>

        {/* Messages Area */}
        <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto bg-gray-50 space-y-4">
            {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-4 rounded-xl text-sm md:text-base ${
                        msg.role === 'user' 
                        ? 'bg-brand-blue text-white rounded-br-none' 
                        : 'bg-white text-gray-800 border border-gray-200 shadow-sm rounded-bl-none'
                    }`}>
                        {msg.text}
                    </div>
                </div>
            ))}
            {isLoading && (
                 <div className="flex justify-start">
                    <div className="bg-white p-4 rounded-xl rounded-bl-none border border-gray-200 shadow-sm flex gap-2">
                        <div className="w-2 h-2 bg-brand-brown rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-brand-brown rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-brand-brown rounded-full animate-bounce delay-200"></div>
                    </div>
                </div>
            )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-200 flex gap-2">
            <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="How are you feeling today?"
                className="flex-1 border-2 border-gray-200 rounded-full px-6 py-3 focus:outline-none focus:border-brand-blue transition-colors text-gray-700"
            />
            <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors disabled:opacity-50"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
            </button>
        </div>
      </div>
    </div>
  );
};

export default AIBarista;