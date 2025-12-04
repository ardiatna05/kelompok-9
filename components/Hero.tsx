import React from 'react';
import { ViewState } from '../types';

interface HeroProps {
  onOrderNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOrderNow }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-12 py-8 max-w-7xl mx-auto w-full gap-12">
      
      {/* Left Text Content */}
      <div className="flex-1 space-y-6 text-center lg:text-left z-10">
        <h1 className="text-7xl md:text-9xl font-bold leading-[0.85] tracking-tighter text-brand-blue poster-text">
          WAKE<br/>
          UP AND<br/>
          SMELL<br/>
          THE<br/>
          COFFEE!
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-6 mt-8">
          <div className="border-2 border-brand-blue text-brand-blue px-6 py-2 font-bold text-xl rounded-full">
            WE ARE OPEN
          </div>
          <span className="text-brand-blue font-bold text-2xl">
            7 AM – 4 PM
          </span>
        </div>

        <div className="pt-8">
          <button 
            onClick={onOrderNow}
            className="bg-brand-blue text-white px-8 py-4 text-xl font-bold uppercase tracking-wider hover:bg-blue-800 transition-colors shadow-lg"
          >
            Check Menu
          </button>
        </div>
        
        {/* Halal Badge */}
        <div className="pt-8 flex justify-center lg:justify-start">
           <div className="border-2 border-brand-blue text-brand-blue p-2 rounded-full w-16 h-16 flex items-center justify-center font-bold text-xs relative">
              <span className="absolute -top-2 bg-white px-1">HALAL</span>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 opacity-80">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm1-8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" /> 
                {/* Simplified Halal generic icon representation */}
              </svg>
           </div>
        </div>
      </div>

      {/* Right Visuals */}
      <div className="flex-1 relative w-full h-[500px] flex items-center justify-center">
        {/* Abstract Coffee Swirl Art */}
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-brand-brown/10 z-0 overflow-hidden">
             <div className="absolute inset-0 border-[40px] border-white/50 rounded-full"></div>
             <div className="absolute inset-[60px] border-[30px] border-brand-brown/20 rounded-full"></div>
             <div className="absolute inset-[100px] bg-brand-brown rounded-full flex items-center justify-center">
                <div className="w-[80%] h-[80%] border-4 border-brand-cream/30 rounded-full animate-pulse"></div>
             </div>
        </div>

        {/* Floating Slogan */}
        <div className="absolute bottom-10 -left-4 md:-left-20 bg-white p-6 shadow-xl border-l-8 border-brand-blue z-20 max-w-xs transform -rotate-2">
            <p className="text-brand-blue font-bold text-2xl poster-text leading-tight">
                MORE ESPRESSO<br/>
                LESS DEPRESSO
            </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;