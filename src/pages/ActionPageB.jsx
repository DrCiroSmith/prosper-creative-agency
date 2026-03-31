import React, { useState } from 'react';
import { Download, TrendingUp, Target, Users, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

const VALUE_PROPS = [
    { icon: <TrendingUp size={16} />, title: 'Generate Leads', desc: 'Capture high-quality contacts at every event' },
    { icon: <Target size={16} />, title: 'Improve ROI', desc: 'Maximize budget with a proven strategy' },
    { icon: <Users size={16} />, title: 'Build Connections', desc: 'Turn attendees into committed clients' },
];

export default function ActionPageB() {
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
        <div className="bg-[#0a0a0a] min-h-screen flex flex-col lg:flex-row">

            {/* ═══ LEFT PANEL — Dark value proposition ═══ */}
            <div className="lg:w-5/12 bg-[#080808] border-r border-white/5 flex flex-col justify-center p-10 lg:p-16 pt-28 lg:pt-20 min-h-screen">
                {/* Logo */}
                <div className="mb-12">
                    <img
                        src={import.meta.env.BASE_URL + 'PROSPER_CREATIVE_LOGO.png'}
                        alt="Prosper Creative Agency"
                        className="h-12 w-auto object-contain"
                        onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                    />
                </div>

                <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest block mb-6">
                    Lead Generation Framework — Funnel B
                </span>

                <h1 className="text-4xl md:text-5xl font-black uppercase text-white leading-none mb-6"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    START<br />GENERATING<br />
                    <span className="text-gradient-blue">LEADS</span><br />
                    FROM YOUR<br />EVENTS
                </h1>

                <div className="border-l-4 border-[#00AEEF] pl-5 mb-10 py-2">
                    <p className="text-gray-400 text-sm leading-relaxed">
                        A proven playbook used by top event marketers to turn any event into a measurable business result — photography, video, podcasts included.
                    </p>
                </div>

                {/* Value prop list */}
                <div className="space-y-5">
                    {VALUE_PROPS.map(({ icon, title, desc }) => (
                        <div key={title} className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/10 flex items-center justify-center text-[#00AEEF] shrink-0">
                                {icon}
                            </div>
                            <div>
                                <div className="text-white font-bold text-sm">{title}</div>
                                <div className="text-gray-500 text-xs mt-0.5">{desc}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom decoration */}
                <div className="mt-16 pt-10 border-t border-white/5">
                    <p className="text-gray-600 text-xs uppercase tracking-widest">
                        Photography · Video · Podcasts · Multimedia · Events
                    </p>
                </div>
            </div>

            {/* ═══ RIGHT PANEL — Form ═══ */}
            <div className="lg:w-7/12 flex items-center justify-center p-8 lg:p-16 pt-10 lg:pt-20">
                <div className="w-full max-w-md">
                    {!done ? (
                        <div className="relative">
                            <div className="absolute -inset-1 bg-[#00AEEF]/10 rounded-3xl blur-2xl"></div>
                            <div className="relative bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                                <div className="h-1.5 bg-gradient-to-r from-[#00AEEF] to-[#0070a8]"></div>
                                <div className="p-8">
                                    <h2 className="text-2xl font-black uppercase text-white mb-1"
                                        style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                        Ready to<br />Unlock Growth?
                                    </h2>
                                    <p className="text-gray-500 text-sm mb-8">Enter your email to download the guide instantly.</p>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div>
                                            <label
                                                htmlFor="emailB"
                                                className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2"
                                            >
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="emailB"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="your@email.com"
                                                className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#00AEEF]/50 focus:ring-2 focus:ring-[#00AEEF]/20 transition-all text-sm"
                                            />
                                            <p className="text-gray-600 text-xs mt-2">We respect your privacy.</p>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#00AEEF] text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue group"
                                        >
                                            <Download size={16} />
                                            Register & Get Free Guide
                                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </form>

                                    <div className="mt-6 flex items-center justify-center gap-2 text-gray-600 text-xs">
                                        <ShieldCheck size={14} className="text-[#00AEEF]/60" />
                                        100% Free · Instant PDF Access
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Success */
                        <div className="relative">
                            <div className="absolute -inset-1 bg-[#00AEEF]/10 rounded-3xl blur-2xl"></div>
                            <div className="relative bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-10 text-center">
                                <div className="h-1.5 absolute top-0 left-0 right-0 bg-gradient-to-r from-[#00AEEF] to-[#0070a8]"></div>
                                <div className="w-20 h-20 bg-[#00AEEF]/10 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                                    <CheckCircle2 size={40} className="text-[#00AEEF]" />
                                </div>
                                <h2 className="text-2xl font-black uppercase text-white mb-3"
                                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    You're In!
                                </h2>
                                <p className="text-gray-400 text-sm mb-8">Your download is starting. Explore more strategies below!</p>
                                <div className="space-y-3">
                                    <a
                                        href="https://www.instagram.com/prosper_creativeagency"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#00AEEF] text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-[#33C1F5] transition-all glow-blue"
                                    >
                                        Follow Prosper Creative →
                                    </a>
                                    <a
                                        href={import.meta.env.BASE_URL + 'Prosper Creative The Event Marketing PDF Content.pdf'}
                                        download="The_Event_Marketing_Success_Framework_Prosper_Creative.pdf"
                                        className="flex items-center justify-center gap-2 w-full px-6 py-3 glass text-white font-bold text-sm uppercase tracking-widest rounded-full hover:border-[#00AEEF]/40 transition-all"
                                    >
                                        <Download size={14} /> Download Again
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
