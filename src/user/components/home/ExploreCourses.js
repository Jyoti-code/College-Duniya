import React from 'react';

const ExploreCourses = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cards = [
    {
      title: 'B.Com General',
      duration: '3 Year',
      fee: '68.18 K',
      college: '6633',
    },
    {
        title: 'B.Ed General',
        duration: '2 Year',
        fee: '84.18 K',
        college: '5522',
      },
      {
        title: 'BCA General',
        duration: '3 Year',
        fee: '1.45 L',
        college: '5129',
      },
      {
        title: 'BA General',
        duration: '3 Year',
        fee: '46.18 K',
        college: '6633',
      },
      {
        title: 'BBA General',
        duration: '3 Year',
        fee: '1.72 L',
        college: '6633',
      },
  ];
  const agencies = [
    "Bachelors",
    "Masters",
    "Doctorate",
    "Diploma",
    "Certification",
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  // Ensure that you display four cards and loop correctly
  const displayedCards = [
    ...cards.slice(currentIndex, currentIndex + 4),
    ...cards.slice(0, Math.max(0, currentIndex + 4 - cards.length)),
  ];

  return (
    <div className="p-6 bg-blue-50">
      <div className="container mx-auto max-w-6xl">
        <h4 className="text-3xl text-gray-700 font-bold mb-4 text-center">Explore Courses</h4>
                  {/* Agency Buttons */}
        <div className="flex justify-center mb-3 flex-wrap gap-3">
            {agencies.map((agency) => (
              <button
                key={agency}
                className="px-4 py-2 text-md border border-gray-300 bg-white text-gray-500 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                {agency}
              </button>
            ))}
          </div>

        <div className="relative">
          {/* Flex container with gap for spacing between cards */}
          <div className="flex flex-wrap gap-4 justify-center">
            {displayedCards.map((card, index) => (
              <div className="flex-none w-full md:w-[23%] p-4 bg-white rounded-lg shadow-md border mb-4" key={index}>
              <button className='px-2 text-gray-500 rounded-md mb-2 bg-gray-200'>Full Time</button>
                <div className="flex items-center mb-4">
                  <h3 className="text-lg font-bold text-gray-700">{card.title}</h3>
                </div>
                <div className="flex justify-between mb-2">
                    <p className="text-md text-black">Duration</p>
                    <span className="text-gray-500 font-bold">{card.duration}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <p className="text-md text-black">Fees</p>
                    <span className="text-gray-500 font-bold">{card.fee}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <p className="text-md text-black">College</p>
                    <span className="text-gray-500 font-bold">{card.college}</span>
                </div>
                <hr className="my-2" />
                <p className="text-md text-black font-bold">Course Overview</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center mt-4">
            <button className="w-8 h-8 text-white text-lg rounded-full bg-blue-500 mr-3" onClick={handlePrev}>
              &lt;
            </button>
            <button className="w-8 h-8 text-lg text-white rounded-full bg-blue-500" onClick={handleNext}>
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCourses;
