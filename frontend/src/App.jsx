import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import StepCard from './components/StepCard'
import FeatureCard from './components/FeatureCard'
import { Users, Timer, ArrowRight, GamepadIcon } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto px-6 py-24">
        <div className="md:w-1/2">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 text-transparent bg-clip-text">
              The Ultimate Multiplayer Quiz Experience
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Challenge friends in real-time quiz battles. Join rooms, compete live, and climb the global leaderboard!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition flex items-center justify-center">
              Create Room <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400/10 transition flex items-center justify-center">
              Join Game <GamepadIcon className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2070"
              alt="Live Quiz Game"
              className="rounded-2xl shadow-2xl shadow-purple-500/20"/>
        </div>
      </div>

      {/* Features */}
      <section id='features'>
        <div className="py-24 bg-black/30 px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose <span className="text-yellow-400">QuizWiz?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={<Users className="h-8 w-8 text-yellow-400" />} title={"Real-Time Multiplayer"} description={"Join rooms and compete with players from around the world in real-time quiz battles."}/>
            <FeatureCard icon={<Timer className="h-8 w-8 text-yellow-400" />} title={"Timer-Based Questions"} description={"Think fast! Answer questions before time runs out to score more points."}/>
            <FeatureCard icon={<Timer className="h-8 w-8 text-yellow-400" />} title={"Global Leaderboards"} description={"Climb the ranks and compete for the top spot on our global leaderboards."}/>
          </div>
        </div>
      </section>

      {/* How to play */}
      <section id='how-to-play'>
        <div className="py-24 px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            How to <span className="text-yellow-400">Play</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepCard number={1} title={"Create or Join"} description={"Start a new game room or join one"}/>
            <StepCard number={2} title={"Invite Friends"} description={"Share your room code with friends to play together"}/>
            <StepCard number={3} title={"Answer Fast"} description={"Quick answers get more points - think fast!"}/>
            <StepCard number={4} title={"Win & Rank Up"} description={"Top scorers climb the global leaderboard"}/>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Test Your Knowledge?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Join thousands of players in the ultimate quiz showdown!
          </p>
          <button className="bg-gray-900 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition">
            Start Playing Now
          </button>
      </div>

      <Footer />

    </div>
  )
}

export default App
