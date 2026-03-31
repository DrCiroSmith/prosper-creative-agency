import React, { useState } from 'react';
import { Download, TrendingUp, Target, Users, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ActionPageB() {
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
        <div className="bg-[#0a0a0a] min-h-screen flex flex-col md:flex-row">

            {/* LEFT PANEL — Dark value prop */}
            <div className="md:w-5/12 bg-[#0d0d0d] border-r border-white/5 flex flex-col p-10 md:p-16 justify-center pt-28 md:pt-20">
                <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-8">Lead Generation Framework</span>
                <h1 className="text-4xl md:text-5xl font-black uppercase text-white leading-none mb-6">
                    START<br />
                    GENERATING<br />
                    <span className="text-yellow-400">LEADS</span><br />
                    FROM YOUR<br />
                    EVENTS
                </h1>
                <div className="border-l-2 border-yellow-400 pl-5 mb-10">
                    <p className="text-gray-400 text-sm leading-relaxed">
                        A proven playbook used by top event marketers to turn any event into a measurable business result.
                    </p>
                </div>

                <div className="space-y-5">
                    {[
                        { icon: <TrendingUp size={16} />, title: 'Generate Leads', desc: 'Capture high-quality contacts' },
                        { icon: <Target size={16} />, title: 'Improve ROI', desc: 'Maximize budget effectiveness' },
                        { icon: <Users size={16} />, title: 'Build Connections', desc: 'Turn attendees into clients' },
                    ].map(({ icon, title, desc }) => (
                        <div key={title} className="flex items-start gap-4">
                            <div className="w-9 h-9 rounded-lg bg-yellow-400/10 flex items-center justify-center text-yellow-400 flex-shrink-0">
                                {icon}
                            </div>
                            <div>
                                <div className="text-white font-bold text-sm">{title}</div>
                                <div className="text-gray-500 text-xs">{desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT PANEL — Form */}
            <div className="md:w-7/12 flex items-center justify-center p-8 md:p-16 pt-10 md:pt-20">
                <div className="w-full max-w-md">
                    {!isDownloaded ? (
                        <div className="relative">
                            <div className="absolute -inset-1 bg-yellow-400/10 rounded-3xl blur-2xl"></div>
                            <div className="relative bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                                <div className="h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                                <div className="p-8">
                                    <h2 className="text-2xl font-black uppercase text-white mb-1">Ready to<br />unlock growth?</h2>
                                    <p className="text-gray-500 text-sm mb-8">Enter your email to download instantly.</p>

                                    <form onSubmit={handleRegister} className="space-y-5">
                                        <div>
                                            <label htmlFor="emailB" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="emailB"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="your@email.com"
                                                className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/30 transition-all text-sm"
                                            />
                                            <p className="text-gray-600 text-xs mt-2">We'll use this to send you the PDF directly.</p>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-yellow-400 text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/20 group">
                                            <Download size={16} />
                                            REGISTER & GET FREE GUIDE
                                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </form>

                                    <div className="mt-6 flex items-center justify-center gap-2 text-gray-600 text-xs">
                                        <ShieldCheck size={14} className="text-yellow-400/60" />
                                        100% Free. Instant PDF access.
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-[#111] border border-white/10 rounded-2xl p-10 text-center shadow-2xl">
                            <div className="w-20 h-20 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 size={40} className="text-yellow-400" />
                            </div>
                            <h2 className="text-2xl font-black uppercase text-white mb-3">You're In!</h2>
                            <p className="text-gray-400 text-sm mb-8">Your download is starting. Explore more strategies below.</p>
                            <a
                                href="https://www.instagram.com/prosper_creativeagency"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black font-black text-xs uppercase tracking-widest rounded-full hover:bg-yellow-300 transition-all">
                                Follow on Instagram →
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
