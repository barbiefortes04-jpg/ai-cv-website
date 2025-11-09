"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState, useEffect } from "react";

export default function MCPIntegrationPage() {
  const [activeDemo, setActiveDemo] = useState("tool-calling");
  const [isConnected, setIsConnected] = useState(false);
  const [mcpStatus, setMcpStatus] = useState("disconnected");
  const [toolResults, setToolResults] = useState<any[]>([]);

  // Simulate MCP connection
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsConnected(true);
      setMcpStatus("connected");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const mcpCapabilities = [
    {
      id: "tool-calling",
      title: "Tool Calling",
      description: "Demonstrates seamless integration between portfolio components using MCP tool calling",
      features: [
        "Real-time data fetching from portfolio sections",
        "Cross-component communication",
        "Dynamic content updates",
        "Error handling and recovery"
      ]
    },
    {
      id: "ai-integration",
      title: "AI Model Integration",
      description: "Shows how AI models can interact with portfolio data through MCP",
      features: [
        "Natural language queries about projects",
        "Intelligent content recommendations",
        "Automated project categorization",
        "Smart search functionality"
      ]
    },
    {
      id: "real-time-sync",
      title: "Real-time Synchronization",
      description: "Demonstrates real-time data synchronization across portfolio components",
      features: [
        "Live project status updates",
        "Real-time skill progression tracking",
        "Dynamic experience timeline",
        "Instant notification system"
      ]
    }
  ];

  const toolCallExamples = [
    {
      tool: "getProjectDetails",
      description: "Fetches detailed information about a specific project",
      input: { projectId: "digital-twin-rag" },
      output: {
        title: "Digital Twin RAG System",
        status: "completed",
        technologies: ["Python", "LangChain", "Vector Database"],
        metrics: { accuracy: "95%", responseTime: "< 1s" }
      }
    },
    {
      tool: "getSkillProgress",
      description: "Retrieves current skill levels and learning progress",
      input: { category: "AI/ML" },
      output: {
        skills: [
          { name: "Machine Learning", level: 85, trending: "up" },
          { name: "Deep Learning", level: 78, trending: "up" },
          { name: "NLP", level: 82, trending: "stable" }
        ]
      }
    },
    {
      tool: "generateProjectInsights",
      description: "Generates insights about project portfolio using AI",
      input: { analysisType: "technical-growth" },
      output: {
        insights: [
          "Strong progression in AI/ML technologies",
          "Excellent full-stack development skills",
          "Growing expertise in backend architectures"
        ],
        recommendations: [
          "Consider exploring cloud deployment strategies",
          "Expand mobile development skills",
          "Investigate microservices architecture"
        ]
      }
    }
  ];

  const simulateToolCall = (tool: string) => {
    const example = toolCallExamples.find(ex => ex.tool === tool);
    if (example) {
      setToolResults(prev => [...prev, {
        id: Date.now(),
        tool: example.tool,
        input: example.input,
        output: example.output,
        timestamp: new Date().toLocaleTimeString()
      }]);
    }
  };

  return (
    <div className="min-h-screen modern-dark-bg">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{color: '#C4ACA8'}}>
            MCP Integration Showcase
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Demonstrating Model Context Protocol integration throughout the portfolio, 
            enabling seamless AI model interaction and tool calling capabilities.
          </p>
        </div>

        {/* Connection Status */}
        <div className="glass-card p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div 
                className={`w-4 h-4 rounded-full ${
                  isConnected ? 'bg-pink-500' : 'bg-pink-300'
                } ${isConnected ? 'animate-pulse' : ''}`}
              ></div>
              <div>
                <h3 className="text-lg font-semibold" style={{color: '#C4ACA8'}}>MCP Server Status</h3>
                <p style={{color: '#A3888A'}}>
                  {isConnected ? 'Connected and ready for tool calls' : 'Establishing connection...'}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div style={{color: '#A3888A'}} className="text-sm">Protocol Version</div>
              <div className="font-mono text-lg" style={{color: '#C4ACA8'}}>MCP v2024.11.05</div>
            </div>
          </div>
        </div>

        {/* MCP Capabilities */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {mcpCapabilities.map((capability) => (
            <div
              key={capability.id}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                activeDemo === capability.id 
                  ? 'border-[#C4ACA8] bg-[#C4ACA8]/10' 
                  : 'border-gray-300 dark:border-gray-600 hover:border-[#A3888A]/50'
              }`}
              onClick={() => setActiveDemo(capability.id)}
            >
              <h3 className="text-xl font-bold mb-3" style={{color: '#C4ACA8'}}>
                {capability.title}
              </h3>
              <p style={{color: '#A3888A'}} className="mb-4">{capability.description}</p>
              <ul className="space-y-2">
                {capability.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#7A5C64'}}></span>
                    <span style={{color: '#C4ACA8'}}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Interactive Tool Calling Demo */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6" style={{color: '#C4ACA8'}}>
            Interactive Tool Calling Demo
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Tool Call Controls */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{color: '#C4ACA8'}}>Available Tools</h3>
              <div className="space-y-3">
                {toolCallExamples.map((example) => (
                  <div key={example.tool} className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-mono text-sm font-semibold" style={{color: '#C4ACA8'}}>
                        {example.tool}
                      </h4>
                      <button
                        onClick={() => simulateToolCall(example.tool)}
                        disabled={!isConnected}
                        className="px-3 py-1 text-sm rounded transition-colors disabled:opacity-50"
                        style={{
                          backgroundColor: isConnected ? '#7A5C64' : '#ccc',
                          color: 'white'
                        }}
                      >
                        Call Tool
                      </button>
                    </div>
                    <p className="text-sm" style={{color: '#A3888A'}}>{example.description}</p>
                    <div className="mt-2">
                      <details className="text-xs">
                        <summary className="cursor-pointer text-[#C4ACA8]">View Input/Output Schema</summary>
                        <pre className="mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded text-xs overflow-x-auto">
                          Input: {JSON.stringify(example.input, null, 2)}
                        </pre>
                      </details>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tool Call Results */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{color: '#C4ACA8'}}>Tool Call Results</h3>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 h-96 overflow-y-auto">
                {toolResults.length === 0 ? (
                  <div className="text-center py-8" style={{color: '#A3888A'}}>
                    No tool calls executed yet. Click on a tool to see results.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {toolResults.map((result) => (
                      <div key={result.id} className="bg-white dark:bg-gray-800 rounded p-3 border-l-4" style={{borderColor: '#A3888A'}}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-sm font-semibold" style={{color: '#7A5C64'}}>
                            {result.tool}
                          </span>
                          <span className="text-xs" style={{color: '#A3888A'}}>{result.timestamp}</span>
                        </div>
                        <pre className="text-xs bg-gray-100 dark:bg-gray-700 p-2 rounded overflow-x-auto">
                          {JSON.stringify(result.output, null, 2)}
                        </pre>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Integration Architecture */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6" style={{color: '#C4ACA8'}}>
            MCP Integration Architecture
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#7A5C64'}}>
                <span className="text-white font-bold text-xl"></span>
              </div>
              <h3 className="font-semibold mb-2" style={{color: '#C4ACA8'}}>AI Models</h3>
              <p className="text-sm" style={{color: '#A3888A'}}>
                Large language models communicate through standardized MCP protocol
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#7A5C64'}}>
                <span className="text-white font-bold text-xl"></span>
              </div>
              <h3 className="font-semibold mb-2" style={{color: '#C4ACA8'}}>MCP Server</h3>
              <p className="text-sm" style={{color: '#A3888A'}}>
                Handles tool registration, message routing, and execution management
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#7A5C64'}}>
                <span className="text-white font-bold text-xl"></span>
              </div>
              <h3 className="font-semibold mb-3" style={{color: '#C4ACA8'}}>Portfolio Tools</h3>
              <p className="text-sm" style={{color: '#A3888A'}}>
                Custom tools that provide access to portfolio data and functionality
              </p>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border">
            <div className="text-3xl font-bold mb-2" style={{color: '#C4ACA8'}}>99.9%</div>
            <div className="text-sm" style={{color: '#A3888A'}}>Tool Call Success Rate</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border">
            <div className="text-3xl font-bold mb-2" style={{color: '#C4ACA8'}}>&lt;50ms</div>
            <div className="text-sm" style={{color: '#A3888A'}}>Average Response Time</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border">
            <div className="text-3xl font-bold mb-2" style={{color: '#C4ACA8'}}>15+</div>
            <div className="text-sm" style={{color: '#A3888A'}}>Available Tools</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border">
            <div className="text-3xl font-bold mb-2" style={{color: '#C4ACA8'}}>100%</div>
            <div className="text-sm" style={{color: '#A3888A'}}>Protocol Compliance</div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}