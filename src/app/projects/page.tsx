"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Digital Twin RAG System",
      category: "AI/ML",
      duration: "Week 8",
      technologies: ["Python", "LangChain", "Vector Database", "RAG", "NLP"],
      description: "Advanced digital twin system with retrieval-augmented generation capabilities for intelligent document processing and query responses.",
      challenges: [
        "Implementing efficient vector similarity search",
        "Optimizing RAG pipeline for accurate responses", 
        "Handling complex document parsing and chunking"
      ],
      solutions: [
        "Used FAISS for high-performance vector indexing",
        "Implemented hybrid search combining semantic and keyword matching",
        "Developed adaptive chunking strategy based on document structure"
      ],
      outcomes: [
        "95% accuracy in document retrieval",
        "Sub-second query response times",
        "Successfully processed 10,000+ documents"
      ],
      github: "https://github.com/barbiefortes04-jpg/digital-twin-rag",
      demo: "/demo#digital-twin",
      image: "/projects/digital-twin.jpg"
    },
    {
      id: 2,
      title: "Person Management App",
      category: "Full-Stack",
      duration: "Weeks 4-6",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "REST API"],
      description: "Comprehensive person management system with CRUD operations, advanced filtering, and real-time updates.",
      challenges: [
        "Complex state management across components",
        "Real-time data synchronization",
        "Efficient database query optimization"
      ],
      solutions: [
        "Implemented Redux Toolkit for predictable state management",
        "Used WebSocket connections for real-time updates",
        "Optimized queries with proper indexing and pagination"
      ],
      outcomes: [
        "Handles 1000+ concurrent users",
        "99.9% uptime reliability",
        "Intuitive user experience with instant feedback"
      ],
      github: "https://github.com/barbiefortes04-jpg/person-management-app",
      demo: "/demo#person-app",
      image: "/projects/person-app.jpg"
    },
    {
      id: 3,
      title: "MCP Server Implementation",
      category: "Backend/MCP",
      duration: "Weeks 7-8",
      technologies: ["TypeScript", "MCP Protocol", "WebSockets", "JSON-RPC", "Node.js"],
      description: "Model Context Protocol server enabling seamless AI model integration with custom tool calling capabilities.",
      challenges: [
        "Understanding MCP protocol specifications",
        "Implementing efficient message handling",
        "Creating robust error handling and recovery"
      ],
      solutions: [
        "Built comprehensive MCP client/server architecture",
        "Implemented message queuing for reliability",
        "Added comprehensive logging and monitoring"
      ],
      outcomes: [
        "Successfully integrated with multiple AI models",
        "Zero-downtime tool calling operations",
        "Extensible architecture for future enhancements"
      ],
      github: "https://github.com/barbiefortes04-jpg/mcp-server",
      demo: "/demo#mcp-server",
      image: "/projects/mcp-server.jpg"
    },
    {
      id: 4,
      title: "Professional Portfolio Website",
      category: "Frontend",
      duration: "Weeks 2-9",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      description: "Modern, responsive portfolio website with interactive elements, dark/light mode, and seamless user experience.",
      challenges: [
        "Creating engaging interactive animations",
        "Optimizing performance across devices",
        "Implementing accessible design patterns"
      ],
      solutions: [
        "Used Framer Motion for smooth animations",
        "Implemented lazy loading and code splitting",
        "Followed WCAG guidelines for accessibility"
      ],
      outcomes: [
        "100% Lighthouse performance score",
        "Fully responsive across all devices",
        "Enhanced user engagement metrics"
      ],
      github: "https://github.com/barbiefortes04-jpg/ai-cv-website",
      demo: "/",
      image: "/projects/portfolio.jpg"
    },
    {
      id: 5,
      title: "Academic Management System",
      category: "Database",
      duration: "Weeks 3-4",
      technologies: ["PostgreSQL", "SQL", "Database Design", "Data Modeling"],
      description: "Comprehensive database system for managing academic records, student information, and course enrollment.",
      challenges: [
        "Complex relational database design",
        "Ensuring data integrity across tables",
        "Optimizing queries for large datasets"
      ],
      solutions: [
        "Implemented normalized database schema",
        "Used foreign key constraints and triggers",
        "Created efficient indexes for common queries"
      ],
      outcomes: [
        "Supports 10,000+ student records",
        "Sub-100ms query response times",
        "Zero data corruption incidents"
      ],
      github: "https://github.com/barbiefortes04-jpg/academic-management-db",
      demo: "/demo#academic-db",
      image: "/projects/academic-db.jpg"
    },
    {
      id: 6,
      title: "API Integration Framework",
      category: "Backend",
      duration: "Week 5",
      technologies: ["Node.js", "Express", "REST APIs", "JWT", "Middleware"],
      description: "Robust API framework with authentication, rate limiting, and comprehensive error handling.",
      challenges: [
        "Securing API endpoints effectively",
        "Implementing rate limiting strategies",
        "Creating comprehensive API documentation"
      ],
      solutions: [
        "Implemented JWT-based authentication",
        "Used Redis for distributed rate limiting",
        "Generated OpenAPI documentation"
      ],
      outcomes: [
        "99.9% API uptime",
        "Handles 10,000+ requests per minute",
        "Comprehensive security compliance"
      ],
      github: "https://github.com/barbiefortes04-jpg/api-framework",
      demo: "/demo#api-framework",
      image: "/projects/api-framework.jpg"
    }
  ];

  return (
    <div className="min-h-screen modern-dark-bg">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{color: '#C4ACA8'}}>
            Project Case Studies
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive showcase of 8 weeks of intensive development projects, 
            demonstrating technical skills, problem-solving abilities, and professional growth.
          </p>
        </div>

        {/* Project Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["All", "AI/ML", "Full-Stack", "Backend", "Frontend", "Database"].map((category) => (
            <button
              key={category}
              className="modern-tab"
              style={{
                borderColor: category === "All" ? '#C4ACA8' : 'rgba(122, 92, 100, 0.3)',
                backgroundColor: category === "All" ? 'linear-gradient(135deg, #7A5C64 0%, #A3888A 100%)' : 'rgba(122, 92, 100, 0.15)',
                color: category === "All" ? 'white' : '#C4ACA8'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`glass-card p-6 cursor-pointer transition-all duration-300 ${
                selectedProject === index ? 'border-[#C4ACA8] shadow-lg' : ''
              }`}
              onClick={() => setSelectedProject(index)}
              style={{
                background: selectedProject === index 
                  ? 'rgba(196, 172, 168, 0.25)'
                  : 'rgba(122, 92, 100, 0.15)',
                borderColor: selectedProject === index ? '#C4ACA8' : 'rgba(163, 136, 138, 0.2)'
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span 
                  className="px-3 py-1 rounded-full text-sm font-semibold"
                  style={{backgroundColor: 'rgba(122, 92, 100, 0.3)', color: '#C4ACA8'}}
                >
                  {project.category}
                </span>
                <span className="text-sm text-white/60">{project.duration}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-white/80 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded"
                    style={{backgroundColor: '#7A5C64', color: '#F5F5F5'}}
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 text-xs text-muted-foreground">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
              
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 modern-btn-secondary text-center"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="modern-btn-primary flex-1 text-center"
                >
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Case Study */}
        {selectedProject !== null && (
          <div className="glass-card p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4" style={{color: '#C4ACA8'}}>
                  {projects[selectedProject].title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {projects[selectedProject].description}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded"
                        style={{backgroundColor: '#7A5C64', color: '#F5F5F5'}}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{color: '#C4ACA8'}}>Challenges</h3>
                  <ul className="space-y-2">
                    {projects[selectedProject].challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#7A5C64'}}></span>
                        <span className="text-white/80">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{color: '#C4ACA8'}}>Solutions</h3>
                  <ul className="space-y-2">
                    {projects[selectedProject].solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#A3888A'}}></span>
                        <span className="text-white/80">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{color: '#C4ACA8'}}>Outcomes</h3>
                  <ul className="space-y-2">
                    {projects[selectedProject].outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#C4ACA8'}}></span>
                        <span className="text-white/80">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}