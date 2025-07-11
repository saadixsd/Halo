
import React from 'react';
import { Calendar, Plus, Clock, MapPin } from 'lucide-react';

const upcomingEvents = [
  {
    id: '1',
    title: 'Client Meeting - ABC Corp',
    time: '10:00 AM',
    date: 'Today',
    type: 'meeting',
    location: 'Conference Room A'
  },
  {
    id: '2',
    title: 'Court Hearing - Smith v. Johnson',
    time: '2:00 PM',
    date: 'Tomorrow',
    type: 'court',
    location: 'Courthouse Downtown'
  },
  {
    id: '3',
    title: 'Document Review Deadline',
    time: '5:00 PM',
    date: 'Jul 15, 2024',
    type: 'deadline',
    location: 'Internal'
  }
];

export const CalendarView = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
          <p className="text-gray-600">Manage your schedule and deadlines</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>New Event</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Widget */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">July 2024</h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">Prev</button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">Next</button>
            </div>
          </div>
          
          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                {day}
              </div>
            ))}
            {/* Calendar days would be rendered here */}
            {Array.from({ length: 35 }, (_, i) => (
              <div key={i} className="p-2 text-center text-sm hover:bg-gray-50 cursor-pointer">
                {i > 6 && i < 32 ? i - 6 : ''}
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="font-medium text-gray-900">{event.title}</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                  <Clock className="w-3 h-3" />
                  <span>{event.time} • {event.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                  <MapPin className="w-3 h-3" />
                  <span>{event.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
