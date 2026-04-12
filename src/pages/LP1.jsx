import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Video, Mic2, Clapperboard, PartyPopper } from 'lucide-react';

const SERVICES = [
    { icon: <Camera size={24} />, label: 'Photography', desc: 'Premium visual storytelling for high-end brands.' },
    { icon: <Video size={24} />, label: 'Video Production', desc: 'Cinematic experiences that capture every detail.' },
    { icon: <Clapperboard size={24} />, label: 'Multimedia', desc: 'Full-suite creative direction and execution.' },
    { icon: <Mic2 size={24} />, label: 'Podcasts', desc: 'Professional audio production and strategy.' },
];

export default function LP1() {
    const base = import.meta.env.BASE_URL;
    return (
        <div className="min-h-screen bg-black font-body selection:bg-[#FFDC00] selection:text-black">
            {/* ═══ HERO — full-viewport cinematic ═══ */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20 px-6">
                {/* Animated Background Gradient */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFDC00]/5 rounded-full blur-[120px] animate-pulse pointer-events-none" />

                <div className="relative z-10 text-center max-w-5xl mx-auto">
                    <div className="reveal mb-10">
                        <span className="inline-block py-1.5 px-6 rounded-full border border-white/10 glass-dark text-[10px] font-black uppercase tracking-[0.3em] text-[#FFDC00]">
                            Prosper Creative Agency
                        </span>
                    </div>

                    <h1 className="reveal-delayed-1 text-7xl md:text-9xl font-heading font-black uppercase leading-[0.85] tracking-tighter mb-10">
                        WE CAPTURE <br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>YOUR STORY</span>
                    </h1>

                    <p className="reveal-delayed-2 max-w-2xl mx-auto text-xl text-gray-400 font-medium leading-relaxed mb-14 px-4">
                        High-end photography, cinematic video, and professional podcasts designed to make your brand impossible to ignore.
                    </p>

                    <div className="reveal-delayed-3 flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link to="/download-1" className="btn-trendy group">
                            Learn More
                            <ArrowRight className="transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link to="/services" className="btn-secondary">
                            Our Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══ SERVICES BENTO GRID ═══ */}
            <section className="py-40 px-6 border-t border-white/5 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24 reveal">
                        <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tight mb-6">
                            CREATIVE <span className="text-[#FFDC00]">SOLUTIONS</span>
                        </h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">We provide a comprehensive range of creative services to elevate your brand presence and storyteller impact.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {SERVICES.map((s, i) => (
                            <div key={i} className={`reveal-delayed-${i + 1} glass-card p-10 rounded-[40px] flex flex-col items-start gap-8`}>
                                <div className="w-16 h-16 rounded-3xl bg-[#FFDC00] flex items-center justify-center text-black">
                                    {s.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black uppercase tracking-tight mb-3">{s.label}</h3>
                                    <p className="text-gray-500 leading-relaxed font-medium">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ STATS — High Contrast ═══ */}
            <section className="py-40 border-t border-white/5 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="reveal">
                            <h2 className="text-5xl font-heading font-black uppercase text-white leading-tight mb-10">
                                CREATIVITY<br />MEETS<br /><span className="text-[#FFDC00]">STRATEGY</span>
                            </h2>
                            <p className="text-gray-400 text-xl leading-relaxed mb-12 font-medium">
                                We're a full-service creative agency specializing in turning events and brand moments into stunning visual stories.
                            </p>
                            <div className="flex gap-4">
                                <div className="w-12 h-1 bg-[#FFDC00] rounded-full" />
                                <div className="w-4 h-1 bg-white/20 rounded-full" />
                                <div className="w-4 h-1 bg-white/20 rounded-full" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { num: '500+', label: 'Events Captured' },
                                { num: '12+', label: 'Years Exp.' },
                                { num: '98%', label: 'Satisfaction' },
                                { num: '4K', label: 'Cinematics' },
                            ].map(({ num, label }, i) => (
                                <div key={label} className={`reveal-delayed-${i + 1} bg-[#0a0a0a] border border-white/5 rounded-[32px] p-10 group hover:border-[#FFDC00]/30 transition-all`}>
                                    <div className="text-4xl font-black text-[#FFDC00] mb-2 font-heading tracking-tighter group-hover:scale-105 transition-transform">{num}</div>
                                    <div className="text-gray-500 text-xs font-black uppercase tracking-widest">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ FINAL CTA ═══ */}
            <section className="py-40 px-6 relative overflow-hidden bg-black border-t border-white/5">
                <div className="absolute right-0 top-0 w-96 h-96 bg-[#FFDC00]/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="glass-card p-20 md:p-32 rounded-[60px] text-center border-white/10">
                        <h2 className="text-5xl md:text-8xl font-heading font-black uppercase mb-10 leading-[0.9] tracking-tighter">
                            READY TO <br /><span className="text-[#FFDC00]">PROSPER?</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-14 max-w-xl mx-auto font-medium">
                            Join the elite brands that trust us to tell their story with unparalleled creative excellence.
                        </p>
                        <div className="flex justify-center">
                            <a href="https://www.instagram.com/prosper_creativeagency" target="_blank" rel="noreferrer" className="btn-trendy !px-12 !py-5">
                                Elevate Your Brand →
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
