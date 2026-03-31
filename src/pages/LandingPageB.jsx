import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Zap } from 'lucide-react';

export default function LandingPageB() {
    return (
        <div className="animate-fade-in-up">
            {/* Centered Hero Section */}
            <section className="pt-24 pb-20 md:pt-32 md:pb-28 text-center bg-gray-50 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-dark mb-6 leading-tight">
                        Turn Your Events Into <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-400">Lead-Generating Machines</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Discover how to create events that attract the right audience and generate real business results.
                    </p>

                    <div className="bg-white border border-gray-200 shadow-xl rounded-2xl p-8 max-w-3xl mx-auto mb-12 -bottom-20 relative z-10 text-left">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-full md:w-1/3 flex-shrink-0">
                                <div className="aspect-[3/4] rounded-lg border border-gray-100 shadow-sm bg-gray-50 relative overflow-hidden flex items-center justify-center">
                                    {/* Mock PDF cover */}
                                    <div className="absolute top-0 w-full h-1/3 bg-primary-500 flex items-center justify-center">
                                        <span className="text-white font-bold tracking-widest uppercase opacity-20 text-4xl">PROSPER</span>
                                    </div>
                                    <div className="text-center z-10 px-4 mt-8">
                                        <h4 className="font-bold text-dark text-lg leading-tight mb-2 pt-10">Event Marketing Framework</h4>
                                        <p className="text-xs text-gray-500">The 5-Step Guide</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-2/3">
                                <h3 className="text-2xl font-bold text-dark mb-4">Hosting events but not getting results?</h3>
                                <p className="text-gray-600 mb-6 font-medium bg-primary-50 p-3 rounded text-primary-800 border-l-4 border-primary-500">
                                    It’s not the event, it’s the strategy.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center text-gray-700">
                                        <Target className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                                        Attract the right audience
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <Zap className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                                        Capture leads effectively
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <Users className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                                        Convert connections into clients
                                    </li>
                                </ul>
                                <Link to="/action-b" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-dark text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors shadow-lg">
                                    Get the Free Guide Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* spacer to accommodate the overlapping card */}
            <div className="h-16 bg-white"></div>
        </div>
    );
}
