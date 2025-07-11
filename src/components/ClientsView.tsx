
import React from 'react';
import { Search, Plus, Mail, Phone, Building } from 'lucide-react';

const sampleClients = [
  {
    id: '1',
    name: 'ABC Corporation',
    email: 'contact@abc-corp.com',
    phone: '+1 (555) 123-4567',
    activeCases: 3,
    totalBilled: '$45,000',
    lastContact: '2 days ago',
    status: 'active'
  },
  {
    id: '2',
    name: 'Tech Startup Inc.',
    email: 'legal@techstartup.com',
    phone: '+1 (555) 987-6543',
    activeCases: 1,
    totalBilled: '$12,500',
    lastContact: '1 week ago',
    status: 'active'
  },
  {
    id: '3',
    name: 'Innovation Labs',
    email: 'info@innovationlabs.com',
    phone: '+1 (555) 456-7890',
    activeCases: 0,
    totalBilled: '$28,750',
    lastContact: '3 weeks ago',
    status: 'inactive'
  }
];

export const ClientsView = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
          <p className="text-gray-600">Manage your client relationships</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Client</span>
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search clients..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleClients.map((client) => (
          <div key={client.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Building className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{client.name}</h3>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    client.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {client.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{client.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{client.phone}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500">Active Cases</p>
                <p className="text-lg font-semibold text-gray-900">{client.activeCases}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Total Billed</p>
                <p className="text-lg font-semibold text-gray-900">{client.totalBilled}</p>
              </div>
            </div>

            <div className="text-xs text-gray-500 mb-4">
              Last contact: {client.lastContact}
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                View Details
              </button>
              <button className="px-3 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
