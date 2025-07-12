
import React from 'react';
import { 
  Home, 
  Briefcase, 
  Users, 
  CreditCard, 
  Calendar, 
  FileText, 
  Bot, 
  BarChart3, 
  Upload,
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
  { id: 'cases' as ActiveTab, label: 'Cases', icon: Briefcase },
  { id: 'clients' as ActiveTab, label: 'Clients', icon: Users },
  { id: 'billing' as ActiveTab, label: 'Billing', icon: CreditCard },
  { id: 'calendar' as ActiveTab, label: 'Calendar', icon: Calendar },
  { id: 'ask-nora' as ActiveTab, label: 'Ask Nora', icon: Bot },
  { id: 'upload' as ActiveTab, label: 'Upload & Analyze', icon: Upload },
  { id: 'analytics' as ActiveTab, label: 'Analytics', icon: BarChart3 },
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
    <div className={`fixed inset-y-0 left-0 z-50 bg-white/80 backdrop-blur-lg border-r border-border transition-all duration-300 shadow-xenora-md ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex flex-col h-full">
        {/* Logo and Collapse Button */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          {!collapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 gradient-xenora rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">X</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline space-x-1">
                  <span className="font-bold text-foreground text-sm text-gradient-xenora">Xenora</span>
                  <span className="text-xs text-accent font-semibold">Halo</span>
                </div>
                <span className="text-xs text-muted-foreground font-medium">Legal Suite</span>
              </div>
            </div>
          )}
          
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
          >
            {collapsed ? (
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-muted-foreground" />
            )}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${isActive 
                  ? 'bg-accent/10 text-accent border border-accent/20 shadow-sm' 
                  : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-accent' : 'text-muted-foreground'}`} />
                {!collapsed && (
                  <span className={`font-medium ${isActive ? 'text-accent' : 'text-muted-foreground'}`}>
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Pinned Items */}
        {!collapsed && (
          <div className="px-4 py-4 border-t border-border">
            <div className="flex items-center space-x-2 mb-3">
              <Pin className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Pinned</span>
            </div>
            
            <div className="space-y-2">
              {pinnedItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 px-2 py-1 rounded text-sm text-muted-foreground hover:bg-secondary/50 cursor-pointer transition-colors"
                >
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="truncate">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
