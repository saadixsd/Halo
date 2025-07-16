
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
  { label: 'Active Cases', value: '12', icon: Briefcase, trend: '+12%', color: 'text-accent' },
  { label: 'Billable Hours', value: '45', icon: Clock, trend: '+8%', color: 'text-primary' },
  { label: 'Revenue This Month', value: '$28,500', icon: DollarSign, trend: '+23%', color: 'text-green-600' },
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
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background p-8 space-y-8">
      {/* Premium Welcome Hero Section */}
      <div className="glass-hero rounded-3xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-xenora-purple/5 via-transparent to-xenora-pink/5"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 gradient-xenora rounded-3xl flex items-center justify-center shadow-lg relative overflow-hidden ai-glow">
                <span className="text-white font-bold text-2xl relative z-10">AS</span>
              </div>
              <div className="space-y-2">
                <h1 className="text-5xl font-bold text-foreground">
                  {greeting}, <span className="text-gradient-xenora">Alex</span> ✨
                </h1>
                <p className="text-lg text-muted-foreground font-medium">
                  Ready to make justice accessible with Xenora AI
                </p>
              </div>
            </div>
            
            {/* Performance Indicators */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">98.5%</div>
                <div className="text-sm text-muted-foreground font-medium">AI Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">4.9/5</div>
                <div className="text-sm text-muted-foreground font-medium">Client Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-xenora-orange">127</div>
                <div className="text-sm text-muted-foreground font-medium">Cases Won</div>
              </div>
            </div>
          </div>
          
          {/* AI Status and Mission */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 glass-premium px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-700">Nora AI Active</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Activity className="w-4 h-4" />
                <span>24 tasks automated today</span>
              </div>
            </div>
            
            <div className="mission-badge px-6 py-3 rounded-full text-sm font-semibold">
              Everyone Deserves an Advocate 🏛️
            </div>
          </div>
        </div>
      </div>

      {/* Premium Quick Actions */}
      <div className="glass-premium rounded-3xl p-8">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-2">
          <Star className="w-6 h-6 text-accent" />
          <span>Quick Actions</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="action-button p-6 rounded-2xl text-left transition-all duration-300 group relative overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white">Ask Nora</div>
                <div className="text-sm text-white/80">Get instant legal insights</div>
              </div>
            </div>
          </button>
          
          <button className="action-button p-6 rounded-2xl text-left transition-all duration-300 group relative overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white">Upload Document</div>
                <div className="text-sm text-white/80">Analyze contracts & files</div>
              </div>
            </div>
          </button>
          
          <button className="action-button p-6 rounded-2xl text-left transition-all duration-300 group relative overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <Plus className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white">New Case</div>
                <div className="text-sm text-white/80">Start case management</div>
              </div>
            </div>
          </button>
          
          <button className="action-button p-6 rounded-2xl text-left transition-all duration-300 group relative overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white">Create Invoice</div>
                <div className="text-sm text-white/80">Generate client billing</div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Premium Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="stat-card rounded-3xl p-6 relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s`, animation: 'fadeInUp 0.6s ease-out' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-xenora-purple to-xenora-pink flex items-center justify-center shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className={`flex items-center space-x-1 text-sm font-semibold text-green-600`}>
                  <TrendingUp className="w-4 h-4" />
                  <span>{stat.trend}</span>
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sophisticated Recent Activity Panel */}
        <div 
          className="harvey-card rounded-3xl p-8 border border-white/30 hover:shadow-xenora-lg group relative overflow-hidden"
          style={{ 
            animationDelay: '0.8s', 
            animation: 'fadeInUp 0.6s ease-out both' 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg ai-glow">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Recent Activity</h3>
                  <p className="text-sm text-muted-foreground">Latest case updates & AI insights</p>
                </div>
              </div>
              <button className="px-4 py-2 text-sm text-accent hover:text-accent/80 font-semibold bg-accent/10 hover:bg-accent/20 rounded-xl transition-all duration-300 border border-accent/20">
                View All
              </button>
            </div>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div 
                    key={index} 
                    className="group flex items-center space-x-4 p-5 rounded-2xl glass-panel hover:bg-white/60 transition-all duration-300 hover:scale-[1.01] border border-white/20"
                    style={{ 
                      animationDelay: `${(index + 10) * 0.1}s`, 
                      animation: 'fadeInUp 0.5s ease-out both' 
                    }}
                  >
                    <div className={`p-3 rounded-xl ${activity.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground text-sm mb-1">{activity.title}</p>
                      <p className="text-muted-foreground text-xs leading-relaxed">{activity.subtitle}</p>
                    </div>
                    <div className="text-xs text-muted-foreground bg-secondary/30 px-3 py-1 rounded-full font-medium">
                      {activity.time}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sophisticated Upcoming Deadlines Panel */}
        <div 
          className="harvey-card rounded-3xl p-8 border border-white/30 hover:shadow-xenora-lg group relative overflow-hidden"
          style={{ 
            animationDelay: '0.9s', 
            animation: 'fadeInUp 0.6s ease-out both' 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-transparent to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg ai-glow">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Critical Deadlines</h3>
                  <p className="text-sm text-muted-foreground">Upcoming legal milestones</p>
                </div>
              </div>
              <button className="px-4 py-2 text-sm text-accent hover:text-accent/80 font-semibold bg-accent/10 hover:bg-accent/20 rounded-xl transition-all duration-300 border border-accent/20">
                View Calendar
              </button>
            </div>
            
            <div className="space-y-4">
              {upcomingDeadlines.map((deadline, index) => (
                <div 
                  key={index} 
                  className="group p-5 rounded-2xl glass-panel border border-white/20 hover:bg-white/60 transition-all duration-300 hover:scale-[1.01]"
                  style={{ 
                    animationDelay: `${(index + 14) * 0.1}s`, 
                    animation: 'fadeInUp 0.5s ease-out both' 
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-foreground text-base">{deadline.case}</h4>
                    <div className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-bold shadow-sm ${
                      deadline.priority === 'high' 
                        ? 'bg-red-100 text-red-700 border border-red-200' 
                        : deadline.priority === 'medium' 
                        ? 'bg-orange-100 text-orange-700 border border-orange-200' 
                        : 'bg-green-100 text-green-700 border border-green-200'
                    }`}>
                      <div className={`w-2.5 h-2.5 rounded-full ${
                        deadline.priority === 'high' 
                          ? 'bg-red-500 animate-pulse' 
                          : deadline.priority === 'medium' 
                          ? 'bg-orange-500' 
                          : 'bg-green-500'
                      }`}></div>
                      <span>{deadline.daysLeft} days left</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-3 font-medium">{deadline.task}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground bg-secondary/30 px-3 py-1.5 rounded-lg">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{deadline.deadline}</span>
                    </div>
                    {deadline.priority === 'high' && (
                      <div className="flex items-center space-x-1 text-red-600">
                        <AlertCircle className="w-4 h-4" />
                        <span className="text-xs font-semibold">URGENT</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
