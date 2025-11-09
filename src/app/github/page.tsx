"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react";

export default function GitHubPage() {
  const [selectedRepo, setSelectedRepo] = useState(0);

  const repositories = [
    {
      name: "digital-twin-rag",
      description: "Advanced digital twin system with RAG capabilities for intelligent document processing",
      url: "https://github.com/barbiefortes04-jpg/digital-twin-rag",
      language: "Python",
      stars: 15,
      forks: 3,
      topics: ["ai", "rag", "langchain", "vector-database", "nlp"],
      lastUpdate: "2024-11-09",
      size: "2.3 MB",
      commits: 42,
      contributors: 1,
      license: "MIT",
      status: "Active",
      highlights: [
        "95% accuracy in document retrieval",
        "Sub-second query response times",
        "Supports 10+ document formats"
      ]
    },
    {
      name: "ai-cv-website",
      description: "Modern, responsive portfolio website with interactive elements and dark/light mode",
      url: "https://github.com/barbiefortes04-jpg/ai-cv-website",
      language: "TypeScript",
      stars: 8,
      forks: 2,
      topics: ["nextjs", "react", "typescript", "tailwind", "portfolio"],
      lastUpdate: "2024-11-09",
      size: "1.8 MB",
      commits: 67,
      contributors: 1,
      license: "MIT",
      status: "Active",
      highlights: [
        "100% Lighthouse performance score",
        "Fully responsive design",
        "Advanced trading card animation"
      ]
    },
    {
      name: "person-management-app",
      description: "Full-stack person management system with CRUD operations and real-time updates",
      url: "https://github.com/barbiefortes04-jpg/person-management-app",
      language: "TypeScript",
      stars: 12,
      forks: 4,
      topics: ["react", "nodejs", "postgresql", "rest-api", "crud"],
      lastUpdate: "2024-11-05",
      size: "3.1 MB",
      commits: 89,
      contributors: 1,
      license: "MIT",
      status: "Completed",
      highlights: [
        "Handles 1000+ concurrent users",
        "Real-time WebSocket updates",
        "Comprehensive test coverage"
      ]
    },
    {
      name: "mcp-server",
      description: "Model Context Protocol server implementation with tool calling capabilities",
      url: "https://github.com/barbiefortes04-jpg/mcp-server",
      language: "TypeScript",
      stars: 6,
      forks: 1,
      topics: ["mcp", "ai", "tool-calling", "websockets", "json-rpc"],
      lastUpdate: "2024-11-08",
      size: "1.2 MB",
      commits: 34,
      contributors: 1,
      license: "MIT",
      status: "Active",
      highlights: [
        "Zero-downtime operations",
        "Extensible architecture",
        "Full MCP protocol compliance"
      ]
    },
    {
      name: "academic-management-db",
      description: "Comprehensive PostgreSQL database system for academic record management",
      url: "https://github.com/barbiefortes04-jpg/academic-management-db",
      language: "SQL",
      stars: 4,
      forks: 2,
      topics: ["postgresql", "database", "sql", "academic", "management"],
      lastUpdate: "2024-10-28",
      size: "856 KB",
      commits: 23,
      contributors: 1,
      license: "MIT",
      status: "Completed",
      highlights: [
        "Normalized schema design",
        "Supports 10,000+ records",
        "Optimized query performance"
      ]
    },
    {
      name: "api-framework",
      description: "Robust Node.js API framework with authentication and comprehensive error handling",
      url: "https://github.com/barbiefortes04-jpg/api-framework",
      language: "JavaScript",
      stars: 7,
      forks: 3,
      topics: ["nodejs", "express", "api", "jwt", "middleware"],
      lastUpdate: "2024-10-25",
      size: "1.5 MB",
      commits: 45,
      contributors: 1,
      license: "MIT",
      status: "Completed",
      highlights: [
        "99.9% API uptime",
        "Rate limiting & security",
        "OpenAPI documentation"
      ]
    }
  ];

  const stats = {
    totalRepos: repositories.length,
    totalStars: repositories.reduce((sum, repo) => sum + repo.stars, 0),
    totalCommits: repositories.reduce((sum, repo) => sum + repo.commits, 0),
    languages: Array.from(new Set(repositories.map(repo => repo.language))),
    activeRepos: repositories.filter(repo => repo.status === "Active").length
  };

  const languageColors: { [key: string]: string } = {
    Python: "#7A5C64",
    TypeScript: "#A3888A", 
    JavaScript: "#C4ACA8",
    SQL: "#6B5F68"
  };

  return (
    <div className="min-h-screen modern-dark-bg">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{color: '#C4ACA8'}}>
            GitHub Repository Showcase
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive collection of all project repositories with detailed documentation, 
            code samples, and contribution guidelines.
          </p>
        </div>

        {/* GitHub Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          <div className="text-center glass-card p-4">
            <div className="text-2xl font-bold mb-1" style={{color: '#C4ACA8'}}>{stats.totalRepos}</div>
            <div className="text-sm text-white/60">Repositories</div>
          </div>
          <div className="text-center glass-card p-4">
            <div className="text-2xl font-bold mb-1" style={{color: '#C4ACA8'}}>{stats.totalStars}</div>
            <div className="text-sm text-white/60">Stars</div>
          </div>
          <div className="text-center glass-card p-4">
            <div className="text-2xl font-bold mb-1" style={{color: '#C4ACA8'}}>{stats.totalCommits}</div>
            <div className="text-sm text-white/60">Commits</div>
          </div>
          <div className="text-center glass-card p-4">
            <div className="text-2xl font-bold mb-1" style={{color: '#C4ACA8'}}>{stats.languages.length}</div>
            <div className="text-sm text-white/60">Languages</div>
          </div>
          <div className="text-center glass-card p-4">
            <div className="text-2xl font-bold mb-1" style={{color: '#C4ACA8'}}>{stats.activeRepos}</div>
            <div className="text-sm text-white/60">Active</div>
          </div>
        </div>

        {/* Repository Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {repositories.map((repo, index) => (
            <div
              key={repo.name}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                selectedRepo === index ? 'border-[#C4ACA8] shadow-lg' : 'border-gray-300 dark:border-gray-600'
              }`}
              onClick={() => setSelectedRepo(index)}
              style={{
                background: selectedRepo === index 
                  ? 'linear-gradient(135deg, rgba(139, 115, 85, 0.1) 0%, rgba(139, 115, 85, 0.05) 100%)'
                  : 'transparent'
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{backgroundColor: languageColors[repo.language] || '#7A5C64'}}
                ></div>
                <span 
                  className={`px-2 py-1 text-xs rounded-full ${
                    repo.status === 'Active' 
                      ? 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200' 
                      : 'bg-pink-50 text-pink-700 dark:bg-pink-800 dark:text-pink-300'
                  }`}
                >
                  {repo.status}
                </span>
              </div>
              
              <h3 className="text-lg font-bold mb-2 font-mono">{repo.name}</h3>
              <p className="text-sm mb-4 line-clamp-2" style={{color: '#A3888A'}}>{repo.description}</p>
              
              <div className="flex items-center gap-4 text-xs mb-3" style={{color: '#A3888A'}}>
                <span className="flex items-center gap-1">
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  {repo.forks}
                </span>
                <span>{repo.language}</span>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {repo.topics.slice(0, 3).map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-1 text-xs rounded bg-gray-700 dark:bg-gray-600 text-gray-100 dark:text-gray-200"
                  >
                    {topic}
                  </span>
                ))}
                {repo.topics.length > 3 && (
                  <span className="px-2 py-1 text-xs text-muted-foreground">
                    +{repo.topics.length - 3}
                  </span>
                )}
              </div>
              
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="modern-btn-secondary w-full text-center block"
                onClick={(e) => e.stopPropagation()}
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>

        {/* Detailed Repository View */}
        {selectedRepo !== null && (
          <div className="glass-card p-8 mb-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{backgroundColor: languageColors[repositories[selectedRepo].language] || '#7A5C64'}}
                  ></div>
                  <h2 className="text-2xl font-bold font-mono" style={{color: '#C4ACA8'}}>
                    {repositories[selectedRepo].name}
                  </h2>
                  <span 
                    className={`px-3 py-1 text-sm rounded-full ${
                      repositories[selectedRepo].status === 'Active' 
                        ? 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200' 
                        : 'bg-pink-50 text-pink-700 dark:bg-pink-800 dark:text-pink-300'
                    }`}
                  >
                    {repositories[selectedRepo].status}
                  </span>
                </div>
                
                <p className="text-lg text-muted-foreground mb-6">
                  {repositories[selectedRepo].description}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Key Highlights</h3>
                  <ul className="space-y-2">
                    {repositories[selectedRepo].highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#A3888A'}}></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Topics & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {repositories[selectedRepo].topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 rounded"
                        style={{backgroundColor: '#7A5C64', color: '#F5F5F5'}}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Repository Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span style={{color: '#A3888A'}}>Language</span>
                      <span className="font-mono">{repositories[selectedRepo].language}</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{color: '#A3888A'}}>Stars</span>
                      <span>{repositories[selectedRepo].stars}</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{color: '#A3888A'}}>Forks</span>
                      <span>{repositories[selectedRepo].forks}</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{color: '#A3888A'}}>Commits</span>
                      <span>{repositories[selectedRepo].commits}</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{color: '#A3888A'}}>Size</span>
                      <span>{repositories[selectedRepo].size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{color: '#A3888A'}}>License</span>
                      <span>{repositories[selectedRepo].license}</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{color: '#A3888A'}}>Last Updated</span>
                      <span className="text-sm">{repositories[selectedRepo].lastUpdate}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <a
                    href={repositories[selectedRepo].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modern-btn-primary w-full text-center block"
                  >
                    View Repository
                  </a>
                  <a
                    href={`${repositories[selectedRepo].url}/issues`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modern-btn-secondary w-full text-center block"
                  >
                    Issues
                  </a>
                  <a
                    href={`${repositories[selectedRepo].url}/pulls`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modern-btn-secondary w-full text-center block"
                  >
                    Pull Requests
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* GitHub Profile Link */}
        <div className="text-center">
          <a
            href="https://github.com/barbiefortes04-jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white text-lg font-semibold transition-transform hover:scale-105"
            style={{backgroundColor: '#7A5C64'}}
          >
            <span className="text-2xl font-bold">Profile</span>
            View Complete GitHub Profile
          </a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}