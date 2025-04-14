import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Login from './pages/Login';
import ManagerDashboard from './pages/ManagerDashboard';
import BabysitterDashboard from './pages/BabysitterDashboard';
import ReportIncident from './pages/ReportIncident';
import ViewSchedule from './pages/ViewSchedule';
import ChildAttendance from './pages/ChildAttendance';
import ChildManagement from './pages/ChildManagement';
import BabysitterManagement from './pages/BabysitterManagement';
import FinancialManagement from './pages/FinancialManagement';
import PrivateRoute from './components/PrivateRoute';
import ManagerIncidents from './pages/ManagerIncidents';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/manager-dashboard"
                element={
                  <PrivateRoute>
                    <ManagerDashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/manager/child-management"
                element={
                  <PrivateRoute>
                    <ChildManagement />
                  </PrivateRoute>
                }
              />
              <Route
                path="/manager/babysitter-management"
                element={
                  <PrivateRoute>
                    <BabysitterManagement />
                  </PrivateRoute>
                }
              />
              <Route
                path="/manager/financial-management"
                element={
                  <PrivateRoute>
                    <FinancialManagement />
                  </PrivateRoute>
                }
              />
              <Route
                path="/manager/incidents"
                element={
                  <PrivateRoute>
                    <ManagerIncidents />
                  </PrivateRoute>
                }
              />
              <Route
                path="/babysitter-dashboard"
                element={
                  <PrivateRoute>
                    <BabysitterDashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/babysitter/report-incident"
                element={
                  <PrivateRoute>
                    <ReportIncident />
                  </PrivateRoute>
                }
              />
              <Route
                path="/babysitter/view-schedule"
                element={
                  <PrivateRoute>
                    <ViewSchedule />
                  </PrivateRoute>
                }
              />
              <Route
                path="/babysitter/child-attendance"
                element={
                  <PrivateRoute>
                    <ChildAttendance />
                  </PrivateRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 