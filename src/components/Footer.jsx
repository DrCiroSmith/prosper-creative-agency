import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Link2 } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div>
                        <img
                            src={import.meta.env.BASE_URL + "PROSPER_CREATIVE_LOGO.png"}
                            alt="Prosper Creative"
                            className="h-10 w-auto object-contain brightness-0 invert mb-6"
                            onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                        />
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Crafting bold event marketing strategies that turn attendees into lifelong clients.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { href: 'https://www.instagram.com/prosper_creativeagency', icon: <Link2 size={16} /> },
                                { href: 'https://www.prospercreative.com', icon: <Globe size={16} /> },
                                { href: 'mailto:hello@prospercreative.com', icon: <Mail size={16} /> },
                            ].map(({ href, icon }, i) => (
                                <a key={i} href={href} target="_blank" rel="noreferrer"
                                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:border-yellow-400 hover:text-yellow-400 transition-all">
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Navigation</h4>
                        <ul className="space-y-3">
                            {[['Home', '/'], ['Landing A', '/lp-a'], ['Landing B', '/lp-b'], ['Download Guide A', '/action-a'], ['Download Guide B', '/action-b']].map(([label, href]) => (
                                <li key={label}>
                                    <Link to={href} className="text-gray-500 text-sm hover:text-yellow-400 transition-colors">{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Get the Free Guide</h4>
                        <p className="text-gray-500 text-sm mb-6">
                            The Event Marketing Success Framework is free and available for immediate download.
                        </p>
                        <Link to="/lp-a"
                            className="inline-flex items-center px-6 py-3 bg-yellow-400 text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-yellow-300 transition-all">
                            Download Now →
                        </Link>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-600 text-xs">&copy; {new Date().getFullYear()} Prosper Creative Agency. All rights reserved.</p>
                    <p className="text-gray-700 text-xs">Built with ❤️ for high-impact events.</p>
                </div>
            </div>
        </footer>
    );
}
