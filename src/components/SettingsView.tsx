import React, { useState } from 'react';
import { 
  User, 
  Settings, 
  Shield, 
  Bell, 
  Palette, 
  Bot, 
  Globe, 
  CreditCard,
  Users,
  Lock,
  Eye,
  Moon,
  Sun,
  Sparkles,
  Database,
  Cloud
} from 'lucide-react';

const settingsCategories = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'preferences', label: 'Preferences', icon: Settings },
  { id: 'ai', label: 'AI Settings', icon: Bot },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'billing', label: 'Billing', icon: CreditCard },
  { id: 'team', label: 'Team Management', icon: Users },
];

export const SettingsView = () => {
  const [activeCategory, setActiveCategory] = useState('profile');
  const [darkMode, setDarkMode] = useState(false);
  const [aiTone, setAiTone] = useState('professional');
  const [jurisdiction, setJurisdiction] = useState('ontario');

  const renderCategoryContent = () => {
    switch (activeCategory) {
      case 'profile':
        return (
          <div className="space-y-8">
            <div className="harvey-card rounded-2xl p-8 border border-white/30">
              <h3 className="text-xl font-bold text-foreground mb-6">Profile Information</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Full Name</label>
                    <input
                      type="text"
                      value="Alex Specter"
                      className="w-full px-4 py-3 glass-panel rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 border border-white/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                    <input
                      type="email"
                      value="alex.specter@lawfirm.com"
                      className="w-full px-4 py-3 glass-panel rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 border border-white/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Position</label>
                    <input
                      type="text"
                      value="Senior Partner"
                      className="w-full px-4 py-3 glass-panel rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 border border-white/20"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Bar Association ID</label>
                    <input
                      type="text"
                      value="LSO-123456"
                      className="w-full px-4 py-3 glass-panel rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 border border-white/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Phone</label>
                    <input
                      type="tel"
                      value="+1 (416) 555-0123"
                      className="w-full px-4 py-3 glass-panel rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 border border-white/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Practice Areas</label>
                    <input
                      type="text"
                      value="Corporate Law, Litigation, Employment"
                      className="w-full px-4 py-3 glass-panel rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 border border-white/20"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-8">
                <button className="px-6 py-3 bg-accent text-accent-foreground rounded-xl font-medium hover:scale-105 transition-all duration-300">
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        );
      
      case 'ai':
        return (
          <div className="space-y-8">
            <div className="harvey-card rounded-2xl p-8 border border-white/30">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg ai-glow">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Nora AI Configuration</h3>
                  <p className="text-sm text-muted-foreground">Customize your AI assistant's behavior and preferences</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-3">AI Response Tone</label>
                    <div className="space-y-2">
                      {[
                        { value: 'professional', label: 'Professional', desc: 'Formal, precise legal language' },
                        { value: 'conversational', label: 'Conversational', desc: 'Clear, approachable explanations' },
                        { value: 'academic', label: 'Academic', desc: 'Detailed, scholarly analysis' }
                      ].map((tone) => (
                        <label key={tone.value} className="flex items-center space-x-3 p-3 glass-panel rounded-xl hover:bg-white/60 transition-all duration-300 cursor-pointer border border-white/20">
                          <input
                            type="radio"
                            name="aiTone"
                            value={tone.value}
                            checked={aiTone === tone.value}
                            onChange={(e) => setAiTone(e.target.value)}
                            className="text-accent focus:ring-accent"
                          />
                          <div>
                            <p className="font-medium text-foreground">{tone.label}</p>
                            <p className="text-xs text-muted-foreground">{tone.desc}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-3">Primary Jurisdiction</label>
                    <select 
                      value={jurisdiction}
                      onChange={(e) => setJurisdiction(e.target.value)}
                      className="w-full px-4 py-3 glass-panel rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 border border-white/20"
                    >
                      <option value="ontario">Ontario, Canada</option>
                      <option value="bc">British Columbia, Canada</option>
                      <option value="alberta">Alberta, Canada</option>
                      <option value="quebec">Quebec, Canada</option>
                      <option value="federal">Federal Canada</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-3">Citation Style</label>
                    <select className="w-full px-4 py-3 glass-panel rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 border border-white/20">
                      <option>McGill Guide (Canadian)</option>
                      <option>Bluebook</option>
                      <option>OSCOLA</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-medium text-muted-foreground">AI Features</h4>
                    {[
                      { label: 'Auto-summarize documents', desc: 'Automatically generate summaries for uploaded files' },
                      { label: 'Real-time legal research', desc: 'Search case law while typing' },
                      { label: 'Risk assessment alerts', desc: 'Highlight potential legal risks in documents' },
                      { label: 'Deadline tracking', desc: 'AI-powered deadline and statute of limitations alerts' }
                    ].map((feature, index) => (
                      <label key={index} className="flex items-start space-x-3 p-3 glass-panel rounded-xl hover:bg-white/60 transition-all duration-300 cursor-pointer border border-white/20">
                        <input type="checkbox" defaultChecked className="mt-1 text-accent focus:ring-accent" />
                        <div>
                          <p className="font-medium text-foreground text-sm">{feature.label}</p>
                          <p className="text-xs text-muted-foreground">{feature.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'preferences':
        return (
          <div className="space-y-8">
            <div className="harvey-card rounded-2xl p-8 border border-white/30">
              <h3 className="text-xl font-bold text-foreground mb-6">Application Preferences</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 glass-panel rounded-xl border border-white/20">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-accent/10">
                        {darkMode ? <Moon className="w-5 h-5 text-accent" /> : <Sun className="w-5 h-5 text-accent" />}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Dark Mode</p>
                        <p className="text-xs text-muted-foreground">Switch between light and dark themes</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${darkMode ? 'bg-accent' : 'bg-gray-300'}`}
                    >
                      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${darkMode ? 'translate-x-7' : 'translate-x-1'}`} />
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-3">Default Currency</label>
                    <select className="w-full px-4 py-3 glass-panel rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 border border-white/20">
                      <option>CAD - Canadian Dollar</option>
                      <option>USD - US Dollar</option>
                      <option>EUR - Euro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-3">Time Zone</label>
                    <select className="w-full px-4 py-3 glass-panel rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 border border-white/20">
                      <option>Eastern Time (Toronto)</option>
                      <option>Pacific Time (Vancouver)</option>
                      <option>Mountain Time (Calgary)</option>
                      <option>Central Time (Winnipeg)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-3">Language</label>
                    <select className="w-full px-4 py-3 glass-panel rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 border border-white/20">
                      <option>English (Canada)</option>
                      <option>Français (Canada)</option>
                      <option>English (US)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-3">Default Document View</label>
                    <select className="w-full px-4 py-3 glass-panel rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 border border-white/20">
                      <option>Split View (Document + AI)</option>
                      <option>Document Only</option>
                      <option>AI Summary Only</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-3">Auto-save Interval</label>
                    <select className="w-full px-4 py-3 glass-panel rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 border border-white/20">
                      <option>Every 30 seconds</option>
                      <option>Every minute</option>
                      <option>Every 5 minutes</option>
                      <option>Manual only</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="harvey-card rounded-2xl p-8 border border-white/30">
            <h3 className="text-xl font-bold text-foreground mb-4">Coming Soon</h3>
            <p className="text-muted-foreground">This section is under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your account, preferences, and AI configuration</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Settings Navigation */}
        <div className="harvey-card rounded-2xl p-6 border border-white/30 h-fit">
          <h3 className="text-lg font-bold text-foreground mb-6">Settings</h3>
          <nav className="space-y-2">
            {settingsCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-xl text-left transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-accent text-accent-foreground shadow-md'
                      : 'text-muted-foreground hover:bg-white/60 hover:text-foreground'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{category.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          {renderCategoryContent()}
        </div>
      </div>
    </div>
  );
};