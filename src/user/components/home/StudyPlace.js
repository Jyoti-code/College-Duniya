import React from 'react';

const StudyPlace = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cards = [
    {
      image: 'https://image-static.collegedunia.com/public/asset/icons/city-state-icons/New%20Delhi.svg',
      name: 'Delhi',
    },
    {
        image: 'https://image-static.collegedunia.com/public/asset/icons/city-state-icons/Bangalore.svg',
        name: 'Banglore',
      },
      {
        image: 'https://image-static.collegedunia.com/public/asset/icons/city-state-icons/Hyderabad.svg',
        name: 'Hyderabad',
      },
      {
        image: 'https://image-static.collegedunia.com/public/asset/icons/city-state-icons/Pune.svg',
        name: 'Pune',
      },
      {
        image: 'https://image-static.collegedunia.com/public/asset/icons/city-state-icons/Mumbai.svg',
        name: 'Mumbai',
      },
      {
        image: 'https://image-static.collegedunia.com/public/asset/icons/city-state-icons/Chennai.svg',
        name: 'Chennai',
      },
      {
        image: 'https://image-static.collegedunia.com/public/asset/icons/city-state-icons/Kolkata.svg',
        name: 'Kolkata',
      },
      {
        image: 'https://image-static.collegedunia.com/public/asset/icons/city-state-icons/Bhopal.svg',
        name: 'Bhopal',
      },
      {
        image: 'https://image-static.collegedunia.com/public/asset/icons/city-state-icons/Indore.svg',
        name: 'Indore',
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
        <h4 className="text-3xl text-gray-700 font-bold mb-4 text-center">Top Study Places</h4>
        <div className="relative">
          {/* Flex container with gap for spacing between cards */}
          <div className="flex flex-wrap gap-4 justify-center">
            {displayedCards.map((card, index) => (
              <div className="flex-none w-full md:w-[23%] p-4 bg-white rounded-lg shadow-md border mb-4" key={index}>
                <div className="flex items-center mb-4">
                  <img className="w-16 h-16 object-cover mr-4" src={card.image} alt={card.name} />
                  <h3 className="text-lg font-bold text-gray-700">{card.name}</h3>
                </div>
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

export default StudyPlace;
