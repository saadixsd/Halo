
import React, { useState } from 'react';
import { Bot, Send, User, ExternalLink } from 'lucide-react';

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

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Bot className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Ask Nora</h2>
            <p className="text-sm text-gray-600">Your AI legal assistant</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex space-x-3 max-w-3xl ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              {/* Avatar */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                message.role === 'user' ? 'bg-gray-200' : 'bg-blue-100'
              }`}>
                {message.role === 'user' ? (
                  <User className="w-5 h-5 text-gray-600" />
                ) : (
                  <Bot className="w-5 h-5 text-blue-600" />
                )}
              </div>

              {/* Message Content */}
              <div className={`rounded-lg p-4 ${
                message.role === 'user' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white border border-gray-200'
              }`}>
                <div className="whitespace-pre-wrap text-sm leading-relaxed">
                  {message.content}
                </div>

                {/* Citations */}
                {message.citations && message.citations.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs font-medium text-gray-500 mb-2">Sources:</p>
                    <div className="space-y-2">
                      {message.citations.map((citation, index) => (
                        <div key={index} className="flex items-center space-x-2 text-xs">
                          <ExternalLink className="w-3 h-3 text-gray-400" />
                          <span className="text-gray-600">{citation.title}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-500">{citation.source}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="text-xs text-gray-400 mt-2">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Loading Message */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex space-x-3 max-w-3xl">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-100">
                <Bot className="w-5 h-5 text-blue-600" />
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex space-x-4">
          <div className="flex-1">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask Nora about a case, document, or legal question..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={2}
            />
          </div>
          <button
            onClick={handleSend}
            disabled={!inputValue.trim() || isLoading}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
          >
            <Send className="w-4 h-4" />
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};
