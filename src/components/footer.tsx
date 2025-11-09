import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-4">Your Name</h3>
              <p className="text-muted-foreground mb-4">
                Full Stack Developer passionate about creating innovative solutions 
                with modern technologies.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:your.email@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Experience
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">
                  your.email@example.com
                </p>
                <p className="text-muted-foreground text-sm">
                  +1 (555) 123-4567
                </p>
                <p className="text-muted-foreground text-sm">
                  City, State, Country
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-6 text-center">
            <p className="text-muted-foreground text-sm flex items-center justify-center space-x-1">
              <span>© {currentYear} Your Name. Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>using Next.js & Shadcn UI</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}