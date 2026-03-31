import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Camera, Video, Mic2, Star, Target, Zap, Users, TrendingUp } from 'lucide-react';

const FRAMEWORK_STEPS = [
    ['01', 'Plan & Set Goals', 'Define what success looks like — brand awareness, leads, or relationships.'],
    ['02', 'Target the Right Audience', 'Focus on quality over quantity. Right audience = better results.'],
    ['03', 'Engage Attendees', 'Create experiences, not just events. People remember how they feel.'],
    ['04', 'Capture Leads', 'Use your event to collect contacts and create future opportunities.'],
    ['05', 'Follow Up & Convert', 'The real results happen AFTER the event. Turn connections into clients.'],
];

const STATS = [
    { number: '73%', desc: 'of event marketers say they don\'t capture leads effectively' },
    { number: '5×', desc: 'more ROI with a documented event marketing strategy' },
    { number: '89%', desc: 'of attendees want to network and build meaningful connections' },
    { number: '2hrs', desc: 'Average time to implement the framework into your next event' },
];

export default function LandingPage() {
    const base = import.meta.env.BASE_URL;

    return (
        <div className="bg-[#0a0a0a]">

            {/* ═══ CINEMATIC HERO ═══ */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                <img src={base + 'hero_studio.png'} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
                <div className="absolute inset-0 hero-overlay" />
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-20 w-full">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00AEEF] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00AEEF]"></span>
                            </span>
                            <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest">Free Event Marketing Guide</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white leading-[0.9] mb-8"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            HOW TOP BRANDS<br />USE EVENTS TO<br />
                            <span className="text-gradient-blue">DRIVE GROWTH</span>
                        </h1>

                        <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-lg">
                            Learn the key principles behind successful event marketing and how to apply them immediately to attract leads, build trust, and grow your business.
                        </p>

                        <ul className="space-y-3 mb-12">
                            {[
                                'A 5-step framework used by top creative agencies',
                                'Lead capture systems that actually convert',
                                'ROI measurement toolkit for every event',
                                'Common mistakes to avoid (and how to fix them)',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <CheckCircle2 size={18} className="text-[#00AEEF] shrink-0 mt-0.5" />
                                    <span className="text-gray-300 text-sm font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Social proof */}
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

                        <Link to="/download"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[#00AEEF] text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue group">
                            Download the Free Guide
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══ THE PROBLEM ═══ */}
            <section className="py-28 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest block mb-4">The Problem</span>
                            <h2 className="text-4xl md:text-5xl font-black uppercase text-white leading-tight mb-8"
                                style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                HOSTING EVENTS<br />
                                <span className="text-gradient-blue">BUT NOT GETTING</span><br />RESULTS?
                            </h2>
                            <div className="border-l-4 border-[#00AEEF] pl-6 mb-8 py-2">
                                <p className="text-gray-300 text-xl font-bold italic">"It's not the event.<br />It's the strategy."</p>
                            </div>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                Most businesses invest thousands into events but walk away with nothing measurable. Bad strategy. No lead capture. Zero follow-up. The Event Marketing Success Framework changes everything by giving you a proven, repeatable playbook.
                            </p>
                            <Link to="/download"
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00AEEF] text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue group">
                                Fix My Event Strategy
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {STATS.map(({ number, desc }) => (
                                <div key={number} className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-[#00AEEF]/30 transition-all group">
                                    <div className="text-4xl font-black text-[#00AEEF] mb-3 group-hover:scale-105 transition-transform"
                                        style={{ fontFamily: 'Montserrat, sans-serif' }}>{number}</div>
                                    <div className="text-gray-500 text-xs leading-relaxed">{desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ 5-STEP FRAMEWORK ═══ */}
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
                            <Link to="/download"
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00AEEF] text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue group">
                                Get the Full Framework
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <div className="space-y-3">
                            {FRAMEWORK_STEPS.map(([num, title, desc]) => (
                                <div key={num} className="flex gap-4 p-4 rounded-xl hover:bg-[#111] border border-transparent hover:border-white/5 transition-all group cursor-default">
                                    <span className="text-[#00AEEF] font-black text-sm w-8 shrink-0 mt-0.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>{num}</span>
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

            {/* ═══ MISTAKES TO AVOID ═══ */}
            <section className="py-28 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest block mb-4">Common Pitfalls</span>
                        <h2 className="text-4xl font-black uppercase text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            AVOID THESE <span className="text-gradient-blue">MISTAKES</span>
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { mistake: 'No Clear Goal', result: 'Leads to confusion and wasted budget' },
                            { mistake: 'Wrong Audience', result: 'Low engagement, poor conversion rate' },
                            { mistake: 'Poor Experience', result: 'No emotional connection or follow-through' },
                            { mistake: 'No Follow-Up', result: 'Lost opportunities and zero ROI' },
                        ].map(({ mistake, result }) => (
                            <div key={mistake} className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-red-500/20 transition-all group">
                                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mb-4 text-red-400 font-black text-sm">✕</div>
                                <div className="text-white font-bold text-sm mb-2">{mistake}</div>
                                <div className="text-gray-500 text-xs leading-relaxed">{result}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FINAL CTA ═══ */}
            <section className="relative py-28 border-t border-white/5 overflow-hidden">
                <img src={base + 'hero_event.png'} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/80" />
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-5xl md:text-6xl font-black uppercase text-white leading-tight mb-6"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        STOP HOSTING EVENTS.<br /><span className="text-gradient-blue">START DRIVING GROWTH.</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-12">Get the framework that turns casual attendees into committed clients.</p>
                    <Link to="/download"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-[#00AEEF] text-black font-black text-base uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue group">
                        Download the Free Guide Now
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
