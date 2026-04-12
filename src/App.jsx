import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ArrowRight, Camera, Video, Mic2, Clapperboard, PartyPopper, MessageCircle, Phone } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ActionPage from './pages/ActionPage';
import AboutUs from './pages/AboutUs';
import LP1 from './pages/LP1';
import LP2 from './pages/LP2';
import AP1 from './pages/AP1';
import AP2 from './pages/AP2';

const SERVICES = [
  { icon: <Camera size={20} />, label: 'Photography' },
  { icon: <Video size={20} />, label: 'Videography' },
  { icon: <Mic2 size={20} />, label: 'Podcasts' },
  { icon: <Clapperboard size={20} />, label: 'Multimedia' },
  { icon: <PartyPopper size={20} />, label: 'Events' },
];

function Home({ heroBg = 'hero_studio.png' }) {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="bg-[#0a0a0a]">

      {/* ═══ HERO — full-viewport cinematic ═══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={base + heroBg} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
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

          <h1 className="text-5xl md:text-8xl font-black uppercase text-white leading-[0.9] mb-10 tracking-tighter" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            TRANSFORMING IDEAS <br />
            <span className="text-gradient-blue">INTO SUCCESS</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">EDUCATION</span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">PERFORMANCE</span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">CONSULTANCY</span>
            <div className="flex flex-col sm:flex-row gap-5 pt-8">
              <Link to="/ap2" className="flex items-center justify-center gap-3 px-12 py-6 text-lg font-black text-black transition-all bg-white rounded-full hover:bg-gray-200 active:scale-[0.98]">
                Get Strategic
                <ArrowRight size={22} className="text-black" />
              </Link>
            </div>
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
            <Link to="/lp2" className="group">
              <h2 className="text-4xl md:text-5xl font-black uppercase text-white group-hover:text-[#00AEEF] transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                OUR <span className="text-gradient-blue group-hover:text-[#33C1F5]">SERVICES</span>
              </h2>
            </Link>
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
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/ap1" className="btn-trendy py-5 px-10 text-lg uppercase tracking-widest font-black active:scale-[0.98] transition-all flex items-center gap-3">
                  Start Your Story
                  <ArrowRight size={20} />
                </Link>
              </div>
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
            <Link to="/ap2"
              className="px-10 py-5 bg-[#00AEEF] text-black font-black uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue text-base inline-flex items-center gap-2">
              Get the Free Guide →
            </Link>
            <a href="tel:+19546291020"
              className="px-10 py-5 glass text-white font-bold uppercase tracking-widest rounded-full hover:border-[#00AEEF]/50 transition-all text-sm">
              📞 Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test-1" element={<Home heroBg="hero_test_1.png" />} />
            <Route path="/test-2" element={<Home heroBg="hero_test_2.png" />} />
            <Route path="/guide" element={<LandingPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/lp1" element={<LP1 />} />
            <Route path="/ap1" element={<AP1 />} />
            <Route path="/lp2" element={<LP2 />} />
            <Route path="/ap2" element={<AP2 />} />
            <Route path="/download" element={<AP2 />} />
          </Routes>
        </main>
        <Footer />

        {/* Floating Contact Elements */}
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
          <Link to="https://wa.me/19546291020" target="_blank"
            className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform active:scale-95 group relative">
            <MessageCircle size={32} />
            <span className="absolute right-full mr-4 bg-white text-black text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Chat With Us
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/ap2"
              className="px-6 py-3 bg-[#00AEEF] text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#33C1F5] transition-all shadow-lg glow-blue">
              Download Brochure
            </Link>
            <Link to="/about"
              className="px-6 py-3 glass bg-white/10 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-all border border-white/10 backdrop-blur-md">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
