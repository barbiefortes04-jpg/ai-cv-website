import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Tech Company Inc.",
    location: "Remote",
    period: "Summer 2024",
    description: [
      "Developed and maintained web applications using React, Node.js, and MongoDB",
      "Collaborated with senior developers on feature implementation and code reviews",
      "Improved application performance by 25% through optimization techniques",
      "Participated in agile development processes and daily stand-ups"
    ]
  },
  {
    title: "Web Developer",
    company: "Freelance",
    location: "Remote",
    period: "2023 - Present",
    description: [
      "Built custom websites for small businesses using modern web technologies",
      "Implemented responsive designs and SEO optimization strategies",
      "Managed client relationships and project timelines",
      "Delivered projects on time and within budget constraints"
    ]
  },
  {
    title: "Research Assistant",
    company: "University Computer Science Department",
    location: "University Campus",
    period: "2023 - 2024",
    description: [
      "Assisted in AI/ML research projects focusing on natural language processing",
      "Developed data processing scripts and visualization tools",
      "Contributed to academic papers and research presentations",
      "Mentored junior students in programming fundamentals"
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  
                  <div className="flex flex-col md:items-end text-sm text-muted-foreground mt-2 md:mt-0">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}