import React from 'react';
import { Link } from 'react-router-dom';

const ViewSchedule = () => {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Schedule</h1>
          <Link
            to="/babysitter-dashboard"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Back to Dashboard
          </Link>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Today's Schedule */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Today's Schedule</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <div>
                      <p className="font-medium text-gray-900">Morning Session</p>
                      <p className="text-sm text-gray-500">8:00 AM - 12:00 PM</p>
                    </div>
                    <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                      Active
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <div>
                      <p className="font-medium text-gray-900">Afternoon Session</p>
                      <p className="text-sm text-gray-500">1:00 PM - 5:00 PM</p>
                    </div>
                    <span className="px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                      Upcoming
                    </span>
                  </div>
                </div>
              </div>

              {/* Weekly Overview */}
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">Weekly Overview</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <div>
                      <p className="font-medium text-gray-900">Monday</p>
                      <p className="text-sm text-gray-500">Full Day (8:00 AM - 5:00 PM)</p>
                    </div>
                    <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                      Confirmed
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <div>
                      <p className="font-medium text-gray-900">Tuesday</p>
                      <p className="text-sm text-gray-500">Morning Shift (8:00 AM - 12:00 PM)</p>
                    </div>
                    <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                      Confirmed
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <div>
                      <p className="font-medium text-gray-900">Wednesday</p>
                      <p className="text-sm text-gray-500">Full Day (8:00 AM - 5:00 PM)</p>
                    </div>
                    <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                      Confirmed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Events</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
                  <p className="font-medium text-gray-900">Staff Meeting</p>
                  <p className="text-sm text-gray-500">Thursday, 2:00 PM</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                  <p className="font-medium text-gray-900">Parent-Teacher Conference</p>
                  <p className="text-sm text-gray-500">Friday, 10:00 AM</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                  <p className="font-medium text-gray-900">Training Session</p>
                  <p className="text-sm text-gray-500">Next Monday, 9:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSchedule; 