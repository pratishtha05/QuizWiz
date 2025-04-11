import React, { useState } from 'react';
import { 
    Brain, 
    Trophy, 
    Users, 
    Clock, 
    Play, 
    Settings, 
    LogOut, 
    Search,
    Crown,
    Timer,
    Star,
    TrendingUp
} from 'lucide-react';

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulating login state

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 ">
      {/* Sidebar (conditionally hidden when logged in) */}
      {isLoggedIn && (
        <aside className="fixed left-0 top-0 h-full w-64 bg-black/30 backdrop-blur-sm border-r border-purple-500/20 p-4">
          <div className="flex items-center gap-2 mb-8">
            <Brain className="h-8 w-8 text-yellow-400" />
            <span className="text-2xl font-bold text-yellow-400">QuizWiz</span>
          </div>
          <nav className="space-y-2">
            <button className="flex items-center gap-3 text-yellow-400 bg-yellow-400/10 w-full p-3 rounded-lg">
              <Trophy className="h-5 w-5" />
              <span>Dashboard</span>
            </button>
            <button className="flex items-center gap-3 text-gray-400 hover:bg-white/5 w-full p-3 rounded-lg transition">
              <Users className="h-5 w-5" />
              <span>Multiplayer</span>
            </button>
            <button className="flex items-center gap-3 text-gray-400 hover:bg-white/5 w-full p-3 rounded-lg transition">
              <Clock className="h-5 w-5" />
              <span>History</span>
            </button>
            <button className="flex items-center gap-3 text-gray-400 hover:bg-white/5 w-full p-3 rounded-lg transition">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </button>
            <button className="flex items-center gap-3 text-red-400 hover:bg-white/5 w-full p-3 rounded-lg transition mt-auto" onClick={() => setIsLoggedIn(false)}>
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </nav>
        </aside>
      )}

      {/* Main Content */}
      <main className={isLoggedIn ? "ml-64 p-8" : "p-8"}>
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Welcome back, Alex!</h1>
            <p className="text-gray-400">Ready for today's challenge?</p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input 
              type="text"
              placeholder="Search quizzes..."
              className="bg-black/20 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition w-64"
            />
          </div>
        </div>
        
        {/* Rest of your UI remains unchanged */}
      </main>
    </div>
  );
}

export default Dashboard;
