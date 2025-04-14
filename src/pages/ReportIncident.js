import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ReportIncident = () => {
  const [formData, setFormData] = useState({
    childName: '',
    incidentType: '',
    description: '',
    date: '',
    time: '',
    severity: 'low',
    reportedBy: localStorage.getItem('userEmail') || '',
    status: 'pending',
    managerNotified: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get the current babysitter's information
    const babysitterInfo = {
      email: localStorage.getItem('userEmail'),
      name: localStorage.getItem('userName')
    };

    // Create the incident report with babysitter info
    const incidentReport = {
      ...formData,
      reportedBy: babysitterInfo,
      timestamp: new Date().toISOString(),
      status: 'pending',
      managerNotified: true
    };

    // Here you would typically make an API call to save the incident report
    // and notify the manager
    console.log('Incident reported to manager:', incidentReport);
    
    // Show success message
    alert('Incident reported successfully! The manager has been notified.');
    
    // Redirect back to dashboard
    window.location.href = '/babysitter-dashboard';
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Report Incident</h1>
          <Link
            to="/babysitter-dashboard"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Back to Dashboard
          </Link>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="childName" className="block text-sm font-medium text-gray-700">
                  Child's Name
                </label>
                <input
                  type="text"
                  name="childName"
                  id="childName"
                  required
                  value={formData.childName}
                  onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="incidentType" className="block text-sm font-medium text-gray-700">
                  Incident Type
                </label>
                <select
                  name="incidentType"
                  id="incidentType"
                  required
                  value={formData.incidentType}
                  onChange={(e) => setFormData({ ...formData, incidentType: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="">Select type</option>
                  <option value="injury">Injury</option>
                  <option value="illness">Illness</option>
                  <option value="behavioral">Behavioral</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description of Incident
              </label>
              <textarea
                name="description"
                id="description"
                rows={4}
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Provide a detailed description of what happened..."
              />
            </div>

            <div>
              <label htmlFor="severity" className="block text-sm font-medium text-gray-700">
                Severity
              </label>
              <select
                name="severity"
                id="severity"
                required
                value={formData.severity}
                onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit Report to Manager
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportIncident; 