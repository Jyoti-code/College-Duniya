import React from 'react';

const Notification = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cards = [
    {
      image: 'https://image-static.collegedunia.com/public/college_data/images/logos/iit%20madras.png?h=55&w=55&mode=stretch',
      title: 'KLEE 2024 Counselling 5 Year LLB Seat Allotment List (Out), Direct Link, Steps to Download',
      colleges: '675 Colleges',
      description: 'IIT JAM 2025 registration process has been extended till October 18, 2024. The form will be available on the official website – jam2025.iitd.ac.in/. The exam will be held on February 2, 2025, by IIT Delhi. The registration',
    },
    {
      image: 'https://image-static.collegedunia.com/public/college_data/images/logos/lsac-1.png?h=55&w=55&mode=stretch',
      title: 'LSAT Registrations 2025 January Session (Soon), Direct Link, Fees, Documents',
      colleges: '456 Colleges',
      description: 'LSAT 2025 January session application process will start anytime soon. Candidates who wish to appear in LSAT May 2025 will have to submit the application form on the official website – lsatindia.in.'
    },
    {
      image: 'https://image-static.collegedunia.com/public/college_data/images/logos/AIBE.png?h=55&w=55&mode=stretch',
      title: 'AIBE 2024 Exam Pattern, Syllabus (Revised), Marking Scheme and Important Topics',
      colleges: '342 Colleges',
      description: 'The Bar Council of India has released the revised AIBE 19 Syllabus 2024. Candidates appearing for AIBE 19 Exam 2024 on November 24, 2024, must check the AIBE 19 (XIX) Syllabus before beginning their preparation.'
    },
    {
      image: 'https://image-static.collegedunia.com/public/college_data/images/logos/BHU%20PET%20Logo.png?h=55&w=55&mode=stretch',
      title: 'BHU PET 2025 MBA Registration Window Open , Check Last Date, Eligibility Criteria',
      colleges: '879 Colleges',
      description: 'BHU PET 2025 Registration through CAT for MBA admission is underway. Candidates can register till January 3, 2025. Registration for BHU will be based on the CAT Registration Number. '
    },
    {
      image: 'https://image-static.collegedunia.com/public/college_data/images/logos/jipmar.png?h=55&w=55&mode=stretch',
      title: 'JIPMER 2024 Counselling, Merit-List, Cut Off and Seat Allotment',
      colleges: '210 Colleges',
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
        <h4 className="text-3xl text-gray-700 font-bold mb-4 text-center">Latest Notification</h4>
        <div className="relative">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            {displayedCards.map((card, index) => (
              <div className="flex-none w-full sm:w-1/3 p-4 bg-white rounded-lg shadow-md border" key={index}>
                <div className="flex items-center mb-4">
                  <img className="w-12 h-12 sm:w-16 sm:h-16 object-cover mr-4" src={card.image} alt={card.title} />
                  <h3 className="text-base sm:text-lg font-bold">{card.title}</h3>
                </div>
                <span className="text-gray-500">{card.colleges}</span>
                <hr className="my-2" />
                <p className="text-sm text-gray-600">{card.description}</p>
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

export default Notification;
