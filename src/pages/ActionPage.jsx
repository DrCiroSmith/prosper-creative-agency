import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, FileText, CheckCircle2, ArrowRight, ShieldCheck, Camera, Mic2, Video, Phone } from 'lucide-react';

const CHAPTERS = [
    'Strategy Architecture & Goal Setting',
    'Audience Mapping & Targeting',
    'Content Design & Event Delivery',
    'Lead Capture Flow & Systems',
    'ROI Measurement & Follow-Up',
];

export default function ActionPage() {
    const [email, setEmail] = useState('');
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;
        const link = document.createElement('a');
        link.href = import.meta.env.BASE_URL + 'Prosper Creative The Event Marketing PDF Content.pdf';
        link.download = 'The_Event_Marketing_Success_Framework_Prosper_Creative.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDone(true);
    };

    return (
        <div className="bg-[#0a0a0a] min-h-screen pt-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT — Value prop */}
                    <div className="lg:sticky lg:top-36">
                        <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest block mb-6">Free Download</span>
                        <h1 className="text-5xl md:text-6xl font-black uppercase text-white leading-none mb-6"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            GET YOUR<br />FREE <span className="text-gradient-blue">EVENT</span><br />GUIDE
                        </h1>
                        <p className="text-gray-400 text-lg leading-relaxed mb-10">
                            This guide helps you structure events as a core part of your marketing strategy — step by step, no fluff, immediate results.
                        </p>

                        {/* Service icons */}
                        <div className="flex gap-4 mb-10">
                            {[Camera, Video, Mic2].map((Icon, i) => (
                                <div key={i} className="w-12 h-12 bg-[#00AEEF]/10 rounded-xl flex items-center justify-center text-[#00AEEF]">
                                    <Icon size={20} />
                                </div>
                            ))}
                            <div className="flex items-center text-gray-500 text-sm">Photography · Video · Podcasts</div>
                        </div>

                        <div className="w-full h-px bg-white/5 mb-10"></div>

                        {/* Chapter list */}
                        <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">What's Inside</h3>
                        <div className="space-y-3 mb-10">
                            {CHAPTERS.map((ch, i) => (
                                <div key={ch} className="flex items-center gap-4 py-3 px-4 rounded-xl bg-[#111] border border-white/5 hover:border-[#00AEEF]/20 transition-all">
                                    <span className="text-[#00AEEF] font-black text-xs w-6 shrink-0" style={{ fontFamily: 'Montserrat, sans-serif' }}>0{i + 1}</span>
                                    <span className="text-gray-300 text-sm font-medium">{ch}</span>
                                </div>
                            ))}
                        </div>

                        {/* Contact */}
                        <div className="glass rounded-xl p-5 flex items-center gap-4">
                            <Phone size={18} className="text-[#00AEEF] shrink-0" />
                            <div>
                                <div className="text-white text-sm font-bold">Need help? Call us</div>
                                <a href="tel:+19546291020" className="text-[#00AEEF] text-sm hover:underline">+1 954 629 1020</a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — Form */}
                    <div>
                        {!done ? (
                            <div className="relative">
                                <div className="absolute -inset-1 bg-[#00AEEF]/10 rounded-3xl blur-2xl"></div>
                                <div className="relative bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                                    <div className="h-1.5 bg-gradient-to-r from-[#00AEEF] to-[#0070a8]"></div>
                                    <div className="p-8 sm:p-10">

                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="w-14 h-14 bg-[#00AEEF]/10 rounded-xl flex items-center justify-center text-[#00AEEF]">
                                                <FileText size={28} />
                                            </div>
                                            <div>
                                                <h2 className="text-xl font-black text-white uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>Get Instant Access</h2>
                                                <p className="text-gray-500 text-sm">Enter your email to unlock the free guide</p>
                                            </div>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div>
                                                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email Address *</label>
                                                <input
                                                    type="email" id="email" required value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="your@email.com"
                                                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#00AEEF]/50 focus:ring-2 focus:ring-[#00AEEF]/20 transition-all text-sm"
                                                />
                                                <p className="text-gray-600 text-xs mt-2">We respect your privacy. No spam, ever.</p>
                                            </div>
                                            <button type="submit"
                                                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#00AEEF] text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue group">
                                                <Download size={16} />
                                                Register & Download Now
                                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </form>

                                        <div className="mt-8 flex items-center justify-center gap-2 text-gray-600 text-xs">
                                            <ShieldCheck size={14} className="text-[#00AEEF]/60" />
                                            100% Free · Instant PDF Access · No Credit Card
                                        </div>

                                        {/* Brand card */}
                                        <div className="mt-8 pt-8 border-t border-white/5">
                                            <div className="flex items-center gap-3">
                                                <div className="inline-block bg-white/95 rounded-xl px-3 py-1.5">
                                                    <img
                                                        src={import.meta.env.BASE_URL + 'PROSPER_CREATIVE_LOGO.png'}
                                                        alt="Prosper Creative"
                                                        className="h-8 w-auto object-contain"
                                                        onError={(e) => { e.target.onerror = null; e.target.parentElement.style.display = 'none'; }}
                                                    />
                                                </div>
                                                <p className="text-gray-600 text-xs leading-relaxed">
                                                    Prosper Creative Agency<br />Photography · Video · Podcasts · Events
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="relative">
                                <div className="absolute -inset-1 bg-[#00AEEF]/10 rounded-3xl blur-2xl"></div>
                                <div className="relative bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                                    <div className="h-1.5 bg-gradient-to-r from-[#00AEEF] to-[#0070a8]"></div>
                                    <div className="p-10 text-center">
                                        <div className="w-20 h-20 bg-[#00AEEF]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 size={40} className="text-[#00AEEF]" />
                                        </div>
                                        <h2 className="text-2xl font-black uppercase text-white mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>You're In!</h2>
                                        <p className="text-gray-400 text-sm mb-8">Your download is starting automatically. If it doesn't, click below.</p>
                                        <div className="space-y-3">
                                            <a href={import.meta.env.BASE_URL + 'Prosper Creative The Event Marketing PDF Content.pdf'}
                                                download="The_Event_Marketing_Success_Framework_Prosper_Creative.pdf"
                                                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#00AEEF] text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue">
                                                <Download size={14} /> Download Again
                                            </a>
                                            <a href="https://www.instagram.com/prosper_creativeagency" target="_blank" rel="noreferrer"
                                                className="flex items-center justify-center gap-2 w-full px-6 py-3 glass text-white font-bold text-sm uppercase tracking-widest rounded-full hover:border-[#00AEEF]/40 transition-all">
                                                Follow Prosper Creative →
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
