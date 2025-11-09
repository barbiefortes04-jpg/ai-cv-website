export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Professional Summary</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I am a passionate full-stack developer with expertise in modern web technologies. 
                My journey in technology started during my university studies, where I discovered 
                my love for creating innovative solutions that solve real-world problems.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Currently pursuing my degree in Computer Science, I have gained hands-on experience 
                through various projects, internships, and freelance work. I enjoy working with 
                cutting-edge technologies and am always eager to learn and adapt to new challenges.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Current Focus</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Full-stack web development</li>
                  <li>• AI and machine learning integration</li>
                  <li>• Modern frontend frameworks</li>
                  <li>• Cloud computing and DevOps</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Interests</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Open source contributions</li>
                  <li>• Tech community involvement</li>
                  <li>• Continuous learning</li>
                  <li>• Problem-solving and innovation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}