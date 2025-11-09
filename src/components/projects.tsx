"use client"

import { useState } from "react"
import { Github, ExternalLink, Calendar, Star, Zap, Code, Award, Cpu, Eye, Filter } from "lucide-react"

const projects = [
  {
    title: "AI-Powered CV Website",
    description: "This comprehensive portfolio website showcasing modern web development skills with Next.js, TypeScript, and Tailwind CSS. Features responsive design, dark mode, and beautiful animations with a unique Bubblegum Violet theme.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
    github: "https://github.com/barbiefortes04-jpg/ai-cv-website",
    demo: "https://jherilyn-fortes-cv.vercel.app",
    date: "2024",
    category: "projects",
    featured: true,
    isCapstone: true
  },
  {
    title: "University Course Management System",
    description: "A web-based system for managing courses, students, and grades. Built as an academic project using modern web technologies with user authentication and role-based access.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "JWT Auth"],
    github: "https://github.com/barbiefortes04-jpg/course-management",
    demo: "https://spup-course-management.vercel.app",
    date: "2024",
    category: "projects",
    featured: true
  },
  {
    title: "Personal Finance Tracker",
    description: "A responsive web application to track personal expenses and income. Features data visualization with charts and budget planning tools.",
    tech: ["JavaScript", "Chart.js", "Local Storage", "CSS3", "HTML5"],
    github: "https://github.com/barbiefortes04-jpg/finance-tracker",
    demo: "https://jf-finance-tracker.netlify.app",
    date: "2024",
    category: "projects",
    featured: true
  },
  {
    title: "Library Management System",
    description: "Desktop application for managing library books, members, and borrowing records. Developed using Java with MySQL database integration.",
    tech: ["Java", "MySQL", "Swing", "JDBC", "NetBeans"],
    github: "https://github.com/barbiefortes04-jpg/library-system",
    demo: "#",
    date: "2023",
    category: "projects",
    featured: false
  },
  {
    title: "Student Portfolio Website",
    description: "Personal portfolio website showcasing academic projects and technical skills. Built with focus on responsive design and performance optimization.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "GitHub Pages"],
    github: "https://github.com/barbiefortes04-jpg/portfolio",
    demo: "https://barbiefortes04-jpg.github.io/portfolio",
    date: "2023",
    category: "projects",
    featured: false
  }
]

const certificates = [
  {
    title: "Web Development Fundamentals",
    description: "Comprehensive course covering HTML5, CSS3, JavaScript, and responsive design principles. Includes hands-on projects and modern development practices.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git"],
    issuer: "Coursera",
    demo: "#",
    date: "2024",
    category: "certificates",
    verified: true
  },
  {
    title: "React Developer Certification",
    description: "Advanced React concepts including hooks, context API, state management, and building scalable applications. Focus on modern React development patterns.",
    tech: ["React", "Hooks", "Context API", "Redux", "Testing"],
    issuer: "Meta",
    demo: "#",
    date: "2024",
    category: "certificates",
    verified: true
  },
  {
    title: "Introduction to Database Management",
    description: "Database design principles, SQL fundamentals, and database optimization techniques. Covers both relational and NoSQL database concepts.",
    tech: ["SQL", "MySQL", "MongoDB", "Database Design", "Optimization"],
    issuer: "IBM",
    demo: "#",
    date: "2023",
    category: "certificates",
    verified: true
  }
]

const techStack = [
  {
    title: "Frontend Development",
    description: "Modern frontend technologies for building responsive and interactive user interfaces.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    level: "Advanced",
    experience: "2+ years",
    category: "tech-stack"
  },
  {
    title: "Backend Development",
    description: "Server-side technologies for building robust and scalable web applications.",
    tech: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs", "JWT"],
    level: "Intermediate",
    experience: "1+ years",
    category: "tech-stack"
  },
  {
    title: "Tools & Deployment",
    description: "Development tools and platforms for version control, testing, and deployment.",
    tech: ["Git", "GitHub", "Vercel", "Netlify", "VS Code", "Chrome DevTools"],
    level: "Advanced",
    experience: "2+ years",
    category: "tech-stack"
  },
  {
    title: "Design & UI/UX",
    description: "Design tools and principles for creating beautiful and user-friendly interfaces.",
    tech: ["Figma", "Adobe XD", "Responsive Design", "Accessibility", "User Research"],
    level: "Intermediate",
    experience: "1+ years",
    category: "tech-stack"
  }
]

const tabs = [
  { id: "projects", label: "Projects", icon: Code, count: projects.length },
  { id: "certificates", label: "Certificates", icon: Award, count: certificates.length },
  { id: "tech-stack", label: "Tech Stack", icon: Cpu, count: techStack.length }
]

export function Projects() {
  const [activeTab, setActiveTab] = useState("projects")
  const [filterFeatured, setFilterFeatured] = useState(false)

  const getTabContent = () => {
    switch (activeTab) {
      case "projects":
        const filteredProjects = filterFeatured ? projects.filter(p => p.featured) : projects
        return (
          <div className="space-y-8">
            {/* Filter Toggle */}
            <div className="flex justify-center">
              <button
                onClick={() => setFilterFeatured(!filterFeatured)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                  filterFeatured 
                    ? 'bg-gradient-to-r from-[#A37E84] to-[#CDADAB] text-white border-transparent' 
                    : 'text-[#A37E84]'
                }`}
                style={{
                  borderColor: filterFeatured ? 'transparent' : 'rgba(163, 126, 132, 0.5)'
                }}
              >
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {filterFeatured ? 'Show All' : 'Featured Only'}
                </span>
              </button>
            </div>

            {/* Projects Grid */}
            <div className="space-y-8">
              {/* Featured Project - Large Card */}
              {filteredProjects.length > 0 && (
                <div className="asym-grid">
                  <div className="asym-full">
                    <ProjectCard project={filteredProjects[0]} isLarge={true} />
                  </div>
                </div>
              )}
              
              {/* Regular Projects */}
              {filteredProjects.length > 1 && (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredProjects.slice(1).map((project, index) => (
                    <ProjectCard key={index} project={project} isLarge={false} />
                  ))}
                </div>
              )}
            </div>
          </div>
        )
      
      case "certificates":
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <CertificateCard key={index} certificate={cert} />
            ))}
          </div>
        )
      
      case "tech-stack":
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {techStack.map((tech, index) => (
              <TechStackCard key={index} techItem={tech} />
            ))}
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <section id="projects" className="py-20 diagonal-separator-bottom" style={{backgroundColor: '#2a1b22'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{color: '#C4ACA8'}}>
            Portfolio Showcase
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto" style={{color: '#C4ACA8'}}>
            Explore my work across projects, certifications, and technical expertise
          </p>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="glass-card p-3 rounded-2xl backdrop-blur-xl">
              <div className="flex space-x-3">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`modern-tab flex items-center space-x-2 font-medium transition-all duration-300 ${
                        activeTab === tab.id ? 'active' : ''
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{tab.label}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        activeTab === tab.id
                          ? 'bg-white/20 text-white'
                          : ''
                      }`}
                      style={{
                        backgroundColor: activeTab === tab.id ? 'rgba(255, 255, 255, 0.2)' : 'rgba(122, 92, 100, 0.2)',
                        color: activeTab === tab.id ? '#FFFFFF' : '#C4ACA8'
                      }}>
                        {tab.count}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="min-h-[600px]">
            {getTabContent()}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, isLarge }: { project: any, isLarge: boolean }) {
  return (
    <div className={`glass-card floating-module transition-all duration-400 group ${
      project.featured ? 'ring-1' : ''
    } ${isLarge ? 'p-8' : 'p-6'} h-full`}
    style={{
      borderColor: 'rgba(163, 126, 132, 0.6)',
      ...(project.featured && { 
        '--tw-ring-color': 'rgba(163, 126, 132, 0.3)',
        '--tw-ring-opacity': '1'
      })
    }}>
      {/* Project Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2">
          <h3 className={`${isLarge ? 'text-2xl' : 'text-xl'} font-semibold transition-colors`}
          style={{color: '#FFFFFF'}}>
            {project.title}
          </h3>
          {project.isCapstone && (
            <div className="bg-gradient-to-r from-[#7A5C64] to-[#A3888A] p-1.5 rounded-lg">
              <Star className="w-4 h-4 text-white" />
            </div>
          )}
          {project.featured && !project.isCapstone && (
            <div className="bg-gradient-to-r from-[#A3888A] to-[#7A5C64] p-1.5 rounded-lg">
              <Zap className="w-4 h-4 text-white" />
            </div>
          )}
        </div>
        <div className="flex items-center space-x-1 text-sm" style={{color: '#C4ACA8'}}>
          <Calendar className="w-4 h-4" style={{color: '#C4ACA8'}} />
          <span>{project.date}</span>
        </div>
      </div>
      
      {/* Project Description */}
      <p className={`mb-6 leading-relaxed ${isLarge ? 'text-base' : 'text-sm'}`} style={{color: '#FFFFFF'}}>
        {project.description}
      </p>
      
      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech: string, techIndex: number) => (
          <span 
            key={techIndex}
            className="px-3 py-1 text-xs rounded-full font-medium transition-colors modern-glow"
            style={{
              backgroundColor: 'rgba(122, 92, 100, 0.1)',
              borderColor: 'rgba(122, 92, 100, 0.5)',
              color: '#C4ACA8',
              border: '1px solid'
            }}
          >
            {tech}
          </span>
        ))}
      </div>
      
      {/* Project Links */}
      <div className="flex space-x-4 mt-auto">
        <a 
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 transition-colors group/link"
          style={{color: '#C4ACA8'}}
        >
          <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
          <span className="text-sm font-medium">Code</span>
        </a>
        {project.demo !== "#" && (
          <a 
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 transition-colors group/link"
            style={{color: '#C4ACA8'}}
          >
            <Eye className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
            <span className="text-sm font-medium">Demo</span>
          </a>
        )}
      </div>
    </div>
  )
}

function CertificateCard({ certificate }: { certificate: any }) {
  return (
    <div className="glass-card floating-module transition-all duration-400 p-6 h-full group"
    style={{
      borderColor: 'rgba(163, 126, 132, 0.6)'
    }}>
      {/* Certificate Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Award className="w-6 h-6" style={{color: '#A3888A'}} />
          {certificate.verified && (
            <div className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: '#7A5C64'}}></div>
          )}
        </div>
        <div className="flex items-center space-x-1 text-sm" style={{color: '#C4ACA8'}}>
          <Calendar className="w-4 h-4" style={{color: '#A3888A'}} />
          <span>{certificate.date}</span>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-2 group-hover:transition-colors" 
      style={{color: '#FFFFFF'}}>
        {certificate.title}
      </h3>
      
      <p className="text-sm font-medium mb-4" style={{color: '#A3888A'}}>
        {certificate.issuer}
      </p>
      
      <p className="text-sm leading-relaxed mb-6" style={{color: '#FFFFFF'}}>
        {certificate.description}
      </p>
      
      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {certificate.tech.map((tech: string, techIndex: number) => (
          <span 
            key={techIndex}
            className="px-2 py-1 text-xs rounded-full font-medium modern-glow"
            style={{
              backgroundColor: 'rgba(122, 92, 100, 0.1)',
              borderColor: 'rgba(122, 92, 100, 0.5)',
              color: '#C4ACA8',
              border: '1px solid'
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

function TechStackCard({ techItem }: { techItem: any }) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "from-[#7A5C64] to-[#6B5F68]"
      case "Intermediate":
        return "from-[#A3888A] to-[#7A5C64]"
      case "Beginner":
        return "from-[#C4ACA8] to-[#A3888A]"
      default:
        return "from-[#6B5F68] to-[#5D4C54]"
    }
  }

  return (
    <div className="glass-card floating-module transition-all duration-400 p-6 h-full group"
    style={{
      borderColor: 'rgba(163, 126, 132, 0.6)'
    }}>
      {/* Tech Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Cpu className="w-6 h-6" style={{color: '#A3888A'}} />
          <div className={`px-3 py-1 bg-gradient-to-r ${getLevelColor(techItem.level)} text-white text-xs rounded-full font-medium`}>
            {techItem.level}
          </div>
        </div>
        <div className="text-sm" style={{color: '#C4ACA8'}}>
          {techItem.experience}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-2 group-hover:transition-colors"
      style={{color: '#FFFFFF'}}>
        {techItem.title}
      </h3>
      
      <p className="text-sm leading-relaxed mb-6" style={{color: '#FFFFFF'}}>
        {techItem.description}
      </p>
      
      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {techItem.tech.map((tech: string, techIndex: number) => (
          <span 
            key={techIndex}
            className="px-3 py-1 text-xs rounded-full font-medium hover:transition-colors modern-glow"
            style={{
              backgroundColor: 'rgba(122, 92, 100, 0.1)',
              borderColor: 'rgba(122, 92, 100, 0.5)',
              color: '#C4ACA8',
              border: '1px solid'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(122, 92, 100, 0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(122, 92, 100, 0.1)'
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}