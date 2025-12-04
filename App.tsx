import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import AIBarista from './components/AIBarista';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  const renderContent = () => {
    switch (currentView) {
      case ViewState.MENU:
        return <Menu />;
      case ViewState.BARISTA:
        return <AIBarista />;
      case ViewState.HOME:
      default:
        return (
          <>
            <Hero onOrderNow={() => setCurrentView(ViewState.MENU)} />
            {/* Quick Menu Preview */}
            <div className="bg-brand-cream/50 py-12 mt-12">
               <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold text-brand-blue mb-4">NOT SURE WHAT TO GET?</h3>
                  <p className="mb-6 text-gray-600">Ask our AI Barista for a recommendation based on your mood.</p>
                  <button 
                    onClick={() => setCurrentView(ViewState.BARISTA)}
                    className="border-2 border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white px-6 py-2 rounded-full font-bold transition-colors"
                  >
                    Chat with Barista Bot
                  </button>
               </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="border-b-4 border-brand-blue sticky top-0 bg-white z-50">
          <Navbar currentView={currentView} setView={setCurrentView} />
      </div>
      
      <main className="flex-1 flex flex-col">
        {renderContent()}
      </main>

      <footer className="bg-brand-blue text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
                <h4 className="font-bold text-lg font-display">ALQOHWAH COFFEE</h4>
                <p className="text-sm opacity-80">More Espresso, Less Depresso.</p>
            </div>
            <div className="flex gap-4 text-sm font-semibold">
                <span>7 AM — 4 PM</span>
                <span>•</span>
                <span>OPEN DAILY</span>
            </div>
            <div className="text-xs opacity-60">
                &copy; {new Date().getFullYear()} Alqohwah.
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;