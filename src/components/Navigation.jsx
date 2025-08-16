import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';

const Navigation = () => {
  const { darkMode, toggleDarkMode, cardClasses, accentColor } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

           const navItems = [
           { name: 'Home', path: '/' },
           { name: 'About', path: '/about' },
           { name: 'Research', path: '/research' },
           { name: 'Projects', path: '/projects' },
           { name: 'Experience', path: '/experience' },
           { name: 'Leadership', path: '/leadership' },
           { name: 'Contact', path: '/contact' }
         ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      backdropFilter: 'blur(20px)',
      transition: 'all 0.3s ease',
      background: darkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)',
      borderBottom: 'none'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          >
            {/* Logo Circle with Initials */}
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: '800',
              color: 'white',
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
            }}>
              IS
            </div>
            
          </Link>
          
          {/* Desktop Navigation */}
          <div style={{
            display: 'none',
            '@media (min-width: 768px)': { display: 'flex' },
            gap: '32px'
          }}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: isActive(item.path) 
                    ? (darkMode ? '#60a5fa' : '#3b82f6')
                    : (darkMode ? '#d1d5db' : '#4b5563'),
                  fontWeight: isActive(item.path) ? '600' : '400',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.color = darkMode ? '#60a5fa' : '#3b82f6';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.color = isActive(item.path) 
                    ? (darkMode ? '#60a5fa' : '#3b82f6')
                    : (darkMode ? '#d1d5db' : '#4b5563');
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              style={{
                padding: '8px',
                borderRadius: '8px',
                background: darkMode ? '#1f2937' : '#f3f4f6',
                color: darkMode ? '#fbbf24' : '#4b5563',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-200 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden absolute top-16 left-0 right-0 ${cardClasses} border-b shadow-lg animate-fadeIn`}>
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive(item.path) 
                      ? `${accentColor} font-semibold` 
                      : `${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
