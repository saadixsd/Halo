
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
    <div className={`fixed inset-y-0 left-0 z-50 bg-white border-r border-gray-200 transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex flex-col h-full">
        {/* Logo and Collapse Button */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="font-semibold text-gray-900">Halo</span>
            </div>
          )}
          
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {collapsed ? (
              <ChevronRight className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-gray-600" />
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
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${isActive 
                  ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                  : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
                {!collapsed && (
                  <span className={`font-medium ${isActive ? 'text-blue-700' : 'text-gray-700'}`}>
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Pinned Items */}
        {!collapsed && (
          <div className="px-4 py-4 border-t border-gray-200">
            <div className="flex items-center space-x-2 mb-3">
              <Pin className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-600">Pinned</span>
            </div>
            
            <div className="space-y-2">
              {pinnedItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 px-2 py-1 rounded text-sm text-gray-600 hover:bg-gray-50 cursor-pointer"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
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
