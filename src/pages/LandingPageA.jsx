import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Users, Target } from 'lucide-react';

const BENEFITS = [
    {
        icon: <Target size={20} />,
        title: 'Understand Event Strategy',
        desc: 'Align every event with your overarching marketing goals and stop leaving business on the table.',
    },
    {
        icon: <Users size={20} />,
        title: 'Design with Purpose',
        desc: 'Craft experiences that naturally guide attendees toward becoming qualified leads and loyal clients.',
    },
    {
        icon: <TrendingUp size={20} />,
        title: 'Build Real Impact',
        desc: 'Track, follow-up, and convert event excitement into measurable business revenue.',
    },
];

export default function LandingPageA() {
    return (
        <div className="bg-[#0a0a0a]">

            {/* ═══ HERO ═══ */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 -left-40 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
                    {/* Grid lines */}
                    <div className="absolute inset-0"
                        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                    </div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* LEFT */}
                        <div className="animate-fade-in-up">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                                </span>
                                Free Event Marketing Guide
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.95] mb-8">
                                HOW TOP<br />
                                BRANDS<br />
                                USE <span className="text-yellow-400">EVENTS</span>
                            </h1>

                            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
                                Most events fail because they lack structure. Learn the key principles behind successful event marketing and how to apply them immediately.
                            </p>

                            {/* Social proof */}
                            <div className="flex items-center gap-4 mb-10">
                                <div className="flex -space-x-2">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#0a0a0a] flex items-center justify-center text-[10px] font-bold ${['bg-yellow-400 text-black', 'bg-white text-black', 'bg-gray-600 text-white', 'bg-yellow-600 text-black'][i]}`}>
                                            {['JM', 'SA', 'KT', 'RA'][i]}
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm text-gray-400">
                                    <div className="flex items-center gap-1 text-yellow-400">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                                    </div>
                                    <span>Trusted by 500+ event marketers</span>
                                </div>
                            </div>

                            <Link to="/action-a"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40 group">
                                Download Free Guide
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* RIGHT: Guide preview card */}
                        <div className="relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-yellow-400/10 rounded-3xl blur-2xl"></div>
                            <div className="relative bg-[#111111] border border-white/10 rounded-2xl overflow-hidden w-full max-w-md shadow-2xl">
                                {/* Card top bar */}
                                <div className="h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                                <div className="p-8">
                                    <div className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-4">Prosper Creative Presents</div>
                                    <h2 className="text-2xl font-black text-white uppercase mb-2">Event Marketing<br />Success Framework</h2>
                                    <p className="text-gray-500 text-sm mb-8">5-step guide to turning any event into a lead-generation engine.</p>

                                    {/* Chapters preview */}
                                    <div className="space-y-3">
                                        {['Strategy Architecture', 'Audience Mapping', 'Content & Delivery', 'Lead Capture Flow', 'ROI Measurement'].map((ch, i) => (
                                            <div key={ch} className="flex items-center gap-3 py-2.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                                <span className="text-yellow-400 font-black text-xs w-5">0{i + 1}</span>
                                                <span className="text-gray-300 text-sm font-medium">{ch}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                                        <span className="text-gray-600 text-xs uppercase tracking-widest">Free Download</span>
                                        <span className="text-yellow-400 font-black text-sm">PDF Guide →</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ BENEFITS ═══ */}
            <section className="py-28 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <span className="block text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4">What's Inside</span>
                        <h2 className="text-4xl md:text-5xl font-black uppercase text-white leading-tight">
                            WHAT YOU'LL<br /><span className="text-yellow-400">DISCOVER</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {BENEFITS.map(({ icon, title, desc }) => (
                            <div key={title} className="bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-yellow-400/30 hover:bg-[#141414] transition-all group cursor-default">
                                <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-6 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                                    {icon}
                                </div>
                                <h3 className="text-lg font-black uppercase text-white mb-3">{title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ BOTTOM CTA ═══ */}
            <section className="py-28 border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 to-transparent"></div>
                </div>
                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-black uppercase text-white leading-tight mb-6">
                        STOP HOSTING EVENTS.<br /><span className="text-yellow-400">START DRIVING GROWTH.</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                        Get instant access to the framework that turns casual attendees into committed clients.
                    </p>
                    <Link to="/action-a"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-yellow-400 text-black font-black text-base uppercase tracking-widest rounded-full hover:bg-yellow-300 transition-all shadow-2xl shadow-yellow-400/20 hover:shadow-yellow-400/40 group">
                        Download the Free Guide Now
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
