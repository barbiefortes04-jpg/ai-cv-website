import { Calendar, MapPin, Award } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    location: "City, State",
    period: "2022 - 2026 (Expected)",
    gpa: "3.8/4.0",
    highlights: [
      "Dean's List for 3 consecutive semesters",
      "President of Computer Science Student Association",
      "Relevant Coursework: Data Structures, Algorithms, Web Development, AI/ML"
    ]
  },
  {
    degree: "High School Diploma",
    institution: "City High School",
    location: "City, State",
    period: "2018 - 2022",
    gpa: "3.9/4.0",
    highlights: [
      "Valedictorian",
      "National Honor Society Member",
      "Winner of Regional Programming Competition"
    ]
  }
]

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    credential: "AWS-CCP-2024"
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    date: "2023",
    credential: "META-REACT-2023"
  },
  {
    name: "Google Analytics Certified",
    issuer: "Google",
    date: "2023",
    credential: "GA-CERT-2023"
  }
]

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Education & Certifications
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border border-border rounded-lg p-6 bg-background">
                    <div className="flex flex-col mb-4">
                      <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4" />
                        <span>GPA: {edu.gpa}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-muted-foreground text-sm">
                          • {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border border-border rounded-lg p-6 bg-background">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{cert.name}</h4>
                      <span className="text-sm text-muted-foreground">{cert.date}</span>
                    </div>
                    <p className="text-primary font-medium mb-1">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">ID: {cert.credential}</p>
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