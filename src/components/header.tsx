"use client"

import { ThemeToggle } from "./theme-toggle"
import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (pathname !== '/') {
      router.push(`/#${sectionId}`)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMobileMenuOpen(false)
  }

  const navigateToPage = (path: string) => {
    router.push(path)
    setIsMobileMenuOpen(false)
  }

  const isActivePage = (path: string) => pathname === path

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-[#2a1b22]/90 backdrop-blur-md border-b" 
        : "bg-transparent"
    }`}
    style={{
      ...(isScrolled && {
        borderColor: 'rgba(139, 115, 85, 0.4)'
      })
    }}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button 
          onClick={() => navigateToPage('/')}
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8B7355] to-[#C4ACA8] hover:from-[#C4ACA8] hover:to-[#8B7355] transition-all duration-300"
        >
          Jherilyn Fortes
        </button>
        
        <div className="flex items-center space-x-6">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            {/* Home sections */}
            <button 
              onClick={() => scrollToSection("about")}
              className="text-[#8B7355] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#C4ACA8] hover:to-[#8B7355] transition-all duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("skills")}
              className="text-[#8B7355] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#C4ACA8] hover:to-[#8B7355] transition-all duration-300"
            >
              Skills
            </button>
            
            {/* Portfolio pages */}
            <button 
              onClick={() => navigateToPage('/projects')}
              className={`transition-all duration-300 ${
                isActivePage('/projects') 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#C4ACA8] to-[#8B7355]' 
                  : 'text-[#8B7355] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#C4ACA8] hover:to-[#8B7355]'
              }`}
            >
              Projects
            </button>
            <button 
              onClick={() => navigateToPage('/demo')}
              className={`transition-all duration-300 ${
                isActivePage('/demo') 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#C4ACA8] to-[#8B7355]' 
                  : 'text-[#8B7355] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#C4ACA8] hover:to-[#8B7355]'
              }`}
            >
              Demo
            </button>
            <button 
              onClick={() => navigateToPage('/mcp-integration')}
              className={`transition-all duration-300 ${
                isActivePage('/mcp-integration') 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#C4ACA8] to-[#8B7355]' 
                  : 'text-[#8B7355] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#C4ACA8] hover:to-[#8B7355]'
              }`}
            >
              MCP
            </button>
            <button 
              onClick={() => navigateToPage('/github')}
              className={`transition-all duration-300 ${
                isActivePage('/github') 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#C4ACA8] to-[#8B7355]' 
                  : 'text-[#8B7355] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#C4ACA8] hover:to-[#8B7355]'
              }`}
            >
              GitHub
            </button>
            
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-[#8B7355] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#C4ACA8] hover:to-[#8B7355] transition-all duration-300"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#8B7355] hover:text-[#C4ACA8] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#2a1b22]/95 backdrop-blur-md border-t" style={{borderColor: 'rgba(139, 115, 85, 0.4)'}}>
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-[#8B7355] hover:text-[#C4ACA8] transition-colors py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left text-[#8B7355] hover:text-[#C4ACA8] transition-colors py-2"
            >
              Skills
            </button>
            <button 
              onClick={() => navigateToPage('/projects')}
              className={`block w-full text-left py-2 transition-colors ${
                isActivePage('/projects') ? 'text-[#C4ACA8]' : 'text-[#8B7355] hover:text-[#C4ACA8]'
              }`}
            >
              Projects
            </button>
            <button 
              onClick={() => navigateToPage('/demo')}
              className={`block w-full text-left py-2 transition-colors ${
                isActivePage('/demo') ? 'text-[#C4ACA8]' : 'text-[#8B7355] hover:text-[#C4ACA8]'
              }`}
            >
              Demo
            </button>
            <button 
              onClick={() => navigateToPage('/mcp-integration')}
              className={`block w-full text-left py-2 transition-colors ${
                isActivePage('/mcp-integration') ? 'text-[#C4ACA8]' : 'text-[#8B7355] hover:text-[#C4ACA8]'
              }`}
            >
              MCP Integration
            </button>
            <button 
              onClick={() => navigateToPage('/github')}
              className={`block w-full text-left py-2 transition-colors ${
                isActivePage('/github') ? 'text-[#C4ACA8]' : 'text-[#8B7355] hover:text-[#C4ACA8]'
              }`}
            >
              GitHub
            </button>
            <button 
              onClick={() => navigateToPage('/professional')}
              className={`block w-full text-left py-2 transition-colors ${
                isActivePage('/professional') ? 'text-[#C4ACA8]' : 'text-[#8B7355] hover:text-[#C4ACA8]'
              }`}
            >
              Professional
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-[#8B7355] hover:text-[#C4ACA8] transition-colors py-2"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  )
}