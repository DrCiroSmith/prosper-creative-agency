import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Target, Users, Zap, Star } from 'lucide-react';

const PILLARS = [
    { icon: <Target size={18} />, label: 'Attract the right audience' },
    { icon: <Zap size={18} />, label: 'Capture leads strategically' },
    { icon: <Users size={18} />, label: 'Convert connections into clients' },
    { icon: <TrendingUp size={18} />, label: 'Measure real event ROI' },
];

const STATS = [
    { number: '73%', desc: 'of event marketers say they don\'t capture leads effectively' },
    { number: '5×', desc: 'more ROI with a documented event marketing strategy' },
    { number: '89%', desc: 'of attendees want to network and build meaningful connections' },
    { number: '2hrs', desc: 'Average time to implement the framework into your next event' },
];

export default function LandingPageB() {
    const base = import.meta.env.BASE_URL;
    return (
        <div className="bg-[#0a0a0a]">

            {/* ═══ CINEMATIC HERO — event background ═══ */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <img
                    src={base + 'hero_event.png'}
                    alt="Professional event production"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 hero-overlay-center" />
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-28 pb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-10">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00AEEF] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00AEEF]"></span>
                        </span>
                        <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest">Free Guide — Funnel B</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black uppercase text-white leading-[0.9] mb-8"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        TURN YOUR EVENTS<br />INTO
                        <span className="text-gradient-blue"> LEAD-GENERATING</span><br />MACHINES
                    </h1>

                    <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Discover how to create events that attract the right audience and generate real, measurable business results.
                    </p>

                    {/* Pillars */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-12">
                        {PILLARS.map(({ icon, label }) => (
                            <div key={label}
                                className="glass rounded-xl p-4 flex flex-col items-center gap-2 hover:border-[#00AEEF]/40 transition-all group">
                                <div className="w-10 h-10 rounded-full bg-[#00AEEF]/10 flex items-center justify-center text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-black transition-all">
                                    {icon}
                                </div>
                                <span className="text-xs text-gray-300 font-medium text-center leading-tight">{label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/action-b"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[#00AEEF] text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue group">
                            Get the Free Guide Now
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <div className="flex items-center gap-0.5 text-[#F5C518]">
                                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                            </div>
                            500+ marketers already downloaded
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ THE PROBLEM ═══ */}
            <section className="py-28">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest block mb-4">The Problem</span>
                            <h2 className="text-4xl md:text-5xl font-black uppercase text-white leading-tight mb-8"
                                style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                HOSTING EVENTS<br />
                                <span className="text-gradient-blue">BUT NOT GETTING</span><br />
                                RESULTS?
                            </h2>
                            <div className="border-l-4 border-[#00AEEF] pl-6 mb-8 py-2">
                                <p className="text-gray-300 text-xl font-bold italic">
                                    "It's not the event.<br />It's the strategy."
                                </p>
                            </div>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                Most businesses invest thousands into events but walk away with nothing measurable to show for it. Bad strategy. No lead capture. Zero follow-up. The Event Marketing Success Framework changes all of that.
                            </p>
                            <Link to="/action-b"
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00AEEF] text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue group">
                                Fix My Event Strategy
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Stats grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {STATS.map(({ number, desc }) => (
                                <div key={number}
                                    className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-[#00AEEF]/30 transition-all group">
                                    <div className="text-4xl font-black text-[#00AEEF] mb-3 group-hover:scale-105 transition-transform"
                                        style={{ fontFamily: 'Montserrat, sans-serif' }}>{number}</div>
                                    <div className="text-gray-500 text-xs leading-relaxed">{desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ MISTAKES TO AVOID ═══ */}
            <section className="py-28 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest block mb-4">Common Pitfalls</span>
                        <h2 className="text-4xl font-black uppercase text-white"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            AVOID THESE<br /><span className="text-gradient-blue">MISTAKES</span>
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { mistake: 'No Clear Goal', result: 'Leads to confusion and wasted budget' },
                            { mistake: 'Wrong Audience', result: 'Low engagement, poor conversion rate' },
                            { mistake: 'Poor Experience', result: 'No emotional connection or followthrough' },
                            { mistake: 'No Follow-Up', result: 'Lost opportunities and zero ROI' },
                        ].map(({ mistake, result }) => (
                            <div key={mistake}
                                className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-red-500/20 transition-all group">
                                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mb-4 text-red-400 font-black text-sm">✕</div>
                                <div className="text-white font-bold text-sm mb-2">{mistake}</div>
                                <div className="text-gray-500 text-xs leading-relaxed">{result}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FINAL CTA ═══ */}
            <section className="py-28 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-5xl md:text-6xl font-black uppercase text-white leading-tight mb-6"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        READY TO<br /><span className="text-gradient-blue">UNLOCK GROWTH?</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-12">
                        Download the free framework and start transforming your events today.
                    </p>
                    <Link to="/action-b"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-[#00AEEF] text-black font-black text-base uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue group">
                        Get the Free Guide Now
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
