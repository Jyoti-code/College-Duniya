import React from 'react';

const StudyGoal = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cards = [
    {
      image: 'https://www.clipartmax.com/png/middle/464-4648737_project-engineer-svg-png-icon-free-download-icone-engenharia.png',
      title: 'Engineering',
      colleges: '675 Colleges',
      degrees1: 'BE/BTech',
      degrees2: 'Diploma',
      degrees3: 'MTech',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Rbp1I5VIZWIHnLoaxoojk3C78WXp9R33lA&s',
      title: 'Arts',
      colleges: '456 Colleges',
      degrees1: 'BA',
      degrees2: 'MA',
      degrees3: 'B.Ed',
    },
    {
      image: 'https://www.svgrepo.com/show/74600/artist.svg',
      title: 'Commerce',
      colleges: '342 Colleges',
      degrees1: 'BCom',
      degrees2: 'MCom',
      degrees3: 'MBA',
    },
    {
      image: 'https://svgsilh.com/svg/1371193.svg',
      title: 'Science',
      colleges: '879 Colleges',
      degrees1: 'BSc',
      degrees2: 'MSc',
      degrees3: 'MCA',
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/128/1469/1469884.png',
      title: 'Management',
      colleges: '210 Colleges',
      degrees1: 'MBA',
      degrees2: 'BBA',
      degrees3: 'PGDCA',
    },
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
        <h4 className="text-3xl text-gray-700 font-bold mb-4 text-center">Select Your Study Goal</h4>
        <div className="relative">
          {/* Flex container with gap for spacing between cards */}
          <div className="flex flex-wrap gap-4 justify-center">
            {displayedCards.map((card, index) => (
              <div className="flex-none w-full md:w-[23%] p-4 bg-white rounded-lg shadow-md border mb-4" key={index}>
                <div className="flex items-center mb-4">
                  <img className="w-16 h-16 object-cover mr-4" src={card.image} alt={card.title} />
                  <h3 className="text-lg font-bold text-gray-700">{card.title}</h3>
                </div>
                <span className="text-gray-500">{card.colleges}</span>
                <hr className="my-2" />
                <p className="text-sm text-gray-600">{card.degrees1}</p>
                <hr className="my-2" />
                <p className="text-sm text-gray-600">{card.degrees2}</p>
                <hr className="my-2" />
                <p className="text-sm text-gray-600">{card.degrees3}</p>
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

export default StudyGoal;
