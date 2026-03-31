import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPageA from './pages/LandingPageA';
import ActionPageA from './pages/ActionPageA';
import LandingPageB from './pages/LandingPageB';
import ActionPageB from './pages/ActionPageB';

const SERVICES = [
  { emoji: '📷', label: 'Photography' },
  { emoji: '🎬', label: 'Videography' },
  { emoji: '🎙️', label: 'Podcasts' },
  { emoji: '🎞️', label: 'Multimedia' },
  { emoji: '🎪', label: 'Events' },
];

function Home() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="bg-[#0a0a0a]">

      {/* ═══════════════════════════════════════════
          HERO — full-viewport cinematic background
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* BG Image */}
        <img
          src={base + 'hero_studio.png'}
          alt="Prosper Creative studio"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 hero-overlay-center" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00AEEF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00AEEF]"></span>
            </span>
            <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest">Free Event Marketing Guide Available</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight text-white leading-[0.9] mb-8"
            style={{ fontFamily: 'Montserrat, sans-serif' }}>
            WE <span className="text-gradient-blue">CAPTURE</span><br />
            YOUR STORY
          </h1>

          <p className="text-gray-300 text-xl max-w-xl mx-auto mb-4 leading-relaxed">
            Photography · Videography · Podcasts · Multimedia · Events
          </p>
          <p className="text-gray-500 text-base max-w-lg mx-auto mb-12">
            Prosper Creative Agency transforms your events and brand into powerful visual narratives that convert.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/lp-a"
              className="px-8 py-4 bg-[#00AEEF] text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue">
              Get the Free Marketing Guide →
            </Link>
            <Link to="/lp-b"
              className="px-8 py-4 glass text-white font-bold text-sm uppercase tracking-widest rounded-full hover:border-[#00AEEF]/50 transition-all">
              Lead Generation Funnel →
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES STRIP
      ═══════════════════════════════════════════ */}
      <section className="border-y border-white/5 py-6">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {SERVICES.map(({ emoji, label }) => (
              <div key={label} className="flex items-center gap-2.5 group cursor-default">
                <span className="text-xl">{emoji}</span>
                <span className="text-gray-400 group-hover:text-[#00AEEF] font-semibold text-sm uppercase tracking-widest transition-colors">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT / MISSION SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest block mb-4">Who We Are</span>
              <h2 className="text-5xl font-black uppercase text-white leading-tight mb-8"
                style={{ fontFamily: 'Montserrat, sans-serif' }}>
                CREATIVITY<br />MEETS<br /><span className="text-gradient-blue">STRATEGY</span>
              </h2>
              <div className="w-16 h-1 bg-[#00AEEF] mb-8 rounded-full"></div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                We're a full-service creative agency that specializes in turning events and brand moments into stunning visual stories. Whether it's a corporate event, product launch, or podcast session — we bring it to life.
              </p>
              <p className="text-gray-500 leading-relaxed mb-10">
                Our team combines technical excellence with creative vision to deliver photography, videography, podcasting, and multimedia content that doesn't just look great — it drives real business results.
              </p>
              <Link to="/lp-a"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00AEEF] text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue">
                Download Our Free Guide →
              </Link>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '500+', label: 'Events Captured' },
                { num: '12+', label: 'Years Experience' },
                { num: '98%', label: 'Client Satisfaction' },
                { num: '4K', label: 'Video Resolution' },
              ].map(({ num, label }) => (
                <div key={label}
                  className="bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-[#00AEEF]/30 hover:bg-[#111]/80 transition-all group">
                  <div className="text-4xl font-black text-[#00AEEF] mb-2 group-hover:scale-105 transition-transform"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}>{num}</div>
                  <div className="text-gray-500 text-sm font-medium uppercase tracking-widest">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BOTTOM CTA STRIP
      ═══════════════════════════════════════════ */}
      <section className="relative py-32 overflow-hidden border-t border-white/10">
        <img
          src={base + 'hero_event.png'}
          alt="Event production"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]/50" />
        <div className="relative z-10 text-center px-6">
          <h2 className="text-5xl md:text-7xl font-black uppercase text-white leading-tight mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}>
            READY TO<br /><span className="text-gradient-blue">CAPTURE</span><br />YOUR VISION?
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
            Start with our free Event Marketing Success Framework and discover how to turn every shoot into a growth engine.
          </p>
          <Link to="/lp-a"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#00AEEF] text-black font-black uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue text-base">
            Get the Free Guide Now →
          </Link>
        </div>
      </section>
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
