
import React from 'react';
import { 
  Home, 
  Briefcase, 
  Users, 
  CreditCard, 
  Calendar, 
  FileText, 
  Bot, 
  Upload,
  Search,
  Settings,
  ChevronLeft,
  ChevronRight,
  Pin
} from 'lucide-react';
import { ActiveTab } from './HaloDashboard';

interface SidebarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const menuItems = [
  { id: 'dashboard' as ActiveTab, label: 'Dashboard', icon: Home },
  { id: 'ask-nora' as ActiveTab, label: 'Ask Nora', icon: Bot },
  { id: 'cases' as ActiveTab, label: 'Cases', icon: Briefcase },
  { id: 'upload' as ActiveTab, label: 'Files', icon: Upload },
  { id: 'calendar' as ActiveTab, label: 'Calendar', icon: Calendar },
  { id: 'clients' as ActiveTab, label: 'Clients', icon: Users },
  { id: 'billing' as ActiveTab, label: 'Invoices', icon: CreditCard },
  { id: 'research' as ActiveTab, label: 'Research', icon: Search },
  { id: 'settings' as ActiveTab, label: 'Settings', icon: Settings },
];

const pinnedItems = [
  { label: 'Case #123', type: 'case' },
  { label: 'Contract_001.pdf', type: 'document' },
];

export const Sidebar: React.FC<SidebarProps> = ({ 
  activeTab, 
  setActiveTab, 
  collapsed, 
  setCollapsed 
}) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-50 jarvis-sidebar border-r border-white/20 transition-all duration-500 ease-out shadow-xenora-lg ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex flex-col h-full relative">
        {/* Sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5 pointer-events-none"></div>
        
        {/* Logo and Collapse Button */}
        <div className="flex items-center justify-between p-4 border-b border-white/20 relative z-10">
          {!collapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-xenora rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden ai-glow">
                <span className="text-white font-bold text-sm relative z-10">X</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline space-x-1">
                  <span className="font-bold text-foreground text-sm text-gradient-xenora">Xenora</span>
                  <span className="text-xs text-accent font-semibold">Halo</span>
                </div>
                <span className="text-xs text-muted-foreground/80 font-medium">AI Legal Suite</span>
              </div>
            </div>
          )}
          
          {collapsed && (
            <div className="w-10 h-10 gradient-xenora rounded-xl flex items-center justify-center shadow-lg mx-auto ai-glow">
              <span className="text-white font-bold text-sm">X</span>
            </div>
          )}
          
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-xl hover:bg-white/20 transition-all duration-300 group"
          >
            {collapsed ? (
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            )}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-3 py-6 space-y-1 relative z-10">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 relative overflow-hidden group ${isActive 
                    ? 'bg-white/20 text-accent shadow-md transform scale-[1.02]' 
                    : 'text-muted-foreground hover:bg-white/10 hover:text-foreground hover:scale-[1.01]'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s`, animation: 'slideInRight 0.5s ease-out' }}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-xenora-purple to-xenora-pink rounded-r-full"></div>
                  )}
                  
                  <div className={`p-2 rounded-lg transition-all duration-300 ${isActive 
                    ? 'bg-white/20 shadow-sm' 
                    : 'group-hover:bg-white/10'
                  }`}>
                    <Icon className={`w-5 h-5 transition-all duration-300 ${isActive 
                      ? 'text-accent' 
                      : 'text-muted-foreground group-hover:text-foreground'
                    }`} />
                  </div>
                  
                  {!collapsed && (
                    <span className={`font-medium transition-all duration-300 ${isActive 
                      ? 'text-accent' 
                      : 'text-muted-foreground group-hover:text-foreground'
                    }`}>
                      {item.label}
                    </span>
                  )}
                  
                  {/* Tooltip for collapsed state */}
                  {collapsed && (
                    <div className="absolute left-full ml-2 px-3 py-2 bg-foreground text-background text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                      {item.label}
                    </div>
                  )}
                </button>
              </div>
            );
          })}
        </nav>

        {/* Enhanced Pinned Items */}
        {!collapsed && (
          <div className="px-4 py-4 border-t border-white/20 relative z-10">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-1.5 rounded-lg bg-white/10">
                <Pin className="w-4 h-4 text-muted-foreground" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Quick Access</span>
            </div>
            
            <div className="space-y-2">
              {pinnedItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-white/10 hover:text-foreground cursor-pointer transition-all duration-300 group"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-xenora-purple to-xenora-pink rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="truncate text-xs font-medium">{item.label}</span>
                </div>
              ))}
            </div>
            
            {/* AI Assistant Quick Access */}
            <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-xenora-purple/10 to-xenora-pink/10 border border-white/20">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 bg-gradient-to-r from-xenora-purple to-xenora-pink rounded-lg flex items-center justify-center">
                  <Bot className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs font-semibold text-foreground">Nora AI</span>
              </div>
              <p className="text-xs text-muted-foreground/80">Ready to assist with legal analysis</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
