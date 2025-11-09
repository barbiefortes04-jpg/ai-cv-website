"use client"

import { Sparkles, Code, Database, Wrench, Brain } from "lucide-react"

const skillCategories = [
  {
    category: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "Python", level: 75 },
      { name: "C++", level: 70 },
      { name: "HTML/CSS", level: 85 }
    ]
  },
  {
    category: "Frameworks & Libraries",
    icon: Wrench,
    skills: [
      { name: "React", level: 70 },
      { name: "Node.js", level: 65 },
      { name: "Express.js", level: 60 },
      { name: "Bootstrap", level: 75 },
      { name: "jQuery", level: 70 }
    ]
  },
  {
    category: "Database & Tools",
    icon: Database,
    skills: [
      { name: "MySQL", level: 75 },
      { name: "MongoDB", level: 65 },
      { name: "Git", level: 80 },
      { name: "VS Code", level: 85 },
      { name: "NetBeans", level: 80 }
    ]
  },
  {
    category: "Academic & Soft Skills",
    icon: Brain,
    skills: [
      { name: "Data Structures", level: 80 },
      { name: "Algorithms", level: 75 },
      { name: "Problem Solving", level: 85 },
      { name: "Team Collaboration", level: 80 },
      { name: "Technical Writing", level: 75 }
    ]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 diagonal-separator" style={{backgroundColor: '#2a1b22'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{color: '#C4ACA8'}}>
            Skills & Technologies
          </h2>
          
          {/* Horizontal Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="flex items-center space-x-2 px-4 py-2 rounded-full border floating-module" style={{backgroundColor: '#3d2832', borderColor: 'rgba(196, 172, 168, 0.4)'}}>
                <category.icon className="w-4 h-4" style={{color: '#FFFFFF'}} />
                <span className="text-sm font-medium" style={{color: '#FFFFFF'}}>{category.category}</span>
              </div>
            ))}
          </div>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="skill-module">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 rounded-lg" style={{background: 'linear-gradient(135deg, #7A5C64, #6B5F68)'}}>
                    <category.icon className="w-6 h-6" style={{color: '#FFFFFF'}} />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-6 text-center" style={{color: '#C4ACA8'}}>
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium flex items-center" style={{color: '#FFFFFF'}}>
                          {skill.name}
                          <Sparkles className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{color: '#EBD7CE'}} />
                        </span>
                        <span className="text-xs font-medium" style={{color: '#FFFFFF'}}>{skill.level}%</span>
                      </div>
                      <div className="w-full rounded-full h-2.5 overflow-hidden" style={{backgroundColor: 'rgba(93, 76, 84, 0.5)'}}>
                        <div 
                          className="skill-progress h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            background: 'linear-gradient(to right, #7A5C64, #A3888A)',
                            boxShadow: '0 2px 4px rgba(122, 92, 100, 0.3)'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Skills Summary */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full" style={{background: 'linear-gradient(135deg, #7A5C64, #6B5F68)'}}>
              <Sparkles className="w-5 h-5" style={{color: '#FFFFFF'}} />
              <span className="font-medium" style={{color: '#FFFFFF'}}>Always learning and growing!</span>
              <Sparkles className="w-5 h-5" style={{color: '#FFFFFF'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}