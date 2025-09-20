import React, { useState } from 'react';
import './Project.css';

// Define TypeScript interfaces
interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  imageUrl: string;
  technologies: string[];
  features: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

// Sample project data
const projectsData: Project[] = [
  {
    id: 1,
    title: "Online Barcode Generator",
    description: "",
    detailedDescription: "",
    imageUrl: "src/assets/barcodes.jpg",
    technologies: ["Java", "ReactJS"],
    features: [
    ],
    liveDemoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Forum Mobile App",
    description: "",
    detailedDescription: "",
    imageUrl: "src/assets/forumapp.jpg",
    technologies: ["Kotlin", "Jetpack compose", "Firebase"],
    features: [
    ],
    liveDemoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Online Shopping Platform (Developing)",
    description: "",
    detailedDescription: "",
    imageUrl: "src/assets/onlineshopping.png",
    technologies: ["Spring boot", "ReactJS", "MySQL"],
    features: [
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    liveDemoUrl: "#",
    githubUrl: "#"
  }
];

// Project Card Component
const ProjectCard: React.FC<ProjectCardProps> = ({ project/*, onClick */}) => {
  return (
    <div className="project-card" /*onClick={onClick}*/>
      <img src={project.imageUrl} alt={project.title} className="project-img" />
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tech">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        
      </div>
    </div>
  );
};

// Project Modal Component
const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <img src={project.imageUrl} alt={project.title} className="modal-img" />
        <div className="modal-details">
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-desc">{project.detailedDescription}</p>
          
          <div className="modal-features">
            <h3>Features</h3>
            <ul className="features-list">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="project-tech">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
          
          <div className="project-links">
            {project.liveDemoUrl && (
              <a href={project.liveDemoUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} className="project-link outline" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Portfolio Component
const Project: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="page-section">
      <div className="container">
        <header>
          <h1>My Projects</h1>
          <p className="subtitle">A collection of my recent work</p>
        </header>
        
        <div className="projects-grid">
          {projectsData.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => handleCardClick(project)} 
            />
          ))}
        </div>
        
        <ProjectModal 
          project={selectedProject} 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
        />
        
      </div>
    </section>
  );
};

export default Project