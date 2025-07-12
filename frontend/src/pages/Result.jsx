import React from 'react';

const sampleResults = [
    { user: 'Alice', num_friends: 5, avg_transaction: 120.5 },
    { user: 'Bob', num_friends: 3, avg_transaction: 75.0 },
    { user: 'Charlie', num_friends: 8, avg_transaction: 200.1 },
];

const Result = () => {
    return (
        <div className="p-8 text-gray-100">
            <h2 className="text-3xl font-bold mb-4">Query Results</h2>
            <p className="mb-6 text-lg">
                View the output of your CQC queries here. Results will be displayed in a table for easy analysis and export.
            </p>
            {/* Sample Results Table */}
            <div className="rounded-lg bg-slate-800 p-6 mt-4 shadow-inner">
                <p className="text-gray-200 font-semibold mb-2">Sample Results:</p>
                <table className="w-full text-left text-gray-100">
                    <thead>
                        <tr>
                            <th className="pr-4 pb-2">User</th>
                            <th className="pr-4 pb-2"># Friends</th>
                            <th className="pb-2">Avg. Transaction</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sampleResults.map((row, idx) => (
                            <tr key={idx} className="border-t border-slate-700">
                                <td className="pr-4 py-1 text-cyan-300 font-medium">{row.user}</td>
                                <td className="pr-4 py-1">{row.num_friends}</td>
                                <td className="py-1">${row.avg_transaction.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Result; 