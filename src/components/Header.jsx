import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 shadow-xl border-b-4 border-teal-300 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-800 via-emerald-700 to-cyan-700 bg-clip-text text-transparent font-serif tracking-tight">
                Serene International School
              </h1>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-10">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group font-semibold text-gray-800 hover:text-teal-800 transition-all duration-300 font-sans text-lg"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-teal-100">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-teal-700 font-semibold py-3 px-4 rounded-lg hover:bg-teal-50 transition-all duration-200 border-l-4 border-transparent hover:border-teal-400 font-sans text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;