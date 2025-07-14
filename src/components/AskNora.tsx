
import React, { useState } from 'react';
import { Bot, Send, User, ExternalLink, Paperclip, Upload, FileText, Scale, BookOpen, Sparkles, Clock } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'nora';
  content: string;
  citations?: Array<{ title: string; source: string }>;
  timestamp: Date;
}

const sampleMessages: Message[] = [
  {
    id: '1',
    role: 'user',
    content: 'Can you summarize the key points from R. v. Smith, 2022 SCC 14?',
    timestamp: new Date(Date.now() - 1000000)
  },
  {
    id: '2',
    role: 'nora',
    content: 'R. v. Smith, 2022 SCC 14 is a significant Supreme Court of Canada decision that addresses several key areas of criminal law. Here are the main points:\n\n1. **Evidence and Admissibility**: The court established new guidelines for the admissibility of digital evidence in criminal proceedings.\n\n2. **Charter Rights**: The decision clarifies the application of s. 8 Charter protections in the digital age.\n\n3. **Precedential Impact**: This ruling affects how lower courts must handle similar cases involving digital privacy.',
    citations: [
      { title: 'R. v. Smith, 2022 SCC 14', source: 'Supreme Court of Canada' },
      { title: 'Charter of Rights and Freedoms, s. 8', source: 'Government of Canada' }
    ],
    timestamp: new Date(Date.now() - 999000)
  }
];

export const AskNora = () => {
  const [messages, setMessages] = useState<Message[]>(sampleMessages);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const noraResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'nora',
        content: 'I understand your query. Let me analyze the relevant legal precedents and provide you with a comprehensive response based on current Canadian law.',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, noraResponse]);
      setIsLoading(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const activeCases = [
    { id: 'C001', name: 'Smith v. Johnson', status: 'Discovery' },
    { id: 'C002', name: 'ABC Corp Contract', status: 'Review' },
    { id: 'C003', name: 'Employment Dispute', status: 'Mediation' }
  ];

  const uploadedFiles = [
    { name: 'Employment_Contract.pdf', size: '2.4 MB', status: 'analyzed' },
    { name: 'Evidence_Photos.zip', size: '15.2 MB', status: 'processing' },
    { name: 'Witness_Statement.docx', size: '1.1 MB', status: 'pending' }
  ];

  return (
    <div className="flex h-full max-w-7xl mx-auto">
      {/* Chat Interface */}
      <div className="flex-1 flex flex-col p-6">
        {/* Enhanced Header */}
        <div className="harvey-card rounded-3xl p-8 border border-white/30 mb-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 via-blue-50/50 to-purple-50/50"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-xl ai-glow">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-3xl font-bold text-foreground">Ask Nora</h1>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-green-50 rounded-full border border-green-200">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-700 text-sm font-bold">AI Online</span>
                  </div>
                </div>
                <p className="text-muted-foreground font-medium">Your AI-powered legal assistant trained on Canadian law</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">127</div>
                <div className="text-xs text-muted-foreground font-medium">Queries Today</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">98%</div>
                <div className="text-xs text-muted-foreground font-medium">Accuracy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Messages */}
        <div className="flex-1 overflow-y-auto space-y-6 mb-6 pr-2">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              style={{ 
                animationDelay: `${index * 0.1}s`, 
                animation: 'fadeInUp 0.5s ease-out both' 
              }}
            >
              <div
                className={`max-w-3xl ${
                  message.role === 'user'
                    ? 'bg-accent text-accent-foreground rounded-3xl px-6 py-4 shadow-lg'
                    : 'harvey-card rounded-3xl p-6 border border-white/30'
                }`}
              >
                {message.role === 'nora' && (
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md ai-glow">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-foreground">Nora AI</span>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground bg-secondary/30 px-2 py-1 rounded-full">
                      <Clock className="w-3 h-3" />
                      <span>{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                  </div>
                )}
                
                <div className="prose prose-sm max-w-none">
                  <p className="whitespace-pre-wrap leading-relaxed text-sm">
                    {message.content}
                  </p>
                </div>
                
                {message.citations && message.citations.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide flex items-center space-x-2">
                      <Scale className="w-3 h-3" />
                      <span>Legal Sources</span>
                    </h4>
                    {message.citations.map((citation, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-accent/5 rounded-xl border border-accent/20 hover:bg-accent/10 transition-all duration-300 cursor-pointer">
                        <BookOpen className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-foreground">{citation.title}</span>
                        <span className="text-xs text-muted-foreground">• {citation.source}</span>
                      </div>
                    ))}
                  </div>
                )}

                {message.role === 'user' && (
                  <p className="text-xs opacity-80 mt-3">{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                )}
              </div>
            </div>
          ))}

          {/* Loading Message */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="harvey-card rounded-3xl p-6 border border-white/30 max-w-xs">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md ai-glow">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-foreground">Nora AI</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Analyzing legal precedents...</p>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Input Area */}
        <div className="harvey-card rounded-3xl p-6 border border-white/30">
          <div className="flex items-center space-x-4">
            <button className="p-3 glass-panel rounded-xl hover:bg-white/60 transition-all duration-300 border border-white/20 group">
              <Paperclip className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
            </button>
            <div className="flex-1 relative">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask Nora about legal matters, case law, or upload documents for analysis..."
                className="w-full px-6 py-4 text-lg glass-panel rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 transition-all duration-300 placeholder:text-muted-foreground/70 border border-white/20 resize-none"
                rows={2}
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isLoading}
              className="p-4 bg-accent text-accent-foreground rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Sidebar */}
      <div className="w-96 p-6 space-y-6">
        {/* Active Case Context */}
        <div className="harvey-card rounded-2xl p-6 border border-white/30">
          <h3 className="font-bold text-foreground mb-4 flex items-center space-x-2">
            <div className="w-6 h-6 bg-accent/10 rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-accent" />
            </div>
            <span>Active Case Context</span>
          </h3>
          <div className="space-y-3">
            {activeCases.map((case_item, index) => (
              <div key={index} className="flex items-center justify-between p-3 glass-panel rounded-xl border border-white/20 hover:bg-white/60 transition-all duration-300 cursor-pointer">
                <div>
                  <p className="font-medium text-foreground text-sm">{case_item.name}</p>
                  <p className="text-xs text-muted-foreground">{case_item.id}</p>
                </div>
                <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-lg">
                  {case_item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Upload Section */}
        <div className="harvey-card rounded-2xl p-6 border border-white/30">
          <h3 className="font-bold text-foreground mb-4 flex items-center space-x-2">
            <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center">
              <Upload className="w-4 h-4 text-purple-600" />
            </div>
            <span>Upload & Analyze</span>
          </h3>
          <div className="border-2 border-dashed border-accent/30 rounded-2xl p-6 text-center hover:border-accent/50 transition-all duration-300 cursor-pointer bg-accent/5 hover:bg-accent/10">
            <Upload className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="text-sm font-medium text-foreground mb-1">Drop files here or click to upload</p>
            <p className="text-xs text-muted-foreground">PDF, DOCX, TXT supported</p>
          </div>
        </div>

        {/* Uploaded Files */}
        <div className="harvey-card rounded-2xl p-6 border border-white/30">
          <h3 className="font-bold text-foreground mb-4">Uploaded Files</h3>
          <div className="space-y-3">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 glass-panel rounded-xl border border-white/20">
                <FileText className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{file.size}</p>
                </div>
                <div className={`px-2 py-1 rounded-lg text-xs font-medium ${
                  file.status === 'analyzed' ? 'bg-green-100 text-green-700' :
                  file.status === 'processing' ? 'bg-orange-100 text-orange-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {file.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Legal Actions */}
        <div className="harvey-card rounded-2xl p-6 border border-white/30">
          <h3 className="font-bold text-foreground mb-4">Quick Actions</h3>
          <div className="space-y-2">
            {[
              { action: 'Analyze contract terms', icon: FileText },
              { action: 'Check legal precedents', icon: Scale },
              { action: 'Draft motion template', icon: FileText },
              { action: 'Review discovery docs', icon: BookOpen }
            ].map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center space-x-3 p-3 glass-panel rounded-xl hover:bg-white/60 transition-all duration-300 text-left border border-white/20 group"
              >
                <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                  <item.icon className="w-4 h-4 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">{item.action}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
