import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
    { to: '/', label: 'Visualization' },
    { to: '/result', label: 'Result' },
    { to: '/advanced-tools', label: 'Advanced Tools' },
    { to: '/benchmarking', label: 'Benchmarking' },
];

const Navbar = () => {
    const location = useLocation();
    return (
        <aside className="h-screen w-64 bg-gradient-to-b from-slate-900 via-gray-800 to-gray-900 shadow-lg flex flex-col fixed top-0 left-0 z-20">
            <div className="py-6 px-4 mb-4 border-b border-gray-700">
                <span className="text-2xl font-bold text-cyan-400 tracking-wide">CQC-Accelerator</span>
            </div>
            <nav className="flex-1 px-4">
                <ul className="flex flex-col gap-2 mt-4">
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <Link
                                to={item.to}
                                className={`block px-4 py-2 rounded-lg text-lg font-semibold transition-colors
                  ${location.pathname === item.to ? 'bg-cyan-900 text-cyan-300' : 'text-gray-100 hover:bg-gray-800 hover:text-cyan-400'}`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Navbar; 