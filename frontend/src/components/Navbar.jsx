import React from "react";
import { Brain } from "lucide-react";
import { Link as ScrollLink } from "react-scroll"; // Rename Link from react-scroll
import { Link as RouterLink, useLocation } from "react-router-dom"; // Rename Link from react-router-dom

const Navbar = () => {
  const location = useLocation();
  const hideButtons =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="px-6 py-4 bg-black/20 backdrop-blur-lg flex items-center justify-between fixed top-0 w-full z-50">
      <div className="flex items-center space-x-6">
        <Brain className="h-8 w-8 text-yellow-400" />
        <span className="text-2xl font-bold text-yellow-400">QuizWiz</span>
      </div>

      {!hideButtons && (
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-8">
            <ScrollLink
              to="features"
              smooth={true}
              duration={900}
              className="cursor-pointer text-gray-300 hover:text-yellow-400 transition"
            >
              Features
            </ScrollLink>
            <ScrollLink
              to="how-to-play"
              smooth={true}
              duration={900}
              className="cursor-pointer text-gray-300 hover:text-yellow-400 transition"
            >
              How to Play
            </ScrollLink>
            <ScrollLink
              to="leaderboard"
              smooth={true}
              duration={900}
              className="cursor-pointer text-gray-300 hover:text-yellow-400 transition"
            >
              Leaderboard
            </ScrollLink>
          </div>
          <div className="flex gap-2">
            <RouterLink to="/login">
              <button className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition cursor-pointer">
                LogIn
              </button>
            </RouterLink>
            <RouterLink to="/signup">
              <button className="border-2 border-yellow-400 text-yellow-400 px-6 py-2 rounded-full font-semibold hover:bg-yellow-400/10 transition cursor-pointer flex items-center justify-center">
                Sign up
              </button>
            </RouterLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
