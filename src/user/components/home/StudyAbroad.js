import React from 'react';
import { RiGraduationCapLine } from "react-icons/ri";
import { FaDollarSign } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import { BsArrowRightCircle } from "react-icons/bs";

const StudyAbroad = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cards = [
    {
      image: 'https://cdn-icons-png.flaticon.com/512/3200/3200188.png',
      title: 'Study in USA',
      country: 'USA',
      fees: '33.40 USD/year',
      college: '1010',
    },
    {
      image: 'https://cdn.icon-icons.com/icons2/2264/PNG/512/london_big_ben_icon_140410.png',
      title: 'Study in UK',
      country: 'UK',
      fees: '29.50 GBP/year',
      college: '850',
    },
    {
      image: 'https://cdn.vectorstock.com/i/preview-1x/64/48/cn-tower-thick-line-icon-for-personal-vector-46726448.jpg',
      title: 'Study in Canada',
      country: 'Canada',
      fees: '28.00 CAD/year',
      college: '950',
    },
    {
      image: 'https://www.myiconstory.com/wp-content/uploads/2018/06/Berlin-Brandenburg-Gate-1-1024x1024.png',
      title: 'Study in Germany',
      country: 'Germany',
      fees: '500 EUR/year',
      college: '780',
    },
    {
      image: 'https://static.thenounproject.com/png/605797-200.png',
      title: 'Study in Australia',
      country: 'Australia',
      fees: '31.20 AUD/year',
      college: '620',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  // Display four cards at a time, looping through the list
  const displayedCards = [
    ...cards.slice(currentIndex, currentIndex + 3),
    ...cards.slice(0, Math.max(0, currentIndex + 3 - cards.length)),
  ];

  return (
    <div className="p-6 bg-blue-50">
      <div className="container mx-auto max-w-6xl">
        <h4 className="text-3xl text-gray-700 font-bold mb-4 text-center">Study Abroad</h4>
        <div className="relative">
          {/* Cards Container */}
          <div className="flex flex-wrap gap-4 justify-center">
            {displayedCards.map((card, index) => (
              <div className="flex-none w-full md:w-[30%] p-4 bg-white rounded-lg shadow-md border mb-4" key={index}>
                <div className="flex items-center mb-4">
                  <img className="w-16 h-16 object-cover mr-4" src={card.image} alt={card.title} />
                  <h3 className="text-lg font-bold text-gray-700">{card.title}</h3>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <div className="flex">
                        <RiGraduationCapLine className='mr-2'/>
                        <div className="flex flex-col">
                        <p className="text-sm text-gray-600">{card.college}</p>
                        <p className="text-sm text-gray-600">No. of Colleges</p>
                        </div>
                      </div>
                      <div className="flex">
                        <FaDollarSign className='mr-2'/>
                        <div className="flex flex-col">
                        <p className="text-sm text-gray-600">{card.fees}</p>
                        <p className="text-sm text-gray-600">Avg. Study Cost</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-md mt-4 font-bold text-gray-700">Guides</p>
                    <hr className="my-2" />
                <div className="flex justify-between mb-2">
                    <p className="text-md text-gray-600">Why study in {card.country}</p>
                    <span className="text-gray-500 font-bold"><FaAngleRight/></span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                    <p className="text-md text-gray-600">SOP for {card.country}</p>
                    <span className="text-gray-500 font-bold"><FaAngleRight/></span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                    <p className="text-md text-gray-600">Exam for Studying in {card.country}</p>
                    <span className="text-gray-500 font-bold"><FaAngleRight/></span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                    <p className="text-md text-gray-600">Post Study Opportunity in {card.country}</p>
                    <span className="text-gray-500 font-bold"><FaAngleRight/></span>
                </div>
                  </div>
                
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
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

      <div className="container mx-auto max-w-6xl mt-5">
      <h4 className="text-2xl sm:text-3xl text-gray-700 font-bold mb-4 text-center">
        Top Courses
      </h4>

      {/* Row 1 */}
      <div className="flex flex-wrap justify-center mb-3 space-y-2 sm:space-y-0">
        <button className="flex items-center justify-center px-4 py-2 mr-3 text-lg border border-gray-300 bg-white text-gray-500 rounded-xl hover:bg-gray-100 transition-colors duration-200 space-x-2 w-full sm:w-auto">
          <span>BE/BTech</span>
          <BsArrowRightCircle />
        </button>
        <button className="flex items-center justify-center px-4 py-2 mr-3 text-lg border border-gray-300 bg-white text-gray-500 rounded-xl hover:bg-gray-100 transition-colors duration-200 space-x-2 w-full sm:w-auto">
          <span>BA</span>
          <BsArrowRightCircle />
        </button>
        <button className="flex items-center justify-center px-4 py-2 mr-3 text-lg border border-gray-300 bg-white text-gray-500 rounded-xl hover:bg-gray-100 transition-colors duration-200 space-x-2 w-full sm:w-auto">
          <span>B.Sc</span>
          <BsArrowRightCircle />
        </button>
        <button className="flex items-center justify-center px-4 py-2 mr-3 text-lg border border-gray-300 bg-white text-gray-500 rounded-xl hover:bg-gray-100 transition-colors duration-200 space-x-2 w-full sm:w-auto">
          <span>MBA/PGDM</span>
          <BsArrowRightCircle />
        </button>
        <button className="flex items-center justify-center px-4 py-2 mr-3 text-lg border border-gray-300 bg-white text-gray-500 rounded-xl hover:bg-gray-100 transition-colors duration-200 space-x-2 w-full sm:w-auto">
          <span>MA</span>
          <BsArrowRightCircle />
        </button>
        <button className="flex items-center justify-center px-4 py-2 mr-3 text-lg border border-gray-300 bg-white text-gray-500 rounded-xl hover:bg-gray-100 transition-colors duration-200 space-x-2 w-full sm:w-auto">
          <span>M.Sc</span>
          <BsArrowRightCircle />
        </button>
        <button className="flex items-center justify-center px-4 py-2 mr-3 text-lg border border-gray-300 bg-white text-gray-500 rounded-xl hover:bg-gray-100 transition-colors duration-200 space-x-2 w-full sm:w-auto">
          <span>ME/MTech</span>
          <BsArrowRightCircle />
        </button>
        <button className="flex items-center justify-center px-4 py-2 mr-3 text-lg border border-gray-300 bg-white text-gray-500 rounded-xl hover:bg-gray-100 transition-colors duration-200 space-x-2 w-full sm:w-auto">
          <span>Polytechnic</span>
          <BsArrowRightCircle />
        </button>
      </div>

      {/* Row 2 */}
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

      {/* Row 3 */}
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

export default StudyAbroad;
