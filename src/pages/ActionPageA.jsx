import React, { useState } from 'react';
import { Download, ShieldCheck, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ActionPageA() {
    const [email, setEmail] = useState('');
    const [isDownloaded, setIsDownloaded] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        if (!email) return;

        const link = document.createElement('a');
        link.href = import.meta.env.BASE_URL + "Prosper Creative The Event Marketing PDF Content.pdf";
        link.download = "The_Event_Marketing_Success_Framework.pdf";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsDownloaded(true);
    };

    return (
        <div className="bg-[#0a0a0a] min-h-screen pt-20">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT */}
                    <div>
                        <span className="block text-yellow-400 text-xs font-bold uppercase tracking-widest mb-6">Free Download</span>
                        <h1 className="text-5xl md:text-6xl font-black uppercase text-white leading-none mb-6">
                            GET YOUR<br />FREE <span className="text-yellow-400">GUIDE</span>
                        </h1>
                        <p className="text-gray-400 text-lg leading-relaxed mb-10">
                            This guide will help you structure events as a core part of your marketing strategy — step by step, no fluff.
                        </p>

                        <ul className="space-y-4">
                            {[
                                'Step-by-step event marketing framework',
                                'Real-world application examples',
                                'Lead capture sequences that convert',
                                'ROI measurement toolkit',
                            ].map(item => (
                                <li key={item} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                                        <CheckCircle2 size={12} className="text-yellow-400" />
                                    </div>
                                    <span className="text-gray-300 text-sm font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT: Form */}
                    <div className="relative">
                        <div className="absolute -inset-1 bg-yellow-400/10 rounded-3xl blur-2xl"></div>
                        <div className="relative bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                            <div className="h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>

                            <div className="p-8 sm:p-10">
                                {!isDownloaded ? (
                                    <>
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="w-14 h-14 bg-yellow-400/10 rounded-xl flex items-center justify-center text-yellow-400">
                                                <FileText size={28} />
                                            </div>
                                            <div>
                                                <h2 className="text-xl font-black text-white uppercase">Get Instant Access</h2>
                                                <p className="text-gray-500 text-sm">Enter your email to unlock the guide</p>
                                            </div>
                                        </div>

                                        <form onSubmit={handleRegister} className="space-y-5">
                                            <div>
                                                <label htmlFor="emailA" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="emailA"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="your@email.com"
                                                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/30 transition-all text-sm"
                                                />
                                                <p className="text-gray-600 text-xs mt-2">We respect your privacy. No spam, ever.</p>
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-yellow-400 text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/20 group">
                                                <Download size={16} />
                                                REGISTER & DOWNLOAD NOW
                                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </form>

                                        <div className="mt-6 flex items-center justify-center gap-2 text-gray-600 text-xs">
                                            <ShieldCheck size={14} className="text-yellow-400/60" />
                                            100% Free. Instant PDF access.
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-center py-10">
                                        <div className="w-20 h-20 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 size={40} className="text-yellow-400" />
                                        </div>
                                        <h2 className="text-2xl font-black uppercase text-white mb-3">You're In!</h2>
                                        <p className="text-gray-400 text-sm mb-8">Your download is starting. If it didn't, click below.</p>
                                        <a
                                            href={import.meta.env.BASE_URL + "Prosper Creative The Event Marketing PDF Content.pdf"}
                                            download="The_Event_Marketing_Success_Framework.pdf"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-yellow-300 transition-all">
                                            <Download size={14} />
                                            Download Again
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
