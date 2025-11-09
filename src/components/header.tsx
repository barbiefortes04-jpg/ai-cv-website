"use client"

import { ThemeToggle } from "./theme-toggle"
import { useState, useEffect } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/80 backdrop-blur-md border-b border-border" 
        : "bg-transparent"
    }`}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Your Name</div>
        
        <div className="hidden md:flex space-x-6">
          <button 
            onClick={() => scrollToSection("about")}
            className="hover:text-primary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("experience")}
            className="hover:text-primary transition-colors"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection("skills")}
            className="hover:text-primary transition-colors"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection("projects")}
            className="hover:text-primary transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection("education")}
            className="hover:text-primary transition-colors"
          >
            Education
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="hover:text-primary transition-colors"
          >
            Contact
          </button>
        </div>
        
        <ThemeToggle />
      </nav>
    </header>
  )
}