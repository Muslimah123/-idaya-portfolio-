import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function About() {
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
             {/* Logo Circle with Initials */}
             <div style={{
               width: '40px',
               height: '40px',
               borderRadius: '50%',
               background: 'linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               fontSize: '18px',
               fontWeight: '800',
               color: 'white',
               boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
             }}>
               IS
             </div>
             {/* Professional Title */}
             <div style={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'flex-start'
             }}>
               <span style={{
                 fontSize: '18px',
                 fontWeight: '700',
                 color: '#3B82F6',
                 lineHeight: '1.2'
               }}>
                 AI Researcher
               </span>
               <span style={{
                 fontSize: '14px',
                 fontWeight: '500',
                 color: '#9ca3af',
                 lineHeight: '1.2'
               }}>
                 Software Engineer
               </span>
             </div>
           </Link>
          <nav style={{
            display: 'flex',
            gap: isMobile ? '12px' : '20px',
            flexWrap: isMobile ? 'wrap' : 'nowrap',
            justifyContent: 'center'
          }}>
                         <Link to="/" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Home</Link>
             <Link to="/about" style={{ color: '#3B82F6', textDecoration: 'none', fontWeight: '600' }}>About</Link>
             <Link to="/research" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Research</Link>
             <Link to="/projects" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Projects</Link>
             <Link to="/experience" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Experience</Link>
             <Link to="/leadership" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Leadership</Link>
             <Link to="/contact" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Contact</Link>
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
          border: '1px solid rgba(59, 130, 246, 0.2)'
        }}>
          <h1 style={{
            fontSize: isMobile ? '32px' : '42px',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: isMobile ? '24px' : '30px',
            textAlign: 'center'
          }}>
            About Idaya Seidu
          </h1>
          
          {/* Photo and Introduction Section */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'center' : 'flex-start',
            gap: isMobile ? '24px' : '40px',
            marginBottom: isMobile ? '32px' : '40px',
            flexWrap: 'wrap'
          }}>
                         {/* Professional Photo */}
             <div style={{
               flex: isMobile ? 'none' : '0 0 200px',
               width: isMobile ? '180px' : 'auto',
               height: isMobile ? '220px' : '250px',
               borderRadius: '15px',
               border: '2px solid rgba(59, 130, 246, 0.3)',
               overflow: 'hidden',
               minWidth: isMobile ? '180px' : '200px',
               boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
             }}>
                             <img
                src="/profess.jpg"
                alt="Idaya Seidu - Professional Photo"
                 style={{
                   width: '100%',
                   height: '100%',
                   objectFit: 'cover',
                   objectPosition: 'center top'
                 }}
               />
             </div>
            
            {/* Introduction Text */}
            <div style={{
              flex: '1',
              minWidth: isMobile ? '280px' : '300px',
              fontSize: isMobile ? '16px' : '18px',
              lineHeight: '1.8',
              color: '#e5e7eb',
              textAlign: isMobile ? 'center' : 'left'
            }}>
              <p style={{ marginBottom: '24px' }}>
                Welcome! I'm <strong>Idaya Seidu</strong>, a passionate AI researcher and software engineer currently pursuing my <strong>MSc in Information Technology</strong> at Carnegie Mellon University Africa with a 3.70 GPA.
              </p>
              
              <p style={{ marginBottom: '24px' }}>
                My research focuses on <strong>AI-Augmented Software Engineering (AASE)</strong>, specifically developing proactive, context-aware AI collaborators that can understand entire software architectures and autonomously perform high-value engineering tasks throughout the development lifecycle.
              </p>
              
              <p style={{ marginBottom: '0' }}>
                I'm actively seeking <strong>PhD opportunities</strong> to deepen my expertise in building intelligent systems that bridge the gap between academic research and real-world software engineering applications.
              </p>
            </div>
          </div>
          
          {/* Education & Background */}
          <div style={{
            marginBottom: isMobile ? '32px' : '40px',
            padding: isMobile ? '24px' : '30px',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)',
            borderRadius: '15px',
            border: '1px solid rgba(59, 130, 246, 0.2)'
          }}>
            <h3 style={{
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: '600',
              color: '#f3f4f6',
              marginBottom: isMobile ? '16px' : '20px',
              textAlign: 'center'
            }}>
              Academic Journey
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: isMobile ? '16px' : '20px'
            }}>
              <div>
                <h4 style={{ fontWeight: '600', color: '#3B82F6', marginBottom: '8px' }}>
                  Carnegie Mellon University Africa
                </h4>
                <p style={{ margin: '0', color: '#d1d5db', fontSize: '16px' }}>
                  MSc Information Technology (2023-2025)<br/>
                  <strong>GPA: 3.70/4.00</strong><br/>
                  <em>Kigali, Rwanda</em>
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: '600', color: '#3B82F6', marginBottom: '8px' }}>
                  Ashesi University
                </h4>
                <p style={{ margin: '0', color: '#d1d5db', fontSize: '16px' }}>
                  BSc Computer Science (2019-2023)<br/>
                                     <strong>GPA: 3.49/4.00</strong><br/>
                  <em>Berekuso, Ghana</em>
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div style={{
            marginBottom: '40px',
            padding: '30px',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)',
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
              Technical Expertise
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              <div>
                <h4 style={{ fontWeight: '600', color: '#3B82F6', marginBottom: '10px' }}>
                  Programming Languages
                </h4>
                <p style={{ margin: '0', color: '#d1d5db', fontSize: '16px' }}>
                  Python, JavaScript, R, SQL, HTML/CSS
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: '600', color: '#3B82F6', marginBottom: '10px' }}>
                  Full-Stack Development
                </h4>
                <p style={{ margin: '0', color: '#d1d5db', fontSize: '16px' }}>
                  React.js, Flask, Node.js, Express, RESTful APIs
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: '600', color: '#3B82F6', marginBottom: '10px' }}>
                  AI/Machine Learning
                </h4>
                <p style={{ margin: '0', color: '#d1d5db', fontSize: '16px' }}>
                  PyTorch, TensorFlow, LLMs, Knowledge Graphs, Computer Vision
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: '600', color: '#3B82F6', marginBottom: '10px' }}>
                  Data & Databases
                </h4>
                <p style={{ margin: '0', color: '#d1d5db', fontSize: '16px' }}>
                  PostgreSQL, MySQL, Pandas, NumPy, Data Analysis
                </p>
              </div>
            </div>
          </div>

          {/* Recent Achievements */}
          <div style={{
            marginBottom: '40px',
            padding: '30px',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)',
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
              Recent Highlights
            </h3>
            <div style={{
              display: 'grid',
              gap: '15px'
            }}>
              <div style={{
                padding: '20px',
                background: 'rgba(55, 65, 81, 0.5)',
                borderRadius: '10px',
                border: '1px solid rgba(59, 130, 246, 0.2)'
              }}>
                <h4 style={{ fontWeight: '600', color: '#f3f4f6', marginBottom: '8px' }}>
                  🎓 Digital Humanism Summer School 2025
                </h4>
                <p style={{ margin: '0', color: '#d1d5db', fontSize: '14px' }}>
                  July 14-18, 2025 • Interdisciplinary program on technology and society
                </p>
              </div>
              <div style={{
                padding: '20px',
                background: 'rgba(55, 65, 81, 0.5)',
                borderRadius: '10px',
                border: '1px solid rgba(59, 130, 246, 0.2)'
              }}>
                <h4 style={{ fontWeight: '600', color: '#f3f4f6', marginBottom: '8px' }}>
                  📝 Research Papers Under Review
                </h4>
                <p style={{ margin: '0', color: '#d1d5db', fontSize: '14px' }}>
                  Two research papers currently under peer review in AI/Software Engineering
                </p>
              </div>
                              <div style={{
                  padding: '20px',
                  background: 'rgba(55, 65, 81, 0.5)',
                  borderRadius: '10px',
                  border: '1px solid rgba(59, 130, 246, 0.2)'
                }}>
                  <h4 style={{ fontWeight: '600', color: '#f3f4f6', marginBottom: '8px' }}>
                    🏆 Smart Africa Scholarship Fund
                  </h4>
                  <p style={{ margin: '0', color: '#d1d5db', fontSize: '14px' }}>
                    Full merit scholarship for graduate studies at CMU Africa (2023-2025)
                  </p>
                </div>
                <div style={{
                  padding: '20px',
                  background: 'rgba(55, 65, 81, 0.5)',
                  borderRadius: '10px',
                  border: '1px solid rgba(59, 130, 246, 0.2)'
                }}>
                  <h4 style={{ fontWeight: '600', color: '#f3f4f6', marginBottom: '8px' }}>
                    🎯 Mastercard Foundation Scholarship
                  </h4>
                  <p style={{ margin: '0', color: '#d1d5db', fontSize: '14px' }}>
                    Full merit scholarship for undergraduate studies | 2019-2023
                  </p>
                </div>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            marginTop: '40px'
          }}>
            <div style={{
              padding: '30px',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
              borderRadius: '15px',
              border: '1px solid rgba(59, 130, 246, 0.2)'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#f3f4f6',
                marginBottom: '15px'
              }}>
                Research Vision
              </h3>
              <p style={{
                color: '#d1d5db',
                lineHeight: '1.6'
              }}>
                Building AI systems that truly understand software architecture and can autonomously collaborate with engineers throughout the development lifecycle.
              </p>
            </div>
            
            <div style={{
              padding: '30px',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
              borderRadius: '15px',
              border: '1px solid rgba(59, 130, 246, 0.2)'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#f3f4f6',
                marginBottom: '15px'
              }}>
                Impact Focus
              </h3>
              <p style={{
                color: '#d1d5db',
                lineHeight: '1.6'
              }}>
                Bridging academic research with real-world applications, especially in healthcare AI and software engineering automation.
              </p>
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: '40px'
          }}>
            <Link 
              to="/contact"
              style={{
                background: 'linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)',
                color: 'white',
                padding: '15px 30px',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '16px',
                display: 'inline-block',
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
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
