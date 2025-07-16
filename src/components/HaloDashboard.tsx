
import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { DashboardHome } from './DashboardHome';
import { CasesView } from './CasesView';
import { AskNora } from './AskNora';
import { UploadAnalyze } from './UploadAnalyze';
import { ClientsView } from './ClientsView';
import { BillingView } from './BillingView';
import { CalendarView } from './CalendarView';
import { LegalResearchView } from './LegalResearchView';
import { SettingsView } from './SettingsView';

export type ActiveTab = 'dashboard' | 'cases' | 'clients' | 'billing' | 'calendar' | 'ask-nora' | 'upload' | 'research' | 'settings';

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
      case 'upload':
        return <UploadAnalyze />;
      case 'research':
        return <LegalResearchView />;
      case 'settings':
        return <SettingsView />;
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
        {/* Premium XenoraAI Header */}
        <header className="glass-premium border-b border-white/20 px-6 py-5 shadow-xenora-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex flex-col">
                <div className="flex items-center space-x-3">
                  <div className="w-14 h-14 gradient-xenora rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden ai-glow">
                    <span className="text-white font-bold text-xl relative z-10">X</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-baseline space-x-2">
                      <h1 className="text-4xl font-bold text-gradient-xenora tracking-tight">
                        Xenora
                      </h1>
                      <span className="text-xl font-semibold text-accent/90">Halo</span>
                    </div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider -mt-1">
                      Professional Legal Suite
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Mission Badge */}
              <div className="hidden lg:flex items-center space-x-2 mission-badge px-4 py-2 rounded-full text-xs font-semibold">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
                Everyone Deserves an Advocate
              </div>
              
              {/* AI Status Indicator */}
              <div className="hidden lg:flex items-center space-x-2 px-4 py-2 rounded-full glass-premium">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-green-700">Nora AI Online</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Enhanced Search */}
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Ask Nora anything or search globally..."
                  className="w-96 px-5 py-3 pl-12 pr-4 text-sm glass-premium rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 transition-all duration-300 placeholder:text-muted-foreground/70"
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-accent group-focus-within:text-xenora-pink transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              
              {/* User Profile */}
              <div className="flex items-center space-x-3 glass-premium px-4 py-2 rounded-2xl hover:bg-white/40 transition-all duration-300 cursor-pointer group">
                <div className="w-10 h-10 gradient-xenora rounded-2xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
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
