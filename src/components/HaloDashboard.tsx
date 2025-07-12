
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
    <div className="flex h-screen bg-gradient-to-br from-background to-secondary">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
      
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        {/* Header */}
        <header className="bg-white/70 backdrop-blur-lg border-b border-border px-6 py-4 shadow-xenora-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex flex-col">
                <div className="flex items-baseline space-x-2">
                  <h1 className="text-3xl font-bold text-gradient-xenora tracking-tight">
                    Xenora
                  </h1>
                  <span className="text-lg font-semibold text-accent opacity-80">Halo</span>
                </div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider -mt-1">
                  Legal Management Suite
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Global search..."
                  className="w-80 px-4 py-2 pl-10 pr-4 text-sm bg-white/50 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent backdrop-blur-sm transition-all duration-200"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 gradient-xenora rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">U</span>
                </div>
                <span className="text-sm font-medium text-foreground">User</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {renderActiveTab()}
        </main>
      </div>
    </div>
  );
};
