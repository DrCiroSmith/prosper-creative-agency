import React from 'react';
import { Download, FileText, CheckCircle2, ShieldCheck, Phone } from 'lucide-react';

export default function AP2() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = import.meta.env.BASE_URL + 'Prosper Creative The Event Marketing PDF Content.pdf';
        link.download = 'Prosper_Creative_Services_Brochure.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-black font-body selection:bg-[#FFDC00] selection:text-black pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="reveal mb-8">
                        <span className="inline-block py-1.5 px-5 rounded-full border border-white/10 glass-dark text-[10px] font-black uppercase tracking-[0.2em] text-[#FFDC00]">
                            State of the Art Production
                        </span>
                    </div>

                    <h1 className="reveal-delayed-1 text-5xl md:text-8xl font-heading font-black uppercase leading-[0.9] tracking-tighter mb-10">
                        DOWNLOAD OUR<br /><span className="text-[#FFDC00]">SERVICES</span> BROCHURE
                    </h1>

                    <p className="reveal-delayed-2 text-xl text-gray-400 font-medium leading-relaxed mb-16 max-w-2xl mx-auto">
                        Get a detailed breakdown of our tiered photography, video, and marketing packages. Designed for brands that demand perfection.
                    </p>

                    <div className="reveal-delayed-3 relative inline-block w-full max-w-2xl mb-24 group">
                        <div className="absolute -inset-10 bg-[#FFDC00]/5 rounded-[60px] blur-[100px] pointer-events-none" />

                        <div className="relative glass-card rounded-[40px] p-12 md:p-16 flex flex-col items-center overflow-hidden border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
                            <div className="absolute top-0 left-0 w-full h-2 bg-[#FFDC00]" />

                            <div className="flex flex-col md:flex-row items-center gap-10 text-left w-full mb-12">
                                <div className="w-24 h-24 bg-[#FFDC00]/10 rounded-3xl flex items-center justify-center text-[#FFDC00] shrink-0 animate-pulse">
                                    <FileText size={48} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-heading font-black text-white uppercase tracking-tight mb-2">Services & Pricing 2024</h2>
                                    <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">PDF · 3.4 MB · High Fidelity Guide</p>
                                </div>
                            </div>

                            <button
                                onClick={handleDownload}
                                className="btn-trendy w-full py-6 text-xl justify-center gap-4 active:scale-[0.98] transition-all mb-8 shadow-[0_20px_40px_-10px_rgba(255,220,0,0.3)]"
                            >
                                <Download size={24} className="animate-bounce" />
                                DOWNLOAD FREE BROCHURE
                            </button>

                            <div className="flex items-center justify-center gap-3 text-gray-600 text-[10px] font-black uppercase tracking-widest">
                                <ShieldCheck size={14} className="text-[#FFDC00]" />
                                Direct Link · Secure Preview · Instant Access
                            </div>
                        </div>
                    </div>

                    <div className="reveal-delayed-4 grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
                        {['Cinema Production', 'Brand Strategy', 'Growth Marketing'].map((item) => (
                            <div key={item} className="flex flex-col items-center gap-4 p-8 rounded-3xl glass-dark border border-white/5">
                                <CheckCircle2 size={24} className="text-[#FFDC00]" />
                                <span className="text-white font-black uppercase tracking-widest text-[10px]">{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* Contact Redirect */}
                    <div className="reveal-delayed-5 mt-32 pt-16 border-t border-white/5">
                        <p className="text-gray-500 font-black uppercase tracking-[0.2em] text-[10px] mb-8 text-center">Ready to begin your journey?</p>
                        <a href="tel:+19546291020" className="text-4xl md:text-6xl font-heading font-black text-white hover:text-[#FFDC00] transition-all tracking-tighter">
                            +1 954 629 1020
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
