import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Instagram, Phone } from 'lucide-react';

const SOCIAL = [
    { href: 'https://www.instagram.com/prosper_creativeagency', icon: <Instagram size={15} />, label: 'Instagram' },
    { href: 'mailto:prospercreativeagency@gmail.com', icon: <Mail size={15} />, label: 'Email' },
    { href: 'tel:+19546291020', icon: <Phone size={15} />, label: 'Phone' },
];

export default function Footer() {
    return (
        <footer className="bg-[#060606] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
                <div className="grid md:grid-cols-3 gap-12 mb-16">

                    {/* Brand */}
                    <div>
                        <div className="inline-block bg-white/95 rounded-2xl px-5 py-2 mb-6 shadow-lg shadow-black/20">
                            <img
                                src={import.meta.env.BASE_URL + 'PROSPER_CREATIVE_LOGO.png'}
                                alt="Prosper Creative Agency"
                                className="h-14 w-auto object-contain"
                                onError={(e) => { e.target.onerror = null; e.target.parentElement.style.display = 'none'; }}
                            />
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
                            A creative agency specializing in photography, video, podcasts, and multimedia storytelling for events and brands.
                        </p>
                        <div className="flex gap-3">
                            {SOCIAL.map(({ href, icon, label }) => (
                                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:border-[#00AEEF] hover:text-[#00AEEF] transition-all duration-200">
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Contact</h4>
                        <ul className="space-y-4 text-gray-500 text-sm">
                            <li className="flex items-center gap-2">
                                <Phone size={14} className="text-[#00AEEF]" />
                                <a href="tel:+19546291020" className="hover:text-[#00AEEF] transition-colors">+1 954 629 1020</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={14} className="text-[#00AEEF]" />
                                <a href="mailto:prospercreativeagency@gmail.com" className="hover:text-[#00AEEF] transition-colors">prospercreativeagency@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Instagram size={14} className="text-[#00AEEF]" />
                                <a href="https://www.instagram.com/prosper_creativeagency" target="_blank" rel="noreferrer" className="hover:text-[#00AEEF] transition-colors">@prosper_creativeagency</a>
                            </li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Free Resource</h4>
                        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                            Download "The Event Marketing Success Framework" — free, instant PDF access.
                        </p>
                        <Link to="/guide"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00AEEF] text-black font-black text-xs uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue">
                            Download Now →
                        </Link>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-600 text-xs">&copy; {new Date().getFullYear()} Prosper Creative Agency. All rights reserved.</p>
                    <p className="text-gray-700 text-xs">Photography · Video · Podcasts · Multimedia · Events</p>
                </div>
            </div>
        </footer>
    );
}
