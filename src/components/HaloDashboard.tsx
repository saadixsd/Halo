
import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { DashboardHome } from './DashboardHome';
import { CasesView } from './CasesView';
import { AskNora } from './AskNora';
import { UploadAnalyze } from './UploadAnalyze';
import { ClientsView } from './ClientsView';
import { BillingView } from './BillingView';
import { CalendarView } from './CalendarView';
import { AnalyticsView } from './AnalyticsView';

export type ActiveTab = 'dashboard' | 'cases' | 'clients' | 'billing' | 'calendar' | 'templates' | 'ask-nora' | 'analytics' | 'upload';

export const HaloDashboard = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardHome />;
      case 'cases':
        return <CasesView />;
      case 'clients':
        return <ClientsView />;
      case 'billing':
        return <BillingView />;
      case 'calendar':
        return <CalendarView />;
      case 'ask-nora':
        return <AskNora />;
      case 'analytics':
        return <AnalyticsView />;
      case 'upload':
        return <UploadAnalyze />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Sophisticated background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary/20"></div>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-xenora-pink/5 rounded-full blur-3xl"></div>
      
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
      
      <div className={`flex-1 flex flex-col transition-all duration-500 ease-out relative z-10 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        {/* Enhanced Harvey Specter-style Header */}
        <header className="glass-panel border-b border-white/20 px-6 py-5 shadow-xenora-md relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex flex-col">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 gradient-xenora rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden">
                    <span className="text-white font-bold text-lg relative z-10">X</span>
                    <div className="absolute inset-0 bg-white/10 rounded-xl"></div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-baseline space-x-2">
                      <h1 className="text-3xl font-bold text-gradient-xenora tracking-tight">
                        Xenora
                      </h1>
                      <span className="text-lg font-semibold text-accent/90">Halo</span>
                    </div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider -mt-1">
                      AI-Powered Legal Suite
                    </p>
                  </div>
                </div>
              </div>
              
              {/* AI Status Indicator */}
              <div className="hidden lg:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-green-700">Nora Online</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Enhanced Search */}
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Ask Nora or search globally..."
                  className="w-96 px-5 py-3 pl-12 pr-4 text-sm glass-panel rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 transition-all duration-300 placeholder:text-muted-foreground/70"
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-muted-foreground group-focus-within:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              
              {/* User Profile */}
              <div className="flex items-center space-x-3 glass-panel px-4 py-2 rounded-xl hover:bg-white/60 transition-all duration-300 cursor-pointer group">
                <div className="w-9 h-9 gradient-xenora rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white text-sm font-bold">AS</span>
                </div>
                <div className="hidden md:flex flex-col">
                  <span className="text-sm font-semibold text-foreground">Alex Specter</span>
                  <span className="text-xs text-muted-foreground">Senior Partner</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content with smooth transitions */}
        <main className="flex-1 overflow-auto relative">
          <div className="min-h-full" style={{ animation: 'fadeInUp 0.6s ease-out' }}>
            {renderActiveTab()}
          </div>
        </main>
      </div>

      {/* Nora AI Chat Trigger */}
      <div className="nora-chat-trigger group" onClick={() => setActiveTab('ask-nora')}>
        <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        
        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-xenora-purple to-xenora-pink opacity-30 animate-ping"></div>
      </div>
    </div>
  );
};
