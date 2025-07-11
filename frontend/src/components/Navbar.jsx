import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-slate-900 via-gray-800 to-gray-900 px-8 py-4 shadow-lg">
            <ul className="flex justify-center gap-8 m-0 p-0 list-none">
                <li>
                    <Link to="/" className="text-gray-100 cursor-pointer text-lg font-semibold hover:text-cyan-400 transition-colors">Visualization</Link>
                </li>
                <li>
                    <Link to="/result" className="text-gray-100 cursor-pointer text-lg font-semibold hover:text-cyan-400 transition-colors">Result</Link>
                </li>
                <li>
                    <Link to="/advanced-tools" className="text-gray-100 cursor-pointer text-lg font-semibold hover:text-cyan-400 transition-colors">Advanced Tools</Link>
                </li>
                <li>
                    <Link to="/benchmarking" className="text-gray-100 cursor-pointer text-lg font-semibold hover:text-cyan-400 transition-colors">Benchmarking</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar; 