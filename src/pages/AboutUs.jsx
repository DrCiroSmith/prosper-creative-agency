import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Video, Mic2, Star, Users, ArrowRight, Target, Award, CheckCircle2 } from 'lucide-react';

export default function AboutUs() {
    const base = import.meta.env.BASE_URL;

    return (
        <div className="bg-[#0a0a0a] overflow-x-hidden">
            {/* ═══ HERO ═══ */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                <img src={base + 'hero_event.png'} alt="" className="absolute inset-0 w-full h-full object-cover object-center opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0a0a0a]/80 to-[#0a0a0a]" />

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-40 pb-20">
                    <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-[0.3em] block mb-6 animate-fade-in">Since 2012</span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-white leading-[0.9] mb-8 animate-fade-in-up"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        BEYOND THE <br /><span className="text-gradient-blue">LENS.</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in">
                        Prosper Creative Agency is a boutique visual storytelling studio dedicated to elevating brands through cinematic excellence and strategic creativity.
                    </p>
                    <div className="w-20 h-1.5 bg-[#00AEEF] mx-auto rounded-full animate-fade-in"></div>
                </div>
            </section>

            {/* ═══ OUR MISSION ═══ */}
            <section className="py-28 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest block mb-4">Our Vision</span>
                            <h2 className="text-4xl md:text-5xl font-black uppercase text-white leading-tight mb-8"
                                style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                CREATIVITY WITH <br /><span className="text-gradient-blue">PURPOSE</span>
                            </h2>
                            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                                <p>
                                    Founded over a decade ago, Prosper Creative Agency was built on the belief that visual content should do more than just look pretty—it should perform.
                                </p>
                                <p>
                                    As a team of photographers, cinematographers, and multimedia experts, we bridge the gap between high-end aesthetics and measurable business results. We don't just capture events; we engineer narratives that build brand equity.
                                </p>
                            </div>

                            <div className="mt-12 grid grid-cols-2 gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#00AEEF]/10 flex items-center justify-center text-[#00AEEF] shrink-0 mt-1">
                                        <Target size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-2">Strategy First</h4>
                                        <p className="text-gray-500 text-sm">Every shot is mapped to your brand's core marketing goals.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#00AEEF]/10 flex items-center justify-center text-[#00AEEF] shrink-0 mt-1">
                                        <Award size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-2">Excellence</h4>
                                        <p className="text-gray-500 text-sm">Industry-leading gear meets obsessive attention to detail.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-4 bg-[#00AEEF]/10 rounded-[32px] blur-2xl group-hover:bg-[#00AEEF]/20 transition-all duration-700" />
                            <div className="relative glass-dark rounded-[32px] overflow-hidden border border-white/5 shadow-2xl">
                                <img src={base + 'hero_studio.png'} alt="About Prosper Creative" className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-0 left-0 p-8">
                                    <p className="text-[#00AEEF] font-black italic text-xl uppercase tracking-tighter" style={{ fontFamily: 'Montserrat, sans-serif' }}>Est. 2012</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ STATS ═══ */}
            <section className="py-20 bg-[#060606] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { num: '500+', label: 'Events Logged', icon: <Users size={16} /> },
                            { num: '12+', label: 'Years Active', icon: <Star size={16} /> },
                            { num: '98%', label: 'Retention Rate', icon: <CheckCircle2 size={16} /> },
                            { num: '4K', label: 'Master Quality', icon: <Video size={16} /> }
                        ].map(({ num, label, icon }) => (
                            <div key={label} className="text-center group">
                                <div className="text-[#00AEEF] mb-4 flex justify-center group-hover:scale-110 transition-transform">{icon}</div>
                                <div className="text-4xl lg:text-5xl font-black text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{num}</div>
                                <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ OUR SERVICES (Mini) ═══ */}
            <section className="py-28">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center mb-20">
                    <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest block mb-4">Media Excellence</span>
                    <h2 className="text-4xl md:text-5xl font-black uppercase text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        ONE TEAM. <span className="text-gradient-blue">TOTAL</span> SOLUTION.
                    </h2>
                </div>

                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                    {[
                        { title: 'Photography', desc: 'Commercial, events, and portraiture with a sharp narrative edge.', icon: <Camera />, color: 'bg-blue-500/10' },
                        { title: 'Cinematography', desc: 'High-end video production from short-form social to full event recaps.', icon: <Video />, color: 'bg-purple-500/10' },
                        { title: 'Podcasting', desc: 'Professional audio and video podcasting in our dedicated South Florida studio.', icon: <Mic2 />, color: 'bg-emerald-500/10' },
                    ].map((item) => (
                        <div key={item.title} className="glass-dark rounded-2xl p-10 border border-white/5 hover:border-[#00AEEF]/40 hover:shadow-[0_0_30px_rgba(0,174,239,0.1)] transition-all group">
                            <div className={`w-14 h-14 rounded-2xl mb-8 flex items-center justify-center text-white ${item.color} group-hover:bg-[#00AEEF] group-hover:text-black transition-all`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold uppercase text-white tracking-tight mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ═══ FINAL CTA ═══ */}
            <section className="py-32 border-t border-white/5 bg-gradient-to-b from-[#0a0a0a] to-black">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-4xl md:text-6xl font-black uppercase text-white leading-tight mb-8"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        LET'S WORK <br /><span className="text-gradient-blue">TOGETHER.</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                        Ready to transform your vision into an iconic visual story? Whether you have a specific project or just a seed of an idea, we're here to grow it.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link to="/download" className="px-10 py-5 bg-[#00AEEF] text-black font-black uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue flex items-center gap-2">
                            Contact Us <ArrowRight size={18} />
                        </Link>
                        <a href="https://www.instagram.com/prosper_creativeagency" target="_blank" rel="noreferrer"
                            className="px-10 py-5 glass text-white font-bold uppercase tracking-widest rounded-full hover:border-[#00AEEF]/50 transition-all text-sm">
                            Instagram Portfolio
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
