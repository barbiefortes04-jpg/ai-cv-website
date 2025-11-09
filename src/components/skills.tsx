const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "JavaScript", level: 90 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 70 }
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Vercel", level: 80 },
      { name: "Figma", level: 75 }
    ]
  },
  {
    category: "AI & Data",
    skills: [
      { name: "Machine Learning", level: 70 },
      { name: "TensorFlow", level: 65 },
      { name: "OpenAI API", level: 75 },
      { name: "Data Analysis", level: 70 },
      { name: "Pandas", level: 75 }
    ]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-background rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold mb-6 text-center">
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}