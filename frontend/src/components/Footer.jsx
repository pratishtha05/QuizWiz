import React from 'react'
import { Brain} from 'lucide-react';

const Footer = () => {
  return (
    <>
      <div className="bg-black/40 text-gray-400 py-12 px-6">
        <div className="grid md:grid-cols-4 gap-8">

          {/* first */}
          <div> 
            <div className="flex items-center space-x-2 text-white mb-4">
              <Brain className="h-6 w-6 text-yellow-400" />
              <span className="text-xl font-bold">QuizWiz</span>
            </div>
            <p>The ultimate multiplayer quiz platform.</p>
          </div>

          {/* second */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-yellow-400">Features</a></li>
              <li><a href="#how-to-play" className="hover:text-yellow-400">How to Play</a></li>
              <li><a href="#leaderboard" className="hover:text-yellow-400">Leaderboard</a></li>
            </ul>
          </div>

          {/* third */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#faq" className="hover:text-yellow-400">FAQ</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
              <li><a href="#help" className="hover:text-yellow-400">Help Center</a></li>
            </ul>
          </div>

          {/* fourth */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#privacy" className="hover:text-yellow-400">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-yellow-400">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; 2024 QuizWiz. All rights reserved.</p>
        </div>

      </div>
    </>
  )
}

export default Footer
