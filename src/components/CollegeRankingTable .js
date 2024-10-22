import React, { useState } from "react";

const CollegeRankingTable = () => {
    const [selectedDegree, setSelectedDegree] = useState("All");

    const degreeOptions = ["All", "BTech", "BCom", "MBA", "BA", "MSc","MBBS","MTech","BSc","BE","BEd"];

    const colleges = [
        { rank: 1, name: 'Indian Institute of Technology (IIT) Madras', cutoff: '90%', deadline: 'Oct 18, 2024', fees: '₹2,00,000' },
        { rank: 2, name: 'Indian Institute of Technology (IIT) Delhi', cutoff: '88%', deadline: 'Nov 1, 2024', fees: '₹2,10,000' },
        { rank: 3, name: 'Indian Institute of Technology (IIT) Bombay', cutoff: '85%', deadline: 'Nov 15, 2024', fees: '₹2,25,000' },
        { rank: 4, name: 'Indian Institute of Technology (IIT) Kanpur', cutoff: '82%', deadline: 'Dec 1, 2024', fees: '₹2,30,000' },
        { rank: 5, name: 'Indian Institute of Technology (IIT) Kharagpur', cutoff: '80%', deadline: 'Dec 15, 2024', fees: '₹2,50,000' },
        { rank: 6, name: 'Indian Institute of Technology (IIT) Roorkee', cutoff: '78%', deadline: 'Dec 30, 2024', fees: '₹2,40,000' },
        { rank: 7, name: 'Indian Institute of Technology (IIT) Gandhinagar', cutoff: '76%', deadline: 'Jan 10, 2025', fees: '₹2,35,000' },
    ];

    return (
        <div className="bg-blue-50">
        <div className='containe mx-auto max-w-7xl py-8'>
        <h4 className="text-2xl sm:text-3xl text-gray-700 font-bold mb-4 text-center">Top 10 Colleges</h4>
              {/* Degree Navbar */}
      <div className="flex flex-wrap justify-center mb-6 gap-3">
        {degreeOptions.map((degree) => (
          <button
            key={degree}
            onClick={() => setSelectedDegree(degree)}
            className={`px-4 py-2 text-sm rounded-md transition-colors duration-200 ${
              selectedDegree === degree ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {degree}
          </button>
        ))}
      </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto text-left text-gray-800">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700">
                                <th className="p-4">Rank</th>
                                <th className="p-4">College Name</th>
                                <th className="p-4">Cutoff</th>
                                <th className="p-4">Application Deadline</th>
                                <th className="p-4">Fees (First Year)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {colleges.map((college, index) => (
                                <tr key={index} className={`border-b hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}`}>
                                    <td className="p-5">{college.rank}</td>
                                    <td className="p-5">{college.name}</td>
                                    <td className="p-5">{college.cutoff}</td>
                                    <td className="p-5">{college.deadline}</td>
                                    <td className="p-5">{college.fees}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between p-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Previous</button>
                    <span>1 of 10</span>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Next</button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default CollegeRankingTable;
