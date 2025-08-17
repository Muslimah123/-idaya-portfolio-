import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function About() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const skills = {
    'AI & Machine Learning': ['PyTorch', 'TensorFlow', 'LLMs', 'Knowledge Graphs', 'Computer Vision', 'Neural Networks'],
    'Programming Languages': ['Python', 'JavaScript', 'Java', 'C++', 'SQL', 'TypeScript', 'R'],
    'Full-Stack Development': ['React.js', 'Node.js', 'Flask', 'Express', 'RESTful APIs', 'HTML/CSS'],
    'Data & Databases': ['PostgreSQL', 'MySQL', 'Pandas', 'NumPy', 'Data Analysis', 'MongoDB'],
    'Tools & DevOps': ['Git', 'Docker', 'AWS', 'Docker', 'CI/CD', 'Linux']
  };

  const achievements = [
    {
      icon: '🎓',
      title: 'Digital Humanism Summer School 2025',
      date: 'July 14-18, 2025',
      description: 'Interdisciplinary program on technology and society at TU Wien, Austria',
      category: 'Academic'
    },
    {
      icon: '📝',
      title: 'Research Papers Under Review',
      date: '2024-2025',
      description: 'Two research papers in AI-Augmented Software Engineering under peer review',
      category: 'Research'
    },
    {
      icon: '🏆',
      title: 'Smart Africa Scholarship Fund',
      date: '2023-2025',
      description: 'Full merit scholarship for graduate studies at CMU Africa',
      category: 'Scholarship'
    },
    {
      icon: '🎯',
      title: 'Mastercard Foundation Scholar',
      date: '2019-2023',
      description: 'Full merit scholarship for undergraduate studies at Ashesi University',
      category: 'Scholarship'
    },

  ];

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
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Enhanced Hero Section */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: isMobile ? '40px' : '60px',
          marginBottom: '40px',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Animated Background Elements */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 6s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-30%',
            left: '-15%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 8s ease-in-out infinite reverse'
          }} />

          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            gap: isMobile ? '32px' : '48px'
          }}>
            {/* Enhanced Profile Photo with Badge */}
            <div style={{ position: 'relative' }}>
              <div style={{
                width: isMobile ? '180px' : '220px',
                height: isMobile ? '220px' : '280px',
                borderRadius: '20px',
                border: '3px solid transparent',
                background: 'linear-gradient(45deg, #3B82F6, #A855F7, #EC4899)',
                padding: '3px',
                position: 'relative',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                animation: 'fadeInUp 1s ease-out'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '17px',
                  overflow: 'hidden',
                  background: '#1f2937'
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
              </div>
              
              {/* Open to PhD Badge */}
              <div style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '700',
                boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)',
                animation: 'pulse 2s ease-in-out infinite',
                border: '2px solid rgba(255, 255, 255, 0.2)'
              }}>
                🎯 Open to PhD
              </div>
            </div>

            {/* Enhanced Introduction */}
            <div style={{ flex: '1', textAlign: isMobile ? 'center' : 'left' }}>
              <h1 style={{
                fontSize: isMobile ? 'clamp(2rem, 8vw, 2.5rem)' : 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '16px',
                lineHeight: '1.2',
                animation: 'fadeInUp 1s ease-out 0.2s both'
              }}>
                About Me
              </h1>
              
              <p style={{
                fontSize: isMobile ? '16px' : '18px',
                lineHeight: '1.8',
                color: '#e5e7eb',
                marginBottom: '24px',
                animation: 'fadeInUp 1s ease-out 0.4s both'
              }}>
                Welcome! I'm <strong style={{ color: '#3B82F6' }}>Idaya Seidu</strong>, a passionate AI researcher and software engineer who recently graduated with my <strong style={{ color: '#A855F7' }}>MSc in Information Technology</strong> from Carnegie Mellon University Africa with a <strong style={{ color: '#10b981' }}>3.70 GPA</strong>.
              </p>
              
                             <p style={{
                 fontSize: isMobile ? '16px' : '18px',
                 lineHeight: '1.8',
                 color: '#e5e7eb',
                 marginBottom: '24px',
                 animation: 'fadeInUp 1s ease-out 0.6s both'
               }}>
                 My research interest lies in <strong style={{ color: '#EC4899' }}>AI-Augmented Software Engineering (AASE)</strong>, specifically developing proactive, context-aware AI collaborators that can understand entire software architectures and autonomously perform high-value engineering tasks throughout the development lifecycle.
               </p>
              
              <p style={{
                fontSize: isMobile ? '16px' : '18px',
                lineHeight: '1.8',
                color: '#e5e7eb',
                animation: 'fadeInUp 1s ease-out 0.8s both'
              }}>
                I'm actively seeking <strong style={{ color: '#3B82F6' }}>PhD opportunities</strong> to deepen my expertise in building intelligent systems that bridge the gap between academic research and real-world software engineering applications.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Education Section */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: isMobile ? '32px' : '40px',
          marginBottom: '40px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
          animation: 'fadeInUp 1s ease-out 1s both'
        }}>
          <h3 style={{
            fontSize: isMobile ? '24px' : '28px',
            fontWeight: '700',
            color: '#f3f4f6',
            marginBottom: '24px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            🎓 Academic Journey
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '24px'
          }}>
            {/* CMU Africa */}
            <div style={{
              background: 'rgba(59, 130, 246, 0.1)',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}>
              <h4 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#3B82F6',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                🏛️ MSc Information Technology
              </h4>
              <p style={{
                fontSize: '16px',
                fontWeight: '600',
                color: 'white',
                marginBottom: '8px'
              }}>
                Carnegie Mellon University Africa
              </p>
              <p style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '12px'
              }}>
                Kigali, Rwanda • 2023-2025 (Graduated May 2025)
              </p>
              <p style={{
                fontSize: '16px',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '8px'
              }}>
                <strong>GPA: 3.70/4.00</strong>
              </p>
              <p style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: '1.5'
              }}>
                Focus: AI-Augmented Software Engineering, Machine Learning, Software Architecture
              </p>
            </div>

            {/* Ashesi University */}
            <div style={{
              background: 'rgba(168, 85, 247, 0.1)',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 20px 40px rgba(168, 85, 247, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}>
              <h4 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#A855F7',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                🎓 BSc Computer Science
              </h4>
              <p style={{
                fontSize: '16px',
                fontWeight: '600',
                color: 'white',
                marginBottom: '8px'
              }}>
                Ashesi University
              </p>
              <p style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '12px'
              }}>
                Berekuso, Ghana • 2019-2023
              </p>
              <p style={{
                fontSize: '16px',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '8px'
              }}>
                <strong>GPA: 3.49/4.00</strong>
              </p>
              <p style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: '1.5'
              }}>
                Focus: Software Engineering, Data Structures, Algorithms, Web Development
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Skills Section */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: isMobile ? '32px' : '40px',
          marginBottom: '40px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
          animation: 'fadeInUp 1s ease-out 1.2s both'
        }}>
          <h3 style={{
            fontSize: isMobile ? '24px' : '28px',
            fontWeight: '700',
            color: '#f3f4f6',
            marginBottom: '32px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            ⚡ Technical Expertise
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {Object.entries(skills).map(([category, items], index) => (
              <div
                key={category}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  animation: `fadeInUp 0.8s ease-out ${1.4 + index * 0.1}s both`
                }}
                onMouseEnter={(e) => {
                  setActiveSkill(category);
                  e.target.style.transform = 'translateY(-5px)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                  setActiveSkill(null);
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.03)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: activeSkill === category ? '#3B82F6' : '#e5e7eb',
                  marginBottom: '16px',
                  transition: 'color 0.3s ease'
                }}>
                  {category}
                </h4>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '6px 12px',
                        fontSize: '13px',
                        borderRadius: '12px',
                        background: activeSkill === category 
                          ? 'rgba(59, 130, 246, 0.2)' 
                          : 'rgba(255, 255, 255, 0.05)',
                        color: activeSkill === category 
                          ? '#60a5fa' 
                          : '#9ca3af',
                        border: `1px solid ${activeSkill === category 
                          ? 'rgba(59, 130, 246, 0.3)' 
                          : 'rgba(255, 255, 255, 0.1)'}`,
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Achievements Timeline */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: isMobile ? '32px' : '40px',
          marginBottom: '40px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
          animation: 'fadeInUp 1s ease-out 1.4s both'
        }}>
          <h3 style={{
            fontSize: isMobile ? '24px' : '28px',
            fontWeight: '700',
            color: '#f3f4f6',
            marginBottom: '32px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            🏆 Recent Achievements
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {achievements.map((achievement, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  padding: '24px',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  animation: `slideInLeft 0.8s ease-out ${1.6 + index * 0.1}s both`
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateX(10px)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.borderColor = 'rgba(168, 85, 247, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateX(0)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.03)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                {/* Category Badge */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '11px',
                  fontWeight: '600',
                  background: achievement.category === 'Academic' ? 'rgba(59, 130, 246, 0.2)' :
                             achievement.category === 'Research' ? 'rgba(168, 85, 247, 0.2)' :
                             'rgba(16, 185, 129, 0.2)',
                  color: achievement.category === 'Academic' ? '#60a5fa' :
                         achievement.category === 'Research' ? '#a78bfa' :
                         '#34d399',
                  border: `1px solid ${achievement.category === 'Academic' ? 'rgba(59, 130, 246, 0.3)' :
                                   achievement.category === 'Research' ? 'rgba(168, 85, 247, 0.3)' :
                                   'rgba(16, 185, 129, 0.3)'}`
                }}>
                  {achievement.category}
                </div>

                {/* Icon and Content */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px'
                }}>
                  <div style={{
                    fontSize: '48px',
                    lineHeight: '1',
                    animation: 'float 3s ease-in-out infinite'
                  }}>
                    {achievement.icon}
                  </div>
                  
                  <div style={{ flex: '1' }}>
                    <h4 style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#f3f4f6',
                      marginBottom: '8px',
                      lineHeight: '1.3'
                    }}>
                      {achievement.title}
                    </h4>
                    <p style={{
                      fontSize: '14px',
                      color: '#9ca3af',
                      marginBottom: '8px',
                      fontWeight: '500'
                    }}>
                      📅 {achievement.date}
                    </p>
                    <p style={{
                      color: '#d1d5db',
                      lineHeight: '1.6',
                      fontSize: '15px'
                    }}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Vision Section */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: isMobile ? '32px' : '40px',
          marginBottom: '40px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
          animation: 'fadeInUp 1s ease-out 1.8s both'
        }}>
          <h3 style={{
            fontSize: isMobile ? '24px' : '28px',
            fontWeight: '700',
            color: '#f3f4f6',
            marginBottom: '32px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            🚀 Vision & Impact
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            <div style={{
              background: 'rgba(59, 130, 246, 0.1)',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}>
              <h4 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#3B82F6',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                🔬 Research Vision
              </h4>
              <p style={{
                color: '#d1d5db',
                lineHeight: '1.6',
                fontSize: '16px'
              }}>
                Building AI systems that truly understand software architecture and can autonomously collaborate with engineers throughout the development lifecycle, revolutionizing how we build software.
              </p>
            </div>
            
            <div style={{
              background: 'rgba(168, 85, 247, 0.1)',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 20px 40px rgba(168, 85, 247, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}>
              <h4 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#A855F7',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                🌍 Impact Focus
              </h4>
              <p style={{
                color: '#d1d5db',
                lineHeight: '1.6',
                fontSize: '16px'
              }}>
                Bridging academic research with real-world applications, especially in healthcare AI and software engineering automation, creating solutions that make a difference.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div style={{
          textAlign: 'center',
          padding: '40px',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
          animation: 'fadeInUp 1s ease-out 2s both'
        }}>
          <h2 style={{
            fontSize: isMobile ? '24px' : '28px',
            fontWeight: '700',
            color: 'white',
            marginBottom: '16px'
          }}>
            Let's Connect! 🚀
          </h2>
          <p style={{
            fontSize: isMobile ? '16px' : '18px',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '32px',
            maxWidth: '600px',
            margin: '0 auto 32px auto'
          }}>
            I'm always open to discussing research opportunities, collaborations, and innovative projects.
          </p>
          <Link 
            to="/contact"
            style={{
              background: 'linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '16px',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.05)';
              e.target.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
            }}
          >
            Get In Touch ✨
          </Link>
        </div>
      </div>

      {/* Add CSS animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}

export default About;