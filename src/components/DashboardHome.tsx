
import React from 'react';
import { 
  Briefcase, 
  Clock, 
  DollarSign, 
  Bot, 
  Upload, 
  FileText,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

const quickStats = [
  { label: 'Active Cases', value: '12', icon: Briefcase, gradient: 'from-purple-500 to-pink-500' },
  { label: 'Billable Hours', value: '45', icon: Clock, gradient: 'from-pink-500 to-orange-400' },
  { label: 'Revenue This Month', value: '$28,500', icon: DollarSign, gradient: 'from-orange-400 to-purple-500' },
  { label: 'Nora Queries', value: '127', icon: Bot, gradient: 'from-purple-500 to-orange-400' },
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
      <div className="relative gradient-xenora rounded-2xl p-8 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-2">Welcome back to Halo</h2>
          <p className="text-white/90 text-lg">Your AI-powered legal operating system</p>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-6 -translate-x-6"></div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-border hover:shadow-xenora-md transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.gradient}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center space-x-3 px-4 py-3 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors">
              <Bot className="w-5 h-5" />
              <span className="font-medium">Ask Nora</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 bg-secondary/70 text-foreground rounded-lg hover:bg-secondary transition-colors">
              <Upload className="w-5 h-5" />
              <span className="font-medium">Upload Document</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 bg-secondary/70 text-foreground rounded-lg hover:bg-secondary transition-colors">
              <Briefcase className="w-5 h-5" />
              <span className="font-medium">New Case</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 bg-secondary/70 text-foreground rounded-lg hover:bg-secondary transition-colors">
              <FileText className="w-5 h-5" />
              <span className="font-medium">Create Invoice</span>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div key={index} className="flex items-start space-x-3">
                  <div className="p-2 bg-secondary/50 rounded-lg">
                    <Icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {activity.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Upcoming Deadlines</h3>
          <div className="space-y-3">
            {upcomingDeadlines.map((deadline, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{deadline.case}</p>
                  <p className="text-xs text-muted-foreground">{deadline.deadline}</p>
                </div>
                <div className={`flex items-center space-x-1 ${
                  deadline.priority === 'high' ? 'text-red-500' :
                  deadline.priority === 'medium' ? 'text-orange-500' : 'text-green-500'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${
                    deadline.priority === 'high' ? 'bg-red-500' :
                    deadline.priority === 'medium' ? 'bg-orange-500' : 'bg-green-500'
                  }`}></div>
                  {deadline.priority === 'high' && <AlertCircle className="w-4 h-4" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
