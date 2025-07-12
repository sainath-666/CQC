import React from 'react';

const sampleBenchmarks = [
    { query: 'Triangle Pattern', cqcTime: 0.12, sqlTime: 0.35 },
    { query: 'Clique (4 nodes)', cqcTime: 0.45, sqlTime: 1.10 },
    { query: 'Path (length 3)', cqcTime: 0.09, sqlTime: 0.22 },
];

const Benchmarking = () => {
    return (
        <div className="p-8 text-gray-100">
            <h2 className="text-3xl font-bold mb-4">Benchmarking Suite</h2>
            <p className="mb-6 text-lg">
                Compare the performance of CQCs versus traditional SQL queries. Analyze runtime, memory usage, and scalability for different workloads.
            </p>
            {/* Sample Benchmarking Table */}
            <div className="rounded-lg bg-slate-800 p-6 mt-4 shadow-inner">
                <p className="text-gray-200 font-semibold mb-2">Sample Benchmark Results:</p>
                <table className="w-full text-left text-gray-100">
                    <thead>
                        <tr>
                            <th className="pr-4 pb-2">Query</th>
                            <th className="pr-4 pb-2">CQC Time (s)</th>
                            <th className="pb-2">SQL Time (s)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sampleBenchmarks.map((row, idx) => (
                            <tr key={idx} className="border-t border-slate-700">
                                <td className="pr-4 py-1 text-cyan-300 font-medium">{row.query}</td>
                                <td className="pr-4 py-1">{row.cqcTime}</td>
                                <td className="py-1">{row.sqlTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Benchmarking; 