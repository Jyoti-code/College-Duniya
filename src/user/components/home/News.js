import React from 'react';
import { FaAngleRight } from "react-icons/fa";

const News = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cards = [
    {
      title: 'KLEE 2024 Counselling 5 Year LLB Seat Allotment List (Out), Direct Link',
      date: 'Oct 23, 2024',
      description: 'IIT JAM 2025 registration process has been extended till October 18, 2024. The form will be available on the official website – jam2025.iitd.ac.in/. The exam will be held on February 2, 2025, by IIT Delhi. The registration',
    },
    {
      title: 'LSAT Registrations 2025 January Session (Soon), Direct Link, Fees, Documents',
      date: 'Oct 23, 2024',
      description: 'LSAT 2025 January session application process will start anytime soon. Candidates who wish to appear in LSAT May 2025 will have to submit the application form on the official website – lsatindia.in.'
    },
    {
      title: 'AIBE 2024 Exam Pattern, Syllabus (Revised), Marking Scheme and Topics',
      date: 'Oct 23, 2024',
      description: 'The Bar Council of India has released the revised AIBE 19 Syllabus 2024. Candidates appearing for AIBE 19 Exam 2024 on November 24, 2024, must check the AIBE 19 (XIX) Syllabus before beginning their preparation.'
    },
    {
      title: 'BHU PET 2025 MBA Registration, Check Last Date, Eligibility Criteria',
      date: 'Oct 23, 2024',
      description: 'BHU PET 2025 Registration through CAT for MBA admission is underway. Candidates can register till January 3, 2025. Registration for BHU will be based on the CAT Registration Number. '
    },
    {
      title: 'JIPMER 2024 Counselling, Merit-List, Cut Off and Seat Allotment',
      date: 'Oct 23, 2024',
      description: 'JIPMER Counselling 2024 and Seat allocation for Jawaharlal Institute of Medical Education and Research (JIPMER) in Puducherry will begin in the month of June 2024 (tentatively).'
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
        <h4 className="text-3xl text-gray-700 font-bold mb-4 text-center">Latest News & Stories</h4>
        <div className="relative">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            {displayedCards.map((card, index) => (
              <div className="flex-none w-full sm:w-1/3 p-4 bg-white rounded-lg shadow-md border" key={index}>
                <div className="flex items-center mb-4">
                  <h3 className="text-base sm:text-lg font-bold">{card.title}</h3>
                </div>
                <span className="text-gray-500">{card.date}</span>
                <hr className="my-2" />
                <p className="text-sm text-gray-600">{card.description}</p>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                    <p className="text-md text-black font-bold">Read More</p>
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
    </div>
  );
};

export default News;
