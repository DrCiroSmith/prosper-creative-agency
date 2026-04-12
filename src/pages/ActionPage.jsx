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
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = import.meta.env.BASE_URL + 'Prosper Creative The Event Marketing PDF Content.pdf';
        link.download = 'The_Event_Marketing_Success_Framework_Prosper_Creative.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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

                    {/* RIGHT — Download Action */}
                    <div>
                        <div className="relative">
                            <div className="absolute -inset-1 bg-[#00AEEF]/10 rounded-3xl blur-2xl"></div>
                            <div className="relative bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                                <div className="h-1.5 bg-gradient-to-r from-[#00AEEF] to-[#0070a8]"></div>
                                <div className="p-8 sm:p-12 text-center">

                                    <div className="w-20 h-20 bg-[#00AEEF]/10 rounded-3xl flex items-center justify-center text-[#00AEEF] mx-auto mb-8 animate-pulse">
                                        <FileText size={40} />
                                    </div>

                                    <h2 className="text-2xl font-black text-white uppercase mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Instant Access Ready</h2>
                                    <p className="text-gray-500 text-sm mb-10">Click below to download the Event Marketing Success Framework immediately.</p>

                                    <button
                                        onClick={handleDownload}
                                        className="w-full flex items-center justify-center gap-4 px-8 py-6 bg-[#00AEEF] text-black font-black text-lg uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue group"
                                    >
                                        <Download size={24} className="group-hover:translate-y-1 transition-transform" />
                                        Download PDF Now
                                    </button>

                                    <div className="mt-8 flex items-center justify-center gap-2 text-gray-600 text-xs font-black uppercase tracking-widest">
                                        <ShieldCheck size={14} className="text-[#00AEEF]/60" />
                                        100% Free · No Email Required · Instant Access
                                    </div>

                                    {/* Brand card */}
                                    <div className="mt-12 pt-8 border-t border-white/5">
                                        <div className="flex items-center justify-center gap-4">
                                            <div className="inline-block bg-white/95 rounded-xl px-4 py-2">
                                                <img
                                                    src={import.meta.env.BASE_URL + 'PROSPER_CREATIVE_LOGO.png'}
                                                    alt="Prosper Creative"
                                                    className="h-10 w-auto object-contain"
                                                />
                                            </div>
                                            <div className="text-left">
                                                <p className="text-white text-xs font-black uppercase tracking-widest">Prosper Creative</p>
                                                <p className="text-gray-500 text-[10px] font-medium uppercase tracking-widest">Agency Production</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
