import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Code, Heart, Calendar, MapPin, ArrowRight, ExternalLink, Award, BookOpen, Users2 } from 'lucide-react';

function Leadership() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  // Leadership and Activities data
  const activities = [
    {
      title: "Volunteer Instructor",
      organization: "Ashesi University",
      location: "Berekuso, Ghana",
      period: "Sep 2021 - May 2023",
      type: "mentoring",
      highlights: [
        "Developed and delivered web development curriculum (HTML, CSS, JavaScript) to high school students",
        "Created interactive coding exercises that improved student engagement and learning outcomes",
        "Mentored 15+ students in building their first web applications and understanding software development principles"
      ],
      impact: "15+ Students Mentored",
      icon: <BookOpen size={24} />
    },
    {
      title: "Technical Operations Volunteer",
      organization: "DevFest Kigali",
      location: "Kigali, Rwanda",
      period: "Nov 2024",
      type: "community",
      highlights: [
        "Coordinated technical setup for developer workshops and ensured seamless technology integration",
        "Assisted with managing participant experience at this major tech community event",
        "Supported the organization of one of Rwanda's largest developer conferences"
      ],
      impact: "Major Tech Event Support",
      icon: <Users2 size={24} />
    }
  ];

  const [activeFilter, setActiveFilter] = React.useState('all');

  const filteredActivities = activeFilter === 'all' 
    ? activities 
    : activities.filter(activity => activity.type === activeFilter);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'mentoring': return <BookOpen size={20} />;
      case 'community': return <Users2 size={20} />;
      default: return <Heart size={20} />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'mentoring': return '#3B82F6';
      case 'community': return '#10B981';
      default: return '#8B5CF6';
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'mentoring': return 'Mentoring';
      case 'community': return 'Community';
      default: return 'Other';
    }
  };

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
            gap: '20px'
          }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Home</Link>
            <Link to="/about" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>About</Link>
            <Link to="/research" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Research</Link>
            <Link to="/projects" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Projects</Link>
            <Link to="/experience" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Experience</Link>
            <Link to="/leadership" style={{ color: '#3B82F6', textDecoration: 'none', fontWeight: '600' }}>Leadership</Link>
            <Link to="/contact" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Contact</Link>
          </nav>
        </div>
      </header>

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {/* Page Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '50px'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '20px'
          }}>
            Leadership & Activities
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#d1d5db',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Making a positive impact through mentoring, community service, and knowledge sharing in technology education
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}>
          {['all', 'mentoring', 'community'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: '12px 24px',
                borderRadius: '25px',
                background: activeFilter === filter
                  ? 'linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)'
                  : 'rgba(31, 41, 55, 0.8)',
                color: activeFilter === filter ? 'white' : '#d1d5db',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                border: activeFilter === filter 
                  ? 'none' 
                  : '1px solid rgba(59, 130, 246, 0.3)'
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== filter) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== filter) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.background = 'rgba(31, 41, 55, 0.8)';
                }
              }}
            >
              {filter === 'all' ? 'All Activities' : getTypeLabel(filter)}
            </button>
          ))}
        </div>

        {/* Activities Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '30px',
          marginBottom: '50px'
        }}>
          {filteredActivities.map((activity, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(31, 41, 55, 0.9)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: '30px',
                border: `1px solid ${getTypeColor(activity.type)}20`,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease',
                opacity: 0,
                animation: `fadeInUp 0.8s ease-out ${index * 0.2}s forwards`
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px)';
                e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
              }}
            >
              {/* Activity Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '20px'
              }}>
                <div style={{
                  padding: '12px',
                  borderRadius: '12px',
                  background: `${getTypeColor(activity.type)}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `1px solid ${getTypeColor(activity.type)}30`
                }}>
                  {activity.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#f3f4f6',
                    marginBottom: '8px',
                    lineHeight: '1.3'
                  }}>
                    {activity.title}
                  </h3>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '12px',
                    fontWeight: '600',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    background: `${getTypeColor(activity.type)}20`,
                    color: getTypeColor(activity.type),
                    width: 'fit-content'
                  }}>
                    {getTypeIcon(activity.type)}
                    {getTypeLabel(activity.type)}
                  </div>
                </div>
              </div>

              {/* Organization */}
              <h4 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#3B82F6',
                marginBottom: '8px'
              }}>
                {activity.organization}
              </h4>

              {/* Location and Period */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '20px',
                fontSize: '14px',
                color: '#9ca3af'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={16} />
                  {activity.location}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={16} />
                  {activity.period}
                </div>
              </div>

              {/* Impact */}
              <div style={{
                background: 'rgba(59, 130, 246, 0.1)',
                padding: '12px 16px',
                borderRadius: '12px',
                marginBottom: '20px',
                border: '1px solid rgba(59, 130, 246, 0.2)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#3B82F6',
                  fontWeight: '600',
                  fontSize: '14px'
                }}>
                  <Award size={16} />
                  Impact: {activity.impact}
                </div>
              </div>

              {/* Highlights */}
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {activity.highlights.map((highlight, hIndex) => (
                  <li
                    key={hIndex}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      marginBottom: '12px',
                      color: '#d1d5db',
                      lineHeight: '1.6'
                    }}
                  >
                    <div style={{
                      width: '6px',
                      height: '6px',
                      background: getTypeColor(activity.type),
                      borderRadius: '50%',
                      marginTop: '8px',
                      flexShrink: 0
                    }}></div>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px',
          padding: '40px',
          background: 'rgba(31, 41, 55, 0.8)',
          borderRadius: '20px',
          border: '1px solid rgba(59, 130, 246, 0.2)'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#f3f4f6',
            marginBottom: '16px'
          }}>
            Ready to Make an Impact?
          </h3>
          <p style={{
            color: '#d1d5db',
            marginBottom: '24px',
            fontSize: '16px'
          }}>
            I'm passionate about mentoring, community service, and sharing knowledge. Let's collaborate on educational initiatives or community projects.
          </p>
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link
              to="/contact"
              style={{
                background: 'linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)',
                color: 'white',
                padding: '14px 28px',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 15px 30px rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 20px rgba(59, 130, 246, 0.3)';
              }}
            >
              Get In Touch
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/experience"
              style={{
                border: '2px solid rgba(59, 130, 246, 0.3)',
                color: '#3B82F6',
                padding: '14px 28px',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                background: 'rgba(59, 130, 246, 0.05)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.background = 'rgba(59, 130, 246, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.background = 'rgba(59, 130, 246, 0.05)';
              }}
            >
              View Experience
              <ExternalLink size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leadership;
