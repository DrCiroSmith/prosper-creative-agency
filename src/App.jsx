import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPageA from './pages/LandingPageA';
import ActionPageA from './pages/ActionPageA';
import LandingPageB from './pages/LandingPageB';
import ActionPageB from './pages/ActionPageB';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 animate-fade-in-up">
      <h1 className="text-4xl font-bold text-dark">Welcome to Prosper Creative</h1>
      <p className="text-lg text-gray-600 max-w-lg">
        Select a landing page variation to view the Event Marketing campaign flow.
      </p>
      <div className="flex gap-4 mt-8">
        <Link to="/lp-a" className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition shadow-lg hover:shadow-xl font-medium">
          View Landing Page A
        </Link>
        <Link to="/lp-b" className="px-6 py-3 bg-dark text-white rounded-lg hover:bg-gray-800 transition shadow-lg hover:shadow-xl font-medium">
          View Landing Page B
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lp-a" element={<LandingPageA />} />
            <Route path="/action-a" element={<ActionPageA />} />
            <Route path="/lp-b" element={<LandingPageB />} />
            <Route path="/action-b" element={<ActionPageB />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
