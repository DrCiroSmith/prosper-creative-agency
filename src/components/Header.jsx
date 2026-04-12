import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const [ctaLink, setCtaLink] = useState('/ap2');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);

        // Smart CTA logic
        const saved = localStorage.getItem('activeFunnel');
        if (location.pathname === '/lp1') {
            setCtaLink('/ap1');
            localStorage.setItem('activeFunnel', '/ap1');
        } else if (location.pathname === '/lp2') {
            setCtaLink('/ap2');
            localStorage.setItem('activeFunnel', '/ap2');
        } else if (saved) {
            setCtaLink(saved);
        }

        return () => window.removeEventListener('scroll', onScroll);
    }, [location]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30'
                : 'bg-transparent'
                }`}
        >
            {/* Top micro-bar — contact info */}
            <div className="hidden md:block border-b border-white/5 bg-black/40">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-end gap-6 py-1.5">
                    <a href="tel:+19546291020" className="flex items-center gap-1.5 text-gray-500 hover:text-[#00AEEF] text-xs transition-colors">
                        <Phone size={10} /> +1 954 629 1020
                    </a>
                    <a href="mailto:prospercreativeagency@gmail.com" className="flex items-center gap-1.5 text-gray-500 hover:text-[#00AEEF] text-xs transition-colors">
                        <Mail size={10} /> prospercreativeagency@gmail.com
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-10 h-28 flex items-center justify-between">
                {/* Logo — LARGE, with brightness filter so dark parts glow on dark bg */}
                <Link to="/" className="flex items-center group shrink-0">
                    <div className="bg-white/95 rounded-2xl px-4 py-2 shadow-lg shadow-black/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(0,174,239,0.2)]">
                        <img
                            src={import.meta.env.BASE_URL + 'PROSPER_CREATIVE_LOGO.png'}
                            alt="Prosper Creative Agency"
                            className="h-16 w-auto object-contain"
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {/* Funnel Quick Access */}
                    <div className="flex items-center gap-3 mr-4 py-2 px-3 bg-white/5 rounded-full border border-white/10">
                        <Link
                            to="/lp1"
                            title="Emotional Landing Page"
                            className="w-8 h-8 rounded-full bg-[#FFDC00] text-black flex items-center justify-center font-black text-[10px] hover:scale-110 active:scale-95 transition-all shadow-lg shadow-[#FFDC00]/20"
                        >
                            LP1
                        </Link>
                        <Link
                            to="/lp2"
                            title="Cognitive Landing Page"
                            className="w-8 h-8 rounded-full bg-[#FFDC00] text-black flex items-center justify-center font-black text-[10px] hover:scale-110 active:scale-95 transition-all shadow-lg shadow-[#FFDC00]/20"
                        >
                            LP2
                        </Link>
                    </div>

                    {[
                        ['Home', '/'],
                        ['About Us', '/about'],
                        ['Guide', '/download']
                    ].map(([label, to]) => (
                        <Link
                            key={label}
                            to={to}
                            className="text-sm font-semibold uppercase tracking-widest text-gray-400 hover:text-[#00AEEF] transition-colors duration-200"
                        >
                            {label}
                        </Link>
                    ))}
                    <a href="https://www.instagram.com/prosper_creativeagency" target="_blank" rel="noreferrer"
                        className="text-sm font-semibold uppercase tracking-widest text-gray-400 hover:text-[#00AEEF] transition-colors duration-200">
                        Our Work
                    </a>
                    <Link
                        to={ctaLink}
                        className="ml-4 px-6 py-3 bg-[#00AEEF] text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all duration-200 glow-blue shadow-lg"
                    >
                        Free Guide →
                    </Link>
                </nav>

                {/* Mobile toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white p-2 hover:text-[#00AEEF] transition-colors"
                    aria-label="Toggle menu"
                >
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden glass-dark border-t border-white/5 px-6 py-6 space-y-4">
                    {[
                        ['Home', '/'],
                        ['About Us', '/about'],
                        ['Guide', '/download']
                    ].map(([label, to]) => (
                        <Link key={label} to={to} onClick={() => setOpen(false)}
                            className="block text-white font-bold uppercase tracking-widest text-sm hover:text-[#00AEEF] transition-colors">
                            {label}
                        </Link>
                    ))}
                    <a href="https://www.instagram.com/prosper_creativeagency" target="_blank" rel="noreferrer"
                        className="block text-white font-bold uppercase tracking-widest text-sm hover:text-[#00AEEF] transition-colors">
                        Our Work
                    </a>
                    <a href="tel:+19546291020" className="block text-gray-400 text-sm">📞 +1 954 629 1020</a>
                    {/* Funnel Quick Access — Mobile */}
                    <div className="flex items-center gap-4 py-4 border-y border-white/5">
                        <Link to="/lp1" onClick={() => setOpen(false)} className="flex-1 flex items-center justify-center gap-3 py-3 rounded-xl bg-[#FFDC00] text-black font-black uppercase tracking-widest text-[10px]">
                            <span className="w-6 h-6 rounded-full border border-black/20 flex items-center justify-center bg-white/20">1</span>
                            Emotional Landing Page
                        </Link>
                        <Link to="/lp2" onClick={() => setOpen(false)} className="flex-1 flex items-center justify-center gap-3 py-3 rounded-xl bg-[#FFDC00] text-black font-black uppercase tracking-widest text-[10px]">
                            <span className="w-6 h-6 rounded-full border border-black/20 flex items-center justify-center bg-white/20">2</span>
                            Cognitive Landing Page
                        </Link>
                    </div>

                    <Link to={ctaLink} onClick={() => setOpen(false)}
                        className="block text-center px-6 py-3.5 bg-[#00AEEF] text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all shadow-lg">
                        Free Guide →
                    </Link>
                </div>
            )}
        </header>
    );
}
