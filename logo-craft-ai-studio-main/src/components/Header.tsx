
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-indigo-600" />
          <span className="font-display font-medium text-lg">LogoCraft AI</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm hover:text-indigo-600 transition-colors">Features</a>
          <a href="#examples" className="text-sm hover:text-indigo-600 transition-colors">Examples</a>
          <a href="#pricing" className="text-sm hover:text-indigo-600 transition-colors">Pricing</a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:flex text-sm font-normal">
            Log in
          </Button>
          <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-sm font-normal">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
