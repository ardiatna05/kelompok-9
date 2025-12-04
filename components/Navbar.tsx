import React from 'react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  return (
    <nav className="flex justify-between items-center py-6 px-4 md:px-12 max-w-7xl mx-auto w-full">
      <div 
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setView(ViewState.HOME)}
      >
        {/* Simple Hand/Cup Logo Representation */}
        <div className="text-brand-blue">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
            <line x1="6" x2="6" y1="2" y2="4" />
            <line x1="10" x2="10" y1="2" y2="4" />
            <line x1="14" x2="14" y1="2" y2="4" />
          </svg>
        </div>
        <span className="font-bold text-xl tracking-tight text-brand-blue poster-text">ALQOHWAH</span>
      </div>

      <div className="flex gap-6 text-sm font-semibold text-brand-blue">
        <button 
          onClick={() => setView(ViewState.MENU)}
          className={`hover:underline underline-offset-4 ${currentView === ViewState.MENU ? 'underline' : ''}`}
        >
          MENU
        </button>
        <button 
          onClick={() => setView(ViewState.BARISTA)}
          className={`hover:underline underline-offset-4 ${currentView === ViewState.BARISTA ? 'underline' : ''}`}
        >
          AI BARISTA
        </button>
      </div>
    </nav>
  );
};

export default Navbar;