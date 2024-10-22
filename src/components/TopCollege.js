import React from 'react';

const TopCollege = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cards = [
    {
      image: 'https://images.shiksha.com/mediadata/images/1488171142phpcUJ7yi.jpeg',
      logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/iit%20madras.png?h=55&w=55&mode=stretch',
      title: 'IIT Madras - Indian Institute of Technology',
      course: 'BE/Btech',
      fee: '2.4 Lakh/First year',
      rank: '277 QS World Ranking',
    },
    {
      image: 'https://content.jdmagicbox.com/comp/ahmedabad/62/079pf018562/catalogue/indian-institute-of-management-ahmedabad-vastrapur-ahmedabad-management-institutes-sorrvixey6.jpg',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/cd/IIM%2C_Ahmedabad_Logo.svg',
      title: 'IIMA Ahmedabad - Indian Institute of Management',
      course: 'MBA',
      fee: '2.5 Lakh/First year',
      rank: '193 QS World Ranking',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1QeSCfOMamo7zdIUCMetskJr-tMI4IMTVg&s',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYaVVglfPx3NlFFlv4VgEY4IU075yTN_jw0A&s',
      title: 'IIT Bombay - Indian Institute of Technology',
      course: 'BE/Btech',
      fee: '2.7 Lakh/First year',
      rank: '152 QS World Ranking',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIICkQBIWrL9BHNVo3IsB0HEhPqPiro_dAA&s',
      logo: 'https://contentstatic.techgig.com/thumb/msid-100992244,width-800,resizemode-4/IIT-Kanpur-first-among-best-college-for-innovation-followed-by-IIT-Madras-and-IIT-Hyderabad.jpg?23320',
      title: 'IIT Kanpur - Indian Institute of Technology',
      course: 'BE/Btech',
      fee: '2.6 Lakh/First year',
      rank: '277 QS World Ranking',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvl3rJfvZLC1gQMkSk93srojsAwlVn4GqOw&s',
      logo: 'https://upload.wikimedia.org/wikipedia/en/1/1c/IIT_Kharagpur_Logo.svg',
      title: 'IIT Kharagpur - Indian Institute of Technology',
      course: 'BE/Btech',
      fee: '2.8 Lakh/First year',
      rank: '308 QS World Ranking',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const displayedCards = [
    ...cards.slice(currentIndex, currentIndex + 3),
    ...cards.slice(0, Math.max(0, currentIndex + 3 - cards.length)),
  ];

  return (
    <div className="p-6 bg-blue-50">
      <div className="container mx-auto max-w-6xl">
        <h4 className="text-3xl text-gray-700 font-bold mb-4 text-center">Top Universities/Colleges</h4>
        <div className="relative">
          <div className="flex flex-wrap gap-4 justify-center">
            {displayedCards.map((card, index) => (
              <div className="relative w-full md:w-[30%] p-4 bg-white rounded-lg shadow-md border mb-4" key={index}>
                {/* Image section */}
                <div className="relative h-56">
                  <img className="w-full h-full object-cover rounded-lg" src={card.image} alt={card.title} />
                  {/* Overlay for logo and title */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center rounded-lg">
                    <img className="w-16 h-16 mb-2" src={card.logo} alt={card.title} />
                    <h3 className="text-lg font-bold text-white text-center">{card.title}</h3>
                  </div>
                </div>
                {/* Course and rating */}
                <div className="p-4 text-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">{card.course}</span>
                    <span className="text-sm">4.6</span>
                  </div>
                  {/* Fee and buttons */}
                  <div className="mb-2">
                    <span className="block text-sm">Fees: {card.fee}</span>
                  </div>
                  <hr className="my-2" />
                  <div className="mb-2">
                    <span className="block text-md text-gray-400 font-bold">{card.rank}</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex flex-col items-start">
                      <button className="text-black text-sm underline">View all courses</button>
                      <hr className="my-2" />
                      <button className="text-black text-sm underline">Fee brochure</button>
                      <hr className="my-2" />
                      <button className="text-black text-sm underline">Compare</button>
                    </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination Buttons */}
          <div className="flex items-center justify-center mt-4 space-x-4">
            <button className="w-8 h-8 text-white text-lg rounded-full bg-blue-500" onClick={handlePrev}>
              &lt;
            </button>
            <button className="w-8 h-8 text-lg text-white rounded-full bg-blue-500" onClick={handleNext}>
              &gt;
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-6xl mt-3">
        <div className="relative">
          <div className="flex flex-wrap gap-4 justify-center">
            {displayedCards.map((card, index) => (
              <div className="relative w-full md:w-[30%] p-4 bg-white rounded-lg shadow-md border mb-4" key={index}>
                {/* Image section */}
                <div className="relative h-56">
                  <img className="w-full h-full object-cover rounded-lg" src={card.image} alt={card.title} />
                  {/* Overlay for logo and title */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center rounded-lg">
                    <img className="w-16 h-16 mb-2" src={card.logo} alt={card.title} />
                    <h3 className="text-lg font-bold text-white text-center">{card.title}</h3>
                  </div>
                </div>
                {/* Course and rating */}
                <div className="p-4 text-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">{card.course}</span>
                    <span className="text-sm">4.6</span>
                  </div>
                  {/* Fee and buttons */}
                  <div className="mb-2">
                    <span className="block text-sm">Fees: {card.fee}</span>
                  </div>
                  <hr className="my-2" />
                  <div className="mb-2">
                    <span className="block text-md text-gray-400 font-bold">{card.rank}</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex flex-col items-start">
                      <button className="text-black text-sm underline">View all courses</button>
                      <hr className="my-2" />
                      <button className="text-black text-sm underline">Fee brochure</button>
                      <hr className="my-2" />
                      <button className="text-black text-sm underline">Compare</button>
                    </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination Buttons */}
          <div className="flex items-center justify-center mt-4 space-x-4">
            <button className="w-8 h-8 text-white text-lg rounded-full bg-blue-500" onClick={handlePrev}>
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

export default TopCollege;
