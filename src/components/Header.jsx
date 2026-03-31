import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <img
                        src={import.meta.env.BASE_URL + "PROSPER_CREATIVE_LOGO.png"}
                        alt="Prosper Creative"
                        className="h-10 w-auto object-contain brightness-0 invert transition-all group-hover:brightness-100 group-hover:[filter:invert(85%)_sepia(60%)_saturate(500%)_hue-rotate(5deg)]"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                        }}
                    />
                    <span className="hidden text-xl font-black tracking-tight text-white group-hover:text-yellow-400 transition-colors uppercase">
                        Prosper Creative
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {[['Home', '/'], ['Funnel A', '/lp-a'], ['Funnel B', '/lp-b']].map(([label, href]) => (
                        <Link key={label} to={href}
                            className="text-sm font-semibold uppercase tracking-widest text-gray-400 hover:text-yellow-400 transition-colors">
                            {label}
                        </Link>
                    ))}
                    <Link to="/lp-a"
                        className="px-5 py-2.5 bg-yellow-400 text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-yellow-300 transition-all hover:shadow-lg hover:shadow-yellow-400/20">
                        Get Free Guide →
                    </Link>
                </nav>

                {/* Mobile toggle */}
                <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white">
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 px-6 py-6 space-y-4">
                    {[['Home', '/'], ['Funnel A', '/lp-a'], ['Funnel B', '/lp-b']].map(([label, href]) => (
                        <Link key={label} to={href} onClick={() => setMobileOpen(false)}
                            className="block text-white font-semibold uppercase tracking-widest hover:text-yellow-400 transition-colors">
                            {label}
                        </Link>
                    ))}
                    <Link to="/lp-a" onClick={() => setMobileOpen(false)}
                        className="block w-full text-center px-5 py-3 bg-yellow-400 text-black font-black uppercase tracking-widest rounded-full hover:bg-yellow-300 transition-all">
                        Get Free Guide →
                    </Link>
                </div>
            )}
        </header>
    );
}
