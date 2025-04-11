import React from 'react'
import { Brain, Mail, Lock, ArrowLeft } from 'lucide-react';

const login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white flex items-center justify-center p-6">
      <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 w-full max-w-md">
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

        <h2 className="text-3xl font-bold mb-6">Welcome Back!</h2>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
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
                placeholder="Enter your password"
                className="w-full bg-black/20 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-gray-700 bg-black/20 text-yellow-400 focus:ring-yellow-400"
              />
              <label htmlFor="remember" className="ml-2 text-gray-300">
                Remember me
              </label>
            </div>
            <button className="text-yellow-400 hover:text-yellow-300 transition">
              Forgot password?
            </button>
          </div>

          <button className="w-full bg-yellow-400 text-gray-900 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition mt-6">
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-gray-400">
          Don't have an account?{' '}
          <button 
            className="text-yellow-400 hover:text-yellow-300 transition font-medium"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  )
}

export default login
