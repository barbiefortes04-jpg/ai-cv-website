"use client"

import { Code, Sparkles, Heart, Target, BookOpen, Download, Eye, TrendingUp, Award, Calendar, Users } from "lucide-react"

export function About() {
  const stats = [
    {
      icon: Code,
      label: "Projects Completed",
      value: "15+",
      color: "from-[#A37E84] to-[#CDADAB]"
    },
    {
      icon: Award,
      label: "Certifications",
      value: "3+",
      color: "from-[#CDADAB] to-[#EBD7CE]"
    },
    {
      icon: Calendar,
      label: "Years Learning",
      value: "2+",
      color: "from-[#EBD7CE] to-[#917F88]"
    },
    {
      icon: TrendingUp,
      label: "Skills Mastered",
      value: "12+",
      color: "from-[#917F88] to-[#836871]"
    }
  ]

  const currentFocus = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript for modern web apps"
    },
    {
      icon: Sparkles,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive user experiences"
    },
    {
      icon: Target,
      title: "Performance",
      description: "Optimizing applications for speed and accessibility"
    }
  ]

  const interests = [
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Always exploring new technologies and frameworks"
    },
    {
      icon: Heart,
      title: "Open Source",
      description: "Contributing to community projects and sharing knowledge"
    }
  ]

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="py-20 relative diagonal-separator-bottom" style={{backgroundColor: '#2a1b22'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{color: '#C4ACA8'}}>
            About Me
          </h2>
          
          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="floating-module">
                <div className="rounded-xl border p-6 text-center hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1" style={{backgroundColor: '#3d2832', borderColor: 'rgba(196, 172, 168, 0.4)'}}>
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${stat.color} mb-4`}>
                    <stat.icon className="w-6 h-6" style={{color: '#FFFFFF'}} />
                  </div>
                  <div className="text-2xl font-bold mb-2" style={{color: '#C4ACA8'}}>
                    {stat.value}
                  </div>
                  <div className="text-sm" style={{color: '#FFFFFF'}}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="asym-grid">
            {/* Main Bio - Wide Column */}
            <div className="asym-wide">
              <div className="rounded-xl border p-8 floating-module" style={{backgroundColor: '#3d2832', borderColor: 'rgba(196, 172, 168, 0.4)'}}>
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed" style={{color: '#FFFFFF'}}>
                    Hi there! I'm <span className="font-semibold" style={{color: '#C4ACA8'}}>Jherilyn Fortes</span>, 
                    a passionate Frontend Developer and IT student at Saint Paul University Philippines. I specialize in creating 
                    responsive, performant web applications using modern technologies like React, Next.js, and TypeScript.
                  </p>
                  
                  <p className="leading-relaxed" style={{color: '#FFFFFF'}}>
                    My journey in technology started with curiosity about how websites work, and it has evolved into 
                    a deep expertise in frontend development, user experience design, and modern JavaScript frameworks. 
                    I'm particularly passionate about creating accessible digital experiences that combine beautiful design 
                    with robust functionality.
                  </p>
                  
                  <p className="leading-relaxed" style={{color: '#FFFFFF'}}>
                    When I'm not coding, you'll find me exploring new frameworks, optimizing performance, 
                    or contributing to open-source projects. I believe in writing clean, maintainable code and 
                    staying up-to-date with the latest trends in web development to deliver exceptional user experiences.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <button 
                      onClick={scrollToProjects}
                      className="modern-btn-primary flex items-center justify-center space-x-2"
                    >
                      <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>View My Projects</span>
                    </button>
                    
                    <a 
                      href="/resume.pdf" 
                      download
                      className="modern-btn-secondary flex items-center justify-center space-x-2"
                    >
                      <Download className="w-5 h-5" />
                      <span>Download CV</span>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Callout Bubble */}
              <div className="mt-8 ml-8">
                <div className="callout-bubble max-w-md">
                  <p className="font-medium" style={{color: '#FFFFFF'}}>
                    "I'm passionate about creating digital experiences that bridge innovative technology 
                    with beautiful, functional design to build applications that truly matter."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Current Focus & Interests */}
            <div className="asym-narrow space-y-8">
              {/* Current Focus Module */}
              <div className="floating-module">
                <div className="rounded-xl border-l-4 p-6" style={{backgroundColor: '#836671', borderLeftColor: '#EBD7CE'}}>
                  <h3 className="text-xl font-semibold mb-4" style={{color: '#C4ACA8'}}>
                    Current Focus
                  </h3>
                  <div className="space-y-4">
                    {currentFocus.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="p-2 rounded-lg flex-shrink-0" style={{backgroundColor: '#A37E84'}}>
                          <item.icon className="w-4 h-4" style={{color: '#FFFFFF'}} />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm" style={{color: '#FFFFFF'}}>{item.title}</h4>
                          <p className="text-xs leading-relaxed" style={{color: '#FFFFFF'}}>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interests Module */}
              <div className="floating-module">
                <div className="rounded-xl border-b-4 p-6" style={{backgroundColor: '#836671', borderBottomColor: '#CDADAB'}}>
                  <h3 className="text-xl font-semibold mb-4" style={{color: '#C4ACA8'}}>
                    Interests
                  </h3>
                  <div className="space-y-4">
                    {interests.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="p-2 rounded-lg flex-shrink-0" style={{backgroundColor: '#A37E84'}}>
                          <item.icon className="w-4 h-4" style={{color: '#FFFFFF'}} />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm" style={{color: '#FFFFFF'}}>{item.title}</h4>
                          <p className="text-xs leading-relaxed" style={{color: '#FFFFFF'}}>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Contact Module */}
              <div className="floating-module">
                <div className="bg-gradient-to-br from-[#A37E84]/30 to-[#CDADAB]/40 rounded-xl border border-[#EBD7CE]/30 p-6">
                  <h3 className="text-lg font-semibold mb-3" style={{color: '#C4ACA8'}}>
                    Let's Connect
                  </h3>
                  <p className="text-white/90 text-sm mb-4">
                    Interested in working together? Let's discuss your next project!
                  </p>
                  <button 
                    onClick={scrollToContact}
                    className="w-full modern-btn-primary flex items-center justify-center space-x-2 text-sm"
                  >
                    <Users className="w-4 h-4" />
                    <span>Get In Touch</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}