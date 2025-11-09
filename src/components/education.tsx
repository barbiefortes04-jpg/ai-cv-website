"use client"

import { Calendar, MapPin, Award, GraduationCap, BookOpen, Trophy } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "St. Paul University Philippines (Major in Web Development)",
    location: "Philippines",
    period: "2022 - 2026 (Expected)",
    gpa: "Current GPA: 3.7/4.0",
    icon: GraduationCap,
    highlights: [
      "Dean's List recognition for academic excellence",
      "Active member of IT Student Organization",
      "Relevant Coursework: Web Programming, Database Systems, UI/UX Design, Frontend & Backend Development, Mobile Web Development"
    ]
  },
  {
    degree: "Senior High School - STEM Track",
    institution: "Local High School",
    location: "Philippines",
    period: "2020 - 2022",
    gpa: "Graduated with Honors",
    icon: BookOpen,
    highlights: [
      "Completed Science, Technology, Engineering, and Mathematics track",
      "Participated in Mathematics and Science competitions",
      "Developed interest in programming and technology"
    ]
  }
]

const certifications = [
  {
    name: "Oracle Certified Associate, Java SE 8 Programmer",
    issuer: "Oracle",
    date: "2024",
    credential: "OCA-JAVA-2024",
    icon: Trophy
  },
  {
    name: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    date: "2023",
    credential: "FCC-RWD-2023",
    icon: Award
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2023",
    credential: "FCC-JSADS-2023",
    icon: Award
  }
]

export function Education() {
  return (
    <section id="education" className="py-20 diagonal-separator" style={{backgroundColor: '#2a1b22'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{color: '#C4ACA8'}}>
            Education & Certifications
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education Timeline */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center" style={{color: '#C4ACA8'}}>
                Academic Journey
              </h3>
              
              <div className="relative">
                {/* Dashed Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 opacity-30" style={{background: 'linear-gradient(to bottom, #A3888A, #C4ACA8)'}}></div>
                
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div key={index} className="relative flex items-start">
                      {/* Timeline Dot & Icon */}
                      <div className="flex-shrink-0 mr-6">
                        <div className="timeline-dot mb-2"></div>
                        <div className="p-2 rounded-lg" style={{background: 'linear-gradient(135deg, #5D4C54, #6B5F68)'}}>
                          <edu.icon className="w-5 h-5" style={{color: '#C4ACA8'}} />
                        </div>
                      </div>

                      {/* Education Card */}
                      <div className="flex-1">
                        <div className="rounded-xl border-l-4 p-6 floating-module" style={{backgroundColor: '#3d2832', borderLeftColor: '#A3888A'}}>
                          <div className="flex flex-col mb-4">
                            <h4 className="text-lg font-semibold mb-1" style={{color: '#FFFFFF'}}>{edu.degree}</h4>
                            <p className="font-medium" style={{color: '#C4ACA8'}}>
                              {edu.institution}
                            </p>
                          </div>
                          
                          <div className="flex flex-wrap gap-4 text-sm mb-4" style={{color: '#FFFFFF'}}>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" style={{color: '#C4ACA8'}} />
                              <span>{edu.period}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" style={{color: '#C4ACA8'}} />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Award className="w-4 h-4" style={{color: '#C4ACA8'}} />
                              <span>{edu.gpa}</span>
                            </div>
                          </div>
                          
                          <ul className="space-y-2">
                            {edu.highlights.map((highlight, highlightIndex) => (
                              <li key={highlightIndex} className="text-sm flex items-start" style={{color: '#FFFFFF'}}>
                                <span className="w-1.5 h-1.5 bg-gradient-to-r from-[#A37E84] to-[#CDADAB] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                {highlight}
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
            
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#A3888A] to-[#5D4C54] text-center">
                Professional Certifications
              </h3>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index}>
                    <div style={{backgroundColor: '#3d2832'}} className="rounded-xl border p-6 floating-module" data-border-color="rgba(196, 172, 168, 0.4)">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-r from-[#7A5C64] to-[#A3888A] p-3 rounded-lg flex-shrink-0">
                          <cert.icon className="w-5 h-5 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold leading-tight" style={{color: '#FFFFFF'}}>{cert.name}</h4>
                            <span className="text-sm font-medium ml-2" style={{color: '#C4ACA8'}}>{cert.date}</span>
                          </div>
                          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3888A] to-[#5D4C54] font-medium mb-2">
                            {cert.issuer}
                          </p>
                          <p className="text-sm" style={{color: '#FFFFFF'}}>
                            Credential ID: <span className="font-mono">{cert.credential}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Pink Dashed Separator */}
                    {index < certifications.length - 1 && (
                      <div className="flex justify-center my-4">
                        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#A3888A] to-transparent opacity-50"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}