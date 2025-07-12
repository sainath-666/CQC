import React from 'react';

const sampleJoins = [
    { join: 'User ⨝ Transaction', description: 'Join users with their transactions' },
    { join: 'Product ⨝ Category', description: 'Join products with their categories' },
];

const sampleComparisons = [
    { comparison: 'age > 18', type: 'Short comparison' },
    { comparison: 'salary < 100000', type: 'Long comparison' },
];

const Visualization = () => {
    return (
        <div className="p-8 text-gray-100">
            <h2 className="text-3xl font-bold mb-4">CQC-Accelerator: Visual Optimizer</h2>
            <p className="mb-6 text-lg">
                Welcome to the Visual Optimizer! This module lets you visualize join trees and comparison graphs for Conjunctive Queries with Comparisons (CQCs).<br />
                <span className="text-cyan-400">Highlight short/long comparisons and optimize your queries interactively.</span>
            </p>
            {/* Sample Join Trees */}
            <div className="rounded-lg bg-slate-800 p-6 mt-4 shadow-inner mb-6">
                <p className="text-gray-200 font-semibold mb-2">Sample Join Trees:</p>
                <ul className="list-disc pl-6">
                    {sampleJoins.map((item, idx) => (
                        <li key={idx} className="mb-1">
                            <span className="text-cyan-300 font-medium">{item.join}</span>: {item.description}
                        </li>
                    ))}
                </ul>
            </div>
            {/* Sample Comparisons */}
            <div className="rounded-lg bg-slate-800 p-6 shadow-inner">
                <p className="text-gray-200 font-semibold mb-2">Sample Comparisons:</p>
                <ul className="list-disc pl-6">
                    {sampleComparisons.map((item, idx) => (
                        <li key={idx} className="mb-1">
                            <span className="text-cyan-300 font-medium">{item.comparison}</span> <span className="text-gray-400">({item.type})</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Visualization; 