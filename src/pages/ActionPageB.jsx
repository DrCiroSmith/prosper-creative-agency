import React, { useState } from 'react';
import { Download, TrendingUp, Link as LinkIcon } from 'lucide-react';

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
        <div className="min-h-[80vh] flex flex-col md:flex-row animate-fade-in-up">
            {/* Left Panel: High impact value prop */}
            <div className="w-full md:w-5/12 bg-dark text-white p-10 md:p-16 flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Start Generating <span className="text-primary-400 block mt-2">Leads from your events</span>
                </h1>
                <p className="text-gray-300 text-lg mb-10 leading-relaxed border-l-2 border-gray-700 pl-4">
                    This guide shows you how to turn your events into measurable business results with a proven playbook.
                </p>

                <div className="space-y-6">
                    <div className="flex items-start">
                        <div className="bg-gray-800 p-2 rounded-lg mr-4">
                            <TrendingUp className="text-primary-400 w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Generate leads</h3>
                            <p className="text-sm text-gray-400">Capture high-quality contacts</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="bg-gray-800 p-2 rounded-lg mr-4">
                            <TrendingUp className="text-primary-400 w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Improve ROI</h3>
                            <p className="text-sm text-gray-400">Maximize budget effectiveness</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="bg-gray-800 p-2 rounded-lg mr-4">
                            <LinkIcon className="text-primary-400 w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Build stronger connections</h3>
                            <p className="text-sm text-gray-400">Turn attendees into clients</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Panel: Clean form */}
            <div className="w-full md:w-7/12 bg-white p-10 md:p-16 flex items-center justify-center">
                <div className="w-full max-w-md">
                    {!isDownloaded ? (
                        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 sm:p-10">
                            <h2 className="text-2xl font-bold text-dark mb-2 text-center">Ready to unlock growth?</h2>
                            <p className="text-gray-500 mb-8 text-center text-sm">Download your framework immediately.</p>

                            <form className="space-y-5" onSubmit={handleRegister}>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                                        Email address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3.5 bg-gray-50 rounded-lg border border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                                        placeholder="Enter your best email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <p className="text-xs text-gray-400 mt-2 ml-1">We'll use this email to send you the PDF directly.</p>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center px-4 py-4 bg-primary-500 text-white font-bold tracking-wide rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-4 focus:ring-primary-100 transition-all shadow-md group mt-6"
                                >
                                    <Download className="mr-2 h-5 w-5 animate-bounce" />
                                    REGISTER & GET FREE GUIDE
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center shadow-lg shadow-gray-200/40 animate-fade-in-up">
                            <h2 className="text-2xl font-bold text-dark mb-4">Want more strategies?</h2>
                            <p className="text-gray-600 mb-8">Stay connected and explore more insights to supercharge your marketing.</p>
                            <div className="flex flex-col gap-3">
                                <a
                                    href="https://www.prospercreative.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full flex items-center justify-center px-4 py-3 bg-dark text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                                >
                                    Visit ProsperCreative.com
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}
