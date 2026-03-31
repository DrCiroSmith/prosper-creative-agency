import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LandingPageA() {
    return (
        <div className="animate-fade-in-up">
            {/* Hero Section */}
            <section className="pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-8 items-center">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                                </span>
                                Free Event Marketing Guide
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-dark leading-[1.1] mb-6">
                                How Top Brands Use Events to Build <span className="text-primary-500 whitespace-nowrap">Powerful Marketing Strategies</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Most events fail because they lack structure. Learn the key principles behind successful event marketing and how to apply them to your business.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                <Link to="/action-a" className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-all shadow-lg hover:shadow-primary-500/20 group">
                                    Download the Free Guide
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        <div className="relative mx-auto w-full max-w-lg md:max-w-none">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-300 rounded-2xl blur opacity-30"></div>
                            <div className="relative bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden aspect-[4/3] flex items-center justify-center p-8 text-center bg-gray-50/50">
                                {/* Visual representation of the framework */}
                                <div className="w-full max-w-sm space-y-6">
                                    <div className="h-40 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-6 mb-8 transform -rotate-3 transition-transform hover:rotate-0 duration-300">
                                        <div className="space-y-3 w-full">
                                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                            <div className="h-4 bg-primary-200 rounded w-1/2"></div>
                                            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-16 bg-white rounded-lg shadow-sm border border-gray-100"></div>
                                        <div className="h-16 bg-primary-50 rounded-lg shadow-sm font-bold text-primary-500 flex items-center justify-center">ROI</div>
                                        <div className="h-16 bg-white rounded-lg shadow-sm border border-gray-100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-dark mb-4">What you'll discover inside</h2>
                        <p className="text-lg text-gray-600">This actionable guide strips away the fluff to reveal the exact frameworks used to drive measurable marketing impact.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6 text-primary-600">
                                <CheckCircle2 size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-3">Understand Event Strategy</h3>
                            <p className="text-gray-600">Move beyond logistics and learn how to align every event activity with your overarching marketing goals.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6 text-primary-600">
                                <CheckCircle2 size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-3">Design with Purpose</h3>
                            <p className="text-gray-600">Learn how to craft experiences that naturally guide attendees toward becoming qualified leads.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6 text-primary-600">
                                <CheckCircle2 size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-3">Build Real Impact</h3>
                            <p className="text-gray-600">Implement tracking and follow-up sequences that turn event excitement into measurable business revenue.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-dark"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 to-transparent"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stop hosting events. Start driving growth.</h2>
                    <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
                        Get instant access to the framework that turns casual attendees into committed clients.
                    </p>
                    <Link to="/action-a" className="inline-flex items-center justify-center px-8 py-4 bg-white text-dark font-bold rounded-lg hover:bg-gray-50 transition-colors shadow-xl">
                        Download the Free Guide Now
                    </Link>
                </div>
            </section>
        </div>
    );
}
