import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full h-screen bg-gradient-to-r from-blue-500 to-blue-700 flex flex-col">
     
      <nav className="w-full flex justify-between items-center px-6 py-4 md:px-10">
       
        <div className="text-white text-2xl font-bold">
          <img src="./7133364.png" alt="Logo" className="w-24" />
        </div>

        <div className="hidden md:flex space-x-6 text-white">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/search" className="hover:text-gray-300">Search</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>

 
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

  
        <Link to="/search" className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
          Get Started
        </Link>
      </nav>

   
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-blue-600 text-white py-4">
          <Link to="/" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/search" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Search</Link>
          <Link to="/contact" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}

      <div className="flex flex-grow flex-col md:flex-row items-center justify-center px-10">
    
        <div className="text-white text-center md:text-left md:w-1/2 space-y-4">
          <h1 className="text-5xl font-bold">
            Weather App <span className="text-orange-400">Website</span>
          </h1>
          <p className="text-lg text-gray-200">
            Welcome to WeatherApp! See what's happening in your city.
          </p>
          <Link to="/search" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg inline-block">
            Get Started
          </Link>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img src="./Learn-about-Weather.jpg" 
               alt="Weather Information" 
               className="w-full max-w-lg object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </header>
  );
}
