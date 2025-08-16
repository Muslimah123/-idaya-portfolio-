import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, GraduationCap, FlaskConical, MapPin, Calendar, ArrowRight, ExternalLink } from 'lucide-react';

function Experience() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  // Experience and Education timeline
  const experiences = [
    {
      title: "Research Associate",
      company: "Carnegie Mellon University Africa",
      location: "Kigali, Rwanda",
      period: "May 2025 - Present",
      type: "research",
      highlights: [
        "Leading CDSS development for malaria diagnosis",
        "Building full-stack healthcare applications",
        "Collaborating with Rwanda Biomedical Center",
        "Publishing research papers"
      ]
    },
    {
      title: "Backend Development Intern",
      company: "Quarks Group Ltd",
      location: "Kigali, Rwanda",
      period: "Jul 2025 - Sep 2025",
      type: "industry",
      highlights: [
        "Developed scalable Inventory Management API",
        "Collaborated on cloud-based services",
        "Focused on clean code and team collaboration",
        "Gained enterprise development experience"
      ]
    },
    {
      title: "MSc Information Technology",
      company: "Carnegie Mellon University Africa",
      location: "Kigali, Rwanda",
      period: "Aug 2023 - May 2025",
      type: "education",
      highlights: [
                 "GPA: 3.70/4.00",
        "Smart Africa Scholarship Recipient",
        "Specialized in AI and Software Engineering",
        "Thesis on AI-Augmented Software Engineering"
      ],
      coursework: [
        "Data Inference and Applied Machine Learning",
        "Data Structures and Algorithms",
        "Big Data Science",
        "Software Architecture and Design",
        "DevOps",
        "Information Security",
        "ICT Entrepreneurship Seminar",
        "ICT Business Economics & Finance"
      ]
    },
    {
      title: "BSc Computer Science",
      company: "Ashesi University",
      location: "Berekuso, Ghana",
      period: "Aug 2019 - Jun 2023",
      type: "education",
      highlights: [
                 "GPA: 3.49/4.00",
        "Computer Science Foundation",
        "Leadership Development Program",
        "Design and Entrepreneurship Focus"
      ],
      coursework: [
        "Data Structures and Algorithms",
        "Discrete Mathematics",
        "Linear Algebra",
        "Advanced Database",
        "Data Science",
        "Statistics and Probability",
        "Foundations of Design and Entrepreneurship I & II",
        "Leadership Development"
      ]
    },
    {
      title: "Data Analyst Intern",
      company: "Ktech Hub & Technologies",
      location: "Accra, Ghana",
      period: "May 2022 - Jul 2022",
      type: "industry",
      highlights: [
        "Engineered data processing workflows",
        "Improved analysis efficiency by 35%",
        "Developed automated reporting dashboards",
        "Analyzed health, finance, and consumer data"
      ]
    }
  ];

  const [activeFilter, setActiveFilter] = useState('all');

  const filteredExperiences = activeFilter === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.type === activeFilter);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'research': return <FlaskConical size={20} />;
      case 'industry': return <Briefcase size={20} />;
      case 'education': return <GraduationCap size={20} />;
      default: return <Briefcase size={20} />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'research': return '#3B82F6';
      case 'industry': return '#10B981';
      case 'education': return '#8B5CF6';
      default: return '#6B7280';
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'research': return 'Research';
      case 'industry': return 'Industry';
      case 'education': return 'Education';
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
             <Link to="/about" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>About</Link>
             <Link to="/research" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Research</Link>
             <Link to="/projects" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Projects</Link>
             <Link to="/experience" style={{ color: '#3B82F6', textDecoration: 'none', fontWeight: '600' }}>Experience</Link>
             <Link to="/leadership" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Leadership</Link>
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
            Experience & Education
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#d1d5db',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            My professional journey through research, industry, and academic achievements - building expertise in AI-Augmented Software Engineering
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
          {['all', 'research', 'industry', 'education'].map((filter) => (
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
              {filter === 'all' ? 'All Experience' : getTypeLabel(filter)}
            </button>
          ))}
        </div>

        {/* Experience Timeline */}
        <div style={{
          position: 'relative'
        }}>
          {/* Timeline Line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '0',
            bottom: '0',
            width: '3px',
            background: 'linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)',
            transform: 'translateX(-50%)',
            zIndex: 1
          }}></div>

          {filteredExperiences.map((experience, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                marginBottom: '60px',
                opacity: 0,
                animation: `fadeInUp 0.8s ease-out ${index * 0.2}s forwards`
              }}
            >
              {/* Timeline Node */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '20px',
                width: '16px',
                height: '16px',
                background: getTypeColor(experience.type),
                borderRadius: '50%',
                transform: 'translateX(-50%)',
                zIndex: 2,
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
              }}></div>

              {/* Experience Card */}
              <div style={{
                background: 'rgba(31, 41, 55, 0.9)',
                backdropFilter: 'blur(20px)',
                borderRadius: '16px',
                padding: '30px',
                marginLeft: index % 2 === 0 ? '0' : 'auto',
                marginRight: index % 2 === 0 ? 'auto' : '0',
                width: '45%',
                border: `1px solid ${getTypeColor(experience.type)}20`,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
              }}
              >
                {/* Type Badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 12px',
                  background: `${getTypeColor(experience.type)}20`,
                  color: getTypeColor(experience.type),
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600',
                  marginBottom: '16px'
                }}>
                  {getTypeIcon(experience.type)}
                  {getTypeLabel(experience.type)}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#f3f4f6',
                  marginBottom: '8px'
                }}>
                  {experience.title}
                </h3>

                {/* Company */}
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#3B82F6',
                  marginBottom: '8px'
                }}>
                  {experience.company}
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
                    {experience.location}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={16} />
                    {experience.period}
                  </div>
                </div>

                {/* Highlights */}
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {experience.highlights.map((highlight, hIndex) => (
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
                        background: getTypeColor(experience.type),
                        borderRadius: '50%',
                        marginTop: '8px',
                        flexShrink: 0
                      }}></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Coursework for Education */}
                {experience.coursework && (
                  <div style={{
                    marginTop: '20px',
                    padding: '16px',
                    background: 'rgba(59, 130, 246, 0.05)',
                    borderRadius: '12px',
                    border: '1px solid rgba(59, 130, 246, 0.2)'
                  }}>
                    <h5 style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#3B82F6',
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <GraduationCap size={16} />
                      Key Coursework
                    </h5>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '8px'
                    }}>
                      {experience.coursework.map((course, cIndex) => (
                        <div
                          key={cIndex}
                          style={{
                            fontSize: '12px',
                            color: '#d1d5db',
                            padding: '6px 10px',
                            background: 'rgba(59, 130, 246, 0.1)',
                            borderRadius: '8px',
                            border: '1px solid rgba(59, 130, 246, 0.2)'
                          }}
                        >
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
            Ready to Collaborate?
          </h3>
          <p style={{
            color: '#d1d5db',
            marginBottom: '24px',
            fontSize: '16px'
          }}>
            I'm always open to new research opportunities, industry collaborations, and academic partnerships.
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
              to="/research"
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
              View Research
              <ExternalLink size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
