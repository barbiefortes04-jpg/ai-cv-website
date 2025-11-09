"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { useRouter } from "next/navigation"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const router = useRouter()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navigateToPage = (path: string) => {
    router.push(path)
  }

  return (
    <footer className="py-12 border-t" style={{backgroundColor: '#2a1b22', borderColor: 'rgba(139, 115, 85, 0.4)'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#8B7355] to-[#C4ACA8]">Jherilyn Fortes</h3>
              <p className="mb-4" style={{color: '#FFFFFF'}}>
                Computer Science student at St. Paul University Philippines, 
                passionate about creating innovative web solutions with modern technologies.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/barbiefortes04-jpg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-colors hover:scale-110 duration-300"
                  style={{color: '#8B7355'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#C4ACA8'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#8B7355'}
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/barbiefortes04-jpg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-colors hover:scale-110 duration-300"
                  style={{color: '#8B7355'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#C4ACA8'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#8B7355'}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:jherilyn.fortes@student.spup.edu.ph"
                  className="transition-colors hover:scale-110 duration-300"
                  style={{color: '#8B7355'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#C4ACA8'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#8B7355'}
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Portfolio Pages */}
            <div>
              <h4 className="font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#8B7355] to-[#C4ACA8]">Portfolio</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => navigateToPage('/projects')}
                    className="transition-colors hover:translate-x-1 duration-300"
                    style={{color: '#C4ACA8'}}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#8B7355'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#C4ACA8'}
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToPage('/demo')}
                    className="transition-colors hover:translate-x-1 duration-300"
                    style={{color: '#C4ACA8'}}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#8B7355'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#C4ACA8'}
                  >
                    Interactive Demos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToPage('/mcp-integration')}
                    className="transition-colors hover:translate-x-1 duration-300"
                    style={{color: '#C4ACA8'}}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#8B7355'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#C4ACA8'}
                  >
                    MCP Integration
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToPage('/github')}
                    className="transition-colors hover:translate-x-1 duration-300"
                    style={{color: '#C4ACA8'}}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#8B7355'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#C4ACA8'}
                  >
                    GitHub Repos
                  </button>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#8B7355] to-[#C4ACA8]">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection("about")}
                    className="transition-colors hover:translate-x-1 duration-300"
                    style={{color: '#C4ACA8'}}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#8B7355'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#C4ACA8'}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("experience")}
                    className="transition-colors hover:translate-x-1 duration-300"
                    style={{color: '#C4ACA8'}}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#8B7355'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#C4ACA8'}
                  >
                    Experience
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("skills")}
                    className="transition-colors hover:translate-x-1 duration-300"
                    style={{color: '#C4ACA8'}}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#8B7355'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#C4ACA8'}
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToPage('/professional')}
                    className="transition-colors hover:translate-x-1 duration-300"
                    style={{color: '#C4ACA8'}}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#8B7355'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#C4ACA8'}
                  >
                    Branding
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#8B7355] to-[#C4ACA8]">Get In Touch</h4>
              <div className="space-y-2">
                <p className="text-sm" style={{color: '#C4ACA8'}}>
                  jherilyn.fortes@student.spup.edu.ph
                </p>
                <p className="text-sm" style={{color: '#C4ACA8'}}>
                  Philippines
                </p>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-sm transition-colors hover:underline"
                  style={{color: '#8B7355'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#C4ACA8'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#8B7355'}
                >
                  Contact Form
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-6 text-center" style={{borderColor: 'rgba(139, 115, 85, 0.4)'}}>
            <p className="text-sm flex items-center justify-center space-x-1" style={{color: '#8B7355'}}>
              <span>© {currentYear} Jherilyn Fortes. Comprehensive Professional Portfolio with MCP Integration</span>
            </p>
            <p className="text-xs mt-2" style={{color: '#C4ACA8'}}>
              Built with Next.js 15, React 18, TypeScript & Tailwind CSS | Performance Optimized | Accessibility Compliant
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}