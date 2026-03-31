import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ArrowRight, Camera, Video, Mic2, Clapperboard, PartyPopper } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ActionPage from './pages/ActionPage';

const SERVICES = [
  { icon: <Camera size={20} />, label: 'Photography' },
  { icon: <Video size={20} />, label: 'Videography' },
  { icon: <Mic2 size={20} />, label: 'Podcasts' },
  { icon: <Clapperboard size={20} />, label: 'Multimedia' },
  { icon: <PartyPopper size={20} />, label: 'Events' },
];

function Home() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="bg-[#0a0a0a]">

      {/* ═══ HERO — full-viewport cinematic ═══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={base + 'hero_studio.png'} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#0a0a0a]" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-32 pb-20">
          {/* Large centered logo */}
          <div className="inline-block bg-white/95 rounded-3xl px-8 py-4 mb-12 shadow-xl shadow-black/30">
            <img
              src={base + 'PROSPER_CREATIVE_LOGO.png'}
              alt="Prosper Creative Agency"
              className="h-28 md:h-40 w-auto object-contain"
            />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.9] mb-8"
            style={{ fontFamily: 'Montserrat, sans-serif' }}>
            WE <span className="text-gradient-blue">CAPTURE</span><br />YOUR STORY
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Prosper Creative Agency transforms your events and brand moments into powerful visual narratives that convert audiences into clients.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link to="/guide"
              className="px-8 py-4 bg-[#00AEEF] text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue group inline-flex items-center gap-2">
              Get the Free Marketing Guide
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="https://prospercreativeagency.com/" target="_blank" rel="noreferrer"
              className="px-8 py-4 glass text-white font-bold text-sm uppercase tracking-widest rounded-full hover:border-[#00AEEF]/50 transition-all">
              View Our Work →
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest block mb-4">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              OUR <span className="text-gradient-blue">SERVICES</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {SERVICES.map(({ icon, label }) => (
              <div key={label}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#111] border border-white/5 hover:border-[#00AEEF]/30 transition-all group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-[#00AEEF]/10 flex items-center justify-center text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-black transition-all">
                  {icon}
                </div>
                <span className="text-gray-300 text-sm font-semibold uppercase tracking-widest group-hover:text-white transition-colors">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest block mb-4">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase text-white leading-tight mb-8"
                style={{ fontFamily: 'Montserrat, sans-serif' }}>
                CREATIVITY<br />MEETS<br /><span className="text-gradient-blue">STRATEGY</span>
              </h2>
              <div className="w-16 h-1 bg-[#00AEEF] mb-8 rounded-full"></div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                We're a full-service creative agency specializing in turning events and brand moments into stunning visual stories. Whether it's a corporate event, product launch, or podcast session — we bring it to life.
              </p>
              <p className="text-gray-500 leading-relaxed mb-10">
                Our team combines technical excellence with creative vision to deliver photography, videography, podcasting, and multimedia content that doesn't just look great — it drives real business results.
              </p>
              <Link to="/guide"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00AEEF] text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue">
                Download Our Free Guide →
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '500+', label: 'Events Captured' },
                { num: '12+', label: 'Years Experience' },
                { num: '98%', label: 'Client Satisfaction' },
                { num: '4K', label: 'Video Resolution' },
              ].map(({ num, label }) => (
                <div key={label}
                  className="bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-[#00AEEF]/30 transition-all group">
                  <div className="text-4xl font-black text-[#00AEEF] mb-2 group-hover:scale-105 transition-transform"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}>{num}</div>
                  <div className="text-gray-500 text-sm font-medium uppercase tracking-widest">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="relative py-32 overflow-hidden border-t border-white/5">
        <img src={base + 'hero_event.png'} alt="" className="absolute inset-0 w-full h-full object-cover object-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/70" />
        <div className="relative z-10 text-center px-6">
          <h2 className="text-5xl md:text-7xl font-black uppercase text-white leading-tight mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}>
            READY TO<br /><span className="text-gradient-blue">ELEVATE</span><br />YOUR BRAND?
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
            Start with our free Event Marketing Success Framework and discover how to turn every event into a growth engine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/guide"
              className="px-10 py-5 bg-[#00AEEF] text-black font-black uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue text-base inline-flex items-center gap-2">
              Get the Free Guide →
            </Link>
            <a href="tel:+19545495250"
              className="px-10 py-5 glass text-white font-bold uppercase tracking-widest rounded-full hover:border-[#00AEEF]/50 transition-all text-sm">
              📞 Call Us Now
            </a>
          </div>
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
            <Route path="/guide" element={<LandingPage />} />
            <Route path="/download" element={<ActionPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
