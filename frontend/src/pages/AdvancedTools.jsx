import React from 'react';

const sampleFeatures = [
    { feature: 'num_friends', description: 'Number of friends for each user (from CQC query)' },
    { feature: 'avg_transaction', description: 'Average transaction value per user (from CQC query)' },
    { feature: 'triangle_count', description: 'Number of triangles a node is part of (graph pattern)' },
];

const samplePatterns = [
    { pattern: 'Triangle', cqc: 'R(x, y), R(y, z), R(z, x)' },
    { pattern: 'Clique (4 nodes)', cqc: 'R(x, y), R(y, z), R(z, w), R(w, x), R(x, z), R(y, w)' },
    { pattern: 'Path (length 3)', cqc: 'R(x, y), R(y, z), R(z, w)' },
];

const AdvancedTools = () => {
    return (
        <div className="p-8 text-gray-100">
            <h2 className="text-3xl font-bold mb-4">Advanced Tools</h2>
            <p className="mb-6 text-lg">
                Access advanced modules like ML Feature Extraction and Graph Pattern Matching. Use query outputs as features in machine learning models or encode graph patterns as CQCs.
            </p>

            {/* ML Feature Extraction Section */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-2 text-cyan-400">ML Feature Extraction</h3>
                <p className="mb-4 text-gray-300">
                    Use the output of your CQC queries as features for machine learning models. Integrate with tools like scikit-learn for advanced analytics.
                </p>
                <div className="rounded-lg bg-slate-800 p-6 shadow-inner mb-4">
                    <p className="text-gray-200 font-semibold mb-2">Sample Features:</p>
                    <ul className="list-disc pl-6">
                        {sampleFeatures.map((item, idx) => (
                            <li key={idx} className="mb-1">
                                <span className="text-cyan-300 font-medium">{item.feature}</span>: {item.description}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Graph Pattern Matching Section */}
            <section>
                <h3 className="text-2xl font-semibold mb-2 text-cyan-400">Graph Pattern Matching</h3>
                <p className="mb-4 text-gray-300">
                    Encode graph patterns (such as triangles, cliques, or paths) as CQCs and run them on your graph-structured data for pattern analysis.
                </p>
                <div className="rounded-lg bg-slate-800 p-6 shadow-inner">
                    <p className="text-gray-200 font-semibold mb-2">Sample Patterns:</p>
                    <table className="w-full text-left text-gray-100">
                        <thead>
                            <tr>
                                <th className="pr-4 pb-2">Pattern</th>
                                <th className="pb-2">CQC Encoding</th>
                            </tr>
                        </thead>
                        <tbody>
                            {samplePatterns.map((item, idx) => (
                                <tr key={idx} className="border-t border-slate-700">
                                    <td className="pr-4 py-1 text-cyan-300 font-medium">{item.pattern}</td>
                                    <td className="py-1 font-mono">{item.cqc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default AdvancedTools; 