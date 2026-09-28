import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import Dashboard from './pages/Dashboard';
import Audits from './pages/Audits';
import Chat from './pages/Chat';
import Memory from './pages/Memory';
import NotFound from './pages/NotFound';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-900 antialiased font-sans flex-col md:flex-row w-full">
        <Sidebar className={mobileMenuOpen ? 'flex' : 'hidden md:flex'} />
        
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
          <Navbar onMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)} title="Dashboard" />
          
          <main className="flex-1 overflow-y-auto overflow-x-hidden relative">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/audits" element={<Audits />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/memory" element={<Memory />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
