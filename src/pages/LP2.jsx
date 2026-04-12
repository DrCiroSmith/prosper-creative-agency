import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Zap, Users, TrendingUp, Trophy, CheckCircle2 } from 'lucide-react';

const SERVICE_DETAILS = [
    { icon: <Target size={28} />, title: 'MARKETING STRATEGY', desc: 'Go beyond visual content. We build frameworks that turn your audience into paying clients.' },
    { icon: <Zap size={28} />, title: 'HIGH-IMPACT CONTENT', desc: 'Photography and video designed to stop the scroll and build emotional brand connection.' },
    { icon: <Users size={28} />, title: 'EVENT MANAGEMENT', desc: 'From logistics to lead capture, we ensure your events are growth engines, not just parties.' },
    { icon: <TrendingUp size={28} />, title: 'GROWTH AUDITS', desc: 'We analyze your current visual output and provide a roadmap for better ROI and engagement.' },
];

export default function LP2() {
    return (
        <div className="min-h-screen bg-black font-['Inter',sans-serif] selection:bg-[#00AEEF] selection:text-black pt-32">
            {/* ═══ SERVICES HERO ═══ */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00AEEF]/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto">
                    <div className="reveal mb-8">
                        <span className="inline-block py-1.5 px-5 rounded-full border border-white/10 glass-dark text-[10px] font-black uppercase tracking-[0.2em] text-[#00AEEF]">
                            Strategic Excellence
                        </span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h1 className="reveal-delayed-1 text-6xl md:text-8xl font-['Montserrat',sans-serif] font-black uppercase leading-[0.9] tracking-tighter mb-10">
                                STRATEGIC<br /><span className="text-[#00AEEF]">RESULTS</span>
                            </h1>
                            <p className="reveal-delayed-2 text-xl text-gray-400 font-medium leading-relaxed mb-12 max-w-lg">
                                We go beyond aesthetics. We provide the strategic framework and creative tools you need to maximize ROI and dominate your market.
                            </p>
                            <div className="reveal-delayed-3 flex flex-wrap gap-6">
                                <Link to="/ap2" className="px-8 py-4 bg-[#00AEEF] text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue group inline-flex items-center gap-2">
                                    Download Brochure
                                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {SERVICE_DETAILS.map((s, i) => (
                                <div key={i} className={`reveal-delayed-${i + 1} p-10 rounded-[32px] glass-card flex flex-col gap-8`}>
                                    <div className="w-16 h-16 rounded-2xl bg-[#00AEEF]/10 flex items-center justify-center text-[#00AEEF]">
                                        {s.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-black uppercase tracking-[0.1em] mb-4">{s.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed font-medium">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ RESULTS GRID ═══ */}
            <section className="py-40 bg-[#050505] border-y border-white/5 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2 reveal">
                            <Trophy size={64} className="text-[#00AEEF] mb-10" />
                            <h2 className="text-5xl md:text-7xl font-['Montserrat',sans-serif] font-black uppercase mb-10 leading-[0.9] tracking-tighter">
                                WE DON'T JUST CREATE<br /><span className="text-[#00AEEF]">WE DELIVER.</span>
                            </h2>
                            <p className="text-xl text-gray-400 font-medium mb-12">
                                Our approach combines professional production with marketing psychology to ensure every piece of content has a purpose and a measurable result.
                            </p>

                            <ul className="space-y-6">
                                {['Direct ROI-focused strategy', 'Award-winning visual production', 'Scalable content ecosystems'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-white font-bold uppercase tracking-widest text-xs">
                                        <CheckCircle2 size={18} className="text-[#00AEEF]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="lg:w-1/2 bento-grid w-full">
                            <div className="col-span-12 md:col-span-6 reveal-delayed-1 glass-card p-12 rounded-[40px] text-center">
                                <div className="text-6xl font-black text-white mb-2 font-['Montserrat',sans-serif] tracking-tighter">100%</div>
                                <div className="text-[#00AEEF] text-xs font-black uppercase tracking-widest">Quality Guaranteed</div>
                            </div>
                            <div className="col-span-12 md:col-span-6 reveal-delayed-2 glass-card p-12 rounded-[40px] text-center">
                                <div className="text-6xl font-black text-white mb-2 font-['Montserrat',sans-serif] tracking-tighter">24/7</div>
                                <div className="text-[#00AEEF] text-xs font-black uppercase tracking-widest">Strategic Support</div>
                            </div>
                            <div className="col-span-12 reveal-delayed-3 glass-card p-12 rounded-[40px] text-center border-[#00AEEF]/20 bg-[#00AEEF]/5">
                                <div className="text-6xl font-black text-white mb-2 font-['Montserrat',sans-serif] tracking-tighter">FREE</div>
                                <div className="text-[#00AEEF] text-xs font-black uppercase tracking-widest">Initial Creative Audit</div>
                                <div className="mt-8">
                                    <Link to="/ap2" className="text-white font-black uppercase tracking-widest text-[10px] border-b border-[#00AEEF] pb-1 hover:text-[#00AEEF] transition-colors">
                                        Get Started Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
