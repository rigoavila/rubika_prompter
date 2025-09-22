import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../../constants/landing';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
             <a href="/" className="text-xl md:text-2xl font-bold">
                <span style={{color: '#E65100'}}>Rubika</span> <span className="text-gray-800 dark:text-gray-100">Learnings Tools</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-slate-700 dark:text-slate-300 hover:text-rubika-orange dark:hover:text-rubika-yellow transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA and Mobile Menu Button */}
          <div className="flex items-center">
            <div className="hidden md:block flex-shrink-0">
              <button
                onClick={() => navigate('/login')}
                className="bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Ingresar
              </button>
            </div>
            <div className="md:hidden ml-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Abrir menú principal</span>
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {link.name}
              </a>
            ))}
             <div className="pt-4 pb-2 border-t border-slate-200 dark:border-slate-700">
                 <button
                    onClick={() => {
                        navigate('/login');
                        setIsMenuOpen(false);
                    }}
                    className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                    Ingresar
                </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
