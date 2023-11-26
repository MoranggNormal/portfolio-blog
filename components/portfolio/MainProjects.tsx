import { useState } from 'react';

const images = [
  'https://via.placeholder.com/1900x1080?text=Slide%201',
  'https://via.placeholder.com/1366x768?text=Slide%202',
  'https://via.placeholder.com/800x600?text=Slide%203',
];

const MainProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div
      className="relative h-screen w-full items-center overflow-hidden"
      id="projects"
    >
      <h2 className="py-28 text-center text-3xl font-semibold">
        Featured Projects
      </h2>
      <div
        className={`absolute inset-0 mx-auto flex max-w-3xl items-center justify-center`}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`transitio-all inset-0 max-h-full max-w-full rounded duration-300 ${
              index != activeIndex && 'hidden'
            }`}
            alt={`Slide ${index + 1}`}
          />
        ))}
        <button
          className="absolute left-8 top-1/2 z-10 -translate-y-1/2 transform rounded bg-gray-800/50 p-2 text-white duration-300 hover:opacity-90 hover:drop-shadow-3xl"
          onClick={handlePrev}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button
          className="absolute right-8 top-1/2 z-10 -translate-y-1/2 transform rounded bg-gray-800/50 p-2 text-white duration-300 hover:opacity-90 hover:drop-shadow-3xl"
          onClick={handleNext}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default MainProjects;
