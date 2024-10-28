import React, { useState } from "react";

const StudyPrograms = () => {
  const [selectedDegree, setSelectedDegree] = useState("All");

  // Degree options
  const degreeOptions = ["All", "BTech", "BCom", "MBA", "BA", "MSc","MBBS","MTech","BSc","BE","BEd"];

  // Program cards data
  const programs = [
    { title: "Explore Programs", description: "Discover top programs in your field.", icon: "📚" },
    { title: "Ranking", description: "Check the latest rankings.", icon: "🏅" },
    { title: "Finding College", description: "Find the perfect college for you.", icon: "🏫" },
    { title: "Compare Colleges", description: "Compare colleges based on data.", icon: "⚖️" },
    { title: "Exam Info", description: "All details on entrance exams.", icon: "📝" },
    { title: "College Predictor", description: "Get personalized college suggestions.", icon: "🔮" },
  ];

  return (
    <div className="container p-6 bg-blue-50 mx-auto px-4 sm:px-6">
      <h4 className="text-2xl sm:text-3xl text-gray-700 font-bold mb-4 text-center">Explore Programs</h4>

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

      {/* Program Cards */}
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full md:w-[80%]">
        {programs.map((program, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-center text-4xl mb-4">
              <span>{program.icon}</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-center text-gray-700">{program.title}</h3>
            <p className="text-gray-600 text-center">{program.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyPrograms;
