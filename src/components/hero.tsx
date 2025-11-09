"use client"

import { Github, Linkedin, Mail, Download } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-6xl font-bold text-primary">
              YN
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Your Name
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Full Stack Developer & AI Enthusiast
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Passionate about creating innovative solutions with modern technologies. 
              Experienced in building scalable web applications and exploring the frontiers of AI.
            </p>
          </div>
          
          <div className="flex justify-center space-x-4 mb-8">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}