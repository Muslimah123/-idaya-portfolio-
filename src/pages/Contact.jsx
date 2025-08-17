import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0B1120 0%, #111827 100%)',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: isMobile ? '12px' : '20px'
    }}>
      {/* Navigation Header */}
      <header style={{
        padding: '20px 0',
        marginBottom: '40px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: isMobile ? 'center' : 'space-between',
          alignItems: 'center',
          gap: isMobile ? '16px' : '0'
        }}>
                     <Link to="/" style={{
             display: 'flex',
             alignItems: 'center',
             gap: '12px',
             textDecoration: 'none'
           }}>
             
           </Link>
          <nav style={{
            display: 'flex',
            gap: isMobile ? '12px' : '20px',
            flexWrap: isMobile ? 'wrap' : 'nowrap',
            justifyContent: 'center'
          }}>
                         <Link to="/" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Home</Link>
             <Link to="/about" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>About</Link>
             <Link to="/research" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Research</Link>
             <Link to="/projects" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Projects</Link>
             <Link to="/experience" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Experience</Link>
             <Link to="/leadership" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Leadership</Link>
             <Link to="/contact" style={{ color: '#3B82F6', textDecoration: 'none', fontWeight: '600' }}>Contact</Link>
          </nav>
        </div>
      </header>

      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{
          background: 'rgba(31, 41, 55, 0.9)',
          backdropFilter: 'blur(20px)',
          padding: isMobile ? '32px' : '60px',
          borderRadius: '20px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          animation: 'fadeInUp 1s ease-out',
          border: '1px solid rgba(96, 165, 250, 0.2)'
        }}>
          <h1 style={{
            fontSize: '42px',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            Get In Touch
          </h1>
          
          <p style={{
            fontSize: '18px',
            color: '#d1d5db',
            textAlign: 'center',
            marginBottom: '20px',
            lineHeight: '1.6'
          }}>
            I'd love to hear from you! Whether you're interested in AI-Augmented Software Engineering research collaboration, PhD opportunities, or discussing innovative software engineering solutions.
          </p>
          
          <p style={{
            fontSize: '16px',
            color: '#3B82F6',
            textAlign: 'center',
            marginBottom: '40px',
            lineHeight: '1.6',
            fontWeight: '500'
          }}>
            Open to research collaborations • PhD opportunities • Industry partnerships
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginBottom: '40px'
          }}>
            <div style={{
              padding: '30px',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
              borderRadius: '15px',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '30px',
                marginBottom: '15px'
              }}>📧</div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#f3f4f6',
                marginBottom: '10px'
              }}>
                Email
              </h3>
              <p style={{
                color: '#d1d5db',
                fontSize: '16px'
              }}>
                iseidu@andrew.cmu.edu
              </p>
            </div>
            
            <div style={{
              padding: '30px',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
              borderRadius: '15px',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '30px',
                marginBottom: '15px'
              }}>💼</div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#f3f4f6',
                marginBottom: '10px'
              }}>
                LinkedIn
              </h3>
              <a 
                href="https://www.linkedin.com/in/idaya-seidu-6a6002195/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#3B82F6',
                  fontSize: '16px',
                  textDecoration: 'none'
                }}
              >
                linkedin.com/in/idaya-seidu-6a600219
              </a>
            </div>
            
            <div style={{
              padding: '30px',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
              borderRadius: '15px',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '30px',
                marginBottom: '15px'
              }}>🐙</div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#f3f4f6',
                marginBottom: '10px'
              }}>
                GitHub
              </h3>
              <a 
                href="https://github.com/Muslimah123"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#3B82F6',
                  fontSize: '16px',
                  textDecoration: 'none'
                }}
              >
                github.com/Muslimah123
              </a>
            </div>
            
            <div style={{
              padding: '30px',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
              borderRadius: '15px',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '30px',
                marginBottom: '15px'
              }}>📱</div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#f3f4f6',
                marginBottom: '10px'
              }}>
                Phone
              </h3>
              <p style={{
                color: '#d1d5db',
                fontSize: '16px'
              }}>
                +233-207-611-117
              </p>
            </div>
          </div>

                     <div style={{
             background: 'rgba(55, 65, 81, 0.5)',
             padding: '30px',
             borderRadius: '15px',
             border: '1px solid rgba(59, 130, 246, 0.2)'
           }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#f3f4f6',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              Send a Message
            </h3>
            
            <form style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px'
              }}>
                                 <input
                   type="text"
                   placeholder="Your Name"
                   style={{
                     padding: '15px',
                     border: '1px solid rgba(59, 130, 246, 0.3)',
                     borderRadius: '8px',
                     fontSize: '16px',
                     outline: 'none',
                     transition: 'border-color 0.3s ease',
                     background: 'rgba(31, 41, 55, 0.8)',
                     color: '#f3f4f6'
                   }}
                 />
                                 <input
                   type="email"
                   placeholder="Your Email"
                   style={{
                     padding: '15px',
                     border: '1px solid rgba(59, 130, 246, 0.3)',
                     borderRadius: '8px',
                     fontSize: '16px',
                     outline: 'none',
                     transition: 'border-color 0.3s ease',
                     background: 'rgba(31, 41, 55, 0.8)',
                     color: '#f3f4f6'
                   }}
                 />
              </div>
              
                             <input
                 type="text"
                 placeholder="Subject"
                 style={{
                   padding: '15px',
                   border: '1px solid rgba(59, 130, 246, 0.3)',
                   borderRadius: '8px',
                   fontSize: '16px',
                   outline: 'none',
                   transition: 'border-color 0.3s ease',
                   background: 'rgba(31, 41, 55, 0.8)',
                   color: '#f3f4f6'
                 }}
               />
              
                             <textarea
                 placeholder="Your Message"
                 rows="5"
                 style={{
                   padding: '15px',
                   border: '1px solid rgba(59, 130, 246, 0.3)',
                   borderRadius: '8px',
                   fontSize: '16px',
                   outline: 'none',
                   resize: 'vertical',
                   fontFamily: 'inherit',
                   transition: 'border-color 0.3s ease',
                   background: 'rgba(31, 41, 55, 0.8)',
                   color: '#f3f4f6'
                 }}
               ></textarea>
              
                             <button
                 type="submit"
                 style={{
                   background: 'linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)',
                   color: 'white',
                   padding: '15px 30px',
                   border: 'none',
                   borderRadius: '8px',
                   fontSize: '16px',
                   fontWeight: '600',
                   cursor: 'pointer',
                   transition: 'transform 0.3s ease',
                   boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)'
                 }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
