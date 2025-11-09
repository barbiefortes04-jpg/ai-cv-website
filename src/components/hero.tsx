"use client"

import { Github, Linkedin, Mail, Download, Code, Sparkles, ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{backgroundColor: '#2a1b22'}}>
      {/* Enhanced Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(122, 92, 100, 0.2) 0%, rgba(163, 136, 138, 0.1) 50%, rgba(196, 172, 168, 0.2) 100%)'}}></div>
        <div className="absolute top-20 left-10 floating-element" style={{color: 'rgba(122, 92, 100, 0.3)'}}>
          <Code className="w-16 h-16 transform rotate-12" />
        </div>
        <div className="absolute top-32 right-16 floating-element" style={{color: 'rgba(163, 136, 138, 0.3)'}}>
          <Sparkles className="w-12 h-12 transform -rotate-12" />
        </div>
        <div className="absolute bottom-40 left-20 floating-element" style={{color: 'rgba(196, 172, 168, 0.3)'}}>
          <span className="text-3xl font-mono" style={{color: '#C4ACA8'}}>&lt;/&gt;</span>
        </div>
        <div className="absolute bottom-32 right-24 floating-element" style={{color: 'rgba(107, 95, 104, 0.3)'}}>
          <span className="text-2xl font-mono" style={{color: '#C4ACA8'}}>{}</span>
        </div>
        <div className="absolute top-1/2 left-1/4 floating-element" style={{color: 'rgba(93, 76, 84, 0.2)'}}>
          <span className="text-4xl font-mono font-bold"></span>
        </div>
        <div className="absolute top-1/3 right-1/3 floating-element" style={{color: 'rgba(122, 92, 100, 0.2)'}}>
          <span className="text-3xl font-mono font-bold"></span>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Content - Split Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            
            {/* Left Side - Text Content */}
            <div className="space-y-6 text-left">
                <div className="space-y-4">
                <p className="text-lg md:text-xl font-light tracking-wide" style={{color: '#C4ACA8'}}>
                  Welcome to my
                </p>
                
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  <span className="text-white">Portfolio</span>
                  <br />
                  <span style={{color: '#C4ACA8'}}>Website</span>
                </h1>
                
                <h2 className="text-lg md:text-xl font-medium font-sans" style={{color: '#C4ACA8'}}>
                  Jherilyn Fortes
                </h2>
                
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full animate-pulse shadow-lg" style={{backgroundColor: '#7A5C64', boxShadow: '0 0 10px rgba(122, 92, 100, 0.5)'}}></span>
                    <span className="text-white/80 text-sm font-light">Available for new opportunities</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-4" style={{backgroundColor: 'rgba(61, 40, 50, 0.7)', border: '1px solid rgba(122, 92, 100, 0.3)'}}>
                <p className="text-sm text-white/90 leading-relaxed font-light">
                  <span className="font-medium" style={{color: '#C4ACA8'}}>Frontend Developer</span> & 
                  <span className="font-medium" style={{color: '#C4ACA8'}}> IT Student</span> at 
                  <span style={{color: '#FFFFFF'}} className="font-normal"> St. Paul University Philippines</span>. 
                  Specializing in modern web development with 
                  <span style={{color: '#FFFFFF'}} className="font-normal"> React</span>, 
                  <span style={{color: '#FFFFFF'}} className="font-normal"> Next.js</span>, and 
                  <span style={{color: '#FFFFFF'}} className="font-normal"> TypeScript</span>.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 hover:scale-105 transition-transform duration-300" style={{backgroundColor: 'rgba(61, 40, 50, 0.7)', border: '1px solid rgba(122, 92, 100, 0.3)', borderRadius: '12px', backdropFilter: 'blur(10px)'}}>
                  <div className="text-xl font-bold mb-1 font-mono" style={{color: '#C4ACA8'}}>
                    15+
                  </div>
                  <div className="text-xs text-white/60 font-light">Projects Built</div>
                </div>
                <div className="text-center p-3 hover:scale-105 transition-transform duration-300" style={{backgroundColor: 'rgba(61, 40, 50, 0.7)', border: '1px solid rgba(122, 92, 100, 0.3)', borderRadius: '12px', backdropFilter: 'blur(10px)'}}>
                  <div className="text-xl font-bold mb-1 font-mono" style={{color: '#C4ACA8'}}>
                    3+
                  </div>
                  <div className="text-xs text-white/60 font-light">Certificates Earned</div>
                </div>
                <div className="text-center p-3 hover:scale-105 transition-transform duration-300" style={{backgroundColor: 'rgba(61, 40, 50, 0.7)', border: '1px solid rgba(122, 92, 100, 0.3)', borderRadius: '12px', backdropFilter: 'blur(10px)'}}>
                  <div className="text-xl font-bold mb-1 font-mono" style={{color: '#C4ACA8'}}>
                    2+
                  </div>
                  <div className="text-xs text-white/60 font-light">Years Learning</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={scrollToProjects}
                  className="group modern-btn-primary flex items-center justify-center space-x-2 py-2 px-4 text-sm font-medium"
                >
                  <Code className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span>View My Work</span>
                  <ArrowDown className="w-3 h-3 group-hover:translate-y-1 transition-transform duration-300" />
                </button>
                
                <button 
                  onClick={scrollToContact}
                  className="modern-btn-secondary flex items-center justify-center space-x-2 py-2 px-4 text-sm font-medium"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Let's Connect</span>
                </button>
              </div>
            </div>

            {/* Right Side - Trading Card Style ID */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative trading-card-container group">
                {/* Trading Card */}
                <div className="flip-card w-96 h-[28rem]">
                  <div className="flip-card-inner">
                    {/* Front Side - Trading Card Style */}
                    <div className="flip-card-front">
                      {/* Pink Border Frame */}
                      <div className="w-full h-full rounded-2xl" style={{
                        background: 'linear-gradient(45deg, #C4ACA8, #A3888A, #C4ACA8, #A3888A)',
                        backgroundSize: '20px 20px',
                        padding: '6px'
                      }}>
                        <div className="w-full h-full rounded-xl flex flex-col" style={{
                          background: 'linear-gradient(135deg, #2a1b22 0%, #3d2832 50%, #2a1b22 100%)',
                          border: '2px solid #A3888A'
                        }}>
                          {/* Card Header */}
                          <div className="text-center p-3 border-b-2 flex-shrink-0" style={{borderColor: '#C4ACA8'}}>
                            <h3 className="text-lg font-bold text-white" style={{
                              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                              fontFamily: 'serif'
                            }}>
                              JHERILYN FORTES
                            </h3>
                            <div className="flex justify-center space-x-1 mt-1">
                              <div className="w-3 h-3 rounded-full" style={{background: 'linear-gradient(45deg, #C4ACA8, #A3888A)'}}></div>
                              <div className="w-3 h-3 rounded-full" style={{background: 'linear-gradient(45deg, #C4ACA8, #A3888A)'}}></div>
                              <div className="w-3 h-3 rounded-full" style={{background: 'linear-gradient(45deg, #C4ACA8, #A3888A)'}}></div>
                              <div className="w-3 h-3 rounded-full" style={{background: 'linear-gradient(45deg, #C4ACA8, #A3888A)'}}></div>
                              <div className="w-3 h-3 rounded-full" style={{background: 'linear-gradient(45deg, #C4ACA8, #A3888A)'}}></div>
                            </div>
                          </div>

                          {/* Photo Section */}
                          <div className="px-4 py-3 flex-grow flex flex-col justify-center">
                            <div className="w-full h-40 rounded-lg overflow-hidden border-2" style={{borderColor: '#A3888A'}}>
                              <img 
                                src="/jherilyn-photo.jpg" 
                                alt="Jherilyn Fortes" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>

                          {/* Stats Section */}
                          <div className="px-4 py-2 space-y-2 flex-shrink-0">
                            <div className="flex justify-between items-center p-2 rounded" style={{backgroundColor: 'rgba(196, 172, 168, 0.2)'}}>
                              <span className="text-xs font-semibold" style={{color: '#C4ACA8'}}>ATK</span>
                              <span className="text-xs font-bold text-white">2500</span>
                            </div>
                            <div className="flex justify-between items-center p-2 rounded" style={{backgroundColor: 'rgba(196, 172, 168, 0.2)'}}>
                              <span className="text-xs font-semibold" style={{color: '#C4ACA8'}}>DEF</span>
                              <span className="text-xs font-bold text-white">2000</span>
                            </div>
                          </div>

                          {/* Card Type */}
                          <div className="px-4 pb-3 flex-shrink-0">
                            <div className="text-center p-2 rounded" style={{backgroundColor: 'rgba(196, 172, 168, 0.2)', border: '1px solid #A3888A'}}>
                              <div className="text-xs font-bold" style={{color: '#C4ACA8'}}>
                                [DEVELOPER/STUDENT]
                              </div>
                              <div className="text-xs text-white mt-1" style={{fontSize: '10px'}}>
                                Frontend Developer specializing in React, Next.js, and TypeScript. 
                                Currently studying at St. Paul University Philippines.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Back Side - Simple Card Back */}
                    <div className="flip-card-back">
                      <div className="w-full h-full rounded-2xl" style={{
                        background: 'linear-gradient(45deg, #C4ACA8, #A3888A, #C4ACA8, #A3888A)',
                        backgroundSize: '20px 20px',
                        padding: '6px'
                      }}>
                        <div className="w-full h-full rounded-xl" style={{
                          background: 'linear-gradient(135deg, #2a1b22 0%, #3d2832 50%, #2a1b22 100%)',
                          border: '2px solid #A3888A'
                        }}>
                          {/* Empty back - just the card frame */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced decorative elements around ID card */}
                <div className="absolute -top-4 -left-4 opacity-60 text-2xl font-mono animate-pulse" style={{color: '#7A5C64'}}>
                  &lt;
                </div>
                <div className="absolute -bottom-4 -right-4 opacity-60 text-2xl font-mono animate-pulse" style={{color: '#C4ACA8'}}>
                  /&gt;
                </div>
                <div className="absolute top-0 right-0 w-3 h-3 rounded-full animate-bounce" style={{background: 'linear-gradient(to right, #7A5C64, #A3888A)'}}></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 rounded-full animate-bounce" style={{background: 'linear-gradient(to right, #6B5F68, #5D4C54)', animationDelay: '0.5s'}}></div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-16 mb-12">
            <a 
              href="https://github.com/barbiefortes04-jpg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 hover:scale-110 transition-all duration-300" style={{backgroundColor: 'rgba(61, 40, 50, 0.7)', border: '1px solid rgba(122, 92, 100, 0.3)', borderRadius: '12px', backdropFilter: 'blur(10px)'}}
            >
              <Github className="w-6 h-6 transition-colors" style={{color: '#7A5C64'}} />
            </a>
            <a 
              href="https://linkedin.com/in/barbiefortes04-jpg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 hover:scale-110 transition-all duration-300" style={{backgroundColor: 'rgba(61, 40, 50, 0.7)', border: '1px solid rgba(122, 92, 100, 0.3)', borderRadius: '12px', backdropFilter: 'blur(10px)'}}
            >
              <Linkedin className="w-6 h-6 transition-colors" style={{color: '#A3888A'}} />
            </a>
            <a 
              href="mailto:jherilyn.fortes@student.spup.edu.ph"
              className="group p-4 hover:scale-110 transition-all duration-300" style={{backgroundColor: 'rgba(61, 40, 50, 0.7)', border: '1px solid rgba(122, 92, 100, 0.3)', borderRadius: '12px', backdropFilter: 'blur(10px)'}}
            >
              <Mail className="w-6 h-6 transition-colors" style={{color: '#C4ACA8'}} />
            </a>
          </div>

          {/* Download CV Button */}
          <div className="flex justify-center mb-16">
            <a 
              href="/resume.pdf" 
              download
              className="px-8 py-4 text-white/80 hover:text-white transition-all duration-300 font-semibold hover:scale-105 flex items-center space-x-3" style={{backgroundColor: 'rgba(61, 40, 50, 0.7)', border: '1px solid rgba(122, 92, 100, 0.3)', borderRadius: '12px', backdropFilter: 'blur(10px)'}}
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Enhanced Scroll indicator */}
          <div className="flex justify-center">
            <div className="scroll-indicator">
              <div className="w-6 h-10 border-2 rounded-full mx-auto relative" style={{borderColor: 'rgba(122, 92, 100, 0.5)'}}>
                <div className="w-1 h-2 rounded-full mx-auto mt-2 animate-bounce" style={{background: 'linear-gradient(to bottom, #7A5C64, #A3888A, #C4ACA8)'}}></div>
              </div>
              <p className="text-sm mt-2" style={{color: 'rgba(163, 136, 138, 0.6)'}}>Scroll to explore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}