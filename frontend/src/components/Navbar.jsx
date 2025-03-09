import React from 'react';
import { Brain } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="px-6 py-4 bg-black/20 backdrop-blur-lg flex items-center justify-between fixed top-0 w-full z-50">
      <div className="flex items-center space-x-6">
        <Brain className="h-8 w-8 text-yellow-400" />
        <span className="text-2xl font-bold text-yellow-400">QuizWiz</span>
      </div>
      
      <div className="hidden md:flex space-x-8">
        <Link to="features" smooth={true} duration={900} className="cursor-pointer text-gray-300 hover:text-yellow-400 transition">Features</Link>
        <Link to="how-to-play" smooth={true} duration={900} className="cursor-pointer text-gray-300 hover:text-yellow-400 transition">How to Play</Link>
        <Link to="leaderboard" smooth={true} duration={900} className="cursor-pointer text-gray-300 hover:text-yellow-400 transition">Leaderboard</Link>
      </div>
      
      <div>
        <button className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
          Play Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
