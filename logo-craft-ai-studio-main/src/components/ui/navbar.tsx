import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';

export const Navbar: React.FC = () => {
  return (
    <header className="py-4 border-b bg-white">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-10">
          <Link to="/" className="text-xl font-bold text-indigo-600">LogoStudio AI</Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/generator" className="text-gray-600 hover:text-indigo-600 transition">
              Create Logo
            </Link>
            <Link to="/examples" className="text-gray-600 hover:text-indigo-600 transition">
              Examples
            </Link>
            <Link to="/features" className="text-gray-600 hover:text-indigo-600 transition">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-indigo-600 transition">
              Pricing
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-gray-600 hover:text-indigo-600 transition hidden md:inline-block">
            Log in
          </Link>
          <Button variant="default" size="sm" className="bg-indigo-600 hover:bg-indigo-700">
            Sign Up Free
          </Button>
        </div>
      </div>
    </header>
  );
}; 