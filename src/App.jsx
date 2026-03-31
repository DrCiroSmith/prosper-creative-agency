import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPageA from './pages/LandingPageA';
import ActionPageA from './pages/ActionPageA';
import LandingPageB from './pages/LandingPageB';
import ActionPageB from './pages/ActionPageB';

function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-center px-6 pt-20">
      {/* Hero Tag */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
        </span>
        Free Event Marketing Guide
      </div>

      <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white leading-none mb-6">
        TRANSFORMING<br />
        <span className="text-yellow-400">IDEAS</span> INTO<br />
        <span className="text-yellow-400">SUCCESS</span>
      </h1>

      <p className="text-gray-400 text-lg max-w-xl mb-12 leading-relaxed">
        EDUCATION | PERFORMANCE | CONSULTANCY
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-24">
        <Link to="/lp-a"
          className="px-8 py-4 bg-yellow-400 text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40">
          Funnel A — Educational →
        </Link>
        <Link to="/lp-b"
          className="px-8 py-4 bg-transparent text-white font-black text-sm uppercase tracking-widest rounded-full border border-white/20 hover:border-yellow-400 hover:text-yellow-400 transition-all">
          Funnel B — Lead Gen →
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
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
