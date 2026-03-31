import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Camera, Video, Mic2, Star } from 'lucide-react';

const BENEFITS = [
    {
        icon: <Camera size={20} />,
        title: 'Strategy First',
        desc: 'Learn why most events fail and how a clear marketing strategy changes everything.',
    },
    {
        icon: <Video size={20} />,
        title: 'Capture & Convert',
        desc: 'Build a lead-capture system that turns every attendee into a measurable opportunity.',
    },
    {
        icon: <Mic2 size={20} />,
        title: 'Follow Up & Close',
        desc: 'The framework that converts post-event energy into signed clients and real revenue.',
    },
];

export default function LandingPageA() {
    const base = import.meta.env.BASE_URL;

    return (
        <div className="bg-[#0a0a0a]">

            {/* ═══ CINEMATIC HERO ═══ */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Full-bleed background */}
                <img
                    src={base + 'hero_studio.png'}
                    alt="Professional photography studio"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Left-to-right gradient — text readable on left */}
                <div className="absolute inset-0 hero-overlay" />
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 w-full">
                    <div className="max-w-2xl">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00AEEF] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00AEEF]"></span>
                            </span>
                            <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest">Free Guide — Funnel A</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black uppercase text-white leading-[0.9] mb-8"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            HOW TOP BRANDS<br />USE EVENTS TO<br />
                            <span className="text-gradient-blue">BUILD POWERFUL</span><br />
                            STRATEGIES
                        </h1>

                        <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-lg">
                            Learn the key principles behind successful event marketing and how to apply them immediately to attract leads, build trust, and grow your business.
                        </p>

                        {/* Quick wins */}
                        <ul className="space-y-3 mb-12">
                            {[
                                'Understand event marketing strategy from the ground up',
                                'Design events with clear purpose and measurable goals',
                                'Build real marketing impact that outlasts the event itself',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <CheckCircle2 size={18} className="text-[#00AEEF] shrink-0 mt-0.5" />
                                    <span className="text-gray-300 text-sm font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Social proof row */}
                        <div className="flex items-center gap-4 mb-10">
                            <div className="flex -space-x-2">
                                {['JM', 'SA', 'KT', 'RA', 'LM'].map((init, i) => (
                                    <div key={i}
                                        className={`w-8 h-8 rounded-full border-2 border-[#0a0a0a] flex items-center justify-center text-[10px] font-bold ${['bg-[#00AEEF] text-black', 'bg-white text-black', 'bg-gray-600 text-white', 'bg-[#0090C9] text-black', 'bg-gray-400 text-black'][i]}`}>
                                        {init}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-0.5 text-[#F5C518]">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                                </div>
                                <span className="text-gray-400 text-xs">500+ event marketers trust this framework</span>
                            </div>
                        </div>

                        <Link to="/action-a"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[#00AEEF] text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue group">
                            Download the Free Event Marketing Guide
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══ BENEFITS SECTION ═══ */}
            <section className="py-28">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="text-center mb-20">
                        <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest block mb-4">What's Inside</span>
                        <h2 className="text-4xl md:text-5xl font-black uppercase text-white leading-tight"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            WHAT YOU'LL<br /><span className="text-gradient-blue">DISCOVER</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {BENEFITS.map(({ icon, title, desc }) => (
                            <div key={title}
                                className="bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-[#00AEEF]/30 hover:bg-[#141414] transition-all group">
                                <div className="w-12 h-12 bg-[#00AEEF]/10 rounded-xl flex items-center justify-center mb-6 text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-black transition-all">
                                    {icon}
                                </div>
                                <h3 className="text-lg font-black uppercase text-white mb-3"
                                    style={{ fontFamily: 'Montserrat, sans-serif' }}>{title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ 5-STEP FRAMEWORK PREVIEW ═══ */}
            <section className="py-28 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest block mb-4">Inside the Guide</span>
                            <h2 className="text-4xl font-black uppercase text-white leading-tight mb-8"
                                style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                THE 5-STEP<br /><span className="text-gradient-blue">SUCCESS</span><br />FRAMEWORK
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                A proven methodology used by top creative agencies to design events that generate real, measurable business results — not just attendance numbers.
                            </p>
                            <Link to="/action-a"
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00AEEF] text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue group">
                                Get the Full Framework
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Framework steps */}
                        <div className="space-y-3">
                            {[
                                ['01', 'Plan & Set Goals', 'Define what success looks like — brand awareness, leads, or relationships.'],
                                ['02', 'Target the Right Audience', 'Focus on quality over quantity. Right audience = better results.'],
                                ['03', 'Engage Attendees', 'Create experiences, not just events. People remember how they feel.'],
                                ['04', 'Capture Leads', 'Use your event to collect contacts and create future opportunities.'],
                                ['05', 'Follow Up & Convert', 'The real results happen AFTER the event. Turn connections into clients.'],
                            ].map(([num, title, desc]) => (
                                <div key={num}
                                    className="flex gap-4 p-4 rounded-xl hover:bg-[#111] border border-transparent hover:border-white/5 transition-all group cursor-default">
                                    <span className="text-[#00AEEF] font-black text-sm w-8 shrink-0 mt-0.5"
                                        style={{ fontFamily: 'Montserrat, sans-serif' }}>{num}</span>
                                    <div>
                                        <div className="text-white font-bold text-sm mb-1 group-hover:text-[#00AEEF] transition-colors">{title}</div>
                                        <div className="text-gray-500 text-xs leading-relaxed">{desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ BOTTOM CTA ═══ */}
            <section className="py-28 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-5xl md:text-6xl font-black uppercase text-white leading-tight mb-6"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        STOP HOSTING EVENTS.<br /><span className="text-gradient-blue">START DRIVING GROWTH.</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-12">
                        Get instant access to the framework that turns casual attendees into committed clients.
                    </p>
                    <Link to="/action-a"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-[#00AEEF] text-black font-black text-base uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue group">
                        Download the Free Guide Now
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
