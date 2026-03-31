import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-dark text-white py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold tracking-tight mb-2">PROSPER</h3>
                    <p className="text-gray-400 text-sm">Creative Agency</p>
                    <a href="https://www.prospercreative.com" className="text-primary-500 hover:text-primary-400 text-sm mt-3 inline-block transition-colors font-medium">
                        www.prospercreative.com
                    </a>
                </div>

                <div className="flex flex-col items-center md:items-end">
                    <p className="text-sm text-gray-400 mb-4">Stay connected for more insights:</p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all transform hover:-translate-y-1">
                            <Twitter size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all transform hover:-translate-y-1">
                            <Linkedin size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all transform hover:-translate-y-1">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all transform hover:-translate-y-1">
                            <Facebook size={18} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Prosper Creative Agency. All rights reserved.
            </div>
        </footer>
    );
}
