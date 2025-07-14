import React, { useState } from 'react';
import { 
  Search, 
  BookOpen, 
  Scale, 
  FileText, 
  Star, 
  Filter, 
  ArrowUpRight,
  Clock,
  Bookmark,
  Download,
  Eye,
  Sparkles
} from 'lucide-react';

const recentSearches = [
  'R. v. Jordan (2016 SCC 27)',
  'Employment Standards Act Ontario',
  'Contract interpretation principles',
  'Negligence law Canada'
];

const searchResults = [
  {
    title: 'R. v. Jordan',
    citation: '2016 SCC 27',
    court: 'Supreme Court of Canada',
    date: '2016-07-08',
    relevance: 95,
    summary: 'The presumptive ceiling for the completion of proceedings in provincial court is 18 months...',
    keyPoints: ['Charter s. 11(b)', 'Unreasonable delay', 'Presumptive ceilings'],
    saved: true
  },
  {
    title: 'Contract Law Principles',
    citation: 'Fridman, G.H.L., The Law of Contract in Canada',
    court: 'Legal Text',
    date: '2022-01-01',
    relevance: 88,
    summary: 'Comprehensive analysis of contract formation, interpretation, and enforcement in Canadian law...',
    keyPoints: ['Contract formation', 'Consideration', 'Breach of contract'],
    saved: false
  },
  {
    title: 'Employment Standards Act',
    citation: 'O. Reg. 285/01',
    court: 'Ontario Regulation',
    date: '2023-06-15',
    relevance: 82,
    summary: 'Regulations governing minimum employment standards in Ontario including hours of work...',
    keyPoints: ['Overtime pay', 'Vacation entitlement', 'Termination notice'],
    saved: false
  }
];

const quickAccess = [
  { title: 'Criminal Code', type: 'statute', icon: Scale },
  { title: 'Charter of Rights', type: 'constitution', icon: BookOpen },
  { title: 'SCC Decisions', type: 'case-law', icon: FileText },
  { title: 'Provincial Acts', type: 'statute', icon: Scale }
];

export const LegalResearchView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Legal Research</h1>
          <p className="text-muted-foreground">AI-powered Canadian legal research and precedent analysis</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 glass-panel rounded-xl font-medium text-foreground hover:bg-white/60 transition-all duration-300 border border-white/20">
            <Bookmark className="w-4 h-4 mr-2 inline" />
            Saved Research
          </button>
          <button className="px-4 py-2 bg-accent text-accent-foreground rounded-xl font-medium hover:scale-105 transition-all duration-300">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            AI Summary
          </button>
        </div>
      </div>

      {/* AI-Powered Search */}
      <div className="harvey-card rounded-3xl p-8 border border-white/30">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg ai-glow">
            <Search className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">AI Legal Search</h2>
            <p className="text-sm text-muted-foreground">Search Canadian case law, statutes, and legal precedents</p>
          </div>
        </div>

        <div className="relative mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for cases, statutes, legal principles... (e.g., 'breach of contract remedies')"
            className="w-full px-6 py-4 text-lg glass-panel rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 transition-all duration-300 placeholder:text-muted-foreground/70 pr-16"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-accent text-accent-foreground rounded-xl hover:scale-105 transition-all duration-300">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-muted-foreground">Filter by:</span>
          {['all', 'case-law', 'statutes', 'regulations', 'commentary'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                selectedFilter === filter
                  ? 'bg-accent text-accent-foreground shadow-md'
                  : 'glass-panel text-muted-foreground hover:text-foreground border border-white/20'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Quick Access */}
        <div className="harvey-card rounded-3xl p-6 border border-white/30">
          <h3 className="text-lg font-bold text-foreground mb-6">Quick Access</h3>
          <div className="space-y-3">
            {quickAccess.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  className="w-full flex items-center space-x-3 p-4 glass-panel rounded-xl hover:bg-white/60 transition-all duration-300 text-left border border-white/20 group"
                >
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground capitalize">{item.type}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 pt-6 border-t border-white/20">
            <h4 className="text-sm font-medium text-muted-foreground mb-4">Recent Searches</h4>
            <div className="space-y-2">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  className="block w-full text-left p-3 glass-panel rounded-lg hover:bg-white/60 transition-all duration-300 border border-white/20"
                >
                  <p className="text-sm text-foreground font-medium">{search}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-foreground">Search Results</h3>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-muted-foreground">{searchResults.length} results found</span>
              <button className="p-2 glass-panel rounded-lg hover:bg-white/60 transition-all duration-300 border border-white/20">
                <Filter className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>

          {searchResults.map((result, index) => (
            <div
              key={index}
              className="harvey-card rounded-2xl p-6 border border-white/30 hover:shadow-xenora-lg transition-all duration-300 group"
              style={{ 
                animationDelay: `${index * 0.1}s`, 
                animation: 'fadeInUp 0.6s ease-out both' 
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                      {result.title}
                    </h4>
                    <div className="flex items-center space-x-2">
                      <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                        result.relevance >= 90 ? 'bg-green-100 text-green-700' :
                        result.relevance >= 80 ? 'bg-orange-100 text-orange-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {result.relevance}% relevant
                      </div>
                      {result.saved && (
                        <div className="p-1 bg-yellow-100 rounded-full">
                          <Star className="w-3 h-3 text-yellow-600 fill-current" />
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">{result.citation}</p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                    <span>{result.court}</span>
                    <span>•</span>
                    <span>{result.date}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 glass-panel rounded-lg hover:bg-white/60 transition-all duration-300 border border-white/20">
                    <Bookmark className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <button className="p-2 glass-panel rounded-lg hover:bg-white/60 transition-all duration-300 border border-white/20">
                    <Download className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <button className="p-2 bg-accent text-accent-foreground rounded-lg hover:scale-105 transition-all duration-300">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{result.summary}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-medium text-muted-foreground">Key Points:</span>
                  {result.keyPoints.map((point, idx) => (
                    <span key={idx} className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-lg">
                      {point}
                    </span>
                  ))}
                </div>
                <button className="flex items-center space-x-2 text-sm text-accent hover:text-accent/80 font-medium transition-colors duration-300">
                  <span>Read Full Text</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};