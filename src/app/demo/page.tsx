"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState, useEffect } from "react";

interface DemoState {
  digitalTwin: { query: string; results: any[] };
  personApp: { persons: any[]; filter: string };
  mcpServer: { connected: boolean; tools: any[] };
  apiFramework: { endpoint: string; response: any };
}

export default function DemoPage() {
  const [activeDemo, setActiveDemo] = useState("digital-twin");
  const [isLoading, setIsLoading] = useState(false);
  const [demoState, setDemoState] = useState<DemoState>({
    digitalTwin: { query: "", results: [] },
    personApp: { persons: [], filter: "" },
    mcpServer: { connected: false, tools: [] },
    apiFramework: { endpoint: "", response: null }
  });

  const demos = [
    {
      id: "digital-twin",
      title: "Digital Twin RAG System",
      description: "Experience the power of Retrieval-Augmented Generation with document processing and intelligent querying",
      technologies: ["Python", "LangChain", "Vector DB", "RAG"],
      features: [
        "Document upload and processing",
        "Semantic search across documents",
        "Context-aware response generation",
        "Real-time accuracy metrics"
      ]
    },
    {
      id: "person-app",
      title: "Person Management App",
      description: "Full-stack application demonstrating CRUD operations, real-time updates, and advanced filtering",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      features: [
        "Real-time person management",
        "Advanced search and filtering",
        "Responsive data visualization",
        "Live database synchronization"
      ]
    },
    {
      id: "mcp-server",
      title: "MCP Server Integration",
      description: "Model Context Protocol server with tool calling capabilities and AI model integration",
      technologies: ["TypeScript", "MCP", "WebSockets", "JSON-RPC"],
      features: [
        "Live tool registration",
        "Real-time message handling",
        "AI model communication",
        "Protocol compliance testing"
      ]
    },
    {
      id: "portfolio",
      title: "Portfolio Website",
      description: "Modern, responsive portfolio with interactive elements and advanced animations",
      technologies: ["Next.js", "React", "Tailwind", "Framer Motion"],
      features: [
        "Interactive trading card",
        "Dark/light mode toggle",
        "Responsive design system",
        "Performance optimizations"
      ]
    }
  ];

  // Simulate Digital Twin RAG queries
  const simulateRAGQuery = async (query: string) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockResults = [
      {
        document: "Technical Documentation",
        relevance: 0.95,
        content: `Based on the query "${query}", here are the relevant findings from the document analysis...`,
        metadata: { pages: [1, 3, 7], confidence: 0.95 }
      },
      {
        document: "Project Specifications",
        relevance: 0.88,
        content: "Additional context and specifications that relate to your query...",
        metadata: { pages: [2, 5], confidence: 0.88 }
      }
    ];
    
    setDemoState((prev: DemoState) => ({
      ...prev,
      digitalTwin: { query, results: mockResults }
    }));
    setIsLoading(false);
  };

  // Simulate Person App data
  const mockPersons = [
    { id: 1, name: "John Doe", email: "john@example.com", age: 30, city: "New York", status: "active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", age: 25, city: "San Francisco", status: "active" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", age: 35, city: "Chicago", status: "inactive" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", age: 28, city: "Boston", status: "active" },
  ];

  useEffect(() => {
    setDemoState((prev: DemoState) => ({
      ...prev,
      personApp: { persons: mockPersons, filter: "" }
    }));
  }, []);

  // Simulate MCP Server connection
  const connectMCPServer = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setDemoState((prev: DemoState) => ({
      ...prev,
      mcpServer: {
        connected: true,
        tools: [
          { name: "getProjectDetails", status: "registered", calls: 12 },
          { name: "searchDocuments", status: "registered", calls: 8 },
          { name: "generateInsights", status: "registered", calls: 5 }
        ]
      }
    }));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen modern-dark-bg">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{color: '#C4ACA8'}}>
            Interactive Project Demos
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Experience live demonstrations of key projects with interactive features, 
            real-time functionality, and comprehensive testing capabilities.
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {demos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(demo.id)}
              className={`modern-tab ${
                activeDemo === demo.id ? 'active' : ''
              }`}
            >
              {demo.title}
            </button>
          ))}
        </div>

        {/* Demo Content */}
        <div className="glass-card p-8 mb-8">
          {/* Digital Twin Demo */}
          {activeDemo === "digital-twin" && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#C4ACA8'}}>
                  Digital Twin RAG System Demo
                </h2>
                <p className="text-white/80 mb-6">
                  Test the Retrieval-Augmented Generation capabilities with document processing and intelligent querying.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4" style={{color: '#C4ACA8'}}>Query Interface</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Enter your query:</label>
                      <textarea
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg resize-none"
                        rows={3}
                        placeholder="Ask anything about the uploaded documents..."
                        value={demoState.digitalTwin.query}
                        onChange={(e) => setDemoState((prev: DemoState) => ({
                          ...prev,
                          digitalTwin: { ...prev.digitalTwin, query: e.target.value }
                        }))}
                      />
                    </div>
                    <button
                      onClick={() => simulateRAGQuery(demoState.digitalTwin.query)}
                      disabled={isLoading || !demoState.digitalTwin.query.trim()}
                      className="w-full py-3 px-4 rounded text-white transition-colors disabled:opacity-50"
                      style={{backgroundColor: '#7A5C64'}}
                    >
                      {isLoading ? "Processing..." : "Search Documents"}
                    </button>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold mb-3" style={{color: '#C4ACA8'}}>System Metrics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded">
                        <div className="text-lg font-bold" style={{color: '#C4ACA8'}}>95%</div>
                        <div className="text-xs" style={{color: '#A3888A'}}>Accuracy</div>
                      </div>
                      <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded">
                        <div className="text-lg font-bold" style={{color: '#C4ACA8'}}>&lt;1s</div>
                        <div className="text-xs" style={{color: '#A3888A'}}>Response Time</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4" style={{color: '#C4ACA8'}}>Search Results</h3>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 h-96 overflow-y-auto">
                    {demoState.digitalTwin.results.length === 0 ? (
                      <div className="text-center py-8" style={{color: '#A3888A'}}>
                        Enter a query to see RAG results
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {demoState.digitalTwin.results.map((result: any, idx: number) => (
                          <div key={idx} className="bg-white dark:bg-gray-800 rounded p-4 border-l-4" style={{borderColor: '#A3888A'}}>
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-semibold">{result.document}</span>
                              <span className="text-sm px-2 py-1 rounded" style={{backgroundColor: '#7A5C64', color: '#F5F5F5'}}>
                                {Math.round(result.relevance * 100)}% relevant
                              </span>
                            </div>
                            <p className="text-sm mb-2" style={{color: '#A3888A'}}>{result.content}</p>
                            <div className="text-xs" style={{color: '#A3888A'}}>
                              Pages: {result.metadata.pages.join(", ")} | Confidence: {result.metadata.confidence}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Person App Demo */}
          {activeDemo === "person-app" && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#7A5C64'}}>
                  Person Management App Demo
                </h2>
                <p style={{color: '#A3888A'}} className="mb-6">
                  Explore the full-stack person management system with real-time CRUD operations.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Search persons..."
                    className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg"
                    value={demoState.personApp.filter}
                    onChange={(e) => setDemoState((prev: DemoState) => ({
                      ...prev,
                      personApp: { ...prev.personApp, filter: e.target.value }
                    }))}
                  />
                  <button
                    className="px-6 py-3 rounded text-white"
                    style={{backgroundColor: '#8B7355'}}
                  >
                    Add Person
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-300 dark:border-gray-600 rounded-lg">
                    <thead className="bg-gray-100 dark:bg-gray-800">
                      <tr>
                        <th className="p-3 text-left">Name</th>
                        <th className="p-3 text-left">Email</th>
                        <th className="p-3 text-left">Age</th>
                        <th className="p-3 text-left">City</th>
                        <th className="p-3 text-left">Status</th>
                        <th className="p-3 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {demoState.personApp.persons
                        .filter((person: any) => 
                          person.name.toLowerCase().includes(demoState.personApp.filter.toLowerCase()) ||
                          person.email.toLowerCase().includes(demoState.personApp.filter.toLowerCase())
                        )
                        .map((person: any) => (
                          <tr key={person.id} className="border-t border-gray-300 dark:border-gray-600">
                            <td className="p-3">{person.name}</td>
                            <td className="p-3">{person.email}</td>
                            <td className="p-3">{person.age}</td>
                            <td className="p-3">{person.city}</td>
                            <td className="p-3">
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                person.status === 'active' 
                                  ? 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'
                                  : 'bg-pink-50 text-pink-700 dark:bg-pink-800 dark:text-pink-300'
                              }`}>
                                {person.status}
                              </span>
                            </td>
                            <td className="p-3">
                              <div className="flex gap-2">
                                <button className="modern-btn-secondary text-xs">Edit</button>
                                <button className="modern-btn-primary text-xs">Delete</button>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* MCP Server Demo */}
          {activeDemo === "mcp-server" && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#7A5C64'}}>
                  MCP Server Integration Demo
                </h2>
                <p style={{color: '#A3888A'}} className="mb-6">
                  Experience the Model Context Protocol server with tool calling and AI integration.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${demoState.mcpServer.connected ? 'bg-pink-500' : 'bg-pink-300'}`}></div>
                        <span className="font-semibold">
                          {demoState.mcpServer.connected ? 'Connected' : 'Disconnected'}
                        </span>
                      </div>
                      {!demoState.mcpServer.connected && (
                        <button
                          onClick={connectMCPServer}
                          disabled={isLoading}
                          className="px-4 py-2 text-sm rounded text-white"
                          style={{backgroundColor: '#7A5C64'}}
                        >
                          {isLoading ? 'Connecting...' : 'Connect'}
                        </button>
                      )}
                    </div>
                  </div>

                  {demoState.mcpServer.connected && (
                    <div>
                      <h3 className="text-lg font-semibold mb-4" style={{color: '#C4ACA8'}}>Registered Tools</h3>
                      <div className="space-y-3">
                        {demoState.mcpServer.tools.map((tool: any, idx: number) => (
                          <div key={idx} className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg">
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-sm">{tool.name}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-xs" style={{color: '#A3888A'}}>{tool.calls} calls</span>
                                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4" style={{color: '#C4ACA8'}}>Tool Call Log</h3>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 h-64 overflow-y-auto font-mono text-sm">
                    {demoState.mcpServer.connected ? (
                      <div className="space-y-2 text-green-600 dark:text-green-400">
                        <div>[2024-11-09 10:30:15] MCP Server started</div>
                        <div>[2024-11-09 10:30:16] Registered tool: getProjectDetails</div>
                        <div>[2024-11-09 10:30:16] Registered tool: searchDocuments</div>
                        <div>[2024-11-09 10:30:17] Registered tool: generateInsights</div>
                        <div>[2024-11-09 10:30:18] Server ready for connections</div>
                        <div>[2024-11-09 10:30:20] AI model connected: Claude-3</div>
                        <div>[2024-11-09 10:30:25] Tool call: getProjectDetails</div>
                        <div>[2024-11-09 10:30:26] Response sent: 200ms</div>
                      </div>
                    ) : (
                      <div style={{color: '#A3888A'}}>
                        Server not connected. Click Connect to start MCP server.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Portfolio Demo */}
          {activeDemo === "portfolio" && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#7A5C64'}}>
                  Portfolio Website Demo
                </h2>
                <p style={{color: '#A3888A'}} className="mb-6">
                  Explore the interactive features and responsive design of this portfolio website.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4" style={{color: '#C4ACA8'}}>Interactive Features</h3>
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
                      <h4 className="font-semibold mb-2" style={{color: '#C4ACA8'}}>Trading Card Animation</h4>
                      <p className="text-sm mb-3" style={{color: '#A3888A'}}>
                        Yu-Gi-Oh inspired ID card with 3D flip animation and holographic effects.
                      </p>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 text-center">
                        <div className="text-2xl mb-2 font-bold"></div>
                        <div className="text-sm">Interactive element in hero section</div>
                      </div>
                    </div>

                    <div className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
                      <h4 className="font-semibold mb-2" style={{color: '#C4ACA8'}}>Theme Toggle</h4>
                      <p className="text-sm mb-3" style={{color: '#A3888A'}}>
                        Seamless dark/light mode switching with system preference detection.
                      </p>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 text-center">
                        <div className="text-2xl mb-2 font-bold"></div>
                        <div className="text-sm">Available in header</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4" style={{color: '#C4ACA8'}}>Performance Metrics</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">100</div>
                      <div className="text-sm text-green-600 dark:text-green-400">Performance</div>
                    </div>
                    <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">100</div>
                      <div className="text-sm text-blue-600 dark:text-blue-400">Accessibility</div>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">100</div>
                      <div className="text-sm text-purple-600 dark:text-purple-400">Best Practices</div>
                    </div>
                    <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg text-center">
                      <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">100</div>
                      <div className="text-sm text-pink-600 dark:text-pink-400">SEO</div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold mb-3" style={{color: '#C4ACA8'}}>Technical Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Next.js 15", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded"
                          style={{backgroundColor: 'rgba(122, 92, 100, 0.2)', color: '#7A5C64'}}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Demo Features Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {demos.map((demo) => (
            <div key={demo.id} className="p-6 bg-white dark:bg-gray-800 rounded-xl border">
              <h3 className="font-bold mb-2" style={{color: '#7A5C64'}}>{demo.title}</h3>
              <p className="text-sm mb-4" style={{color: '#A3888A'}}>{demo.description}</p>
              <div className="space-y-2">
                {demo.features.slice(0, 2).map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs">
                    <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{backgroundColor: '#7A5C64'}}></span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}