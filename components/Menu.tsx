import React from 'react';
import { MENU_ITEMS } from '../constants';

const Menu: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 py-12">
        <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-brand-blue poster-text mb-4">OUR MENU</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Hand-crafted beverages made with passion. Start your day the right way.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MENU_ITEMS.map((item) => (
                <div key={item.id} className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <div className="h-64 overflow-hidden relative">
                        <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4 bg-brand-blue text-white font-bold px-3 py-1 rounded-full shadow-sm">
                            {item.price}
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-brand-blue mb-2 font-display uppercase">{item.name}</h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <button className="w-full border-2 border-brand-blue text-brand-blue font-bold py-2 rounded hover:bg-brand-blue hover:text-white transition-colors uppercase text-sm">
                            Add to Order
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Menu;