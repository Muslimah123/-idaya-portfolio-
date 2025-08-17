import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Database, 
  Brain, 
  Heart, 
  BarChart3, 
  Mic, 
  Github, 
  ExternalLink, 
  Calendar,
  Users,
  Target,
  TrendingUp
} from 'lucide-react';

function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  // Projects data
  const projects = [
    {
      id: 1,
      title: "Clinical Decision Support System (CDSS)",
      category: "healthcare",
      description: "Web-based malaria diagnosis using YOLOv10 architecture, processing digitized blood smear images with WHO-aligned metrics",
      tech: ["React", "Flask", "PostgreSQL", "YOLOv10", "Computer Vision"],
      status: "Active Development",
      impact: "Hospital Integration in Kigali",
      github: "#",
      demo: "#",
      color: "from-blue-500 to-cyan-500",
      icon: <Heart size={24} />
    },
    {
      id: 2,
      title: "KG-MedQA: Knowledge Graph Medical QA",
      category: "ai",
      description: "Medical question answering system combining LLMs with multi-hop knowledge graph traversal to reduce hallucinations",
      tech: ["Python", "LLMs", "Knowledge Graphs", "NLP"],
      status: "Research Phase",
      impact: "Improving Clinical Query Accuracy",
      github: "#",
      demo: "#",
      color: "from-purple-500 to-indigo-500",
      icon: <Brain size={24} />
    },
    {
      id: 3,
      title: "Input Optimization for Speech Inference",
      category: "ai",
      description: "Optimizing MFA-Conformer models using VoxCeleb dataset, achieving 3.41% EER with advanced preprocessing techniques",
      tech: ["Python", "PyTorch", "Signal Processing", "Deep Learning"],
      status: "Completed",
      impact: "23% Accuracy Improvement",
      github: "#",
      demo: "#",
      color: "from-green-500 to-emerald-500",
      icon: <Mic size={24} />
    },
    {
      id: 4,
      title: "Inventory Management API",
      category: "backend",
      description: "Scalable backend API with Node.js, Express, and PostgreSQL for cloud-based inventory management system",
      tech: ["Node.js", "Express", "PostgreSQL", "Cloud Services"],
      status: "Production",
      impact: "Enterprise-Ready Solution",
      github: "#",
      demo: "#",
      color: "from-orange-500 to-red-500",
      icon: <Database size={24} />
    },
    {
      id: 5,
      title: "Big Data Analytics for Socioeconomic Insights",
      category: "data",
      description: "Engineered data processing pipelines integrating diverse datasets including nightlight intensity and population density",
      tech: ["Python", "Pandas", "Scikit-learn", "ArcGIS Pro", "Statistical Modeling"],
      status: "Completed",
      impact: "87% Prediction Accuracy",
      github: "#",
      demo: "#",
      color: "from-teal-500 to-blue-500",
      icon: <BarChart3 size={24} />
    },
    {
      id: 6,
      title: "Time Series Forecasting for Wind Power",
      category: "data",
      description: "Developed ARIMA time series models for intraday wind power generation forecasting with advanced preprocessing",
      tech: ["Python", "Pandas", "ARIMA", "Matplotlib", "Time Series Analysis"],
      status: "Completed",
      impact: "23% Forecast Accuracy Improvement",
      github: "#",
      demo: "#",
      color: "from-emerald-500 to-green-500",
      icon: <TrendingUp size={24} />
    },
    {
      id: 7,
      title: "Voice-Enabled Sales Recording System",
      category: "software",
      description: "Python-based sales recording system using speech recognition technologies and NLP with MySQL database",
      tech: ["Python", "Speech Recognition", "NLP", "MySQL", "Agile Development"],
      status: "Completed",
      impact: "Full SDLC Implementation",
      github: "#",
      demo: "#",
      color: "from-pink-500 to-rose-500",
      icon: <Mic size={24} />
    }
  ];

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { key: 'all', label: 'All Projects', icon: <Code size={20} /> },
    { key: 'healthcare', label: 'Healthcare', icon: <Heart size={20} /> },
    { key: 'ai', label: 'AI/ML', icon: <Brain size={20} /> },
    { key: 'data', label: 'Data Analytics', icon: <BarChart3 size={20} /> },
    { key: 'backend', label: 'Backend', icon: <Database size={20} /> },
    { key: 'software', label: 'Software', icon: <Code size={20} /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active Development': return { color: '#60a5fa', background: 'rgba(96, 165, 250, 0.1)' };
      case 'Research Phase': return { color: '#a78bfa', background: 'rgba(167, 139, 250, 0.1)' };
      case 'Completed': return { color: '#34d399', background: 'rgba(52, 211, 153, 0.1)' };
      case 'Production': return { color: '#fb923c', background: 'rgba(251, 146, 60, 0.1)' };
      default: return { color: '#9ca3af', background: 'rgba(156, 163, 175, 0.1)' };
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Active Development': return <Target size={16} />;
      case 'Research Phase': return <Brain size={16} />;
      case 'Completed': return <TrendingUp size={16} />;
      case 'Production': return <Users size={16} />;
      default: return <Code size={16} />;
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
            gap: isMobile ? '12px' : '20px',
            flexWrap: isMobile ? 'wrap' : 'nowrap',
            justifyContent: 'center'
          }}>
                         <Link to="/" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Home</Link>
             <Link to="/about" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>About</Link>
             <Link to="/research" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Research</Link>
             <Link to="/projects" style={{ color: '#3B82F6', textDecoration: 'none', fontWeight: '600' }}>Projects</Link>
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
        {/* Page Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '50px'
        }}>
          <h1 style={{
            fontSize: isMobile ? 'clamp(2rem, 8vw, 2.5rem)' : 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: isMobile ? '16px' : '20px'
          }}>
            Project Portfolio
          </h1>
          <p style={{
            fontSize: isMobile ? '16px' : '18px',
            color: '#d1d5db',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
            padding: isMobile ? '0 16px' : '0'
          }}>
            A showcase of my technical projects spanning healthcare AI, data analytics, backend development, and software engineering
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: isMobile ? '12px' : '16px',
          marginBottom: isMobile ? '32px' : '40px',
          flexWrap: 'wrap'
        }}>
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              style={{
                padding: '12px 20px',
                borderRadius: '25px',
                background: activeFilter === category.key
                  ? 'linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)'
                  : 'rgba(31, 41, 55, 0.8)',
                color: activeFilter === category.key ? 'white' : '#d1d5db',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                border: activeFilter === category.key 
                  ? 'none' 
                  : '1px solid rgba(59, 130, 246, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== category.key) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== category.key) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.background = 'rgba(31, 41, 55, 0.8)';
                }
              }}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: isMobile ? '20px' : '30px',
          marginBottom: '50px'
        }}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: 'rgba(31, 41, 55, 0.9)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: '30px',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease',
                opacity: 0,
                animation: `fadeInUp 0.8s ease-out ${index * 0.1}s forwards`
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
              {/* Project Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '20px'
              }}>
                <div style={{
                  padding: '12px',
                  borderRadius: '12px',
                  background: `linear-gradient(135deg, ${project.color})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {project.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#f3f4f6',
                    marginBottom: '8px',
                    lineHeight: '1.3'
                  }}>
                    {project.title}
                  </h3>
                                     <div style={{
                     display: 'flex',
                     alignItems: 'center',
                     gap: '8px',
                     fontSize: '12px',
                     fontWeight: '600',
                     padding: '6px 12px',
                     borderRadius: '20px',
                     background: getStatusColor(project.status).background,
                     color: getStatusColor(project.status).color,
                     width: 'fit-content'
                   }}>
                    {getStatusIcon(project.status)}
                    {project.status}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p style={{
                color: '#d1d5db',
                lineHeight: '1.6',
                marginBottom: '20px',
                fontSize: '15px'
              }}>
                {project.description}
              </p>

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
                  <Target size={16} />
                  Impact: {project.impact}
                </div>
              </div>

              {/* Technologies */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '24px'
              }}>
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '500',
                      background: 'rgba(59, 130, 246, 0.1)',
                      color: '#3B82F6',
                      border: '1px solid rgba(59, 130, 246, 0.2)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '12px'
              }}>
                <a
                  href={project.github}
                  style={{
                    flex: 1,
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(31, 41, 55, 0.8)',
                    color: '#d1d5db',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                    e.target.style.borderColor = '#3B82F6';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(31, 41, 55, 0.8)';
                    e.target.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                  }}
                >
                  <Github size={16} />
                  Code
                </a>
                <a
                  href={project.demo}
                  style={{
                    flex: 1,
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          padding: '50px',
          background: 'rgba(31, 41, 55, 0.8)',
          borderRadius: '24px',
          border: '1px solid rgba(59, 130, 246, 0.2)'
        }}>
          <h3 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#f3f4f6',
            marginBottom: '16px'
          }}>
            Ready to Build Something Amazing?
          </h3>
          <p style={{
            color: '#d1d5db',
            marginBottom: '32px',
            fontSize: '18px',
            maxWidth: '600px',
            margin: '0 auto 32px auto',
            lineHeight: '1.6'
          }}>
            I'm passionate about creating innovative solutions that make a real impact. 
            Let's collaborate on your next project!
          </p>
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
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
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
              }}
            >
              <Calendar size={20} />
              Start a Project
            </Link>
            <Link
              to="/research"
              style={{
                border: '2px solid rgba(59, 130, 246, 0.3)',
                color: '#3B82F6',
                padding: '16px 32px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.3s ease',
                background: 'rgba(59, 130, 246, 0.05)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.background = 'rgba(59, 130, 246, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.background = 'rgba(59, 130, 246, 0.05)';
              }}
            >
              <Brain size={20} />
              Explore Research
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
