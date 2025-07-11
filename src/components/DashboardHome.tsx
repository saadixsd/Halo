
import React from 'react';
import { 
  Briefcase, 
  Clock, 
  DollarSign, 
  Bot, 
  Upload, 
  FileText,
  AlertCircle,
  TrendingUp,
  Users,
  Calendar
} from 'lucide-react';

const quickStats = [
  { label: 'Active Cases', value: '12', icon: Briefcase, color: 'blue' },
  { label: 'Billable Hours', value: '45', icon: Clock, color: 'green' },
  { label: 'Revenue This Month', value: '$28,500', icon: DollarSign, color: 'purple' },
  { label: 'Nora Queries', value: '127', icon: Bot, color: 'orange' },
];

const recentActivity = [
  { type: 'query', title: 'Asked Nora: "Summarize R. v. Smith"', time: '2 minutes ago', icon: Bot },
  { type: 'upload', title: 'Uploaded Contract_001.pdf', time: '15 minutes ago', icon: Upload },
  { type: 'case', title: 'Updated Case #123 status', time: '1 hour ago', icon: Briefcase },
  { type: 'document', title: 'Generated invoice for Client ABC', time: '2 hours ago', icon: FileText },
];

const upcomingDeadlines = [
  { case: 'Smith v. Johnson', deadline: 'Jul 15, 2024', priority: 'high' },
  { case: 'Contract Review - ABC Corp', deadline: 'Jul 18, 2024', priority: 'medium' },
  { case: 'Discovery Motion', deadline: 'Jul 22, 2024', priority: 'low' },
];

export const DashboardHome = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back to Halo</h2>
        <p className="text-blue-100">Your AI-powered legal operating system</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg bg-${stat.color}-50`}>
                  <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center space-x-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
              <Bot className="w-5 h-5" />
              <span className="font-medium">Ask Nora</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
              <Upload className="w-5 h-5" />
              <span className="font-medium">Upload Document</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
              <Briefcase className="w-5 h-5" />
              <span className="font-medium">New Case</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
              <FileText className="w-5 h-5" />
              <span className="font-medium">Create Invoice</span>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div key={index} className="flex items-start space-x-3">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <Icon className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {activity.title}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Deadlines</h3>
          <div className="space-y-3">
            {upcomingDeadlines.map((deadline, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{deadline.case}</p>
                  <p className="text-xs text-gray-500">{deadline.deadline}</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  deadline.priority === 'high' ? 'bg-red-500' :
                  deadline.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                }`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
