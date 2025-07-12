
import React from 'react';
import { 
  Briefcase, 
  Clock, 
  DollarSign, 
  Bot, 
  Upload, 
  FileText,
  TrendingUp,
  AlertCircle,
  Plus,
  ArrowUpRight,
  Calendar,
  Users,
  Star,
  Zap,
  Target,
  Activity
} from 'lucide-react';

const quickStats = [
  { label: 'Active Cases', value: '12', icon: Briefcase, trend: '+12%', color: 'text-xenora-primary' },
  { label: 'Billable Hours', value: '45', icon: Clock, trend: '+8%', color: 'text-xenora-secondary' },
  { label: 'Revenue This Month', value: '$28,500', icon: DollarSign, trend: '+23%', color: 'text-xenora-accent' },
  { label: 'Nora Queries', value: '127', icon: Bot, trend: '+45%', color: 'text-purple-600' },
];

const quickActions = [
  { title: 'Ask Nora', subtitle: 'Get AI-powered legal insights', icon: Bot, color: 'bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700' },
  { title: 'Upload Document', subtitle: 'Analyze contracts & files', icon: Upload, color: 'bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' },
  { title: 'New Case', subtitle: 'Start managing a new case', icon: Plus, color: 'bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' },
  { title: 'Create Invoice', subtitle: 'Generate client billing', icon: FileText, color: 'bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700' },
];

const recentActivity = [
  { type: 'query', title: 'Contract analysis completed', subtitle: 'Nora identified 3 risk factors', time: '2 min ago', icon: Bot, color: 'bg-purple-100 text-purple-600' },
  { type: 'upload', title: 'Document uploaded successfully', subtitle: 'Contract_001.pdf processed', time: '15 min ago', icon: Upload, color: 'bg-blue-100 text-blue-600' },
  { type: 'case', title: 'Case status updated', subtitle: 'Smith v. Johnson moved to discovery', time: '1 hr ago', icon: Briefcase, color: 'bg-green-100 text-green-600' },
  { type: 'billing', title: 'Invoice generated', subtitle: '$4,500 sent to Client ABC', time: '2 hr ago', icon: DollarSign, color: 'bg-orange-100 text-orange-600' },
];

const upcomingDeadlines = [
  { case: 'Smith v. Johnson', task: 'Motion Filing', deadline: 'Jul 15, 2024', priority: 'high', daysLeft: 2 },
  { case: 'ABC Corp Contract', task: 'Review & Comments', deadline: 'Jul 18, 2024', priority: 'medium', daysLeft: 5 },
  { case: 'Discovery Motion', task: 'Evidence Submission', deadline: 'Jul 22, 2024', priority: 'low', daysLeft: 9 },
];

export const DashboardHome = () => {
  return (
    <div className="p-6 space-y-8 max-w-7xl mx-auto">
      {/* Enhanced Welcome Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-xenora rounded-3xl opacity-90"></div>
        <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 text-white">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold">Good morning, Alex!</h1>
                  <p className="text-white/80">Ready to tackle today's legal challenges?</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm text-white/80">Productivity</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-white/80">Cases Today</div>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
        </div>
      </div>

      {/* Enhanced Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="group bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:shadow-xenora-lg transition-all duration-500 hover:-translate-y-2 hover:bg-white/90">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="flex items-center space-x-1 text-green-600 text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  <span>{stat.trend}</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Enhanced Quick Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button key={index} className={`group relative overflow-hidden ${action.color} rounded-2xl p-6 text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl transform`}>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-8 h-8 text-white" />
                  <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <h3 className="font-bold text-lg mb-1">{action.title}</h3>
                <p className="text-white/80 text-sm">{action.subtitle}</p>
              </div>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Enhanced Recent Activity */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Recent Activity</h3>
            </div>
            <button className="text-sm text-accent hover:text-accent/80 font-medium">View All</button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div key={index} className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-secondary/30 transition-all duration-300 hover:scale-[1.02]">
                  <div className={`p-3 rounded-xl ${activity.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground text-sm">{activity.title}</p>
                    <p className="text-muted-foreground text-xs">{activity.subtitle}</p>
                  </div>
                  <div className="text-xs text-muted-foreground">{activity.time}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Upcoming Deadlines */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Upcoming Deadlines</h3>
            </div>
            <button className="text-sm text-accent hover:text-accent/80 font-medium">View Calendar</button>
          </div>
          <div className="space-y-4">
            {upcomingDeadlines.map((deadline, index) => (
              <div key={index} className="group p-4 rounded-xl border border-border hover:border-accent/30 hover:bg-accent/5 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground text-sm">{deadline.case}</h4>
                  <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${
                    deadline.priority === 'high' 
                      ? 'bg-red-100 text-red-700' 
                      : deadline.priority === 'medium' 
                      ? 'bg-orange-100 text-orange-700' 
                      : 'bg-green-100 text-green-700'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      deadline.priority === 'high' 
                        ? 'bg-red-500' 
                        : deadline.priority === 'medium' 
                        ? 'bg-orange-500' 
                        : 'bg-green-500'
                    }`}></div>
                    <span>{deadline.daysLeft} days left</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-xs mb-1">{deadline.task}</p>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  <span>{deadline.deadline}</span>
                  {deadline.priority === 'high' && <AlertCircle className="w-3 h-3 text-red-500" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
