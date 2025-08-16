import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Code, ChevronDown, Mail, Linkedin, Github, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';

function Home() {
  const { darkMode, themeClasses, cardClasses, accentColor } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation classes
  const fadeInUp = `transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`;
  const fadeInLeft = `transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`;
  const fadeInRight = `transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`;

  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      background: darkMode 
        ? 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #374151 100%)'
        : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    }}>
      {/* Animated Background Orbs */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <div style={{
          position: 'absolute',
          top: '40px',
          left: '40px',
          width: '300px',
          height: '300px',
          background: darkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'pulse 4s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '0px',
          right: '16px',
          width: '300px',
          height: '300px',
          background: darkMode ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0.1)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'pulse 4s ease-in-out infinite',
          animationDelay: '2s'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-32px',
          left: '80px',
          width: '300px',
          height: '300px',
          background: darkMode ? 'rgba(236, 72, 153, 0.2)' : 'rgba(236, 72, 153, 0.1)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'pulse 4s ease-in-out infinite',
          animationDelay: '4s'
        }}></div>
      </div>
      
      {/* Grid Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: darkMode ? 0.05 : 0.1,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='${darkMode ? '%23FFFFFF' : '%23000000'}' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Main Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 16px',
        paddingTop: '80px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          {/* Hero Section */}
          <div style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease-out',
            marginBottom: '60px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px',
              gap: '16px'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                padding: '12px',
                borderRadius: '50%',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                animation: 'pulse 2s ease-in-out infinite'
              }}>
                <Sparkles color="white" size={24} />
              </div>
              <span style={{
                fontSize: '18px',
                fontWeight: '600',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                AI-Augmented Software Engineering
              </span>
            </div>
            
            <h1 style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: '800',
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}>
              Idaya Seidu
            </h1>
            
            <div style={{
              fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
              color: darkMode ? '#d1d5db' : '#4b5563',
              marginBottom: '20px',
              fontWeight: '500'
            }}>
              Full-Stack Engineer & AI Researcher
            </div>
            
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: darkMode ? '#e5e7eb' : '#374151',
              maxWidth: '800px',
              margin: '0 auto 48px auto',
              lineHeight: '1.7',
              padding: '0 20px',
              textAlign: 'center'
            }}>
              Building the future of <span style={{
                fontWeight: '600',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>AI-Augmented Software Engineering</span> through 
              research in LLMs, autonomous systems, and medical AI. Aspiring to pursue PhD research focused on 
              proactive, context-aware AI collaborators.
            </p>
          </div>

          {/* CTA Buttons */}
          <div style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'all 1s ease-out 0.3s',
            marginBottom: '48px'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: window.innerWidth < 640 ? 'column' : 'row',
              gap: '24px',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Link 
                to="/research"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  color: 'white',
                  padding: '16px 40px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
                }}
              >
                <Brain size={22} />
                <span>Explore Research</span>
                <ArrowRight size={18} />
              </Link>
              <Link 
                to="/projects"
                style={{
                  border: `2px solid ${darkMode ? '#6b7280' : '#d1d5db'}`,
                  color: darkMode ? '#d1d5db' : '#374151',
                  padding: '16px 40px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: darkMode ? 'rgba(31, 41, 55, 0.5)' : 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.background = darkMode ? 'rgba(31, 41, 55, 0.8)' : 'rgba(255, 255, 255, 0.9)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.background = darkMode ? 'rgba(31, 41, 55, 0.5)' : 'rgba(255, 255, 255, 0.7)';
                }}
              >
                <Code size={22} />
                <span>View Projects</span>
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 1s ease-out 0.5s',
            marginBottom: '48px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '32px',
              marginBottom: '48px'
            }}>
              <a 
                href="mailto:iseidu@andrew.cmu.edu" 
                style={{
                  padding: '16px',
                  borderRadius: '50%',
                  background: darkMode ? 'rgba(31, 41, 55, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1) rotate(12deg)';
                  e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1) rotate(0deg)';
                  e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                }}
              >
                <Mail size={24} color={darkMode ? '#60a5fa' : '#3b82f6'} />
              </a>
              <a 
                href="https://linkedin.com/in/idaya-seidu-6a600219" 
                style={{
                  padding: '16px',
                  borderRadius: '50%',
                  background: darkMode ? 'rgba(31, 41, 55, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1) rotate(12deg)';
                  e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1) rotate(0deg)';
                  e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                }}
              >
                <Linkedin size={24} color={darkMode ? '#60a5fa' : '#3b82f6'} />
              </a>
              <a 
                href="https://github.com/Muslimah123" 
                style={{
                  padding: '16px',
                  borderRadius: '50%',
                  background: darkMode ? 'rgba(31, 41, 55, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1) rotate(12deg)';
                  e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1) rotate(0deg)';
                  e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                }}
              >
                <Github size={24} color={darkMode ? '#60a5fa' : '#3b82f6'} />
              </a>
            </div>
          </div>
          {/* Portfolio Quick Access */}
          <div style={{
            background: darkMode ? 'rgba(31, 41, 55, 0.8)' : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(20px)',
            border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
            borderRadius: '16px',
            padding: '32px',
            maxWidth: '500px',
            margin: '0 auto',
            boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
            transition: 'all 0.3s ease',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '0.7s'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '700',
              marginBottom: '24px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textAlign: 'center'
            }}>
              Portfolio Sections
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                   {[
                       { name: 'About Me', path: '/about', icon: '👨‍💼', desc: 'My journey & expertise' },
                       { name: 'Research Projects', path: '/research', icon: '🔬', desc: 'AI & ML research' },
                       { name: 'Development Work', path: '/projects', icon: '💻', desc: 'Software projects' },
                       { name: 'Experience', path: '/experience', icon: '🚀', desc: 'Professional timeline' },
                       { name: 'Leadership', path: '/leadership', icon: '🌟', desc: 'Mentoring & community' },
                       { name: 'Publications', path: '/publications', icon: '📝', desc: 'Research papers' },
                       { name: 'Contact Information', path: '/contact', icon: '📞', desc: 'Get in touch' }
                     ].map((item, index) => (
                <Link 
                  key={index} 
                  to={item.path}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    border: '1px solid transparent',
                    textDecoration: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.02)';
                    e.target.style.background = darkMode 
                      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)'
                      : 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)';
                    e.target.style.borderColor = darkMode ? '#3b82f6' : '#93c5fd';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.background = 'transparent';
                    e.target.style.borderColor = 'transparent';
                  }}
                >
                  <div style={{ fontSize: '24px', transition: 'transform 0.3s ease' }}>
                    {item.icon}
                  </div>
                                     <div style={{ flex: 1 }}>
                     <div style={{
                       fontWeight: '600',
                       color: darkMode ? '#f3f4f6' : '#111827',
                       marginBottom: '2px'
                     }}>{item.name}</div>
                     <div style={{
                       fontSize: '14px',
                       color: darkMode ? '#9ca3af' : '#6b7280'
                     }}>{item.desc}</div>
                   </div>
                                     <ArrowRight size={18} color={darkMode ? '#60a5fa' : '#3b82f6'} style={{ 
                     opacity: 0,
                     transform: 'translateX(0)',
                     transition: 'all 0.3s ease'
                   }} />
                </Link>
              ))}
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div style={{
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'bounce 2s infinite'
          }}>
            <Link to="/about" style={{ textDecoration: 'none' }}>
                             <ChevronDown 
                 size={32} 
                 color={darkMode ? '#9ca3af' : '#6b7280'} 
                 style={{
                   cursor: 'pointer',
                   transition: 'color 0.3s ease'
                 }}
                 onMouseEnter={(e) => {
                   e.target.style.color = darkMode ? '#60a5fa' : '#3b82f6';
                 }}
                 onMouseLeave={(e) => {
                   e.target.style.color = darkMode ? '#9ca3af' : '#6b7280';
                 }}
               />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

