
import React, { useState } from 'react';
import { Search, Filter, Plus, MoreHorizontal, AlertCircle, CheckCircle, Clock } from 'lucide-react';

interface Case {
  id: string;
  title: string;
  client: string;
  status: 'active' | 'pending' | 'completed' | 'overdue';
  lastActivity: string;
  nextDeadline?: string;
  priority: 'high' | 'medium' | 'low';
  noraInsights?: string;
}

const sampleCases: Case[] = [
  {
    id: '001',
    title: 'Smith v. Johnson Contract Dispute',
    client: 'ABC Corporation',
    status: 'active',
    lastActivity: '2 hours ago',
    nextDeadline: 'Jul 15, 2024',
    priority: 'high',
    noraInsights: 'Missing liability clause identified'
  },
  {
    id: '002',
    title: 'Employment Agreement Review',
    client: 'Tech Startup Inc.',
    status: 'pending',
    lastActivity: '1 day ago',
    nextDeadline: 'Jul 18, 2024',
    priority: 'medium'
  },
  {
    id: '003',
    title: 'Intellectual Property Filing',
    client: 'Innovation Labs',
    status: 'completed',
    lastActivity: '3 days ago',
    priority: 'low'
  },
  {
    id: '004',
    title: 'Real Estate Transaction',
    client: 'Property Developers LLC',
    status: 'overdue',
    lastActivity: '5 days ago',
    nextDeadline: 'Jul 10, 2024',
    priority: 'high',
    noraInsights: '3 documents require immediate attention'
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'active':
      return <Clock className="w-4 h-4 text-blue-500" />;
    case 'completed':
      return <CheckCircle className="w-4 h-4 text-green-500" />;
    case 'overdue':
      return <AlertCircle className="w-4 h-4 text-red-500" />;
    default:
      return <Clock className="w-4 h-4 text-gray-500" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-blue-50 text-blue-700 border-blue-200';
    case 'completed':
      return 'bg-green-50 text-green-700 border-green-200';
    case 'overdue':
      return 'bg-red-50 text-red-700 border-red-200';
    case 'pending':
      return 'bg-yellow-50 text-yellow-700 border-yellow-200';
    default:
      return 'bg-gray-50 text-gray-700 border-gray-200';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'bg-red-500';
    case 'medium':
      return 'bg-yellow-500';
    case 'low':
      return 'bg-green-500';
    default:
      return 'bg-gray-500';
  }
};

export const CasesView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredCases = sampleCases.filter(case_ => {
    const matchesSearch = case_.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         case_.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = statusFilter === 'all' || case_.status === statusFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Enhanced Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Case Management</h1>
          <p className="text-muted-foreground">Track and manage all your legal cases with AI-powered insights</p>
        </div>
        <button className="flex items-center space-x-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-medium hover:scale-105 transition-all duration-300 shadow-lg">
          <Plus className="w-5 h-5" />
          <span>New Case</span>
        </button>
      </div>

      {/* Enhanced Filters and Search */}
      <div className="harvey-card rounded-2xl p-6 border border-white/30">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search cases, clients, or case numbers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 glass-panel rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 border border-white/20 text-foreground placeholder:text-muted-foreground/70"
            />
          </div>
        
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="overdue">Overdue</option>
        </select>
        
          <button className="flex items-center space-x-2 px-3 py-2 glass-panel rounded-xl hover:bg-white/60 transition-all duration-300 border border-white/20">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Cases Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCases.map((case_) => (
          <div key={case_.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            {/* Case Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="font-semibold text-gray-900 truncate">{case_.title}</h3>
                  <div className={`w-2 h-2 rounded-full ${getPriorityColor(case_.priority)}`}></div>
                </div>
                <p className="text-sm text-gray-600">{case_.client}</p>
              </div>
              <button className="p-1 hover:bg-gray-100 rounded">
                <MoreHorizontal className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            {/* Status Badge */}
            <div className="mb-4">
              <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(case_.status)}`}>
                {getStatusIcon(case_.status)}
                <span className="capitalize">{case_.status}</span>
              </span>
            </div>

            {/* Case Details */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Last Activity:</span>
                <span className="text-gray-900">{case_.lastActivity}</span>
              </div>
              {case_.nextDeadline && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Next Deadline:</span>
                  <span className="text-gray-900">{case_.nextDeadline}</span>
                </div>
              )}
            </div>

            {/* Nora Insights */}
            {case_.noraInsights && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                <div className="flex items-start space-x-2">
                  <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-bold">N</span>
                  </div>
                  <p className="text-sm text-blue-800">{case_.noraInsights}</p>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex space-x-2">
              <button className="flex-1 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                View Details
              </button>
              <button className="px-3 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredCases.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No cases found</h3>
          <p className="text-gray-600">Try adjusting your search criteria or create a new case.</p>
        </div>
      )}
    </div>
  );
};
