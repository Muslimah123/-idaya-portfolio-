import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Research() {
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
             <Link to="/research" style={{ color: '#3B82F6', textDecoration: 'none', fontWeight: '600' }}>Research</Link>
             <Link to="/projects" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Projects</Link>
             <Link to="/experience" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Experience</Link>
             <Link to="/leadership" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Leadership</Link>
             <Link to="/contact" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Contact</Link>
          </nav>
        </div>
      </header>

      <div style={{
        maxWidth: '1000px',
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
            fontSize: isMobile ? '32px' : '42px',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            AI-Augmented Software Engineering Research
          </h1>
          
          <p style={{
            fontSize: '20px',
            color: '#f3f4f6',
            textAlign: 'center',
            marginBottom: '10px',
            lineHeight: '1.4',
            fontWeight: '600'
          }}>
            Proactive, Context-Aware AI Collaborators for Full-Lifecycle Software Engineering
          </p>
          
          <p style={{
            fontSize: '16px',
            color: '#d1d5db',
            textAlign: 'center',
            marginBottom: '40px',
            lineHeight: '1.6',
            fontStyle: 'italic'
          }}>
            Building AI systems that understand entire architectures and autonomously perform high-value engineering tasks
          </p>

          {/* Research Focus Areas */}
          <div style={{
            marginBottom: '50px',
            padding: '30px',
                         background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)',
             borderRadius: '20px',
             border: '1px solid rgba(59, 130, 246, 0.2)'
          }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#f3f4f6',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              Research Focus Areas
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px'
            }}>
              {[
                'Large Language Models (LLMs)',
                'AI Agents & Multi-Agent Systems',
                'Program Synthesis',
                'Automated Software Maintenance',
                'Human-in-the-Loop Systems',
                'Knowledge Graph Integration'
              ].map((area, index) => (
                <div key={index} style={{
                  padding: '15px 20px',
                  background: 'rgba(55, 65, 81, 0.5)',
                  borderRadius: '10px',
                                     border: '1px solid rgba(59, 130, 246, 0.3)',
                   textAlign: 'center',
                   color: '#3B82F6',
                  fontWeight: '500'
                }}>
                  {area}
                </div>
              ))}
            </div>
          </div>

          <div style={{
            display: 'grid',
            gap: '30px'
          }}>
            {[
              {
                title: "KG-MedQA: Knowledge Graph-Enhanced Medical Question Answering",
                description: "Developing a medical question answering system that combines LLMs with multi-hop knowledge graph traversal to reduce hallucinations and improve factual consistency in complex clinical queries.",
                status: "In Progress",
                date: "Mar 2025",
                tags: ["LLMs", "Knowledge Graphs", "Healthcare AI", "Medical NLP"],
                details: [
                  "Multi-hop knowledge graph traversal for complex medical reasoning",
                  "Verification layer to reduce hallucinations in clinical contexts",
                  "Literature analysis on medical knowledge representation",
                  "Multi-relational reasoning pathways outperforming single-hop methods"
                ]
              },
              {
                title: "Clinical Decision Support System (CDSS) for Malaria Diagnosis",
                description: "Leading development of a web-based Clinical Decision Support System using YOLOv10 architecture for processing digitized blood smear images to identify parasite species and compute densities using WHO-aligned metrics.",
                status: "Ongoing",
                date: "May 2025 - Present",
                tags: ["Computer Vision", "Healthcare AI", "YOLOv10", "React", "Flask"],
                details: [
                  "Full-stack application with React frontend and Flask backend",
                  "PostgreSQL database with CORS for secure healthcare data integration",
                  "Literature reviews and data analysis for research paper publication",
                  "Prototype deployment in Kigali hospital systems with Rwanda Biomedical Center"
                ]
              },
              {
                title: "Input Optimization for Speech Inference",
                description: "Established baseline performance metrics for MFA-Conformer models using VoxCeleb dataset, achieving 3.41% EER through advanced preprocessing techniques and model optimization.",
                status: "Completed",
                date: "Jan 2025",
                tags: ["Speech Processing", "Deep Learning", "MFA-Conformer", "PyTorch"],
                details: [
                  "Noise reduction and feature normalization techniques",
                  "Mel-spectrogram embeddings and AM-Softmax loss implementation",
                  "Methodologies for background noise and speaker variation handling",
                  "3.41% Equal Error Rate (EER) achievement on VoxCeleb dataset"
                ]
              }
            ].map((project, index) => (
              <div key={index} style={{
                padding: '30px',
                background: 'rgba(55, 65, 81, 0.5)',
                borderRadius: '15px',
                                 border: '1px solid rgba(59, 130, 246, 0.2)',
                boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '15px'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      color: '#f3f4f6',
                      margin: '0 0 8px 0'
                    }}>
                      {project.title}
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#3B82F6',
                      margin: 0,
                      fontWeight: '500'
                    }}>
                      {project.date}
                    </p>
                  </div>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '500',
                    background: project.status === 'Ongoing' ? '#fef3c7' : 
                               project.status === 'In Progress' ? '#ddd6fe' :
                               project.status === 'Completed' ? '#d1fae5' : '#ddd6fe',
                    color: project.status === 'Ongoing' ? '#92400e' : 
                           project.status === 'In Progress' ? '#5b21b6' :
                           project.status === 'Completed' ? '#065f46' : '#5b21b6'
                  }}>
                    {project.status}
                  </span>
                </div>
                
                <p style={{
                  color: '#d1d5db',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  {project.description}
                </p>
                
                                 {/* Project Details */}
                 {project.details && (
                   <div style={{
                     marginBottom: '20px',
                     padding: '15px',
                     background: 'rgba(59, 130, 246, 0.05)',
                     borderRadius: '8px',
                     border: '1px solid rgba(59, 130, 246, 0.1)'
                   }}>
                     <h4 style={{
                       fontSize: '16px',
                       fontWeight: '600',
                       color: '#f3f4f6',
                       marginBottom: '10px'
                     }}>
                       Key Contributions:
                     </h4>
                     <ul style={{
                       margin: 0,
                       paddingLeft: '20px',
                       color: '#d1d5db',
                       fontSize: '14px',
                       lineHeight: '1.6'
                     }}>
                       {project.details.map((detail, detailIndex) => (
                         <li key={detailIndex} style={{ marginBottom: '5px' }}>
                           {detail}
                         </li>
                       ))}
                     </ul>
                   </div>
                 )}
                
                                 <div style={{
                   display: 'flex',
                   gap: '8px',
                   flexWrap: 'wrap'
                 }}>
                   {project.tags.map((tag, tagIndex) => (
                     <span key={tagIndex} style={{
                       padding: '6px 12px',
                       borderRadius: '6px',
                       fontSize: '12px',
                       background: 'rgba(59, 130, 246, 0.1)',
                       color: '#3B82F6',
                       fontWeight: '500'
                     }}>
                       {tag}
                     </span>
                   ))}
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Research;
