
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 md:px-20 py-4 relative z-50 animate-fade-in">
      <Link to="/" className="text-3xl font-light">DEVMAILS</Link>
      
      {/* Mobile menu button */}
      <Button 
        variant="ghost" 
        className="md:hidden" 
        onClick={toggleMenu}
      >
        <Menu className="h-6 w-6" />
      </Button>
      
      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center gap-12">
        <Link to="/company" className="text-sm tracking-wider hover:text-gray-400 transition-colors">COMPANY</Link>
        <Link to="/features" className="text-sm tracking-wider hover:text-gray-400 transition-colors">FEATURES</Link>
        <Link to="/resources" className="text-sm tracking-wider hover:text-gray-400 transition-colors">RESOURCES</Link>
        <Link to="/docs" className="text-sm tracking-wider hover:text-gray-400 transition-colors">DOCS</Link>
      </nav>
      
      {/* Sign in button */}
      <Link to="/signin">
        <Button className="hidden md:block bg-secondary text-secondary-foreground hover:bg-white rounded-full px-8">
          SIGN IN
        </Button>
      </Link>
      
      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 p-4 flex flex-col space-y-4 border-t border-gray-800 md:hidden">
          <Link to="/company" className="text-sm tracking-wider hover:text-gray-400 transition-colors py-2">COMPANY</Link>
          <Link to="/features" className="text-sm tracking-wider hover:text-gray-400 transition-colors py-2">FEATURES</Link>
          <Link to="/resources" className="text-sm tracking-wider hover:text-gray-400 transition-colors py-2">RESOURCES</Link>
          <Link to="/docs" className="text-sm tracking-wider hover:text-gray-400 transition-colors py-2">DOCS</Link>
          <Link to="/signin">
            <Button className="bg-secondary text-secondary-foreground hover:bg-white rounded-full">
              SIGN IN
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
