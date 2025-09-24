import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PrompterPage from '@/src/pages/PrompterPage';
import LandingPage from '@/src/pages/landing/LandingPage';

// Placeholder components for other routes
const LoginPage = () => <div className="p-8 text-center"><h1 className="text-2xl font-bold">Login Page</h1><p>Placeholder for the login page.</p><Link to="/" className="text-blue-500 hover:underline">Go Home</Link></div>;
const DemoPage = () => <div className="p-8 text-center"><h1 className="text-2xl font-bold">Demo Page</h1><p>Placeholder for the demo page.</p><Link to="/" className="text-blue-500 hover:underline">Go Home</Link></div>;


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/prompt" element={<PrompterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/demo" element={<DemoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
