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
        link.download = 'The_Creative_Storytelling_Guide_Prosper.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-black font-['Inter',sans-serif] selection:bg-[#00AEEF] selection:text-black pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-2 gap-20 items-stretch">

                    {/* Funnel A: Emotional Branding Hub */}
                    <div className="lg:sticky lg:top-36 self-start">
                        <div className="reveal mb-8">
                            <span className="inline-block py-1.5 px-5 rounded-full border border-[#00AEEF]/20 glass-dark text-[10px] font-black uppercase tracking-[0.2em] text-[#00AEEF]">
                                Emotional Branding Guide
                            </span>
                        </div>

                        <h1 className="reveal-delayed-1 text-5xl md:text-7xl font-['Montserrat',sans-serif] font-black uppercase leading-[0.9] tracking-tighter mb-10">
                            YOUR STORY<br /><span className="text-[#00AEEF]">STARTS</span> HERE
                        </h1>

                        <p className="reveal-delayed-2 text-xl text-gray-400 font-medium leading-relaxed mb-12 max-w-lg">
                            Master the art of emotional storytelling. This framework helps you capture moments that resonate, inspire, and build lasting human connections.
                        </p>

                        <div className="reveal-delayed-3 space-y-4 mb-12">
                            {['Visual Storytelling Foundations', 'Emotional Resonance Mapping', 'Cinematic Presence Techniques'].map((ch, i) => (
                                <div key={i} className="flex items-center gap-5 p-5 rounded-2xl glass-dark border border-white/5">
                                    <span className="text-[#00AEEF] font-black text-xs font-['Montserrat',sans-serif]">0{i + 1}</span>
                                    <span className="text-gray-300 text-sm font-bold uppercase tracking-widest">{ch}</span>
                                </div>
                            ))}
                        </div>

                        <div className="reveal-delayed-4 glass-card p-6 rounded-[24px] flex items-center gap-5 max-w-sm">
                            <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/10 flex items-center justify-center text-[#00AEEF]">
                                <Phone size={20} />
                            </div>
                            <div>
                                <div className="text-white text-[10px] font-black uppercase tracking-widest mb-1">Let's Talk Design</div>
                                <a href="https://api.whatsapp.com/send/?phone=19546291020&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="text-[#00AEEF] text-sm font-bold hover:underline">
                                    +1 954 629 1020
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Action Card */}
                    <div className="reveal relative lg:mt-10">
                        <div className="absolute -inset-10 bg-[#00AEEF]/5 rounded-[60px] blur-[100px] pointer-events-none" />
                        <div className="relative glass-card rounded-[40px] p-12 md:p-16 flex flex-col items-center text-center border-white/10 shadow-2xl">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00AEEF] to-[#33C1F5]" />
                            <div className="w-24 h-24 bg-[#00AEEF]/10 rounded-3xl flex items-center justify-center text-[#00AEEF] mb-10 animate-bounce">
                                <FileText size={48} />
                            </div>
                            <h2 className="text-3xl font-['Montserrat',sans-serif] font-black text-white uppercase tracking-tight mb-4">Creative Storytelling PDF</h2>
                            <p className="text-gray-500 font-medium mb-12">Instant Access. Open in new tab or download directly.</p>

                            <button onClick={handleDownload} className="w-full py-6 px-10 bg-[#00AEEF] text-black font-black text-xl uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue flex items-center justify-center gap-4 active:scale-95 mb-10">
                                <Download size={28} />
                                DOWNLOAD PDF
                            </button>

                            <div className="flex items-center gap-3 text-gray-600 text-[10px] font-black uppercase tracking-widest">
                                <ShieldCheck size={14} className="text-[#00AEEF]" />
                                Free Access · No Email Required
                            </div>

                            <div className="mt-16 pt-10 border-t border-white/5 w-full">
                                <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-6 text-center">What's Next?</p>
                                <a href="https://www.instagram.com/prosper_creativeagency" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-4 p-5 rounded-2xl glass-dark hover:border-[#00AEEF]/40 transition-all group">
                                    <div className="text-white text-sm font-black uppercase tracking-widest">Follow Our Journey</div>
                                    <ArrowRight size={18} className="text-[#00AEEF] group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
