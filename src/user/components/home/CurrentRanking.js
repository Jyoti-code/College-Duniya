import React, { useState } from "react";

const CurrentRanking = () => {
  const [selectedRankingYear, setSelectedRankingYear] = useState("2024");
  const rankingYears = ["2024", "2023", "2022"];
  const agencies = [
    "India Today",
    "The Week",
    "NIRF",
    "Outlook",
    "IIRF",
    "TOI",
  ];

  const colleges = [
    {
      name: "Indian Institute of Technology (IIT) Madras",
      ranking: "1 out of 44",
      streams: "Overall",
      logo: "https://image-static.collegedunia.com/public/college_data/images/logos/iit%20madras.png?h=55&w=55&mode=stretch",
    },
    {
      name: "Indian Institute of Science (IISc) Bangalore",
      ranking: "2 out of 44",
      streams: "Overall",
      logo: "https://iisc.ac.in/wp-content/uploads/2020/08/IISc_Master_Seal_Black.jpg",
    },
    {
      name: "Indian Institute of Technology (IIT) Delhi",
      ranking: "3 out of 44",
      streams: "Engineering",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXKbHamNUkh74nj3yt6ZxCdep6Hkv08xkamQ&s",
    },
    {
      name: "Indian Institute of Technology (IIT) Bombay",
      ranking: "4 out of 44",
      streams: "Engineering",
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYaVVglfPx3NlFFlv4VgEY4IU075yTN_jw0A&s',
    },
    {
      name: "Indian Institute of Technology (IIT) Kanpur",
      ranking: "5 out of 44",
      streams: "Engineering",
      logo: 'https://upload.wikimedia.org/wikipedia/en/a/a3/IIT_Kanpur_Logo.svg',
    },
    {
      name: "Indian Institute of Technology (IIT) Kharagpur",
      ranking: "6 out of 44",
      streams: "Engineering",
      logo: 'https://upload.wikimedia.org/wikipedia/en/1/1c/IIT_Kharagpur_Logo.svg',
    },
  ];

  return (
    <div className="bg-blue-50">

<div className="container mx-auto max-w-7xl py-8 bg-blue-300">
  <div className="flex justify-between items-center">
    {/* Text and Button on the left */}
    <div className="flex items-center ml-5">
      <h4 className="text-2xl sm:text-2xl text-blue-800 font-bold mb-0 mr-4">
        Know your chances of Admission
      </h4>
      <button className="px-5 py-2 bg-blue-500 text-white">Start Now</button>
    </div>

    {/* Image on the right */}
    {/* <div>
      <img
        src="https://media.istockphoto.com/id/1387386594/vector/woman-reading-a-book-in-the-library.jpg?s=612x612&w=0&k=20&c=cInSLUKDdzBWR563V4cVMv3Ma9hndgkRTYIhqYix3vw="
        alt="Woman reading a book in the library"
        className="w-33 h-auto"
      />
    </div> */}
  </div>
</div>


      <div className="container mx-auto max-w-7xl py-8">
        <h4 className="text-2xl sm:text-3xl text-gray-700 font-bold mb-6 text-center">
          College Ranking 2024
        </h4>
        <div className="flex justify-center mb-6">
          {/* Ranking Year Dropdown */}
          <div className="flex items-center">
            <label className="mr-3 text-gray-600">Ranking Year:</label>
            <select
              value={selectedRankingYear}
              onChange={(e) => setSelectedRankingYear(e.target.value)}
              className="px-10 py-2 text-sm rounded-xl bg-white border border-gray-300 focus:outline-none"
            >
              {rankingYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="border-l-2 border-gray-400 h-8 mx-9 hidden md:block"></div>

          {/* Agency Buttons */}
          <div className="flex flex-wrap gap-3">
            {agencies.map((agency) => (
              <button
                key={agency}
                className="px-4 py-2 text-sm border border-gray-300 bg-white text-black rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                {agency}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-left text-gray-800">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-4">College</th>
                  <th className="p-4">Rank</th>
                  <th className="p-4">Streams</th>
                </tr>
              </thead>
              <tbody>
                {colleges.map((college, index) => (
                  <tr
                    key={index}
                    className={`border-b hover:bg-gray-50 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-200"
                    }`}
                  >
                    <td className="p-5 flex items-center">
                      <img
                        src={college.logo}
                        alt={college.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      {college.name}
                    </td>
                    <td className="p-5">{college.ranking}</td>
                    <td className="p-5">{college.streams}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between p-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Previous
            </button>
            <span>1 of 10</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentRanking;
