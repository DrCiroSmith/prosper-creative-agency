import React from 'react';
import { Download, FileText, CheckCircle2, ArrowRight, ShieldCheck, Phone } from 'lucide-react';

const CHAPTERS = [
    'Strategy Architecture & Goal Setting',
    'Audience Mapping & Targeting',
    'Content Design & Event Delivery',
    'Lead Capture Flow & Systems',
    'ROI Measurement & Follow-Up',
];

export default function AP1() {
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
        <div className="min-h-screen bg-black font-body selection:bg-[#FFDC00] selection:text-black pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-2 gap-20 items-stretch">

                    {/* LEFT — Value prop */}
                    <div className="lg:sticky lg:top-36 self-start">
                        <div className="reveal mb-8">
                            <span className="inline-block py-1 px-4 rounded-full border border-[#FFDC00]/20 bg-[#FFDC00]/5 text-[10px] font-black uppercase tracking-[0.2em] text-[#FFDC00]">
                                Premium Resource
                            </span>
                        </div>

                        <h1 className="reveal-delayed-1 text-5xl md:text-7xl font-heading font-black uppercase leading-[0.9] tracking-tighter mb-8">
                            MASTER YOUR<br /><span className="text-[#FFDC00]">EVENT ROI</span>
                        </h1>

                        <p className="reveal-delayed-2 text-xl text-gray-400 font-medium leading-relaxed mb-12 max-w-lg">
                            This framework helps you structure events as a core part of your marketing strategy — designed for immediate deployment and measurable results.
                        </p>

                        <div className="reveal-delayed-3 space-y-4 mb-12">
                            <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6">Execution Roadmap</h3>
                            {CHAPTERS.map((ch, i) => (
                                <div key={ch} className="group flex items-center gap-5 p-5 rounded-2xl glass-dark border border-white/5 hover:border-[#FFDC00]/30 transition-all duration-500">
                                    <span className="text-[#FFDC00] font-black text-xs w-6 shrink-0 font-heading">0{i + 1}</span>
                                    <span className="text-gray-300 text-sm font-bold uppercase tracking-wider">{ch}</span>
                                </div>
                            ))}
                        </div>

                        {/* Micro-Contact Card */}
                        <div className="reveal-delayed-4 glass-card p-6 rounded-[24px] flex items-center gap-5 max-w-sm">
                            <div className="w-12 h-12 rounded-xl bg-[#FFDC00]/10 flex items-center justify-center text-[#FFDC00]">
                                <Phone size={20} />
                            </div>
                            <div>
                                <div className="text-white text-[10px] font-black uppercase tracking-widest mb-1">Expert Support</div>
                                <a href="tel:+19546291020" className="text-[#FFDC00] text-sm font-bold hover:underline">+1 954 629 1020</a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — Download Hub */}
                    <div className="reveal relative lg:mt-10">
                        <div className="absolute -inset-10 bg-[#FFDC00]/5 rounded-[60px] blur-[100px] pointer-events-none" />

                        <div className="relative glass-card rounded-[40px] p-12 md:p-16 flex flex-col items-center text-center overflow-hidden border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
                            <div className="absolute top-0 left-0 w-full h-2 bg-[#FFDC00]" />

                            <div className="w-24 h-24 bg-[#FFDC00]/10 rounded-3xl flex items-center justify-center text-[#FFDC00] mb-10 group animate-pulse">
                                <FileText size={48} strokeWidth={1.5} />
                            </div>

                            <h2 className="text-3xl font-heading font-black text-white uppercase tracking-tight mb-4">
                                Strategy Framework PDF
                            </h2>
                            <p className="text-gray-500 font-medium mb-12">
                                Download your official Prosper Creative guide. No registration required.
                            </p>

                            <div className="w-full space-y-6">
                                <button
                                    onClick={handleDownload}
                                    className="btn-trendy w-full py-6 text-lg justify-center gap-3 active:scale-[0.98] transition-all"
                                >
                                    <Download size={22} className="animate-bounce" />
                                    DOWNLOAD FREE BROCHURE
                                </button>

                                <div className="flex items-center justify-center gap-3 text-gray-500 text-[10px] font-black uppercase tracking-widest">
                                    <ShieldCheck size={14} className="text-[#FFDC00]" />
                                    Verified Secured · Instant Access · No Email
                                </div>
                            </div>

                            {/* Branding */}
                            <div className="mt-20 pt-10 border-t border-white/5 w-full flex flex-col items-center">
                                <div className="bg-white text-black px-4 py-1 font-black text-xs uppercase tracking-widest rounded-lg mb-4">
                                    PROSPER
                                </div>
                                <div className="text-[10px] text-gray-600 font-black uppercase tracking-[0.2em] space-x-4">
                                    <span>Photography</span>
                                    <span className="text-white/20">•</span>
                                    <span>Video</span>
                                    <span className="text-white/20">•</span>
                                    <span>Strategy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
