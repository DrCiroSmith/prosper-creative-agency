import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Target, TrendingUp, Star } from 'lucide-react';

const PILLARS = [
    { icon: <Target size={18} />, label: 'Attract the right audience' },
    { icon: <Zap size={18} />, label: 'Capture leads effectively' },
    { icon: <Users size={18} />, label: 'Convert connections into clients' },
    { icon: <TrendingUp size={18} />, label: 'Measure real ROI from events' },
];

export default function LandingPageB() {
    return (
        <div className="bg-[#0a0a0a]">

            {/* ═══ HERO ═══ */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* BG deco */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-yellow-400/5 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-yellow-400/3 blur-3xl -translate-x-1/2 translate-y-1/2"></div>
                    <div className="absolute inset-0"
                        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '60px 60px' }}>
                    </div>
                </div>

                <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-10">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                        </span>
                        Limited-Time Free Download
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none mb-8">
                        TURN YOUR<br />
                        EVENTS INTO<br />
                        <span className="text-yellow-400">LEAD MACHINES</span>
                    </h1>

                    <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                        Discover how to create events that attract the right audience and generate real, measurable business results.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                        <Link to="/action-b"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/30 group">
                            Get the Free Guide Now
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <div className="flex items-center gap-0.5 text-yellow-400">
                                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                            </div>
                            500+ marketers already downloaded
                        </div>
                    </div>

                    {/* ═══ PILLARS ═══ */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        {PILLARS.map(({ icon, label }) => (
                            <div key={label} className="flex flex-col items-center gap-3 bg-[#111] border border-white/5 rounded-xl p-4 hover:border-yellow-400/20 transition-all group">
                                <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                                    {icon}
                                </div>
                                <span className="text-xs text-gray-400 font-medium text-center leading-tight">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ PROOF SECTION ═══ */}
            <section className="py-28 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Text */}
                        <div>
                            <span className="block text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4">The Problem</span>
                            <h2 className="text-4xl font-black uppercase text-white leading-tight mb-6">
                                HOSTING EVENTS<br /><span className="text-yellow-400">BUT NOT GETTING</span><br />RESULTS?
                            </h2>
                            <div className="border-l-2 border-yellow-400 pl-6 mb-8">
                                <p className="text-gray-400 text-lg leading-relaxed italic">
                                    "It's not the event. It's the strategy."
                                </p>
                            </div>
                            <p className="text-gray-500 leading-relaxed mb-8">
                                Most businesses invest thousands into events but walk away with nothing to show for it. The Event Marketing Success Framework changes that by giving you a repeatable playbook that turns every event into a lead-generating machine.
                            </p>
                            <Link to="/action-b"
                                className="inline-flex items-center gap-3 px-7 py-3.5 bg-yellow-400 text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-yellow-300 transition-all group">
                                Fix My Event Strategy
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { number: '73%', label: 'of event marketers say they don\'t capture leads effectively' },
                                { number: '5x', label: 'more ROI with a documented event marketing strategy' },
                                { number: '89%', label: 'Attend events because they want to network and build connections' },
                                { number: '2hrs', label: 'Average time to implement the framework into your next event' },
                            ].map(({ number, label }) => (
                                <div key={number} className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-yellow-400/20 transition-all">
                                    <div className="text-4xl font-black text-yellow-400 mb-2">{number}</div>
                                    <div className="text-gray-500 text-xs leading-relaxed">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ FINAL CTA ═══ */}
            <section className="py-28 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-5xl md:text-6xl font-black uppercase text-white leading-tight mb-6">
                        READY TO<br /><span className="text-yellow-400">UNLOCK</span><br />GROWTH?
                    </h2>
                    <p className="text-gray-400 text-lg mb-12">
                        Download the free framework and start transforming your events today.
                    </p>
                    <Link to="/action-b"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-yellow-400 text-black font-black text-base uppercase tracking-widest rounded-full hover:bg-yellow-300 transition-all shadow-2xl shadow-yellow-400/20 group">
                        Get the Free Guide Now
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
