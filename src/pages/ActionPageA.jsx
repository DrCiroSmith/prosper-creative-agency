import React, { useState } from 'react';
import { Download, ShieldCheck, FileText } from 'lucide-react';

export default function ActionPageA() {
    const [email, setEmail] = useState('');
    const [isDownloaded, setIsDownloaded] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        if (!email) return;

        // Trigger programmatic download
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
        <div className="min-h-[80vh] bg-gray-50 py-16 px-4 flex items-center justify-center animate-fade-in-up">
            <div className="max-w-4xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center">

                {/* Left column: Context */}
                <div className="pr-0 md:pr-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4 leading-tight">
                        Download your free <span className="text-primary-500 line-clamp-2 md:inline">Event Marketing Guide</span>
                    </h1>
                    <p className="text-gray-600 mb-8 text-lg">
                        This guide will help you understand how to structure events as a core part of your marketing strategy.
                    </p>

                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start">
                            <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1 text-primary-600">
                                <ShieldCheck size={16} />
                            </div>
                            <span className="text-gray-700 font-medium">Step-by-step framework</span>
                        </li>
                        <li className="flex items-start">
                            <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1 text-primary-600">
                                <ShieldCheck size={16} />
                            </div>
                            <span className="text-gray-700 font-medium">Real-world application</span>
                        </li>
                        <li className="flex items-start">
                            <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1 text-primary-600">
                                <ShieldCheck size={16} />
                            </div>
                            <span className="text-gray-700 font-medium">Simple and clear structure</span>
                        </li>
                    </ul>
                </div>

                {/* Right column: Form */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10 relative overflow-hidden">
                    {/* Subtle gradient accent */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-400 to-primary-600"></div>

                    {!isDownloaded ? (
                        <>
                            <div className="mb-8 text-center">
                                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-500">
                                    <FileText size={32} />
                                </div>
                                <h2 className="text-2xl font-bold text-dark">Get Instant Access</h2>
                            </div>

                            <form className="space-y-5" onSubmit={handleRegister}>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors outline-none"
                                        placeholder="Enter your email to receive more marketing insights"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <p className="text-xs text-gray-500 mt-2 text-center">We respect your privacy and will never share your information.</p>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center px-4 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all shadow-md group"
                                >
                                    <Download className="mr-2 h-5 w-5 animate-bounce" />
                                    REGISTER & DOWNLOAD NOW
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="text-center py-10 animate-fade-in-up">
                            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                                <CheckCircle2 size={40} />
                            </div>
                            <h2 className="text-3xl font-bold text-dark mb-4">Thank you!</h2>
                            <p className="text-gray-600 mb-8">
                                Your download should start automatically. Explore more insights on event marketing below.
                            </p>
                            <a
                                href="https://www.prospercreative.com"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                            >
                                Visit our website
                            </a>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
