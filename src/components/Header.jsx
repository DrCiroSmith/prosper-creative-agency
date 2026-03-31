import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
    ['Home', '/'],
    ['Funnel A', '/lp-a'],
    ['Funnel B', '/lp-b'],
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 h-24 flex items-center justify-between">
                {/* Logo — large and prominent */}
                <Link to="/" className="flex items-center group shrink-0">
                    <img
                        src={import.meta.env.BASE_URL + 'PROSPER_CREATIVE_LOGO.png'}
                        alt="Prosper Creative Agency"
                        className="h-16 w-auto object-contain transition-all duration-300 group-hover:opacity-80"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                    <span
                        style={{ display: 'none' }}
                        className="text-2xl font-black tracking-tight text-white"
                    >
                        PROSPER <span className="text-[#00AEEF]">CREATIVE</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map(([label, to]) => (
                        <Link
                            key={label}
                            to={to}
                            className="text-sm font-semibold uppercase tracking-widest text-gray-400 hover:text-[#00AEEF] transition-colors duration-200"
                        >
                            {label}
                        </Link>
                    ))}
                    <Link
                        to="/lp-a"
                        className="ml-4 px-6 py-3 bg-[#00AEEF] text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all duration-200 glow-blue"
                    >
                        Get Free Guide →
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
                    {NAV_LINKS.map(([label, to]) => (
                        <Link
                            key={label}
                            to={to}
                            onClick={() => setOpen(false)}
                            className="block text-white font-bold uppercase tracking-widest text-sm hover:text-[#00AEEF] transition-colors"
                        >
                            {label}
                        </Link>
                    ))}
                    <Link
                        to="/lp-a"
                        onClick={() => setOpen(false)}
                        className="block text-center px-6 py-3.5 bg-[#00AEEF] text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all"
                    >
                        Get Free Guide →
                    </Link>
                </div>
            )}
        </header>
    );
}
