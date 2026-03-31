import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Link2 } from 'lucide-react';

const SOCIAL = [
    { href: 'https://www.instagram.com/prosper_creativeagency', icon: <Link2 size={15} />, label: 'Instagram' },
    { href: 'https://www.prospercreative.com', icon: <Globe size={15} />, label: 'Website' },
    { href: 'mailto:hello@prospercreative.com', icon: <Mail size={15} />, label: 'Email' },
];

const SERVICES = ['Photography', 'Videography', 'Podcasts', 'Multimedia', 'Events'];

export default function Footer() {
    return (
        <footer className="bg-[#080808] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
                <div className="grid md:grid-cols-3 gap-12 mb-16">

                    {/* Brand Block */}
                    <div className="md:col-span-1">
                        <img
                            src={import.meta.env.BASE_URL + 'PROSPER_CREATIVE_LOGO.png'}
                            alt="Prosper Creative Agency"
                            className="h-14 w-auto object-contain mb-6"
                            onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                        />
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
                            A creative agency specializing in photography, video production, podcasts, and multimedia storytelling.
                        </p>
                        <div className="flex gap-3">
                            {SOCIAL.map(({ href, icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={label}
                                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:border-[#00AEEF] hover:text-[#00AEEF] transition-all duration-200"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Services</h4>
                        <ul className="space-y-2.5">
                            {SERVICES.map((s) => (
                                <li key={s}>
                                    <span className="text-gray-500 text-sm hover:text-[#00AEEF] transition-colors cursor-default flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-[#00AEEF] inline-block"></span>
                                        {s}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Block */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Get the Free Guide</h4>
                        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                            Download "The Event Marketing Success Framework" — free, instant PDF access.
                        </p>
                        <Link
                            to="/lp-a"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00AEEF] text-black font-black text-xs uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue"
                        >
                            Download Now →
                        </Link>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-600 text-xs">
                        &copy; {new Date().getFullYear()} Prosper Creative Agency. All rights reserved.
                    </p>
                    <p className="text-gray-700 text-xs">
                        Photography · Video · Podcasts · Multimedia
                    </p>
                </div>
            </div>
        </footer>
    );
}
