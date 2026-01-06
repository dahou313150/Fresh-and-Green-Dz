
import React, { useState } from 'react';
import { getDishRecommendation } from '../services/geminiService';
import { MENU_ITEMS } from '../constants';

const AIRecommender: React.FC = () => {
  const [preferences, setPreferences] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<{dishName: string, reason: string}[]>([]);

  const handleRecommend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!preferences.trim()) return;

    setLoading(true);
    const result = await getDishRecommendation(preferences);
    setRecommendations(result.recommendations);
    setLoading(false);
  };

  return (
    <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10 mb-20 shadow-inner">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-block p-2 px-4 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest mb-4">
          AI Powered
        </div>
        <h2 className="text-3xl font-bold text-earth mb-4">Not sure what to pick?</h2>
        <p className="text-gray-600 mb-8">
          Tell our AI Chef what you're craving or your dietary needs, and we'll find the perfect match from our menu.
        </p>

        <form onSubmit={handleRecommend} className="relative mb-10">
          <input 
            type="text" 
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
            placeholder="e.g., I want something high protein and light for lunch..."
            className="w-full pl-6 pr-32 py-4 rounded-full border-2 border-primary/20 focus:border-primary focus:outline-none shadow-lg text-earth"
          />
          <button 
            type="submit"
            disabled={loading}
            className="absolute right-2 top-2 bottom-2 bg-primary text-white px-6 rounded-full font-bold hover:bg-green-800 transition-all disabled:opacity-50"
          >
            {loading ? 'Thinking...' : 'Recommend'}
          </button>
        </form>

        {recommendations.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom duration-500">
            {recommendations.map((rec, i) => {
              const menuItem = MENU_ITEMS.find(item => item.name.toLowerCase().includes(rec.dishName.toLowerCase()));
              return (
                <div key={i} className="bg-white p-6 rounded-2xl text-left border border-primary/10 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-2 bg-orange-500 text-white text-[10px] font-bold rounded-bl-xl">PICK #{i+1}</div>
                  <h4 className="text-xl font-bold text-primary mb-2">{rec.dishName}</h4>
                  <p className="text-gray-600 text-sm italic mb-4">"{rec.reason}"</p>
                  {menuItem && (
                    <div className="flex items-center gap-4">
                      <img src={menuItem.image} className="w-16 h-16 rounded-lg object-cover" alt={menuItem.name} />
                      <div>
                        <span className="text-lg font-bold">${menuItem.price}</span>
                        <div className="text-xs text-gray-400">{menuItem.category}</div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AIRecommender;
