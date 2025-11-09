"use client"

import { Calendar, MapPin, Building2, GraduationCap, Users } from "lucide-react"

const experiences = [
  {
    title: "IT Student Major in Web Development",
    company: "St. Paul University Philippines",
    location: "Philippines",
    period: "2022 - Present",
    icon: GraduationCap,
    description: [
      "Pursuing Bachelor of Science in Information Technology with major in Web Development",
      "Completed coursework in Web Programming, Database Systems, and User Interface Design",
      "Developed proficiency in HTML5, CSS3, JavaScript, and modern web frameworks",
      "Created responsive web applications with focus on user experience and accessibility"
    ]
  },
  {
    title: "Web Development Projects",
    company: "Academic & Personal Portfolio",
    location: "Philippines",
    period: "2023 - Present",
    icon: Building2,
    description: [
      "Developed various web applications using React, Node.js, and modern web technologies",
      "Created responsive websites with mobile-first design approach",
      "Implemented database integration using MySQL and MongoDB",
      "Applied web standards and best practices for performance optimization"
    ]
  },
  {
    title: "Web Development Tutor",
    company: "Peer Learning Program",
    location: "St. Paul University Philippines",
    period: "2023 - 2024",
    icon: Users,
    description: [
      "Assisted fellow students with web development fundamentals and modern frameworks",
      "Conducted study sessions for Frontend and Backend development courses",
      "Helped debug web applications and explained responsive design concepts",
      "Developed coding exercises and projects for hands-on learning"
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 diagonal-separator-bottom" style={{backgroundColor: '#2a1b22'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{color: '#C4ACA8'}}>
            Experience Journey
          </h2>
          
          <div className="relative">
            {/* Timeline Connector */}
            <div className="timeline-connector hidden md:block"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center">
                  {/* Timeline Date & Dot */}
                  <div className="md:w-48 flex-shrink-0 mb-4 md:mb-0">
                    <div className="flex items-center md:flex-col md:items-start">
                      <div className="timeline-dot hidden md:block mb-2"></div>
                      <div className="p-2 rounded-lg mr-3 md:mr-0 md:mb-2" style={{background: 'linear-gradient(135deg, #A37E84, #836871)'}}>
                        <exp.icon className="w-5 h-5" style={{color: '#EBD7CE'}} />
                      </div>
                      <div className="text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" style={{color: '#C4ACA8'}} />
                          <span className="font-medium" style={{color: '#FFFFFF'}}>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1 mt-1">
                          <MapPin className="w-3 h-3" style={{color: '#C4ACA8'}} />
                          <span style={{color: '#FFFFFF'}}>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className="flex-1 ml-0 md:ml-8">
                    <div className="rounded-xl border p-6 floating-module" style={{backgroundColor: '#3d2832', borderColor: 'rgba(196, 172, 168, 0.4)'}}>
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-1" style={{color: '#FFFFFF'}}>{exp.title}</h3>
                        <p className="font-medium" style={{color: '#C4ACA8'}}>
                          {exp.company}
                        </p>
                      </div>
                      
                      <ul className="space-y-3">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-white/90 flex items-start text-sm leading-relaxed">
                            <span className="w-1.5 h-1.5 bg-gradient-to-r from-[#A37E84] to-[#CDADAB] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}