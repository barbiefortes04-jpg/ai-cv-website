"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react";

export default function ProfessionalPage() {
  const [activeSection, setActiveSection] = useState("brand-identity");

  const brandColors = [
    { name: "Mountbatten Pink", hex: "#7A5C64", rgb: "rgb(122, 92, 100)", usage: "Primary brand color, buttons, accents" },
    { name: "Silver Pink", hex: "#A3888A", rgb: "rgb(163, 136, 138)", usage: "Secondary accents, highlights" },
    { name: "Almond", hex: "#C4ACA8", rgb: "rgb(196, 172, 168)", usage: "Light accents, text highlights" },
    { name: "Coffee Dark", hex: "#2a1b22", rgb: "rgb(42, 27, 34)", usage: "Dark backgrounds, contrasts" },
    { name: "Coffee Medium", hex: "#3d2832", rgb: "rgb(61, 40, 50)", usage: "Card backgrounds, depth" },
    { name: "Rose Gold Accent", hex: "#C4ACA8", rgb: "rgb(196, 172, 168)", usage: "Trading card borders, highlights" },
    { name: "Silver Pink", hex: "#A3888A", rgb: "rgb(163, 136, 138)", usage: "Trading card gradient elements" }
  ];

  const typography = [
    { name: "Inter", usage: "Primary font for body text and UI elements", weight: "400, 500, 600, 700" },
    { name: "Monaco/Menlo", usage: "Code blocks and technical content", weight: "400" },
    { name: "Serif (Times)", usage: "Trading card name, formal elements", weight: "700" }
  ];

  const componentLibrary = [
    {
      name: "Trading Card",
      description: "Interactive Yu-Gi-Oh inspired ID card with flip animation",
      features: ["3D flip animation", "Holographic shimmer", "Responsive design", "Accessibility compliant"]
    },
    {
      name: "Navigation Header",
      description: "Responsive navigation with theme toggle",
      features: ["Mobile-first design", "Dark/light mode", "Active state indicators", "Smooth transitions"]
    },
    {
      name: "Project Cards",
      description: "Showcase cards for projects and achievements",
      features: ["Hover effects", "Tag system", "Progressive disclosure", "Call-to-action buttons"]
    },
    {
      name: "Tab Navigation",
      description: "Modern tab system for categorized content",
      features: ["Active state styling", "Badge counters", "Smooth animations", "Keyboard navigation"]
    }
  ];

  const designPrinciples = [
    {
      title: "Professional Excellence",
      description: "Every element reflects technical competence and attention to detail",
      examples: ["Clean code architecture", "Optimized performance", "Accessibility compliance"]
    },
    {
      title: "Creative Innovation",
      description: "Balancing creativity with professionalism through unique elements",
      examples: ["Trading card ID concept", "Interactive animations", "Original color palette"]
    },
    {
      title: "User Experience",
      description: "Prioritizing intuitive navigation and engaging interactions",
      examples: ["Responsive design", "Fast loading times", "Clear information hierarchy"]
    },
    {
      title: "Technical Showcase",
      description: "Demonstrating development skills through implementation",
      examples: ["Modern React patterns", "TypeScript integration", "Performance optimization"]
    }
  ];

  const sections = [
    { id: "brand-identity", title: "Brand Identity" },
    { id: "design-system", title: "Design System" },
    { id: "components", title: "Component Library" },
    { id: "guidelines", title: "Usage Guidelines" }
  ];

  return (
    <div className="min-h-screen modern-dark-bg">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{color: '#C4ACA8'}}>
            Professional Branding & Design System
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive branding guidelines and design system documentation for 
            cohesive professional presentation across all portfolio components.
          </p>
        </div>

        {/* Section Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`modern-tab ${
                activeSection === section.id ? 'active' : ''
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Brand Identity Section */}
        {activeSection === "brand-identity" && (
          <div className="space-y-8">
            <div className="border-2 border-[#8B7355] rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6" style={{color: '#7A5C64'}}>
                Brand Identity Overview
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Brand Personality</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold mb-2" style={{color: '#7A5C64'}}>Professional</h4>
                      <p className="text-sm" style={{color: '#A3888A'}}>
                        Technical expertise demonstrated through clean, modern design and optimized performance.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold mb-2" style={{color: '#7A5C64'}}>Creative</h4>
                      <p className="text-sm" style={{color: '#A3888A'}}>
                        Innovative approach showcased through unique elements like the trading card ID concept.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold mb-2" style={{color: '#7A5C64'}}>Approachable</h4>
                      <p className="text-sm" style={{color: '#A3888A'}}>
                        Warm color palette and friendly interactions that invite engagement and exploration.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Visual Identity</h3>
                  <div className="bg-gradient-to-br from-[#7A5C64] to-[#2a1b22] rounded-xl p-6 text-white mb-4">
                    <div className="text-center">
                      <div className="text-4xl mb-2 font-bold"></div>
                      <h4 className="text-xl font-bold mb-2">Jherilyn Fortes</h4>
                      <p className="text-sm opacity-90">Information Technology Student</p>
                      <p className="text-xs opacity-75 mt-2">St. Paul University Philippines</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm" style={{color: '#A3888A'}}>
                      Professional identity combining technical competence with creative flair
                    </p>
                  </div>
                </div>
              </div>

              {/* Design Principles */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Design Principles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {designPrinciples.map((principle, idx) => (
                    <div key={idx} className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
                      <h4 className="font-semibold mb-2" style={{color: '#7A5C64'}}>{principle.title}</h4>
                      <p className="text-sm mb-3" style={{color: '#A3888A'}}>{principle.description}</p>
                      <ul className="space-y-1">
                        {principle.examples.map((example, exIdx) => (
                          <li key={exIdx} className="flex items-start gap-2 text-xs">
                            <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{backgroundColor: '#7A5C64'}}></span>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Design System Section */}
        {activeSection === "design-system" && (
          <div className="space-y-8">
            {/* Color Palette */}
            <div className="border-2 border-[#8B7355] rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6" style={{color: '#8B7355'}}>
                Color Palette
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {brandColors.map((color, idx) => (
                  <div key={idx} className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                    <div 
                      className="h-24 w-full"
                      style={{backgroundColor: color.hex}}
                    ></div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">{color.name}</h3>
                      <div className="text-sm space-y-1" style={{color: '#A3888A'}}>
                        <div className="font-mono">{color.hex}</div>
                        <div className="font-mono text-xs">{color.rgb}</div>
                        <div className="text-xs">{color.usage}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Color Usage Examples */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Color Usage Examples</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg" style={{backgroundColor: '#7A5C64', color: 'white'}}>
                    <h4 className="font-semibold mb-2">Primary Actions</h4>
                    <p className="text-sm opacity-90">Buttons, links, call-to-actions</p>
                  </div>
                  <div className="p-4 rounded-lg" style={{backgroundColor: '#2a1b22', color: 'white'}}>
                    <h4 className="font-semibold mb-2">Dark Backgrounds</h4>
                    <p className="text-sm opacity-90">Card backgrounds, sections</p>
                  </div>
                  <div className="p-4 rounded-lg border" style={{backgroundColor: '#C4ACA8', color: '#2a1b22'}}>
                    <h4 className="font-semibold mb-2">Accent Elements</h4>
                    <p className="text-sm opacity-90">Highlights, special features</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="border-2 border-[#8B7355] rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6" style={{color: '#8B7355'}}>
                Typography System
              </h2>
              
              <div className="space-y-6">
                {typography.map((font, idx) => (
                  <div key={idx} className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold mb-2" style={{fontFamily: font.name}}>{font.name}</h3>
                        <p className="text-sm mb-2" style={{color: '#A3888A'}}>{font.usage}</p>
                        <p className="text-xs" style={{color: '#A3888A'}}>Weights: {font.weight}</p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold" style={{fontFamily: font.name}}>
                          The quick brown fox
                        </div>
                        <div className="text-lg" style={{fontFamily: font.name}}>
                          jumps over the lazy dog
                        </div>
                        <div className="text-sm" style={{fontFamily: font.name}}>
                          ABCDEFGHIJKLMNOPQRSTUVWXYZ
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Component Library Section */}
        {activeSection === "components" && (
          <div className="space-y-8">
            <div className="border-2 border-[#8B7355] rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6" style={{color: '#8B7355'}}>
                Component Library
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {componentLibrary.map((component, idx) => (
                  <div key={idx} className="p-6 border border-gray-300 dark:border-gray-600 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3" style={{color: '#7A5C64'}}>
                      {component.name}
                    </h3>
                    <p style={{color: '#A3888A'}} className="mb-4">{component.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {component.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{backgroundColor: '#7A5C64'}}></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Component Preview */}
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded border">
                      <div className="text-center text-sm" style={{color: '#A3888A'}}>
                        {component.name === "Trading Card" && "Interactive preview"}
                        {component.name === "Navigation Header" && "Responsive navigation"}
                        {component.name === "Project Cards" && "Showcase cards"}
                        {component.name === "Tab Navigation" && "Tab system"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Usage Guidelines Section */}
        {activeSection === "guidelines" && (
          <div className="space-y-8">
            <div className="border-2 border-[#8B7355] rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6" style={{color: '#8B7355'}}>
                Usage Guidelines & Standards
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Do's</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                      <span className="text-green-600 dark:text-green-400">YES</span>
                      <span className="text-sm">Use consistent spacing (8px grid system)</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                      <span className="text-green-600 dark:text-green-400">YES</span>
                      <span className="text-sm">Maintain brand color hierarchy</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                      <span className="text-green-600 dark:text-green-400">YES</span>
                      <span className="text-sm">Ensure accessibility compliance (WCAG 2.1)</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                      <span className="text-green-600 dark:text-green-400">YES</span>
                      <span className="text-sm">Use semantic HTML structure</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                      <span className="text-green-600 dark:text-green-400">YES</span>
                      <span className="text-sm">Optimize for mobile-first design</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Don'ts</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <span className="text-red-600 dark:text-red-400">NO</span>
                      <span className="text-sm">Mix inconsistent color schemes</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <span className="text-red-600 dark:text-red-400">NO</span>
                      <span className="text-sm">Use too many font families</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <span className="text-red-600 dark:text-red-400">NO</span>
                      <span className="text-sm">Ignore responsive breakpoints</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <span className="text-red-600 dark:text-red-400">NO</span>
                      <span className="text-sm">Overcomplicate navigation structure</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <span className="text-red-600 dark:text-red-400">NO</span>
                      <span className="text-sm">Sacrifice performance for aesthetics</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Standards */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Technical Standards</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold mb-2" style={{color: '#7A5C64'}}>Performance</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 100 Lighthouse score</li>
                      <li>• &lt; 3s load time</li>
                      <li>• Optimized images</li>
                      <li>• Code splitting</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold mb-2" style={{color: '#7A5C64'}}>Accessibility</h4>
                    <ul className="text-sm space-y-1">
                      <li>• WCAG 2.1 AA</li>
                      <li>• Screen reader support</li>
                      <li>• Keyboard navigation</li>
                      <li>• Color contrast 4.5:1</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold mb-2" style={{color: '#7A5C64'}}>Code Quality</h4>
                    <ul className="text-sm space-y-1">
                      <li>• TypeScript strict mode</li>
                      <li>• ESLint compliance</li>
                      <li>• Component testing</li>
                      <li>• Clean architecture</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Brand Assets Download */}
        <div className="text-center bg-gradient-to-r from-[#7A5C64]/10 to-[#7A5C64]/5 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4" style={{color: '#7A5C64'}}>
            Brand Assets & Resources
          </h2>
          <p style={{color: '#A3888A'}} className="mb-6">
            Download comprehensive brand assets including logos, color palettes, and component templates.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="modern-btn-primary">
              Download Style Guide
            </button>
            <button className="modern-btn-secondary">
              View Figma Components
            </button>
            <button className="modern-btn-secondary">
              Export Color Tokens
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}