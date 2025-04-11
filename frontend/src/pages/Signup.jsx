import React from 'react'
import { Brain, Mail, Lock, ArrowLeft, User } from 'lucide-react';

const Signup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white flex items-center justify-center p-6 ">
      <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 w-full max-w-md mt-15">
        <div className="flex items-center gap-2 mb-8">
          <button 
            className="text-gray-400 hover:text-yellow-400 transition"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-yellow-400" />
            <span className="text-2xl font-bold text-yellow-400">QuizWiz</span>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-2">Create Account</h2>
        <p className="text-gray-400 mb-6">Join the ultimate quiz platform!</p>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Username</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                type="text"
                placeholder="Choose a username"
                className="w-full bg-black/20 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                type="email"
                placeholder="Enter your email"
                className="w-full bg-black/20 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                type="password"
                placeholder="Create a password"
                className="w-full bg-black/20 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters long</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                type="password"
                placeholder="Confirm your password"
                className="w-full bg-black/20 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
              />
            </div>
          </div>

          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 rounded border-gray-700 bg-black/20 text-yellow-400 focus:ring-yellow-400"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
              I agree to the{' '}
              <button className="text-yellow-400 hover:text-yellow-300 transition">Terms of Service</button>
              {' '}and{' '}
              <button className="text-yellow-400 hover:text-yellow-300 transition">Privacy Policy</button>
            </label>
          </div>

          <button className="w-full bg-yellow-400 text-gray-900 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition mt-6">
            Create Account
          </button>
        </form>

        <p className="text-center mt-6 text-gray-400">
          Already have an account?{' '}
          <button 
            className="text-yellow-400 hover:text-yellow-300 transition font-medium"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  )
}

export default Signup
