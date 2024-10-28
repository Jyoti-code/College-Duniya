import React from 'react';
import { FaAngleRight } from "react-icons/fa";
import { BsArrowRightCircle } from "react-icons/bs";

const TopExam = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cards = [
    {
      image: 'https://image-static.collegedunia.com/public/college_data/images/logos/NTA%20Logo.jpg?h=44&w=44&mode=stretch',
      title: 'NEET',
      colleges: '1204',
      exam: 'Jun 23, 2024',
      level: 'National',
    },
    {
        image: 'https://image-static.collegedunia.com/public/college_data/images/logos/iit%20madras.png?h=55&w=55&mode=stretch',
        title: 'JEE Advanced',
        colleges: '75',
        exam: 'May 26, 2025',
        level: 'National',
    },
    {
      image: 'https://image-static.collegedunia.com/public/college_data/images/logos/NTA%20Logo.jpg?h=44&w=44&mode=stretch',
      title: 'JEE Main',
      colleges: '1725',
      exam: 'May 26, 2025',
      level: 'National',
    },
    {
      image: 'https://image-static.collegedunia.com/public/college_data/images/logos/IIM-calcutta.png?h=55&w=55&mode=stretch',
      title: 'CAT',
      colleges: '1519',
      exam: 'Nov 24, 2024',
      level: 'National',
    },
    {
      image: 'https://image-static.collegedunia.com/public/college_data/images/logos/GATE%202025%20Logo.png?h=44&w=44&mode=stretch',
      title: 'GATE',
      colleges: '141',
      exam: 'Feb 1, 2025',
      level: 'National',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  // Ensure that you display three cards and loop correctly
  const displayedCards = [
    ...cards.slice(currentIndex, currentIndex + 3),
    ...cards.slice(0, Math.max(0, currentIndex + 3 - cards.length)),
  ];

  return (
    <div className="p-6 bg-blue-50">
      <div className="container mx-auto max-w-6xl">
        <h4 className="text-3xl text-gray-700 font-bold mb-4 text-center">Top Exams</h4>
        <div className="relative">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            {displayedCards.map((card, index) => (
              <div className="flex-none w-full sm:w-1/3 p-4 bg-white rounded-lg shadow-md border" key={index}>
                <div className="flex items-center mb-4">
                  <img className="w-12 h-12 sm:w-16 sm:h-16 object-cover mr-4" src={card.image} alt={card.title} />
                  <div className="flex-col">
                  <button className='px-2 text-gray-500 rounded-md mb-2 bg-gray-200'>Online Exam</button>
                  <h3 className="text-base sm:text-lg font-bold">{card.title}</h3>
                  </div>
                </div>
                <div className="flex justify-between mb-2">
                    <p className="text-md text-gray-500">Participating College</p>
                    <span className="text-black font-bold">{card.colleges}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <p className="text-md text-gray-500">Exam Date</p>
                    <span className="text-black font-bold">{card.exam}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <p className="text-md text-gray-500">Exam Level</p>
                    <span className="text-black font-bold">{card.level}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                    <p className="text-md text-black">Application Process</p>
                    <span className="text-gray-500 font-bold"><FaAngleRight/></span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                    <p className="text-md text-black">Exam Info</p>
                    <span className="text-gray-500 font-bold"><FaAngleRight/></span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center mt-4 space-x-4">
            <button className="w-8 h-8 text-white text-lg rounded-full bg-blue-500" onClick={handlePrev}>&lt;</button>
            <button className="w-8 h-8 text-white text-lg rounded-full bg-blue-500" onClick={handleNext}>&gt;</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl mt-5">
        <h4 className="text-2xl sm:text-3xl text-gray-700 font-bold mb-4 text-center">
          Admission 2024
        </h4>

        <div className="flex flex-wrap justify-center mb-3 space-y-2 sm:space-y-0">
          <button className="flex items-center justify-center px-4 py-2 mr-3 text-lg border border-gray-300 bg-white text-gray-500 rounded-xl hover:bg-gray-100 transition-colors duration-200 space-x-2 w-full sm:w-auto">
            <span>B Ed Admission 2024</span>
            <BsArrowRightCircle />
          </button>

          <button className="flex items-center justify-center px-4 py-2 mr-3 text-lg border border-gray-300 bg-white text-gray-500 rounded-xl hover:bg-gray-100 transition-colors duration-200 space-x-2 w-full sm:w-auto">
            <span>MBA Admission 2024</span>
            <BsArrowRightCircle />
          </button>

          <button className="flex items-center justify-center px-4 py-2 mr-3 text-lg border border-gray-300 bg-white text-gray-500 rounded-xl hover:bg-gray-100 transition-colors duration-200 space-x-2 w-full sm:w-auto">
            <span>MBBS Admission 2024</span>
            <BsArrowRightCircle />
          </button>

          <button className="flex items-center justify-center px-4 py-2 mr-3 text-lg border border-gray-300 bg-white text-gray-500 rounded-xl hover:bg-gray-100 transition-colors duration-200 space-x-2 w-full sm:w-auto">
            <span>BA Admission 2024</span>
            <BsArrowRightCircle />
          </button>
        </div>

        <div className="flex flex-wrap justify-center mb-3 space-y-2 sm:space-y-0">
          <button className="flex items-center justify-center px-4 py-2 mr-3 text-lg border border-gray-300 bg-white text-gray-500 rounded-xl hover:bg-gray-100 transition-colors duration-200 space-x-2 w-full sm:w-auto">
            <span>M Tech Admission 2024</span>
            <BsArrowRightCircle />
          </button>

          <button className="flex items-center justify-center px-4 py-2 mr-3 text-lg border border-gray-300 bg-white text-gray-500 rounded-xl hover:bg-gray-100 transition-colors duration-200 space-x-2 w-full sm:w-auto">
            <span>PhD Admission 2024</span>
            <BsArrowRightCircle />
          </button>

          <button className="flex items-center justify-center px-4 py-2 mr-3 text-lg border border-gray-300 bg-white text-gray-500 rounded-xl hover:bg-gray-100 transition-colors duration-200 space-x-2 w-full sm:w-auto">
            <span>LLB Admission 2024</span>
            <BsArrowRightCircle />
          </button>

          <button className="flex items-center justify-center px-4 py-2 mr-3 text-lg border border-gray-300 bg-white text-gray-500 rounded-xl hover:bg-gray-100 transition-colors duration-200 space-x-2 w-full sm:w-auto">
            <span>D El Ed Admission 2024</span>
            <BsArrowRightCircle />
          </button>
        </div>

        <div className="flex flex-wrap justify-center mb-3 space-y-2 sm:space-y-0">
          <button className="flex items-center justify-center px-4 py-2 mr-3 text-lg border border-gray-300 bg-white text-gray-500 rounded-xl hover:bg-gray-100 transition-colors duration-200 space-x-2 w-full sm:w-auto">
            <span>BSc Admission 2024</span>
            <BsArrowRightCircle />
          </button>

          <button className="flex items-center justify-center px-4 py-2 mr-3 text-lg border border-gray-300 bg-white text-gray-500 rounded-xl hover:bg-gray-100 transition-colors duration-200 space-x-2 w-full sm:w-auto">
            <span>B Pharmacy Admission 2024</span>
            <BsArrowRightCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopExam;
