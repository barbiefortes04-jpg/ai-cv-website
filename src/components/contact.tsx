"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-20" style={{backgroundColor: '#2a1b22'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{color: '#C4ACA8'}}>
            Get In Touch
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information - Gradient Card */}
            <div className="rounded-xl p-8 floating-module" style={{background: 'linear-gradient(135deg, #A37E84, #836871)', color: '#FFFFFF'}}>
              <h3 className="text-2xl font-semibold mb-6" style={{color: '#FFFFFF'}}>
                Let's Connect
              </h3>
              <p className="mb-8 leading-relaxed" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                I'm always open to discussing new opportunities, collaborations, or just having 
                a chat about technology. Feel free to reach out if you'd like to connect!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 backdrop-blur-sm border rounded-lg" style={{backgroundColor: 'rgba(196, 172, 168, 0.2)', borderColor: 'rgba(196, 172, 168, 0.3)'}}>
                    <Mail className="w-5 h-5" style={{color: '#C4ACA8'}} />
                  </div>
                  <div>
                    <h4 className="font-medium" style={{color: '#FFFFFF'}}>Email</h4>
                    <a 
                      href="mailto:jherilyn.fortes@student.spup.edu.ph"
                      className="transition-colors" 
                      style={{color: 'rgba(255, 255, 255, 0.8)'}}
                    >
                      jherilyn.fortes@student.spup.edu.ph
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 backdrop-blur-sm border rounded-lg" style={{backgroundColor: 'rgba(196, 172, 168, 0.2)', borderColor: 'rgba(196, 172, 168, 0.3)'}}>
                    <Phone className="w-5 h-5" style={{color: '#C4ACA8'}} />
                  </div>
                  <div>
                    <h4 className="font-medium" style={{color: '#FFFFFF'}}>Phone</h4>
                    <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>+63 XXX XXX XXXX</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 backdrop-blur-sm border rounded-lg" style={{backgroundColor: 'rgba(196, 172, 168, 0.2)', borderColor: 'rgba(196, 172, 168, 0.3)'}}>
                    <MapPin className="w-5 h-5" style={{color: '#C4ACA8'}} />
                  </div>
                  <div>
                    <h4 className="font-medium" style={{color: '#FFFFFF'}}>Location</h4>
                    <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>Cagayan de Oro, Philippines</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full blur-xl" style={{backgroundColor: 'rgba(196, 172, 168, 0.1)'}}></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full blur-lg" style={{backgroundColor: 'rgba(196, 172, 168, 0.1)'}}></div>
            </div>
            
            {/* Contact Form */}
            <div className="rounded-xl border p-8 transition-all duration-300" style={{backgroundColor: '#3d2832', borderColor: 'rgba(196, 172, 168, 0.4)'}}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2" style={{color: '#FFFFFF'}}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
                      style={{
                        backgroundColor: '#2a1b22',
                        borderColor: 'rgba(196, 172, 168, 0.4)',
                        color: '#FFFFFF'
                      }}
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2" style={{color: '#FFFFFF'}}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
                      style={{
                        backgroundColor: '#2a1b22',
                        borderColor: 'rgba(196, 172, 168, 0.4)',
                        color: '#FFFFFF'
                      }}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{color: '#FFFFFF'}}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{
                      backgroundColor: '#2a1b22',
                      borderColor: 'rgba(196, 172, 168, 0.4)',
                      color: '#FFFFFF'
                    }}
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{color: '#FFFFFF'}}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 resize-vertical"
                    style={{
                      backgroundColor: '#2a1b22',
                      borderColor: 'rgba(196, 172, 168, 0.4)',
                      color: '#FFFFFF'
                    }}
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #7A5C64, #A3888A)',
                    boxShadow: '0 10px 25px rgba(122, 92, 100, 0.5)'
                  }}
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}