import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 group">
                    <img
                        src={import.meta.env.BASE_URL + "PROSPER_CREATIVE_LOGO.png"}
                        alt="Prosper Creative Logo"
                        className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                        }}
                    />
                    <span className="hidden text-xl font-bold tracking-tight text-dark group-hover:text-primary-600 transition-colors">
                        PROSPER
                    </span>
                </Link>

                <nav className="hidden md:flex gap-8">
                    <Link to="/" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Home</Link>
                    <a href="#" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">About</a>
                    <a href="#" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Content</a>
                    <a href="#" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Others</a>
                </nav>

                {/* Mobile menu placeholder */}
                <div className="md:hidden flex items-center">
                    <button className="text-gray-600 hover:text-dark">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
