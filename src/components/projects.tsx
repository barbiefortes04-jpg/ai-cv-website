import { Github, ExternalLink, Calendar } from "lucide-react"

const projects = [
  {
    title: "AI-Powered Task Manager",
    description: "A smart task management application that uses AI to prioritize tasks and suggest optimal scheduling. Built with Next.js, OpenAI API, and PostgreSQL.",
    tech: ["Next.js", "TypeScript", "OpenAI API", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/yourusername/ai-task-manager",
    demo: "https://ai-task-manager.vercel.app",
    date: "2024",
    featured: true
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Developed as part of university coursework.",
    tech: ["React", "Node.js", "MongoDB", "Stripe API", "Express.js"],
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://ecommerce-demo.vercel.app",
    date: "2023",
    featured: true
  },
  {
    title: "Weather Forecast App",
    description: "Real-time weather application with location-based forecasts and interactive maps. Responsive design optimized for mobile devices.",
    tech: ["React", "Weather API", "Mapbox", "Chart.js", "CSS3"],
    github: "https://github.com/yourusername/weather-app",
    demo: "https://weather-forecast-app.netlify.app",
    date: "2023",
    featured: false
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills. Built with modern web technologies and optimized for performance.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourname.dev",
    date: "2024",
    featured: false
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 ${
                  project.featured ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}